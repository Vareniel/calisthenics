// ===== DATA =====
const workoutData = [
    {
        level: 'Beginner', day: 'Monday', focus: 'Upper Body', exercises: [
            { name: 'Push Up', sets: 3, reps: '8-10' },
            { name: 'Incline Push Up', sets: 3, reps: '10' },
            { name: 'Negative Pull Up', sets: 3, reps: '5' },
            { name: 'Plank', sets: 3, reps: '20s' }
        ]
    },
    {
        level: 'Beginner', day: 'Wednesday', focus: 'Lower Body', exercises: [
            { name: 'Bodyweight Squat', sets: 3, reps: '12' },
            { name: 'Lunges', sets: 3, reps: '10 each leg' },
            { name: 'Glute Bridge', sets: 3, reps: '12' },
            { name: 'Calf Raise', sets: 3, reps: '15' }
        ]
    },
    {
        level: 'Beginner', day: 'Friday', focus: 'Full Body', exercises: [
            { name: 'Push Up', sets: 3, reps: '8' },
            { name: 'Australian Pull Up', sets: 3, reps: '8' },
            { name: 'Squat', sets: 3, reps: '12' },
            { name: 'Leg Raise', sets: 3, reps: '10' }
        ]
    },
    {
        level: 'Beginner', day: 'Saturday', focus: 'Core/Cardio', exercises: [
            { name: 'Mountain Climbers', sets: 3, reps: '20' },
            { name: 'Plank', sets: 3, reps: '30s' },
            { name: 'Jumping Jack', sets: 3, reps: '25' }
        ]
    },
    {
        level: 'Intermediate', day: 'Monday', focus: 'Push', exercises: [
            { name: 'Push Up', sets: 4, reps: '12' },
            { name: 'Dips', sets: 4, reps: '8' },
            { name: 'Pike Push Up', sets: 3, reps: '10' },
            { name: 'Diamond Push Up', sets: 3, reps: '8' }
        ]
    },
    {
        level: 'Intermediate', day: 'Tuesday', focus: 'Pull', exercises: [
            { name: 'Pull Up', sets: 4, reps: '6' },
            { name: 'Chin Up', sets: 3, reps: '8' },
            { name: 'Australian Pull Up', sets: 3, reps: '12' },
            { name: 'Hanging Knee Raise', sets: 3, reps: '12' }
        ]
    },
    {
        level: 'Intermediate', day: 'Thursday', focus: 'Legs', exercises: [
            { name: 'Squat', sets: 4, reps: '15' },
            { name: 'Bulgarian Split Squat', sets: 3, reps: '10 each leg' },
            { name: 'Jump Squat', sets: 3, reps: '10' },
            { name: 'Calf Raise', sets: 4, reps: '20' }
        ]
    },
    {
        level: 'Intermediate', day: 'Friday', focus: 'Core', exercises: [
            { name: 'Hanging Leg Raise', sets: 4, reps: '10' },
            { name: 'Plank', sets: 3, reps: '45s' },
            { name: 'Russian Twist', sets: 3, reps: '20' }
        ]
    },
    {
        level: 'Intermediate', day: 'Saturday', focus: 'Skill', exercises: [
            { name: 'Handstand Practice', sets: 1, reps: '10 min' },
            { name: 'L-Sit', sets: 4, reps: '15s' },
            { name: 'Explosive Push Up', sets: 3, reps: '8' }
        ]
    },
    {
        level: 'Advanced', day: 'Monday', focus: 'Push Strength', exercises: [
            { name: 'Handstand Push Up', sets: 5, reps: '5' },
            { name: 'Dips', sets: 5, reps: '10' },
            { name: 'Archer Push Up', sets: 4, reps: '8' }
        ]
    },
    {
        level: 'Advanced', day: 'Tuesday', focus: 'Pull Strength', exercises: [
            { name: 'Pull Up', sets: 5, reps: '10' },
            { name: 'Muscle Up Practice', sets: 5, reps: '3' },
            { name: 'Front Lever Progression', sets: 4, reps: '10s' }
        ]
    },
    {
        level: 'Advanced', day: 'Wednesday', focus: 'Legs', exercises: [
            { name: 'Pistol Squat', sets: 5, reps: '5 each leg' },
            { name: 'Jump Squat', sets: 4, reps: '10' },
            { name: 'Nordic Curl', sets: 3, reps: '8' }
        ]
    },
    {
        level: 'Advanced', day: 'Friday', focus: 'Core/Static', exercises: [
            { name: 'Dragon Flag', sets: 4, reps: '6' },
            { name: 'L-Sit', sets: 4, reps: '30s' },
            { name: 'Hanging Leg Raise', sets: 4, reps: '12' }
        ]
    },
    {
        level: 'Advanced', day: 'Saturday', focus: 'Skill', exercises: [
            { name: 'Handstand Practice', sets: 1, reps: '15 min' },
            { name: 'Planche Progression', sets: 1, reps: '10 min' },
            { name: 'Muscle Up Practice', sets: 5, reps: '3' }
        ]
    }
];

const quizData = [
    { q: 'Berapa hari istirahat minimum yang disarankan antara sesi Push yang intens?', a: 1, opts: ['0 hari', '1-2 hari', '4-5 hari', '7 hari'] },
    { q: 'Gerakan dasar untuk memulai Muscle Up adalah...', a: 0, opts: ['Pull Up & Dips', 'Push Up & Squat', 'Plank & Lunge', 'L-Sit & Handstand'] },
    { q: 'L-Sit melatih otot utama...', a: 2, opts: ['Dada & Punggung', 'Kaki & Glutes', 'Core & Hip Flexors', 'Bahu & Lengan'] },
    { q: 'Sebelum mencoba Handstand Push Up, skill yang harus dikuasai adalah...', a: 1, opts: ['Muscle Up', 'Handstand hold yang stabil', 'Dragon Flag', 'Front Lever'] },
    { q: 'Manfaat utama Bulgarian Split Squat dibanding Squat biasa...', a: 3, opts: ['Lebih mudah dilakukan', 'Tidak perlu keseimbangan', 'Melatih lebih banyak otot sekaligus', 'Unilateral — melatih setiap kaki secara terpisah'] },
    { q: 'Planche Progression paling dasar adalah...', a: 0, opts: ['Planche Lean', 'Tuck Planche', 'Straddle Planche', 'Full Planche'] },
    { q: 'Nordic Curl terutama melatih...', a: 2, opts: ['Quadriceps', 'Calves', 'Hamstrings', 'Glutes'] },
    { q: 'Berapa persen berat badan yang diangkat saat melakukan Pull Up?', a: 3, opts: ['50%', '70%', '80%', '100%'] },
];

const challenges = [
    '🎯 Lakukan 10 Push Up sempurna dengan full range of motion dalam 1 menit.',
    '⚡ Max rep Squat dalam 60 detik. Catat hasilmu!',
    '🧘 Tahan Plank selama 1 menit penuh tanpa istirahat.',
    '💪 Lakukan 5 Negative Pull Up dengan turun selambat mungkin (5 detik per rep).',
    '🔥 Tabata 20s kerja / 10s istirahat × 8 putaran — Push Up.',
    '🎲 10 Jump Squat, 10 Push Up, 10 Plank Shoulder Tap — 3 ronde!',
    '⏱ Berapa cepat kamu bisa melakukan 20 Bodyweight Squat dengan form benar?',
    '🌟 Tahan posisi Dead Hang di pull up bar selama semampunya.',
];

// ===== STATE =====
let currentLevel = 'Beginner';
let currentWorkout = null;
let timerInterval = null;
let timerSeconds = 0;
let timerDuration = 60;
let timerRunning = false;
let isRestTimer = false;
let repCount = 0;
let repTarget = 10;
let repCombo = 0;
let quizIndex = 0;
let quizScore = 0;
let currentChallenge = '';
let challengeActive = false;
let challengeTimer = null;
let exerciseStates = {};
let xp = parseInt(localStorage.getItem('kalis-xp') || '0');
let attendance = JSON.parse(localStorage.getItem('kalis-attendance') || '[]');
let workoutLog = JSON.parse(localStorage.getItem('kalis-log') || '[]');
let viewMonth = new Date().getMonth();
let viewYear = new Date().getFullYear();

// ===== INIT =====
function init() {
    updateStatCounters();
    renderWorkout();
    renderCalendar();
    renderLog();
    updateXPDisplay();
    newChallenge();
    loadQuiz();
    checkTodayBtn();
}

function updateStatCounters() {
    document.getElementById('stat-days').textContent = attendance.length;
    document.getElementById('stat-streak').textContent = calcStreak();
}

function calcStreak() {
    if (!attendance.length) return 0;
    let streak = 0;
    let today = new Date(); today.setHours(0, 0, 0, 0);
    let sorted = [...attendance].sort((a, b) => new Date(b) - new Date(a));
    let check = new Date(today);
    for (let d of sorted) {
        let dd = new Date(d); dd.setHours(0, 0, 0, 0);
        if (dd.getTime() === check.getTime()) {
            streak++;
            check.setDate(check.getDate() - 1);
        } else break;
    }
    return streak;
}

// ===== NAVIGATION =====
function switchView(view) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.nav-links li button').forEach(b => b.classList.remove('active'));
    document.getElementById('view-' + view).classList.add('active');
    document.getElementById('nav-' + view).classList.add('active');
    if (view === 'absen') { renderCalendar(); renderLog(); }
}

// ===== LEVEL =====
function selectLevel(lvl) {
    currentLevel = lvl;
    document.querySelectorAll('.level-card').forEach(c => c.classList.remove('selected'));
    document.getElementById('card-' + lvl).classList.add('selected');
    switchView('workout');
    setWorkoutLevel(lvl);
}

function setWorkoutLevel(lvl) {
    currentLevel = lvl;
    document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('wb-' + lvl).classList.add('active');
    renderWorkout();
}

// ===== WORKOUT RENDER =====
function renderWorkout() {
    const grid = document.getElementById('workout-grid');
    const days = workoutData.filter(d => d.level === currentLevel);
    grid.innerHTML = days.map((day, di) => `
    <div class="day-card">
      <div class="day-header">
        <div class="day-name">${day.day.toUpperCase()}</div>
        <div class="focus-tag">${day.focus}</div>
      </div>
      <ul class="exercise-list">
        ${day.exercises.map((ex, ei) => `
          <li class="exercise-item">
            <span class="exercise-num">0${ei + 1}</span>
            <span class="exercise-name">${ex.name}</span>
            <div class="exercise-meta">
              <span>${ex.sets} sets</span>
              ${ex.reps}
            </div>
          </li>
        `).join('')}
      </ul>
      <button class="start-btn" onclick="openWorkout(${di})">→ Mulai Sesi Ini</button>
    </div>
  `).join('');
}

// ===== MODAL =====
function openWorkout(idx) {
    const days = workoutData.filter(d => d.level === currentLevel);
    currentWorkout = days[idx];
    exerciseStates = {};
    currentWorkout.exercises.forEach((ex, i) => {
        exerciseStates[i] = { done: false, sets: Array(ex.sets).fill(false) };
    });

    document.getElementById('modal-title').textContent = currentWorkout.day.toUpperCase();
    document.getElementById('modal-subtitle').textContent = `${currentWorkout.focus} · ${currentLevel}`;
    document.getElementById('workout-modal').classList.add('open');

    renderMiniRings();
    renderExerciseTracker();
    resetTimer();
    resetReps();
    loadQuiz();
    newChallenge();
    updateXPDisplay();
}

function closeModal() {
    document.getElementById('workout-modal').classList.remove('open');
    stopTimer();
}

// ===== MINI RINGS =====
function renderMiniRings() {
    if (!currentWorkout) return;
    const total = currentWorkout.exercises.length;
    const done = Object.values(exerciseStates).filter(e => e.done).length;
    const pct = total > 0 ? (done / total) * 100 : 0;
    const r = 30; const c = 2 * Math.PI * r;
    const offset = c - (pct / 100) * c;
    document.getElementById('mini-rings').innerHTML = `
    <div class="mini-ring-wrap">
      <svg width="80" height="80" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r="${r}" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="4"/>
        <circle cx="40" cy="40" r="${r}" fill="none" stroke="#d4a843" stroke-width="4"
          stroke-dasharray="${c}" stroke-dashoffset="${offset}"
          stroke-linecap="round" transform="rotate(-90 40 40)" style="transition:stroke-dashoffset 0.5s"/>
        <text x="40" y="44" text-anchor="middle" fill="white" font-family="'Bebas Neue',sans-serif" font-size="18">${done}/${total}</text>
      </svg>
      <span>Exercises</span>
    </div>
    <div class="mini-ring-wrap">
      <svg width="80" height="80" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r="${r}" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="4"/>
        <circle cx="40" cy="40" r="${r}" fill="none" stroke="#707070" stroke-width="4"
          stroke-dasharray="${c}" stroke-dashoffset="${c - (calcSetsDonePct() / 100) * c}"
          stroke-linecap="round" transform="rotate(-90 40 40)" style="transition:stroke-dashoffset 0.5s"/>
        <text x="40" y="44" text-anchor="middle" fill="white" font-family="'Bebas Neue',sans-serif" font-size="18">${calcSetsDone()}/${calcTotalSets()}</text>
      </svg>
      <span>Sets</span>
    </div>
  `;
}

function calcSetsDone() {
    return Object.values(exerciseStates).reduce((sum, e) => sum + e.sets.filter(Boolean).length, 0);
}
function calcTotalSets() {
    if (!currentWorkout) return 1;
    return currentWorkout.exercises.reduce((sum, ex) => sum + ex.sets, 0);
}
function calcSetsDonePct() {
    const t = calcTotalSets(); if (!t) return 0;
    return (calcSetsDone() / t) * 100;
}

// ===== EXERCISE TRACKER =====
function renderExerciseTracker() {
    if (!currentWorkout) return;
    const container = document.getElementById('exercise-track-list');
    container.innerHTML = currentWorkout.exercises.map((ex, i) => {
        const state = exerciseStates[i];
        return `
      <div class="exercise-row" id="exrow-${i}">
        <div class="ex-check ${state.done ? 'done' : ''}" onclick="toggleExercise(${i})"></div>
        <div class="ex-info">
          <div class="ex-name ${state.done ? 'done' : ''}">${ex.name}</div>
          <div class="ex-sets">
            ${state.sets.map((filled, si) => `
              <div class="set-dot ${filled ? 'filled' : ''}" onclick="toggleSet(${i},${si})"></div>
            `).join('')}
          </div>
        </div>
        <div class="exercise-meta"><span>${ex.sets}×</span>${ex.reps}</div>
      </div>
    `;
    }).join('');
}

function toggleExercise(i) {
    exerciseStates[i].done = !exerciseStates[i].done;
    if (exerciseStates[i].done) {
        exerciseStates[i].sets = exerciseStates[i].sets.map(() => true);
        gainXP(15);
        showToast('✓ ' + currentWorkout.exercises[i].name + ' — +15 XP', 'gold');
    }
    renderExerciseTracker();
    renderMiniRings();
}

function toggleSet(exIdx, setIdx) {
    exerciseStates[exIdx].sets[setIdx] = !exerciseStates[exIdx].sets[setIdx];
    if (exerciseStates[exIdx].sets[setIdx]) gainXP(5);
    const allDone = exerciseStates[exIdx].sets.every(Boolean);
    if (allDone) exerciseStates[exIdx].done = true;
    renderExerciseTracker();
    renderMiniRings();
}

// ===== TIMER =====
const CIRCUMFERENCE = 553;

function setPreset(secs) {
    stopTimer();
    timerDuration = secs;
    timerSeconds = secs;
    isRestTimer = false;
    document.getElementById('preset-rest').classList.remove('active');
    document.querySelectorAll('.preset-btn:not(#preset-rest)').forEach(b => {
        b.classList.toggle('active', parseInt(b.textContent) === secs ||
            (b.textContent.includes('m') && secs === parseInt(b.textContent) * 60) ||
            b.textContent === secs + 's');
    });
    document.getElementById('timer-mode-label').textContent = 'COUNTDOWN';
    updateTimerDisplay();
}

function toggleRestTimer() {
    isRestTimer = !isRestTimer;
    document.getElementById('preset-rest').classList.toggle('active', isRestTimer);
    if (isRestTimer) {
        stopTimer();
        timerDuration = 60;
        timerSeconds = 60;
        document.getElementById('timer-mode-label').textContent = 'REST';
        updateTimerDisplay();
    } else {
        document.getElementById('timer-mode-label').textContent = 'TIMER';
    }
}

function startTimer() {
    if (timerRunning) return;
    timerRunning = true;
    document.getElementById('timer-start-btn').textContent = '⏸ Pause';
    document.getElementById('timer-start-btn').onclick = pauseTimer;
    if (timerSeconds === 0) timerSeconds = timerDuration;
    timerInterval = setInterval(() => {
        timerSeconds--;
        updateTimerDisplay();
        if (timerSeconds <= 0) {
            clearInterval(timerInterval);
            timerRunning = false;
            document.getElementById('timer-start-btn').textContent = '▶ Start';
            document.getElementById('timer-start-btn').onclick = startTimer;
            timerDone();
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
    document.getElementById('timer-start-btn').textContent = '▶ Resume';
    document.getElementById('timer-start-btn').onclick = startTimer;
}

function stopTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
    document.getElementById('timer-start-btn').textContent = '▶ Start';
    document.getElementById('timer-start-btn').onclick = startTimer;
}

function resetTimer() {
    stopTimer();
    timerSeconds = timerDuration;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const m = Math.floor(timerSeconds / 60);
    const s = timerSeconds % 60;
    document.getElementById('timer-display-text').textContent =
        String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
    const pct = timerDuration > 0 ? timerSeconds / timerDuration : 0;
    const offset = CIRCUMFERENCE - pct * CIRCUMFERENCE;
    document.getElementById('timer-circle').style.strokeDashoffset = offset;
}

function timerDone() {
    document.getElementById('timer-circle').style.stroke = '#2ecc71';
    setTimeout(() => { document.getElementById('timer-circle').style.stroke = 'var(--accent)'; }, 1500);
    gainXP(5);
    showToast(isRestTimer ? '💤 Rest selesai! Siap lanjut?' : '⏱ Timer selesai! +5 XP', 'gold');
    timerSeconds = timerDuration;
    updateTimerDisplay();
}

// ===== REP COUNTER =====
function addRep() {
    repCount++;
    repCombo++;
    const display = document.getElementById('rep-counter');
    display.textContent = repCount;
    display.style.transform = 'scale(1.15)';
    setTimeout(() => display.style.transform = 'scale(1)', 100);

    const fill = Math.min((repCount / repTarget) * 100, 100);
    document.getElementById('rep-fill').style.width = fill + '%';

    if (repCombo === 5) {
        const ct = document.getElementById('combo-text');
        ct.textContent = 'COMBO ×5!';
        ct.classList.add('show');
        gainXP(10);
        showToast('🔥 Combo ×5! +10 XP');
        setTimeout(() => ct.classList.remove('show'), 1500);
        repCombo = 0;
    }

    if (repCount >= repTarget) {
        gainXP(20);
        showToast(`🎯 Target ${repTarget} reps tercapai! +20 XP`, 'gold');
        launchConfetti();
        repCount = 0;
        document.getElementById('rep-counter').textContent = '0';
        document.getElementById('rep-fill').style.width = '0%';
        repCombo = 0;
    }
}

function resetReps() {
    repCount = 0;
    repCombo = 0;
    document.getElementById('rep-counter').textContent = '0';
    document.getElementById('rep-fill').style.width = '0%';
    document.getElementById('combo-text').classList.remove('show');
}

function setRepTarget() {
    const t = prompt('Set rep target:', repTarget);
    if (t && !isNaN(t) && t > 0) {
        repTarget = parseInt(t);
        document.getElementById('rep-target-num').textContent = repTarget;
        resetReps();
    }
}

// ===== QUIZ =====
function loadQuiz() {
    quizIndex = Math.floor(Math.random() * quizData.length);
    renderQuiz();
}

function renderQuiz() {
    const q = quizData[quizIndex];
    document.getElementById('quiz-q').textContent = q.q;
    document.getElementById('quiz-opts').innerHTML = q.opts.map((o, i) => `
    <button class="quiz-opt" onclick="answerQuiz(${i})">${o}</button>
  `).join('');
    document.getElementById('quiz-next-btn').style.display = 'none';
}

function answerQuiz(chosen) {
    const q = quizData[quizIndex];
    const opts = document.querySelectorAll('.quiz-opt');
    opts.forEach(o => o.style.pointerEvents = 'none');
    opts[q.a].classList.add('correct');
    if (chosen !== q.a) {
        opts[chosen].classList.add('wrong');
    } else {
        quizScore++;
        gainXP(10);
        showToast('✓ Benar! +10 XP');
    }
    document.getElementById('quiz-score').textContent = quizScore;
    document.getElementById('quiz-next-btn').style.display = 'block';
}

function nextQuiz() {
    quizIndex = (quizIndex + 1) % quizData.length;
    renderQuiz();
}

// ===== CHALLENGE =====
function newChallenge() {
    currentChallenge = challenges[Math.floor(Math.random() * challenges.length)];
    document.getElementById('challenge-display').textContent = currentChallenge;
    document.getElementById('challenge-result').style.display = 'none';
    document.getElementById('accept-btn').textContent = 'Accept Challenge';
    document.getElementById('accept-btn').onclick = acceptChallenge;
    challengeActive = false;
    if (challengeTimer) clearInterval(challengeTimer);
}

function acceptChallenge() {
    if (challengeActive) return;
    challengeActive = true;
    let secs = 60;
    const btn = document.getElementById('accept-btn');
    const res = document.getElementById('challenge-result');
    btn.textContent = `⏱ ${secs}s remaining...`;
    btn.onclick = () => {
        completeChallengeSuccess();
    };
    challengeTimer = setInterval(() => {
        secs--;
        btn.textContent = `⏱ ${secs}s — Tap untuk Complete!`;
        if (secs <= 0) {
            clearInterval(challengeTimer);
            challengeActive = false;
            btn.textContent = 'Waktu habis! Try again';
            btn.onclick = newChallenge;
            res.textContent = 'WAKTU HABIS — coba lagi!';
            res.style.color = '#e74c3c';
            res.style.display = 'block';
        }
    }, 1000);
}

function completeChallengeSuccess() {
    if (challengeTimer) clearInterval(challengeTimer);
    gainXP(25);
    showToast('🏆 Challenge selesai! +25 XP', 'gold');
    launchConfetti();
    const res = document.getElementById('challenge-result');
    res.textContent = '✓ CHALLENGE COMPLETE — +25 XP';
    res.style.color = '#d4a843';
    res.style.display = 'block';
    document.getElementById('accept-btn').textContent = 'New Challenge';
    document.getElementById('accept-btn').onclick = newChallenge;
    challengeActive = false;
}

// ===== GAME TABS =====
function switchGame(tab) {
    document.querySelectorAll('.game-tab').forEach((t, i) => {
        t.classList.toggle('active', ['reps', 'quiz', 'challenge'][i] === tab);
    });
    document.querySelectorAll('.game-panel').forEach(p => p.classList.remove('active'));
    document.getElementById('game-' + tab).classList.add('active');
}

// ===== XP =====
function gainXP(amount) {
    xp += amount;
    localStorage.setItem('kalis-xp', xp);
    updateXPDisplay();
}

function updateXPDisplay() {
    const level = Math.floor(xp / 100) + 1;
    const current = xp % 100;
    document.getElementById('xp-level-num').textContent = level;
    document.getElementById('xp-current').textContent = current;
    document.getElementById('xp-next').textContent = 100;
    document.getElementById('xp-fill').style.width = current + '%';
}

// ===== COMPLETE WORKOUT =====
function completeWorkout() {
    const done = Object.values(exerciseStates).filter(e => e.done).length;
    const total = currentWorkout ? currentWorkout.exercises.length : 0;
    gainXP(50);
    const today = new Date().toISOString().split('T')[0];
    const todayStr = today;
    if (!attendance.includes(todayStr)) {
        attendance.push(todayStr);
        localStorage.setItem('kalis-attendance', JSON.stringify(attendance));
    }
    const log = {
        date: todayStr,
        day: currentWorkout.day,
        focus: currentWorkout.focus,
        level: currentLevel,
        exercisesDone: done,
        exercisesTotal: total
    };
    workoutLog.unshift(log);
    if (workoutLog.length > 50) workoutLog = workoutLog.slice(0, 50);
    localStorage.setItem('kalis-log', JSON.stringify(workoutLog));
    updateStatCounters();
    launchConfetti();
    showToast('🎉 Workout selesai! +50 XP — luar biasa!', 'gold');
    setTimeout(() => {
        closeModal();
        switchView('absen');
    }, 1500);
}

// ===== ABSENSI =====
function renderCalendar() {
    const grid = document.getElementById('calendar-grid');
    const monthName = new Date(viewYear, viewMonth).toLocaleString('id-ID', { month: 'long' }).toUpperCase();
    document.getElementById('month-name').textContent = monthName;

    const days = ['SEN', 'SEL', 'RAB', 'KAM', 'JUM', 'SAB', 'MIN'];
    const firstDay = new Date(viewYear, viewMonth, 1).getDay();
    const offset = (firstDay + 6) % 7;
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

    let html = days.map(d => `<div class="cal-day-header">${d}</div>`).join('');
    for (let i = 0; i < offset; i++) html += `<div class="cal-day empty"></div>`;

    const today = new Date(); today.setHours(0, 0, 0, 0);
    let monthAttended = 0;

    for (let d = 1; d <= daysInMonth; d++) {
        const dateStr = `${viewYear}-${String(viewMonth + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
        const isToday = (new Date(dateStr).toDateString() === today.toDateString());
        const attended = attendance.includes(dateStr);
        if (attended) monthAttended++;
        html += `
      <div class="cal-day ${isToday ? 'today' : ''} ${attended ? 'attended' : ''}" onclick="toggleAttendance('${dateStr}')">
        <span class="cal-day-num">${d}</span>
        <div class="cal-dot"></div>
      </div>
    `;
    }

    grid.innerHTML = html;
    document.getElementById('total-days-stat').textContent = monthAttended;
    document.getElementById('month-streak-stat').textContent = calcStreak();
    document.getElementById('streak-display').textContent = calcStreak();
}

function toggleAttendance(dateStr) {
    const idx = attendance.indexOf(dateStr);
    if (idx > -1) attendance.splice(idx, 1);
    else { attendance.push(dateStr); showToast('✓ Absensi dicatat!'); }
    localStorage.setItem('kalis-attendance', JSON.stringify(attendance));
    renderCalendar();
    updateStatCounters();
}

function checkIn() {
    const today = new Date().toISOString().split('T')[0];
    if (!attendance.includes(today)) {
        attendance.push(today);
        localStorage.setItem('kalis-attendance', JSON.stringify(attendance));
        gainXP(10);
        showToast('✅ Check-in berhasil! +10 XP', 'gold');
        renderCalendar();
        updateStatCounters();
    }
}

function checkTodayBtn() {
    const today = new Date().toISOString().split('T')[0];
    const btn = document.getElementById('checkin-btn');
    if (attendance.includes(today)) {
        btn.textContent = '✓ Sudah Check-In Hari Ini';
        btn.disabled = true;
    }
}

function prevMonth() {
    viewMonth--;
    if (viewMonth < 0) { viewMonth = 11; viewYear--; }
    renderCalendar();
}
function nextMonth() {
    viewMonth++;
    if (viewMonth > 11) { viewMonth = 0; viewYear++; }
    renderCalendar();
}

function renderLog() {
    const list = document.getElementById('log-list');
    if (!workoutLog.length) {
        list.innerHTML = `<p style="font-family:var(--font-body);color:var(--gray-500);padding:20px 0;font-style:italic">Belum ada log latihan. Yuk mulai!</p>`;
        return;
    }
    list.innerHTML = workoutLog.slice(0, 10).map(l => `
    <div class="log-item">
      <div class="log-date">${l.date}</div>
      <div class="log-info">
        <div class="log-day-name">${l.day} — ${l.focus}</div>
        <div class="log-details">${l.level} · ${l.exercisesDone}/${l.exercisesTotal} exercises</div>
      </div>
      <div class="log-badge">${l.level}</div>
    </div>
  `).join('');
}

// ===== TOAST =====
function showToast(msg, type = '') {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.className = 'show' + (type === 'gold' ? ' gold' : '');
    clearTimeout(t._timeout);
    t._timeout = setTimeout(() => t.className = '', 2500);
}

// ===== CONFETTI =====
function launchConfetti() {
    const colors = ['#d4a843', '#ffffff', '#b0b0b0', '#f5f0e8'];
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const el = document.createElement('div');
            el.className = 'confetti-piece';
            el.style.cssText = `
        left:${Math.random() * 100}vw;
        top:0;
        background:${colors[Math.floor(Math.random() * colors.length)]};
        width:${4 + Math.random() * 8}px;
        height:${4 + Math.random() * 8}px;
        animation-duration:${1.5 + Math.random() * 2}s;
        animation-delay:${Math.random() * 0.5}s;
        border-radius:${Math.random() > 0.5 ? '50%' : '0'};
      `;
            document.body.appendChild(el);
            setTimeout(() => el.remove(), 3000);
        }, i * 30);
    }
}

// ===== START =====
init();