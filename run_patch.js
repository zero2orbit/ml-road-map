const fs = require('fs');
let c = fs.readFileSync('index.html','utf8');

// Fix TopicCard - add info button
c = c.replace(
  'function TopicCard({num,name,tags}){',
  'function TopicCard({num,name,tags,d},pi,ti){'
);
c = c.replace(
  '<div class="topic-num"></div>\n    <div class="topic-name"></div>',
  '<div class="topic-num"></div>\n    <div class="topic-card-header">\n      <div class="topic-name"></div>\n      <button class="info-btn" onclick="openModal(,)" title="Learn more">&#x24D8;</button>\n    </div>'
);

// Fix TopicGrid - pass phaseIdx
c = c.replace(
  'function TopicGrid(topics){',
  'function TopicGrid(topics, pi){'
);
c = c.replace(
  'topics.map(TopicCard).join',
  'topics.map((t,i)=>TopicCard(t,pi,i)).join'
);

// Fix PhaseSection
c = c.replace(
  'TopicGrid(ph.topics)}',
  'TopicGrid(ph.topics, PHASES.indexOf(ph))}'
);

console.log('patched:', c.includes('openModal'));
fs.writeFileSync('index.html', c, 'utf8');