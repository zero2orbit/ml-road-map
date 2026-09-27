const fs = require('fs');
// Read current HTML
let html = fs.readFileSync('index.html','utf8');

// Read modal functions
const modalFn = fs.readFileSync('modal_fn.js','utf8');

// Build DETAILS from JSON file
const details = JSON.parse(fs.readFileSync('details.json','utf8'));

let detailsJS = 'const DETAILS = ' + JSON.stringify(details, null, 0) + ';\n';
detailsJS += 'PHASES.forEach(ph=>{ph.topics.forEach(t=>{t.d=DETAILS[t.num]||null;});});\n';

const insertBefore = '</script>';
const idx = html.lastIndexOf(insertBefore);
if(idx === -1){ console.error('No </script> found'); process.exit(1); }

const newHtml = html.slice(0, idx) + '\n// -- TOPIC DETAILS --\n' + detailsJS + '\n// -- MODAL --\n' + modalFn + '\n' + html.slice(idx);
fs.writeFileSync('index.html', newHtml, 'utf8');
console.log('Done. Total lines:', newHtml.split('\n').length);
