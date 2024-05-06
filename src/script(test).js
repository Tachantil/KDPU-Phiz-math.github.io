const quizButton = document.getElementById('quiz-button');
const quizModal = document.getElementById('quiz-modal');
const quizForm = document.getElementById('quiz-form');
const quizQuestions = document.getElementById('quiz-questions');
const submitButton = document.getElementById('submit-button');
const introquiz = document.getElementById('test-text-intro');

// Питання
const quizData = [
    {
        question: '1) Чи достатньо Ви отримали теоретичних знань під час навчання для майбутньої професійної діяльності?',
        answers: ['Ні', 'Частково', 'Так'],
    },
    {
        question: '2) Чи достатньо Ви набули практичних навичок під час навчання для майбутньої професійної діяльності?',
        answers: ['Ні', 'Частково', 'Так'],
    },
    {
        question: '3) Чи достатньо Ви набули соціальних навичок (soft skils) під час навчання для майбутньої професійної діяльності?',
        answers: ['Ні', 'Частково', 'Так'],
    },
    {
        question: '4) Чи задоволені Ви вільним вибором навчальних дисциплін як способом формування своєї індивідуальної освітньої траєкторії?',
        answers: ['Ні', 'Частково', 'Так'],
    },
    {
        question: '5) Чи вистачало Вам в процесі навчання часу на самостійну роботу?',
        answers: ['Ні', 'Частково', 'Так'],
    },
    {
        question: '6) Чи допомогло Вам проходження практики набути практичні навички?',
        answers: ['Ні', 'Частково', 'Так'],
    },
    {
        question: '7) Чи пропагували та дотримувалися принципів академічної доброчесності викладачі кафедрі?',
        answers: ['Ні', 'Частково', 'Так'],
    },
    {
        question: '8) Чи залучались до аудиторних занять професіонали-практики та/або представники роботодавців?',
        answers: ['Ні', 'Частково', 'Так'],
    },
    {
        question: '9) Чи сприяли кафедра/університет Вашому працевлаштуванню?',
        answers: ['Ні', 'Частково', 'Так'],
    },
    {
        question: '10) Чи порадите Ви іншим навчатися на освітній програмі, на якій Ви навчалися?',
        answers: ['Ні', 'Частково', 'Так'],
    },

];

// Вивод питаннь та відповідей
let currentQuestion = 0;
function renderQuestion() {
    const question = quizData[currentQuestion];
    const html = `
    <h3 id="title-question">${question.question}</h3>
    <ul id="answer-list">
      ${question.answers.map((answer, index) => `
        <li>
            <div style="display: flex; padding: 5px 20px">
                <input type="radio" name="answer" value="${index}"/>
                <label id="answer-test">
                    ${answer}
                </label>
            </div>
        </li>
      `).join('')}
    </ul>
  `;
    quizQuestions.innerHTML = html;
}

// Клік кнопки
submitButton.style.display = 'none';

quizButton.addEventListener('click', () => {
    currentQuestion = 0;
    quizModal.classList.add('show');
    renderQuestion();
    quizButton.style.display = 'none';
    introquiz.style.display = 'none'
});

// Слідуюче питання при кліку
quizForm.addEventListener('click', (event) => {
    if (event.target.tagName === 'INPUT' && event.target.type === 'radio') {
        let q = quizData[currentQuestion]
        if (q.correct === parseInt(event.target.value)) {
            correctAnswers++
        }

        currentQuestion++;
        if (currentQuestion < quizData.length) {
            renderQuestion();
        } else {
            submitButton.style.display = 'block';
            quizForm.removeEventListener('click', (event));

            submitButton.addEventListener('click', () => {
            });
        }
    }
});

function openModal() {
    let modalwindow = document.getElementById("modalwindow")
    modalwindow.style["visibility"] = "visible"
}
function closeModal() {
    let modalwindow = document.getElementById("modalwindow")
    modalwindow.style["visibility"] = "hidden"
} 