# 🧠 ML Roadmap — Jay @ Boaringseed

A fully interactive, component-based **Machine Learning Roadmap** built with pure Vanilla HTML, CSS, and JavaScript. No frameworks. No build tools. Just one file that renders a stunning, data-driven learning path for mastering Machine Learning from scratch to production.

---

## 🌐 Live Preview

Open `index.html` in any browser — no server required.

---

## 📋 Project Overview

This roadmap covers **48 topics** across **6 curated phases**, designed specifically for the journey from math fundamentals to production-grade ML engineering. Each topic is fully documented with:

- **Description** — what the topic is and why it exists
- **Key Concepts** — 6 core things to learn
- **Why It Matters** — real-world relevance to ML practice
- **Time Estimate** — realistic study time
- **Difficulty Level** — Beginner → Advanced
- **Learning Resources** — 3 curated books, videos, and code references

---

## ✨ Features

### 🎨 UI & Design
- **Dark-mode glassmorphism** aesthetic with vibrant phase accent colors
- **Smooth animations** — card hover lifts, modal slide-in/fade, phase collapse/expand
- **Sticky navigation bar** with active phase highlighting on scroll
- **Responsive layout** — works on desktop and tablet

### 🗂️ Phase Navigation
- 6 collapsible phases with toggle (click phase header to expand/collapse)
- Sticky nav pills auto-highlight the current phase as you scroll
- Each phase has its own accent color:
  | Phase | Color |
  |-------|-------|
  | Phase 1 — Math Foundations | 🟢 Green (`#00f5a0`) |
  | Phase 2 — Python & Data Engineering | 🟣 Purple (`#7b61ff`) |
  | Phase 3 — Classical ML | 🔴 Red (`#ff6b6b`) |
  | Phase 4 — Deep Learning | 🟡 Yellow (`#ffd93d`) |
  | Phase 5 — Advanced Topics | 🔵 Cyan (`#00d4ff`) |
  | Phase 6 — Production ML | 🩷 Pink (`#ff61ab`) |

### ⓘ Topic Information Modal
Every topic card has a **ⓘ info button** that opens a rich detail modal:
- Phase-colored top accent bar
- Topic name + phase context
- ⏱ Time estimate badge
- 📊 Difficulty badge
- Full description
- Key Concepts list (color-coded bullets)
- "Why It Matters" section
- 3 curated learning resources with icons

**Modal dismissal:**
- Click the **✕** button
- Click **outside** the modal (overlay click)
- Press **Escape** key

### 📊 Summary Table
A final section summarizes all 6 phases in a scannable table with topic count, duration, and focus area.

---

## 🏗️ Architecture

This project uses a **component-based JavaScript architecture** — no frameworks, no build step. All rendering is done via pure JS functions that return HTML strings.

### Component Tree
```
App
├── NavStrip(phases)           → sticky top navigation pills
├── PhaseSection(phase)        → collapsible phase card
│   ├── TopicGrid(topics, pi)  → grid of topic cards
│   │   └── TopicCard(topic, pi, ti)  → individual topic card + ⓘ button
│   ├── ExSection(exercises)   → 3-level exercise blocks
│   └── ProjectsSection(projects, title)  → milestone project cards
└── SummaryTable(rows)         → final summary table
```

### Data Flow
```
PHASES[]  ──────────→  PhaseSection()  →  DOM
DETAILS{} ──────────→  openModal()     →  Modal DOM
SUMMARY_ROWS[]  ────→  SummaryTable()  →  DOM
```

---

## 📁 File Structure

```
ml-road-map/
├── index.html          ← Single source of truth (HTML + CSS + JS)
├── README.md           ← This file
├── modal_fn.js         ← (temp) modal functions scratch file
├── inject.js           ← (temp) Node.js patch helper script
└── run_patch.js        ← (temp) Node.js patch helper script
```

> **Note:** All application code lives in `index.html`. Temp `.js` files in root are dev helpers and can be deleted.

---

## 🗺️ Roadmap Phases

### Phase 1 — Math Foundations (4 topics)
> Linear Algebra, Calculus & Optimization, Probability & Statistics, Bayesian Thinking

### Phase 2 — Python & Data Engineering (6 topics)
> Python Fundamentals, NumPy, Pandas, Matplotlib & Seaborn, Data Acquisition (SQL/APIs/IoT), Data Formats

### Phase 3 — Classical ML (11 topics)
> Data Cleaning, Feature Engineering, Feature Scaling, Dimensionality Reduction, ML Paradigms Overview, Linear Regression, Polynomial Regression, Logistic Regression, Decision Trees & Random Forest, SVMs, KNN, Gradient Boosting (XGBoost/LightGBM), Clustering, Evaluation Metrics, Model Validation, Regularization

### Phase 4 — Deep Learning (8 topics)
> Neural Networks & Perceptrons, Backpropagation, Activation & Loss Functions, PyTorch/TF/Keras, CNNs, CNN Applications, RNNs & LSTMs, Attention Mechanisms

### Phase 5 — Advanced Topics (7 topics)
> Autoencoders & VAEs, GANs, Transformers (BERT/GPT), NLP Preprocessing, BERT & GPT Fine-tuning, Reinforcement Learning (DQN), Policy Gradients (PPO)

### Phase 6 — Production ML (6 topics)
> Recommendation Systems, Explainable AI (SHAP/LIME), Self-Supervised Learning, Hyperparameter Tuning (Optuna), Data Pipelines, Model Serving (FastAPI + Docker), Advanced Sklearn

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 (semantic) |
| Styling | Vanilla CSS (CSS Variables, Grid, Flexbox, Animations) |
| Logic | Vanilla JavaScript (ES6+, Template Literals, Array methods) |
| Fonts | Google Fonts — [Outfit](https://fonts.google.com/specimen/Outfit) |
| Icons | Unicode emoji + CSS |
| Hosting | Netlify (static) |

**Dependencies: None.** No npm, no bundler, no framework.

---

## 🚀 Getting Started

### Local Development
```bash
# Just open the file — no server needed
start index.html

# Or with a local server (optional, for live-reload)
npx serve .
```

### Deploy to Netlify
1. Push to a GitHub repo
2. Connect repo to Netlify
3. Build command: _(none)_
4. Publish directory: `.` or `ml-road-map/`

---

## 🧩 Extending the Roadmap

### Add a new topic
1. Open `index.html`
2. Find the relevant phase in the `PHASES` array
3. Add a new entry to `ph.topics`:
```js
{ num: '49', name: 'Your Topic', tags: [
  { t: 'type', v: 'Tag Label' }
]}
```
4. Add matching details in the `DETAILS` object:
```js
'49': {
  desc: '...',
  concepts: ['...', '...', '...', '...', '...', '...'],
  why: '...',
  time: '1-2 weeks',
  difficulty: 'Intermediate',
  resources: [
    { icon: '📘', text: 'Book name' },
    { icon: '💻', text: 'Code resource' },
    { icon: '📗', text: 'Article/docs' }
  ]
}
```

### Add a new phase
1. Add a new object to the `PHASES` array with a unique `colorClass` (e.g. `p7`)
2. Add CSS for `.p7` in the `<style>` block (copy an existing phase style)
3. Add `p7` to `PHASE_COLORS` in the modal JS section

---

## 👤 Author

**Jay @ Boaringseed**  
Built as a personal ML learning roadmap and reference guide.

---

## 📄 License

MIT — free to use, modify, and share.
