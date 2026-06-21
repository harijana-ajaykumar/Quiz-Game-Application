const quizData = [
{
    question: "What does HTML stand for?",
    options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Transfer Markup Language",
        "None"
    ],
    answer: "Hyper Text Markup Language"
},
{
    question: "Which language is used for styling web pages?",
    options: ["HTML","CSS","Python","Java"],
    answer: "CSS"
},
{
    question: "Which language is used for web interactivity?",
    options: ["C","Java","JavaScript","Python"],
    answer: "JavaScript"
}
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");

function loadQuestion(){
    let q = quizData[currentQuestion];

    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach(option => {
        let btn = document.createElement("button");
        btn.textContent = option;
        btn.classList.add("option");

        btn.onclick = () => {
            if(option === q.answer){
                score++;
            }
            nextQuestion();
        };

        optionsEl.appendChild(btn);
    });
}

function nextQuestion(){
    currentQuestion++;

    if(currentQuestion < quizData.length){
        loadQuestion();
    }
    else{
        document.getElementById("quiz").classList.add("hide");
        document.getElementById("result").classList.remove("hide");
        document.getElementById("score").textContent =
            score + " / " + quizData.length;
    }
}

loadQuestion();