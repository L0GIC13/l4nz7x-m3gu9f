// ==================== ESTADO GENERAL ====================
let activeModule = null;
let selectedSubModule = null;
let currentCategory = 'Todas';
let questions = [];
let currentIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let answered = false;
let tableActiveCategory = 'Todas';

// ==================== NAVEGACIÓN PRINCIPAL ====================
function goHome() {
    document.getElementById('home-screen').style.display = 'block';
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('writing-screen').style.display = 'none';
    document.getElementById('use-menu-screen').style.display = 'none';
    document.getElementById('use-practice-screen').style.display = 'none';
    document.getElementById('grammar-screen').style.display = 'none';
    document.getElementById('module-menu-screen').style.display = 'none';
    document.getElementById('table-screen').style.display = 'none';
    document.getElementById('end-screen').style.display = 'none';
    document.getElementById('home-nav-btn').style.display = 'none';
    document.getElementById('app-header-title').textContent = '🎓 English Master Quiz';
    document.getElementById('app-header-sub').textContent = 'Selecciona un módulo para practicar e incrementar tu vocabulario';
    activeModule = null;
    selectedSubModule = null;
}

// ==================== SUBMENÚ Y TABLA / LISTADO ====================
function openModuleMenu(moduleType) {
    selectedSubModule = moduleType;
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('writing-screen').style.display = 'none';
    document.getElementById('grammar-screen').style.display = 'none';
    document.getElementById('use-menu-screen').style.display = 'none';
    document.getElementById('use-practice-screen').style.display = 'none';
    document.getElementById('table-screen').style.display = 'none';
    document.getElementById('end-screen').style.display = 'none';
    document.getElementById('module-menu-screen').style.display = 'block';
    document.getElementById('home-nav-btn').style.display = 'inline-flex';

    if (moduleType === 'prepositions') {
        document.getElementById('sub-menu-title').textContent = '📘 Dependent Prepositions';
        document.getElementById('sub-menu-desc').textContent = 'Elige si prefieres ponerte a prueba o consultar el listado completo de preposiciones dependientes.';
        document.getElementById('app-header-title').textContent = '📘 Dependent Prepositions';
        document.getElementById('app-header-sub').textContent = 'Verbos, adjetivos y expresiones dependientes';
    } else {
        document.getElementById('sub-menu-title').textContent = '📙 Phrasal Verbs';
        document.getElementById('sub-menu-desc').textContent = 'Elige si prefieres ponerte a prueba o consultar el listado con los 121 phrasal verbs.';
        document.getElementById('app-header-title').textContent = '📙 Phrasal Verbs Master';
        document.getElementById('app-header-sub').textContent = 'Los 121 verbos compuestos clave para B2';
    }
}

function startModuleFromSubMenu() {
    startModule(selectedSubModule);
}

function openListTableFromSubMenu() {
    openListTable(selectedSubModule);
}

function openListTable(moduleType) {
    selectedSubModule = moduleType;
    tableActiveCategory = 'Todas';
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('module-menu-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('table-screen').style.display = 'block';
    document.getElementById('home-nav-btn').style.display = 'inline-flex';
    document.getElementById('table-search-input').value = '';

    const filtersContainer = document.getElementById('table-filters-container');
    filtersContainer.innerHTML = '';

    if (moduleType === 'prepositions') {
        document.getElementById('table-title').textContent = '📋 Listado: Dependent Prepositions';
        document.getElementById('table-sub').textContent = 'Consulta todas las combinaciones fijas, su explicación y ejemplos en contexto.';
        document.getElementById('th-cat').style.display = 'table-cell';

        const categories = [
            { name: 'Todas', count: prepositionsData.length },
            { name: 'Verbos', count: prepositionsData.filter(q => q.cat === 'Verbos').length },
            { name: 'Adjetivos', count: prepositionsData.filter(q => q.cat === 'Adjetivos').length },
            { name: 'Expresiones Fijas', count: prepositionsData.filter(q => q.cat === 'Expresiones Fijas').length }
        ];

        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = `filter-btn ${cat.name === 'Todas' ? 'active' : ''}`;
            btn.textContent = `${cat.name} (${cat.count})`;
            btn.onclick = () => {
                tableActiveCategory = cat.name;
                filtersContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b === btn));
                renderTableBody();
            };
            filtersContainer.appendChild(btn);
        });
    } else {
        document.getElementById('table-title').textContent = '📋 Listado: Phrasal Verbs (121)';
        document.getElementById('table-sub').textContent = 'Todos los phrasal verbs ordenados con su significado y una frase de ejemplo.';
        document.getElementById('th-cat').style.display = 'none';
    }

    renderTableBody();
}

function renderTableBody() {
    const dataset = selectedSubModule === 'prepositions' ? prepositionsData : phrasalVerbsData;
    const query = (document.getElementById('table-search-input').value || '').toLowerCase().trim();
    const tbody = document.getElementById('vocab-table-body');
    tbody.innerHTML = '';

    const filtered = dataset.filter(row => {
        const matchesCategory = (tableActiveCategory === 'Todas' || row.cat === tableActiveCategory);
        const matchesSearch = !query ||
            (row.item && row.item.toLowerCase().includes(query)) ||
            (row.explanation && row.explanation.toLowerCase().includes(query)) ||
            (row.sentence && row.sentence.toLowerCase().includes(query));
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:24px; color:var(--text-muted);">No se encontraron resultados para tu búsqueda.</td></tr>`;
        return;
    }

    filtered.forEach(row => {
        const tr = document.createElement('tr');
        const parts = row.sentence.split('___');
        const exampleHtml = parts[0] + `<strong>${row.answer}</strong>` + (parts[1] || '');
        let explanationText = row.explanation.replace(/💡 Pista rápida:.*?\n\n/g, '').replace(/\n/g, '<br>');

        tr.innerHTML = `
            <td><span class="table-item-name">${row.item}</span></td>
            ${selectedSubModule === 'prepositions' ? `<td><span class="table-cat-badge">${row.cat || 'General'}</span></td>` : ''}
            <td>${explanationText}</td>
            <td><span class="table-example-text">“${exampleHtml}”</span></td>
        `;
        tbody.appendChild(tr);
    });
}

function filterTableList() {
    renderTableBody();
}

// ==================== GRAMMAR FLASHCARDS ====================
let currentGrammarLessonIdx = 0;
let currentGrammarCardIdx = 0;

function startGrammarModule() {
    activeModule = 'grammar';
    currentGrammarLessonIdx = 0;
    currentGrammarCardIdx = 0;

    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('writing-screen').style.display = 'none';
    document.getElementById('use-menu-screen').style.display = 'none';
    document.getElementById('use-practice-screen').style.display = 'none';
    document.getElementById('module-menu-screen').style.display = 'none';
    document.getElementById('table-screen').style.display = 'none';
    document.getElementById('end-screen').style.display = 'none';
    document.getElementById('grammar-screen').style.display = 'block';
    document.getElementById('home-nav-btn').style.display = 'inline-flex';

    document.getElementById('app-header-title').textContent = '💡 Cambridge Grammar Flashcards';
    document.getElementById('app-header-sub').textContent = 'Domina las fórmulas y trucos esenciales de gramática para el B2';

    renderGrammarCard();
}

function renderGrammarCard() {
    const lesson = grammarLessons[currentGrammarLessonIdx];
    const card = lesson.cards[currentGrammarCardIdx];
    const totalInLesson = lesson.cards.length;

    document.getElementById('grammar-lesson-title').textContent = lesson.lessonTitle;
    document.getElementById('grammar-card-current').textContent = currentGrammarCardIdx + 1;
    document.getElementById('grammar-card-total').textContent = totalInLesson;

    const progress = ((currentGrammarCardIdx + 1) / totalInLesson) * 100;
    document.getElementById('grammar-progress-bar').style.width = `${progress}%`;

    const area = document.getElementById('grammar-card-render-area');
    let contentHtml = '';

    if (card.type === 'examples') {
        const items = card.examples.map(ex => `
            <li class="grammar-example-item">
                <span>${ex.text}</span>
                <span class="grammar-example-note">${ex.note}</span>
            </li>
        `).join('');

        contentHtml = `
            <div class="grammar-card-box">
                <span class="grammar-card-badge">${card.badge}</span>
                <h3 class="grammar-card-title">${card.title}</h3>
                <div class="grammar-formula-box">${card.formula}</div>
                <p class="grammar-desc-text">${card.desc}</p>
                <ul class="grammar-examples-list">${items}</ul>
            </div>
        `;
    } else if (card.type === 'comparison') {
        const genItems = card.general.items.map(it => `
            <div class="compare-row-item">
                ${it.wrong ? `<div style="color:var(--error); font-weight:700;">❌ ${it.wrong}</div>` : ''}
                <div style="color:var(--success); font-weight:700;">✅ ${it.right}</div>
                <div class="item-sub">(${it.note})</div>
            </div>
        `).join('');

        const specItems = card.specific.items.map(it => `
            <div class="compare-row-item">
                <div style="color:var(--success); font-weight:700;">✅ ${it.right}</div>
                <div class="item-sub">(${it.note})</div>
            </div>
        `).join('');

        contentHtml = `
            <div class="grammar-card-box">
                <span class="grammar-card-badge">${card.badge}</span>
                <h3 class="grammar-card-title">${card.title}</h3>
                <div class="grammar-formula-box">${card.formula}</div>
                <p class="grammar-desc-text">${card.desc}</p>
                <div class="grammar-comparison-grid">
                    <div class="grammar-compare-card general">
                        <div class="grammar-compare-head" style="color:#c2410c;">
                            <span>${card.general.title}</span>
                        </div>
                        <div style="font-size:0.84rem; font-weight:700; color:#9a3412; margin-bottom:12px;">${card.general.sub}</div>
                        <div class="compare-rows">${genItems}</div>
                    </div>
                    <div class="grammar-compare-card specific">
                        <div class="grammar-compare-head" style="color:var(--success);">
                            <span>${card.specific.title}</span>
                        </div>
                        <div style="font-size:0.84rem; font-weight:700; color:#166534; margin-bottom:12px;">${card.specific.sub}</div>
                        <div class="compare-rows">${specItems}</div>
                    </div>
                </div>
            </div>
        `;
    } else if (card.type === 'categories') {
        const catBoxes = card.categories.map(cat => `
            <div class="grammar-cat-box">
                <div class="grammar-cat-icon">${cat.icon}</div>
                <div class="grammar-cat-title">${cat.title}</div>
                <div class="grammar-cat-tags">
                    ${cat.tags.map(t => `<span class="grammar-cat-tag">${t}</span>`).join('')}
                </div>
            </div>
        `).join('');

        contentHtml = `
            <div class="grammar-card-box">
                <span class="grammar-card-badge">${card.badge}</span>
                <h3 class="grammar-card-title">${card.title}</h3>
                <div class="grammar-formula-box">${card.formula}</div>
                <p class="grammar-desc-text">${card.desc}</p>
                <div class="grammar-categories-grid">${catBoxes}</div>
            </div>
        `;
    }

    area.innerHTML = contentHtml;

    // Control de navegación entre lecciones y tarjetas
    const isFirstCardEver = (currentGrammarLessonIdx === 0 && currentGrammarCardIdx === 0);
    const isLastLesson = (currentGrammarLessonIdx === grammarLessons.length - 1);
    const isLastCardInLesson = (currentGrammarCardIdx === totalInLesson - 1);

    document.getElementById('grammar-prev-btn').disabled = isFirstCardEver;

    if (isLastLesson && isLastCardInLesson) {
        document.getElementById('grammar-next-btn').textContent = 'Finalizar Repaso 🏁';
    } else if (isLastCardInLesson) {
        document.getElementById('grammar-next-btn').textContent = 'Siguiente Lección →';
    } else {
        document.getElementById('grammar-next-btn').textContent = 'Siguiente Tarjeta →';
    }
}

function nextGrammarCard() {
    const totalInLesson = grammarLessons[currentGrammarLessonIdx].cards.length;
    
    if (currentGrammarCardIdx < totalInLesson - 1) {
        currentGrammarCardIdx++;
        renderGrammarCard();
    } else if (currentGrammarLessonIdx < grammarLessons.length - 1) {
        currentGrammarLessonIdx++;
        currentGrammarCardIdx = 0;
        renderGrammarCard();
    } else {
        goHome();
    }
}

function prevGrammarCard() {
    if (currentGrammarCardIdx > 0) {
        currentGrammarCardIdx--;
        renderGrammarCard();
    } else if (currentGrammarLessonIdx > 0) {
        currentGrammarLessonIdx--;
        currentGrammarCardIdx = grammarLessons[currentGrammarLessonIdx].cards.length - 1;
        renderGrammarCard();
    }
}

// ==================== QUIZ (PREPOSICIONES & PHRASAL) ====================
function startModule(moduleType) {
    activeModule = moduleType;
    selectedSubModule = moduleType;
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('module-menu-screen').style.display = 'none';
    document.getElementById('table-screen').style.display = 'none';
    document.getElementById('writing-screen').style.display = 'none';
    document.getElementById('grammar-screen').style.display = 'none';
    document.getElementById('use-menu-screen').style.display = 'none';
    document.getElementById('use-practice-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    document.getElementById('home-nav-btn').style.display = 'inline-flex';

    const filtersContainer = document.getElementById('filters-container');
    filtersContainer.innerHTML = '';

    if (moduleType === 'prepositions') {
        document.getElementById('app-header-title').textContent = '📘 Dependent Prepositions Test';
        document.getElementById('app-header-sub').textContent = 'Practica Verbos, Adjetivos y Expresiones Fijas con preposiciones';
        
        const categories = [
            { name: 'Todas', count: prepositionsData.length },
            { name: 'Verbos', count: prepositionsData.filter(q => q.cat === 'Verbos').length },
            { name: 'Adjetivos', count: prepositionsData.filter(q => q.cat === 'Adjetivos').length },
            { name: 'Expresiones Fijas', count: prepositionsData.filter(q => q.cat === 'Expresiones Fijas').length }
        ];

        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = `filter-btn ${cat.name === 'Todas' ? 'active' : ''}`;
            btn.textContent = `${cat.name} (${cat.count})`;
            btn.onclick = () => setCategory(cat.name);
            filtersContainer.appendChild(btn);
        });
    } else if (moduleType === 'phrasal_verbs') {
        document.getElementById('app-header-title').textContent = '📙 Phrasal Verbs Master Test';
        document.getElementById('app-header-sub').textContent = 'Aprende los 121 Phrasal Verbs clave en oraciones completas';

        const btn = document.createElement('button');
        btn.className = 'filter-btn active';
        btn.textContent = `Todos (${phrasalVerbsData.length})`;
        btn.onclick = () => setCategory('Todas');
        filtersContainer.appendChild(btn);
    }

    currentCategory = 'Todas';
    initQuiz();
}

function setCategory(cat) {
    currentCategory = cat;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.includes(cat));
    });
    initQuiz();
}

function filterQuestions() {
    const currentDataset = activeModule === 'prepositions' ? prepositionsData : phrasalVerbsData;
    if (currentCategory === 'Todas') {
        questions = [...currentDataset];
    } else {
        questions = currentDataset.filter(q => q.cat === currentCategory);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function initQuiz() {
    filterQuestions();
    shuffleArray(questions);
    currentIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    document.getElementById('quiz-screen').style.display = 'block';
    document.getElementById('end-screen').style.display = 'none';
    updateStats();
    loadQuestion();
}

function loadQuestion() {
    answered = false;
    document.getElementById('next-btn').disabled = true;
    const expBox = document.getElementById('explanation-box');
    expBox.style.display = 'none';
    expBox.className = 'explanation-box';

    const q = questions[currentIndex];
    document.getElementById('category-badge').textContent = q.cat || (activeModule === 'phrasal_verbs' ? 'PHRASAL VERBS' : 'PREPOSITIONS');
    
    const parts = q.sentence.split('___');
    document.getElementById('sentence-text').innerHTML = parts[0] + '<span class="blank" id="blank-word">___</span>' + (parts[1] || '');

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    let opts = [...q.options];
    shuffleArray(opts);

    opts.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span>${opt}</span>`;
        btn.onclick = () => checkAnswer(opt, btn);
        optionsContainer.appendChild(btn);
    });

    updateStats();
}

function checkAnswer(selectedOpt, selectedBtn) {
    if (answered) return;
    answered = true;

    const q = questions[currentIndex];
    const isCorrect = selectedOpt.toLowerCase().trim() === q.answer.toLowerCase().trim();

    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent.trim().toLowerCase() === q.answer.toLowerCase().trim()) {
            btn.classList.add('correct');
        }
    });

    document.getElementById('blank-word').textContent = q.answer;

    const expBox = document.getElementById('explanation-box');
    const expTitle = document.getElementById('exp-title');
    const expText = document.getElementById('exp-text');

    if (isCorrect) {
        selectedBtn.classList.add('correct');
        correctAnswers++;
        expBox.className = 'explanation-box correct-box';
        expTitle.innerHTML = '✅ ¡Excelente!';
        expText.innerHTML = `<b>Combinación correcta:</b> <i>${q.item}</i><br>${q.explanation}`;
    } else {
        selectedBtn.classList.add('wrong');
        wrongAnswers++;
        expBox.className = 'explanation-box wrong-box';
        expTitle.innerHTML = '❌ ¡Incorrecto!';
        expText.innerHTML = `<b>Respuesta correcta:</b> <strong>${q.answer}</strong> (Forma: <i>${q.item}</i>)<br><br><b>💡 Pista rápida:</b> ${q.hint || ''}<br><br><b>💡 Explicación:</b><br>${q.explanation}`;
    }

    expBox.style.display = 'block';
    document.getElementById('next-btn').disabled = false;
    updateStats();
}

function updateStats() {
    document.getElementById('current-index').textContent = currentIndex + 1;
    document.getElementById('total-questions').textContent = questions.length;
    document.getElementById('correct-count').textContent = correctAnswers;
    document.getElementById('wrong-count').textContent = wrongAnswers;

    const progress = ((currentIndex) / questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
}

function nextQuestion() {
    if (currentIndex < questions.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        showEndScreen();
    }
}

function showEndScreen() {
    document.getElementById('quiz-screen').style.display = 'none';
    const endScreen = document.getElementById('end-screen');
    endScreen.style.display = 'block';

    const total = questions.length;
    const pct = Math.round((correctAnswers / total) * 100);

    document.getElementById('final-percentage').textContent = `${pct}%`;
    document.getElementById('final-summary').textContent = `Has acertado ${correctAnswers} de ${total} preguntas.`;
}

function restartQuiz() {
    initQuiz();
}

// ==================== WRITINGS LOGIC ====================
let writingQuestionsUpdated = [];
let writingIndexUpdated = 0;
let writingCorrectUpdated = 0;
let writingWrongUpdated = 0;
let writingAnsweredUpdated = false;

function normalizeWritingTextUpdated(s) {
    return s.trim()
        .replace(/[“”]/g, '"')
        .replace(/[‘’]/g, "'")
        .replace(/\s+/g, ' ')
        .replace(/\s+([,.!?;:])/g, '$1')
        .replace(/\s*([,.!?;:])\s*/g, '$1 ')
        .trim()
        .toLowerCase();
}

function writingMatchUpdated(a, b) {
    return normalizeWritingTextUpdated(a) === normalizeWritingTextUpdated(b);
}

function orderWritingErrorsUpdated(items) {
    const remaining = [...items];
    const result = [];
    while (remaining.length) {
        const prev = result.length ? result[result.length - 1].category : null;
        const possible = remaining.filter(x => x.category !== prev);
        const pool = possible.length ? possible : remaining;
        const chosen = pool[Math.floor(Math.random() * pool.length)];
        result.push(chosen);
        remaining.splice(remaining.indexOf(chosen), 1);
    }
    return result;
}

function startWritingPractice() {
    activeModule = 'writings';
    writingQuestionsUpdated = orderWritingErrorsUpdated(writingErrorsUpdated);
    writingIndexUpdated = 0;
    writingCorrectUpdated = 0;
    writingWrongUpdated = 0;
    writingAnsweredUpdated = false;

    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('grammar-screen').style.display = 'none';
    document.getElementById('module-menu-screen').style.display = 'none';
    document.getElementById('table-screen').style.display = 'none';
    document.getElementById('end-screen').style.display = 'none';
    document.getElementById('use-menu-screen').style.display = 'none';
    document.getElementById('use-practice-screen').style.display = 'none';
    document.getElementById('writing-screen').style.display = 'block';
    document.getElementById('home-nav-btn').style.display = 'inline-flex';
    document.getElementById('app-header-title').textContent = '✍️ Writing Error Practice';
    document.getElementById('app-header-sub').textContent = 'Detecta el error y reescribe la frase correctamente';
    loadWritingErrorUpdated();
}

function loadWritingErrorUpdated() {
    const q = writingQuestionsUpdated[writingIndexUpdated];
    writingAnsweredUpdated = false;

    document.getElementById('writing-current-index').textContent = writingIndexUpdated + 1;
    document.getElementById('writing-total').textContent = writingQuestionsUpdated.length;
    document.getElementById('writing-correct-count').textContent = writingCorrectUpdated;
    document.getElementById('writing-wrong-count').textContent = writingWrongUpdated;
    document.getElementById('writing-progress-bar').style.width =
        ((writingIndexUpdated / writingQuestionsUpdated.length) * 100) + '%';

    document.getElementById('writing-error-sentence').textContent = q.error;

    const input = document.getElementById('writing-answer');
    input.value = '';
    input.disabled = false;

    const feedback = document.getElementById('writing-feedback');
    feedback.className = 'writing-feedback';
    feedback.style.display = 'none';
    document.getElementById('writing-feedback-text').textContent = '';
    document.getElementById('writing-correct-answer').textContent = '';

    document.getElementById('writing-check-btn').style.display = 'inline-block';
    document.getElementById('writing-next-btn').style.display = 'none';
    setTimeout(() => input.focus(), 50);
}

function checkWritingAnswer() {
    if (writingAnsweredUpdated) return;

    const q = writingQuestionsUpdated[writingIndexUpdated];
    const input = document.getElementById('writing-answer');
    if (!input.value.trim()) {
        input.focus();
        return;
    }

    writingAnsweredUpdated = true;
    input.disabled = true;

    const feedback = document.getElementById('writing-feedback');
    const textEl = document.getElementById('writing-feedback-text');
    const answerEl = document.getElementById('writing-correct-answer');

    if (writingMatchUpdated(input.value, q.correct)) {
        writingCorrectUpdated++;
        feedback.className = 'writing-feedback correct';
        textEl.innerHTML =
            '<b>✅ ¡Correcto!</b> Has corregido la frase perfectamente.' +
            '<br><br><b>💡 Explicación:</b> ' + q.explanation;
    } else {
        writingWrongUpdated++;
        feedback.className = 'writing-feedback wrong';
        textEl.innerHTML =
            '<b>❌ Hay algún error.</b>' +
            '<br><br><b>💡 Explicación:</b> ' + q.explanation;
    }

    answerEl.innerHTML = '<b>Frase correcta:</b> ' + q.correct;
    feedback.style.display = 'block';

    document.getElementById('writing-correct-count').textContent = writingCorrectUpdated;
    document.getElementById('writing-wrong-count').textContent = writingWrongUpdated;
    document.getElementById('writing-progress-bar').style.width =
        (((writingIndexUpdated + 1) / writingQuestionsUpdated.length) * 100) + '%';

    document.getElementById('writing-check-btn').style.display = 'none';
    document.getElementById('writing-next-btn').style.display = 'inline-block';
}

function nextWritingError() {
    if (!writingAnsweredUpdated) return;

    if (writingIndexUpdated < writingQuestionsUpdated.length - 1) {
        writingIndexUpdated++;
        loadWritingErrorUpdated();
    } else {
        document.getElementById('writing-screen').style.display = 'none';
        document.getElementById('end-screen').style.display = 'block';
        const pct = Math.round((writingCorrectUpdated / writingQuestionsUpdated.length) * 100);
        document.getElementById('final-percentage').textContent = pct + '%';
        document.getElementById('final-summary').textContent =
            'Has corregido correctamente ' + writingCorrectUpdated + ' de ' +
            writingQuestionsUpdated.length + ' errores de Writing.';
    }
}

document.addEventListener('keydown', function(e) {
    if (document.getElementById('writing-screen').style.display !== 'block') return;
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        if (!writingAnsweredUpdated) checkWritingAnswer();
        else nextWritingError();
    }
});

// ==================== USE OF ENGLISH LOGIC ====================
let useCurrentPart = 1;
let useQuestions = [];
let useIndex = 0;
let useCorrect = 0;
let useWrong = 0;
let useAnswered = false;

function openUseOfEnglishMenu() {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('writing-screen').style.display = 'none';
    document.getElementById('grammar-screen').style.display = 'none';
    document.getElementById('module-menu-screen').style.display = 'none';
    document.getElementById('table-screen').style.display = 'none';
    document.getElementById('end-screen').style.display = 'none';
    document.getElementById('use-practice-screen').style.display = 'none';
    document.getElementById('use-menu-screen').style.display = 'block';
    document.getElementById('home-nav-btn').style.display = 'inline-flex';
    document.getElementById('app-header-title').textContent = '📚 Use of English';
    document.getElementById('app-header-sub').textContent = 'Practica las 4 partes del Use of English del Cambridge B2';
    activeModule = 'use_of_english';
}

function startUsePart(part) {
    useCurrentPart = part;
    useQuestions = [...useOfEnglishData['part' + part]];
    useIndex = 0;
    useCorrect = 0;
    useWrong = 0;
    useAnswered = false;

    document.getElementById('use-menu-screen').style.display = 'none';
    document.getElementById('use-practice-screen').style.display = 'block';
    document.getElementById('home-nav-btn').style.display = 'inline-flex';
    document.getElementById('app-header-title').textContent = '📚 Use of English — Part ' + part;
    const titles = {
        1: 'Multiple Choice Cloze',
        2: 'Open Cloze',
        3: 'Word Formation',
        4: 'Key Word Transformation'
    };
    document.getElementById('app-header-sub').textContent = titles[part];
    loadUseQuestion();
}

function loadUseQuestion() {
    const q = useQuestions[useIndex];
    useAnswered = false;
    document.getElementById('use-current-index').textContent = useIndex + 1;
    document.getElementById('use-total').textContent = useQuestions.length;
    document.getElementById('use-correct-count').textContent = useCorrect;
    document.getElementById('use-wrong-count').textContent = useWrong;
    document.getElementById('use-progress-bar').style.width =
        ((useIndex / useQuestions.length) * 100) + '%';

    const instructions = {
        1: 'Elige la opción correcta.',
        2: 'Escribe SOLO 1 palabra. Pulsa Enter o «Comprobar».',
        3: 'Transforma la palabra base para completar la frase.',
        4: 'Escribe entre 2 y 5 palabras. Debes incluir la palabra clave exactamente y sin modificarla.'
    };
    document.getElementById('use-instruction').textContent = instructions[useCurrentPart];

    document.getElementById('use-sentence').textContent = q.sentence || q.original || '';
    const area = document.getElementById('use-answer-area');
    area.innerHTML = '';

    if (useCurrentPart === 1) {
        const grid = document.createElement('div');
        grid.className = 'use-options';
        q.options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'use-option';
            btn.textContent = String.fromCharCode(65 + i) + ') ' + opt;
            btn.onclick = () => checkUseOption(btn, opt);
            grid.appendChild(btn);
        });
        area.appendChild(grid);
    } else if (useCurrentPart === 3) {
        const row = document.createElement('div');
        row.className = 'use-answer-row';
        const input = document.createElement('input');
        input.id = 'use-text-answer';
        input.className = 'use-answer-input';
        input.autocomplete = 'off';
        input.spellcheck = false;
        input.placeholder = 'Escribe la palabra transformada...';
        const tag = document.createElement('span');
        tag.className = 'use-base-tag';
        tag.textContent = '[' + q.base + ']';
        row.appendChild(input);
        row.appendChild(tag);
        area.appendChild(row);
        input.focus();
    } else if (useCurrentPart === 4) {
        const keyRow = document.createElement('div');
        keyRow.style.marginBottom = '14px';
        keyRow.innerHTML = '<span style="color:var(--text-muted);font-weight:700;">Palabra clave:</span> ' +
            '<span class="use-keyword">' + q.keyword + '</span>';

        const row = document.createElement('div');
        row.className = 'use-transform-row';
        const before = document.createElement('span');
        before.textContent = q.before ? q.before + ' ' : '';
        const input = document.createElement('input');
        input.id = 'use-text-answer';
        input.className = 'use-answer-input use-transform-input';
        input.autocomplete = 'off';
        input.spellcheck = false;
        input.placeholder = '2–5 palabras con la keyword';
        const after = document.createElement('span');
        after.textContent = q.after ? ' ' + q.after : '';
        row.append(before, input, after);
        area.appendChild(keyRow);
        area.appendChild(row);
        input.focus();
    } else {
        const input = document.createElement('input');
        input.id = 'use-text-answer';
        input.className = 'use-answer-input';
        input.autocomplete = 'off';
        input.spellcheck = false;
        input.placeholder = 'UNA PALABRA';
        input.addEventListener('input', () => input.value = input.value.toUpperCase());
        input.addEventListener('keydown', e => {
            if (e.key === 'Enter') checkUseAnswer();
        });
        area.appendChild(input);
        input.focus();
    }

    const feedback = document.getElementById('use-feedback');
    feedback.className = 'use-feedback';
    feedback.style.display = 'none';
    document.getElementById('use-feedback-text').textContent = '';
    document.getElementById('use-correct-answer').textContent = '';
    document.getElementById('use-check-btn').style.display = useCurrentPart === 1 ? 'none' : 'inline-block';
    document.getElementById('use-next-btn').style.display = 'none';
}

function useNormalize(s) {
    return s.trim()
        .replace(/[‘’]/g, "'")
        .replace(/\s+/g, ' ')
        .toLowerCase();
}

function useAccepted(q, answer) {
    const candidates = [q.answer].concat(q.alternatives || []);
    return candidates.some(x => useNormalize(answer) === useNormalize(x));
}

function checkUseOption(btn, option) {
    if (useAnswered) return;
    useAnswered = true;
    const q = useQuestions[useIndex];
    document.querySelectorAll('.use-option').forEach(b => b.disabled = true);

    const correct = useAccepted(q, option);
    btn.classList.add(correct ? 'correct' : 'wrong');
    if (!correct) {
        document.querySelectorAll('.use-option').forEach(b => {
            if (b.textContent.slice(3).trim().toLowerCase() === q.answer.toLowerCase()) b.classList.add('correct');
        });
    }
    finishUseAnswer(correct);
}

function checkUseAnswer() {
    if (useAnswered) return;
    const q = useQuestions[useIndex];
    const input = document.getElementById('use-text-answer');
    if (!input || !input.value.trim()) return;

    const answer = input.value.trim();

    if (useCurrentPart === 4) {
        const words = answer.split(/\s+/).filter(Boolean);
        if (words.length < 2 || words.length > 5) {
            input.focus();
            alert('En Part 4 debes escribir entre 2 y 5 palabras (incluyendo la palabra clave).');
            return;
        }
        if (!words.some(w => useNormalize(w) === useNormalize(q.keyword))) {
            input.focus();
            alert('Tu respuesta debe incluir obligatoriamente la palabra clave: ' + q.keyword);
            return;
        }
    }

    useAnswered = true;
    input.disabled = true;
    const correct = useAccepted(q, answer);
    finishUseAnswer(correct);
}

function finishUseAnswer(correct) {
    const q = useQuestions[useIndex];
    if (correct) useCorrect++; else useWrong++;

    const feedback = document.getElementById('use-feedback');
    const text = document.getElementById('use-feedback-text');
    const answer = document.getElementById('use-correct-answer');

    feedback.className = 'use-feedback ' + (correct ? 'correct' : 'wrong');
    text.innerHTML = (correct ? '<b>✅ ¡Correcto!</b>' : '<b>❌ Incorrecto.</b>') +
        '<br><br><b>💡 Explicación:</b><br>' + q.explanation;
    answer.innerHTML = '<b>Respuesta correcta:</b> ' + q.answer +
        ((q.alternatives && q.alternatives.length) ? ' <span style="color:var(--text-muted)">(también: ' + q.alternatives.join(' / ') + ')</span>' : '');
    feedback.style.display = 'block';

    document.getElementById('use-correct-count').textContent = useCorrect;
    document.getElementById('use-wrong-count').textContent = useWrong;
    document.getElementById('use-progress-bar').style.width =
        (((useIndex + 1) / useQuestions.length) * 100) + '%';
    document.getElementById('use-check-btn').style.display = 'none';
    document.getElementById('use-next-btn').style.display = 'inline-block';
}

function nextUseQuestion() {
    if (!useAnswered) return;
    if (useIndex < useQuestions.length - 1) {
        useIndex++;
        loadUseQuestion();
    } else {
        openUseOfEnglishMenu();
    }
}

document.addEventListener('keydown', e => {
    if (document.getElementById('use-practice-screen').style.display !== 'block') return;
    if (e.key === 'Enter' && useCurrentPart !== 1) {
        e.preventDefault();
        if (!useAnswered) checkUseAnswer();
        else nextUseQuestion();
    }
});

// Inicializar la aplicación
window.onload = goHome;