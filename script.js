const questions = [
    {
        question: ['2023年のWBC準決勝で、', 'サヨナラヒットを打った選手は？'],
        choices: ['村上宗隆', '大谷翔平'],
        correctAnswer: '村上宗隆'
    },
    {
        question: ['ジブリ映画「となりのトトロ」が', '劇場公開されたのは？'],
        choices: ['平成', '昭和'],
        correctAnswer: '昭和'
    }
];

let currentQuestionIndex = 0;

const titleScreen = document.getElementById('title-screen');
const quizScreen = document.getElementById('quiz-screen');
const startBtn = document.getElementById('start-btn');
const questionLines = document.querySelectorAll('.question-line');
const choice1Btn = document.getElementById('choice1');
const choice2Btn = document.getElementById('choice2');
const resultText = document.getElementById('result-text');
const nextArea = document.getElementById('next-area');

startBtn.addEventListener('click', startQuiz);
choice1Btn.addEventListener('click', () => checkAnswer(0));
choice2Btn.addEventListener('click', () => checkAnswer(1));

function startQuiz() {
    titleScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionLines[0].textContent = currentQuestion.question[0];
    questionLines[1].textContent = currentQuestion.question[1];
    choice1Btn.textContent = currentQuestion.choices[0];
    choice2Btn.textContent = currentQuestion.choices[1];
    
    // 初期状態のスタイルをリセット
    choice1Btn.style.backgroundColor = '#4DD0E1';
    choice2Btn.style.backgroundColor = '#4DD0E1';
    
    resultText.textContent = '';
    nextArea.textContent = '';
}

function checkAnswer(choiceIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedChoice = currentQuestion.choices[choiceIndex];
    const correctAnswer = currentQuestion.correctAnswer;

    // 選択肢のボタンの色を変更
    if (selectedChoice === correctAnswer) {
        resultText.textContent = '正解です！';
        resultText.className = 'correct';
        
        // 正解の選択肢はそのまま、不正解の選択肢を薄いグレーに
        if (choiceIndex === 0) {
            choice1Btn.style.backgroundColor = '#4DD0E1';
            choice2Btn.style.backgroundColor = '#CCCCCC';
        } else {
            choice1Btn.style.backgroundColor = '#CCCCCC';
            choice2Btn.style.backgroundColor = '#4DD0E1';
        }
    } else {
        resultText.textContent = '不正解です';
        resultText.className = 'incorrect';
        
        // 不正解の選択肢を薄いグレーに
        if (choiceIndex === 0) {
            choice1Btn.style.backgroundColor = '#CCCCCC';
            choice2Btn.style.backgroundColor = '#4DD0E1';
        } else {
            choice1Btn.style.backgroundColor = '#4DD0E1';
            choice2Btn.style.backgroundColor = '#CCCCCC';
        }
    }

    if (currentQuestionIndex === questions.length - 1) {
        nextArea.textContent = 'おつかれさまでした！';
    } else {
        const nextButton = document.createElement('button');
        nextButton.textContent = '次の問題へ';
        nextButton.addEventListener('click', nextQuestion);
        nextArea.appendChild(nextButton);
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}