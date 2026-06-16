/* ============================================================
   PrepPath Career Assessment
   ============================================================ */

/* ============================================================
   ROLES — 32 official career paths across 8 categories
   ============================================================ */
const ROLES = {
  1:  { name: "Medical Doctor / Nursing / GP", category: "Health & Wellbeing" },
  2:  { name: "Mental Health Specialist", category: "Health & Wellbeing" },
  3:  { name: "Pharmaceutical & Lab Science", category: "Health & Wellbeing" },
  4:  { name: "Software & App Developer", category: "Technology & Digital" },
  5:  { name: "Data & AI Specialist", category: "Technology & Digital" },
  6:  { name: "Cybersecurity & IT Infrastructure Specialist", category: "Technology & Digital" },
  7:  { name: "IT Support & Tech Operations", category: "Technology & Digital" },
  8:  { name: "General Manager / Executive", category: "Business, Strategy & Operations" },
  9:  { name: "Business Analyst / Strategy Consultant", category: "Business, Strategy & Operations" },
  10: { name: "Human Resources & People Operations", category: "Business, Strategy & Operations" },
  11: { name: "Supply Chain & Logistics Manager", category: "Business, Strategy & Operations" },
  12: { name: "Accountant / Auditor", category: "Finance, Legal & Policy" },
  13: { name: "Finance Analyst / Banking Professional", category: "Finance, Legal & Policy" },
  14: { name: "Lawyer / Legal Professional", category: "Finance, Legal & Policy" },
  15: { name: "Policy, Government & Regulatory Officer", category: "Finance, Legal & Policy" },
  16: { name: "Teacher / Educator / University Faculty", category: "Education & Knowledge" },
  17: { name: "Career Coach / Student Advisor", category: "Education & Knowledge" },
  18: { name: "Interpreter / Multilingual Specialist", category: "Education & Knowledge" },
  19: { name: "Creative Media & Content Professional", category: "Creative, Communication & Design" },
  20: { name: "Marketing & Communications Manager", category: "Creative, Communication & Design" },
  21: { name: "Visual & Design Specialist", category: "Creative, Communication & Design" },
  22: { name: "Chef / Culinary Professional", category: "Catering, Services & Hospitality" },
  23: { name: "Hospitality & Events Manager", category: "Catering, Services & Hospitality" },
  24: { name: "Hair, Beauty & Wellness Professional", category: "Catering, Services & Hospitality" },
  25: { name: "Infrastructure & Civil Systems Engineer", category: "Engineering & Physical Systems" },
  26: { name: "Mechanical, Electrical & Manufacturing Engineer", category: "Engineering & Physical Systems" },
  27: { name: "Environmental & Energy Systems Engineer", category: "Engineering & Physical Systems" },
  28: { name: "Skilled Trades Technician", category: "Engineering & Physical Systems" },
  29: { name: "Emergency & Protective Services Officer", category: "Public Services & Impact" },
  30: { name: "NGO / International Development Officer", category: "Public Services & Impact" },
  31: { name: "Agriculture & Animal Care Professional", category: "Public Services & Impact" },
  32: { name: "Entrepreneur / Startup Founder", category: "Public Services & Impact" }
};

/* ============================================================
   PART 1 — 40 core questions
   Each Likely answer awards +1 to every linked role.
   See README for label→role mapping assumptions.
   ============================================================ */
const PART1 = [
  { id: 1,  text: "Do you enjoy helping people get healthier?", roles: [1, 2, 17, 30] },
  { id: 2,  text: "Do you enjoy solving problems with software or computers?", roles: [4, 5, 7, 9] },
  { id: 3,  text: "Do you want a job that helps people or changes the world?", roles: [30, 15, 2, 32] },
  { id: 4,  text: "Do you enjoy leading teams to reach big goals?", roles: [8, 32, 9, 10] },
  { id: 5,  text: "Are you interested in how laws affect business and people?", roles: [14, 15, 8] },
  { id: 6,  text: "Would you enjoy designing products or machines?", roles: [26, 28, 21, 32] },
  { id: 7,  text: "Do you enjoy working closely with customers or clients?", roles: [20, 23, 32, 17] },
  { id: 8,  text: "Do you want to help people through science or research?", roles: [16, 3, 27, 5] },
  { id: 9,  text: "Do you like working with numbers and data, like in banks or finance?", roles: [13, 12, 5, 9] },
  { id: 10, text: "Do you enjoy teaching or guiding others?", roles: [16, 17, 10] },
  { id: 11, text: "Do you love creating new ideas for content, videos, or media?", roles: [19, 21] },
  { id: 12, text: "Would you enjoy planning how products move from one place to another?", roles: [11, 9, 5, 7] },
  { id: 13, text: "Do you like working with your hands to fix or build things?", roles: [28, 22, 25, 7] },
  { id: 14, text: "Do you like working in emergencies or stressful situations?", roles: [29, 30, 1] },
  { id: 15, text: "Do you enjoy managing people or teams at work?", roles: [10, 8, 9, 16] },
  { id: 16, text: "Would you enjoy writing or editing content?", roles: [19, 20, 15] },
  { id: 17, text: "Are you interested in what makes people work better?", roles: [10, 17, 2, 9] },
  { id: 18, text: "Do you enjoy giving advice and supporting others?", roles: [17, 16, 30] },
  { id: 19, text: "Do you care strongly about the environment or clean energy?", roles: [27, 30, 15, 32] },
  { id: 20, text: "Do you prefer clear tasks and a steady routine?", roles: [12, 7, 25, 16] },
  { id: 21, text: "Do you like using logic and rules to fix technical problems?", roles: [4, 6, 7, 26] },
  { id: 22, text: "Are you interested in beauty, wellness, or self-care?", roles: [24, 2, 23] },
  { id: 23, text: "Do you enjoy cooking or running a kitchen?", roles: [22, 23, 32] },
  { id: 24, text: "Would you enjoy working in a hospital, clinic, or lab?", roles: [1, 3, 29] },
  { id: 25, text: "Do you enjoy managing money, supplies, or schedules?", roles: [11, 12, 8, 23] },
  { id: 26, text: "Do you enjoy learning about new technologies like AI?", roles: [5, 4, 32] },
  { id: 27, text: "Do you enjoy learning languages and talking with people from other cultures?", roles: [18, 15, 19, 16] },
  { id: 28, text: "Do you like organizing events or taking care of guests?", roles: [23, 20, 32] },
  { id: 29, text: "Would you enjoy building things like bridges or buildings?", roles: [25, 28, 21] },
  { id: 30, text: "Are you interested in how governments make decisions for the country?", roles: [15, 14, 13, 30] },
  { id: 31, text: "Do you enjoy designing easy-to-use products, apps, or visuals?", roles: [21, 20, 26] },
  { id: 32, text: "Would you enjoy traveling or working with people from many cultures?", roles: [30, 18, 32, 15] },
  { id: 33, text: "Do you like working in quiet, organized places like offices or labs?", roles: [12, 7, 3, 16] },
  { id: 34, text: "Would you enjoy studying biology, chemistry, or medical tests?", roles: [3, 1, 27] },
  { id: 35, text: "Do you enjoy making important decisions for businesses or teams?", roles: [8, 9, 13] },
  { id: 36, text: "Do you want to make schools and learning better?", roles: [16, 15, 17] },
  { id: 37, text: "Would you like to start your own business?", roles: [32, 20, 4, 9] },
  { id: 38, text: "Are you interested in studying risks and difficult choices about what is right or wrong?", roles: [14, 12, 15, 13] },
  { id: 39, text: "Do you enjoy helping others choose their studies or career?", roles: [17, 16, 2] },
  { id: 40, text: "Would you like to design or plan energy and environment projects?", roles: [27, 30, 25] }
];

/* ============================================================
   PART 2 — 5 bonus role-sorting questions
   User picks one option, +1 to that role.
   ============================================================ */
const PART2 = [
  {
    id: 41,
    text: "Which place feels most comfortable to you?",
    options: [
      { text: "A laboratory or research room", role: 3 },
      { text: "A government or public office", role: 15 },
      { text: "A classroom or school", role: 16 },
      { text: "A startup or tech company", role: 32 }
    ]
  },
  {
    id: 42,
    text: "What kind of problem would you most enjoy solving?",
    options: [
      { text: "How to treat or care for a patient", role: 1 },
      { text: "How to stop a cyberattack", role: 6 },
      { text: "How to make a brand popular", role: 20 },
      { text: "How to design a building that saves energy", role: 27 }
    ]
  },
  {
    id: 43,
    text: "Which of these would you enjoy managing most?",
    options: [
      { text: "A hotel or event place", role: 23 },
      { text: "A classroom of students", role: 17 },
      { text: "A delivery and shipping business", role: 11 },
      { text: "A construction site", role: 25 }
    ]
  },
  {
    id: 44,
    text: "Which activity sounds most fun to you?",
    options: [
      { text: "Writing articles or editing content", role: 19 },
      { text: "Filming videos or running a media channel", role: 19 },
      { text: "Drawing, designing, or creating visuals", role: 21 },
      { text: "Leading a creative team or project", role: 20 }
    ]
  },
  {
    id: 45,
    text: "Which practical activity do you like best?",
    options: [
      { text: "Fixing or installing machines", role: 28 },
      { text: "Cooking a special meal", role: 22 },
      { text: "Giving a beauty or wellness treatment", role: 24 },
      { text: "Taking care of animals or crops", role: 31 }
    ]
  }
];

const LIKERT = [
  { value: "likely",     label: "Likely",     points: 1 },
  { value: "neutral",    label: "Neutral",    points: 0 },
  { value: "not_likely", label: "Not Likely", points: 0 }
];

const TOTAL_QUESTIONS = PART1.length + PART2.length; // 45

/* ============================================================
   STATE
   ============================================================ */
const state = {
  index: 0,
  answers: new Array(TOTAL_QUESTIONS).fill(null),
  // Track the previous top-3 IDs so we can flash rows that changed
  prevTopIds: [null, null, null]
};

/* ============================================================
   DOM
   ============================================================ */
const $ = id => document.getElementById(id);
const welcome     = $("welcome");
const qScreen     = $("question-screen");
const results     = $("results");
const qBody       = $("question-body");
const qCurrent    = $("q-current");
const qPart       = $("q-part");
const progFill    = $("progress-fill");
const backBtn     = $("back-btn");
const hint        = $("hint");
const liveScores  = $("live-scores");
const liveList    = $("live-scores-list");
const liveToggle  = $("live-toggle");

/* ============================================================
   FLOW
   ============================================================ */

$("start-btn").addEventListener("click", () => {
  welcome.hidden = true;
  qScreen.hidden = false;
  renderQuestion();
  renderLiveScores();
});

$("restart-btn").addEventListener("click", () => {
  state.index = 0;
  state.answers = new Array(TOTAL_QUESTIONS).fill(null);
  state.prevTopIds = [null, null, null];
  results.hidden = true;
  qScreen.hidden = false;
  renderQuestion();
  renderLiveScores();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

backBtn.addEventListener("click", () => {
  if (state.index > 0) {
    state.index--;
    renderQuestion();
  }
});

liveToggle.addEventListener("click", () => {
  const collapsed = liveScores.classList.toggle("collapsed");
  liveToggle.textContent = collapsed ? "Show" : "Hide";
  liveToggle.setAttribute("aria-expanded", collapsed ? "false" : "true");
});

function renderQuestion() {
  const i = state.index;
  const isPart1 = i < PART1.length;
  const q = isPart1 ? PART1[i] : PART2[i - PART1.length];

  // progress
  qCurrent.textContent = i + 1;
  qPart.textContent = isPart1 ? "Part 1 · Self-reflection" : "Part 2 · Pick one";
  progFill.style.width = (i / TOTAL_QUESTIONS * 100) + "%";

  backBtn.disabled = i === 0;

  // body
  qBody.innerHTML = "";
  qBody.style.animation = "none";
  qBody.offsetHeight; // force reflow to restart animation
  qBody.style.animation = "";

  const partLabel = document.createElement("div");
  partLabel.className = "part-label";
  partLabel.textContent = isPart1 ? "How likely is this for you?" : "Pick the one that fits best";
  qBody.appendChild(partLabel);

  const qText = document.createElement("h2");
  qText.className = "question-text";
  qText.textContent = q.text;
  qBody.appendChild(qText);

  const opts = document.createElement("div");
  opts.className = "options" + (isPart1 ? " likert" : "");
  qBody.appendChild(opts);

  const currentAnswer = state.answers[i];

  if (isPart1) {
    LIKERT.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "option" + (currentAnswer === opt.value ? " selected" : "");
      btn.innerHTML = `<span class="marker"></span><span>${opt.label}</span>`;
      btn.addEventListener("click", () => {
        state.answers[i] = opt.value;
        advance();
      });
      opts.appendChild(btn);
    });
  } else {
    q.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "option" + (currentAnswer === opt.role ? " selected" : "");
      btn.innerHTML = `<span class="marker"></span><span>${opt.text}</span>`;
      btn.addEventListener("click", () => {
        state.answers[i] = opt.role;
        advance();
      });
      opts.appendChild(btn);
    });
  }

  hint.textContent = currentAnswer !== null
    ? "Pick again to change · or wait for the next question"
    : "Pick one to continue";
}

function advance() {
  // recompute and update live scores immediately
  renderLiveScores();

  // brief visual confirmation, then move on
  setTimeout(() => {
    if (state.index < TOTAL_QUESTIONS - 1) {
      state.index++;
      renderQuestion();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      finish();
    }
  }, 280);
  // immediate visual update of selection
  renderQuestion();
}

/* ============================================================
   SCORING
   ============================================================ */

function computeScores() {
  const scores = {};
  for (let id = 1; id <= 32; id++) scores[id] = 0;

  // Part 1 — "Likely" = +1 to every linked role
  PART1.forEach((q, i) => {
    if (state.answers[i] === "likely") {
      q.roles.forEach(r => { scores[r] += 1; });
    }
  });

  // Part 2 — picked option's role gets +1
  PART2.forEach((q, j) => {
    const idx = PART1.length + j;
    const ans = state.answers[idx];
    if (typeof ans === "number") {
      scores[ans] += 1;
    }
  });

  return scores;
}

function rankScores(scores) {
  return Object.entries(scores)
    .map(([id, pts]) => ({ id: Number(id), pts, ...ROLES[id] }))
    .sort((a, b) => {
      // tiebreak by lower role id so order is stable
      if (b.pts !== a.pts) return b.pts - a.pts;
      return a.id - b.id;
    });
}

function renderLiveScores() {
  const scores = computeScores();
  const ranked = rankScores(scores);
  const top3 = ranked.slice(0, 3);

  // If all scores are 0, show placeholders
  const anyAnswered = state.answers.some(a => a !== null);

  const rows = liveList.querySelectorAll("li");
  rows.forEach((li, idx) => {
    const role = top3[idx];
    const nameEl = li.querySelector(".ls-name");
    const ptsEl = li.querySelector(".ls-pts");

    if (!anyAnswered || !role || role.pts === 0) {
      nameEl.textContent = "—";
      nameEl.classList.add("empty");
      ptsEl.textContent = "0";
      return;
    }

    nameEl.classList.remove("empty");
    nameEl.textContent = role.name;
    ptsEl.textContent = role.pts;

    // Flash row if the role at this rank changed since last update
    const prevId = state.prevTopIds[idx];
    if (prevId !== null && prevId !== role.id) {
      li.classList.remove("updated");
      void li.offsetWidth; // restart animation
      li.classList.add("updated");
    }
  });

  // Save current top-3 IDs for next comparison
  state.prevTopIds = top3.map(r => (r && r.pts > 0) ? r.id : null);
}

/* ============================================================
   RESULTS SCREEN
   ============================================================ */

function finish() {
  const scores = computeScores();
  const ranked = rankScores(scores);
  const top3 = ranked.slice(0, 3);

  const cards = $("result-cards");
  cards.innerHTML = "";

  top3.forEach((r, idx) => {
    const card = document.createElement("article");
    card.className = "result-card";
    card.innerHTML = `
      <div class="rank">${idx + 1}</div>
      <div class="category">${r.category}</div>
      <h3 class="role-name">${r.name}</h3>
      <span class="score"><strong>${r.pts}</strong> point${r.pts === 1 ? "" : "s"}</span>
    `;
    cards.appendChild(card);
  });

  // Full breakdown
  const grid = $("all-scores-grid");
  grid.innerHTML = "";
  ranked.forEach(r => {
    const row = document.createElement("div");
    row.className = "score-row";
    row.innerHTML = `<span>${r.name}</span><span class="pts">${r.pts}</span>`;
    grid.appendChild(row);
  });

  qScreen.hidden = true;
  results.hidden = false;
  progFill.style.width = "100%";
  window.scrollTo({ top: 0, behavior: "smooth" });
}
