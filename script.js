// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultTitle = document.getElementById("result-title");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");
const bgMusic = document.getElementById("bg-music");

// Questions
const quizQuestions = [
    {
        question: "Who is the first boss most players face in Dark Souls?",
        answers: [
            { text: "Taurus Demon", correct: false },
            { text: "Asylum Demon", correct: true },
            { text: "Bell Gargoyles", correct: false },
            { text: "Capra Demon", correct: false }
        ]
    },
    {
        question: "What is the name of Solaire of Astora's signature gesture?",
        answers: [
            { text: "Praise the Sun", correct: true },
            { text: "Well, what is it?", correct: false },
            { text: "My thanks", correct: false },
            { text: "Hurrah for the sun!", correct: false }
        ]
    },
    {
        question: "Who was the final Lord of Cinder fought in Dark Souls III?",
        answers: [
            { text: "Aldrich, Devourer of Gods", correct: false },
            { text: "Yhorm the Giant", correct: false },
            { text: "Soul of Cinder", correct: true },
            { text: "Lothric, Younger Prince", correct: false }
        ]
    },
    {
        question: "What item does the player use to kindle bonfires and increase Estus uses?",
        answers: [
            { text: "Humanity", correct: true },
            { text: "Titanite Shard", correct: false },
            { text: "Fire Keeper Soul", correct: false },
            { text: "Ember", correct: false }
        ]
    },
    {
        question: "Which character is known as the 'Abysswalker'?",
        answers: [
            { text: "Ciaran", correct: false },
            { text: "Gough", correct: false },
            { text: "Artorias", correct: true },
            { text: "Ornstein", correct: false }
        ]
    },
    {
        question: "In Dark Souls II, what is the name of the curse that turns people into undead?",
        answers: [
            { text: "The Darksign", correct: false },
            { text: "The Curse of the Undead", correct: false },
            { text: "Hollowing", correct: true },
            { text: "The Abyss", correct: false }
        ]
    },
    {
        question: "Who is the Fire Keeper in Firelink Shrine in Dark Souls III?",
        answers: [
            { text: "Anastacia of Astora", correct: false },
            { text: "The Fire Keeper (unnamed)", correct: true },
            { text: "Quelaag's Sister", correct: false },
            { text: "Irina of Carim", correct: false }
        ]
    },
    {
        question: "What is the true name of the 'Lord of Sunlight'?",
        answers: [
            { text: "Gwyn", correct: true },
            { text: "Nito", correct: false },
            { text: "Seath", correct: false },
            { text: "The Witch of Izalith", correct: false }
        ]
    },
    {
        question: "Which boss is fought in the Painted World of Ariamis?",
        answers: [
            { text: "Crossbreed Priscilla", correct: true },
            { text: "Dark Sun Gwyndolin", correct: false },
            { text: "Four Kings", correct: false },
            { text: "Seath the Scaleless", correct: false }
        ]
    },
    {
        question: "What does the player become after linking the First Flame in the 'Link the Fire' ending?",
        answers: [
            { text: "A Lord of Cinder", correct: true },
            { text: "A Hollow", correct: false },
            { text: "The Dark Lord", correct: false },
            { text: "A Fire Keeper", correct: false }
        ]
    },
    {
        question: "Who is the father of Gwynevere and Gwyndolin?",
        answers: [
            { text: "Nito", correct: false },
            { text: "Gwyn", correct: true },
            { text: "Seath the Scaleless", correct: false },
            { text: "The Nameless King", correct: false }
        ]
    },
    {
        question: "What is the name of the giant blacksmith in Anor Londo?",
        answers: [
            { text: "Andre of Astora", correct: false },
            { text: "Giant Blacksmith", correct: true },
            { text: "Vamos", correct: false },
            { text: "Rickert of Vinheim", correct: false }
        ]
    },
    {
        question: "In Dark Souls III, which covenant is associated with the 'Blue Sentinels' and 'Blades of the Darkmoon'?",
        answers: [
            { text: "Warriors of Sunlight", correct: false },
            { text: "Aldrich Faithful", correct: false },
            { text: "Darkmoon / Blue Sentinels", correct: true },
            { text: "Mound-makers", correct: false }
        ]
    },
    {
        question: "Who was the primordial serpent that encouraged the player to seek the Dark Lord ending?",
        answers: [
            { text: "Frampt", correct: false },
            { text: "Kaathe", correct: true },
            { text: "The Everlasting Dragon", correct: false },
            { text: "Seath", correct: false }
        ]
    },
    {
        question: "What is the name of the area where you fight the Capra Demon?",
        answers: [
            { text: "Undead Burg", correct: false },
            { text: "The Depths", correct: false },
            { text: "Lower Undead Burg", correct: true },
            { text: "Blighttown", correct: false }
        ]
    },
    {
        question: "Which character says 'Don't you dare go Hollow'?",
        answers: [
            { text: "Solaire of Astora", correct: false },
            { text: "Crestfallen Warrior", correct: false },
            { text: "Siegmeyer of Catarina", correct: false },
            { text: "Laurentius of the Great Swamp", correct: true }
        ]
    },
    {
        question: "Who is the final boss of the Artorias of the Abyss DLC?",
        answers: [
            { text: "Knight Artorias", correct: false },
            { text: "Manus, Father of the Abyss", correct: true },
            { text: "Kalameet", correct: false },
            { text: "Sanctuary Guardian", correct: false }
        ]
    },
    {
        question: "What item is required to enter the DLC areas in Dark Souls (Prepare to Die Edition / Remastered)?",
        answers: [
            { text: "Lordvessel", correct: false },
            { text: "Broken Pendant", correct: true },
            { text: "Peculiar Doll", correct: false },
            { text: "Key to the Seal", correct: false }
        ]
    },
    {
        question: "In Dark Souls II, who is the true final boss of the Crown of the Ivory King DLC?",
        answers: [
            { text: "Burnt Ivory King", correct: true },
            { text: "Aava, the King's Pet", correct: false },
            { text: "Lud and Zallen", correct: false },
            { text: "Alsanna, Silent Oracle", correct: false }
        ]
    },
    {
        question: "What is the name of the sword that was once wielded by Knight Artorias?",
        answers: [
            { text: "Greatsword of Artorias", correct: true },
            { text: "Abyss Greatsword", correct: false },
            { text: "Cursed Greatsword of Artorias", correct: false },
            { text: "Both A and C are correct names used", correct: false }
        ]
    },
    {
        question: "Who is the mother of Priscilla?",
        answers: [
            { text: "Gwynevere", correct: false },
            { text: "The Witch of Izalith", correct: false },
            { text: "It is never explicitly stated", correct: true },
            { text: "Quelaag", correct: false }
        ]
    },
    {
        question: "What does the Darksign do?",
        answers: [
            { text: "Marks the bearer as undead and causes hollowing upon death", correct: true },
            { text: "Allows the player to summon phantoms", correct: false },
            { text: "Increases the power of pyromancies", correct: false },
            { text: "Opens the way to the Abyss", correct: false }
        ]
    },
    {
        question: "Which boss is known as the 'Old Demon King' in Dark Souls III?",
        answers: [
            { text: "A surviving fragment of the Witch of Izalith's chaos demons", correct: true },
            { text: "A reincarnation of the Capra Demon", correct: false },
            { text: "The brother of the Asylum Demon", correct: false },
            { text: "A Lord of Cinder who failed", correct: false }
        ]
    },
    {
        question: "What is the name of the place where the First Flame was first linked?",
        answers: [
            { text: "Firelink Shrine", correct: false },
            { text: "The Kiln of the First Flame", correct: true },
            { text: "Anor Londo", correct: false },
            { text: "The Ringed City", correct: false }
        ]
    },
    {
        question: "Who was the 'Nameless King' originally?",
        answers: [
            { text: "Gwyn's firstborn, who was stripped of his name", correct: true },
            { text: "A dragon who sided with the gods", correct: false },
            { text: "The true identity of Ornstein", correct: false },
            { text: "An ancient Lord of Cinder", correct: false }
        ]
    },
    {
        question: "In Dark Souls III, what is the purpose of the Lords of Cinder?",
        answers: [
            { text: "To be sacrificed again to link the fire", correct: true },
            { text: "To rule over Lothric", correct: false },
            { text: "To guard the Painted World", correct: false },
            { text: "To hunt the Ashen Ones", correct: false }
        ]
    },
    {
        question: "What is the name of Siegmeyer's daughter?",
        answers: [
            { text: "Sieglinde of Catarina", correct: true },
            { text: "Siegbrau", correct: false },
            { text: "Onion Knightess", correct: false },
            { text: "Astora", correct: false }
        ]
    },
    {
        question: "Which character gives you the 'Pyromancy Flame' early in Dark Souls?",
        answers: [
            { text: "Laurentius of the Great Swamp", correct: true },
            { text: "Eingyi", correct: false },
            { text: "Quelana of Izalith", correct: false },
            { text: "The Fair Lady", correct: false }
        ]
    },
    {
        question: "What is the final area of the Ringed City DLC in Dark Souls III?",
        answers: [
            { text: "The Dreg Heap", correct: false },
            { text: "The Ringed City", correct: false },
            { text: "Filianore's Rest / The End of the World", correct: true },
            { text: "Earthen Peak", correct: false }
        ]
    },
    {
        question: "Who is the true identity of the 'Soul of Cinder'?",
        answers: [
            { text: "A manifestation of every Lord of Cinder who linked the fire", correct: true },
            { text: "Gwyn reborn", correct: false },
            { text: "The First Flame itself given form", correct: false },
            { text: "The Ashen One's future self", correct: false }
        ]
    },
    {
        question: "What happens if you offer a Lord Soul to Frampt?",
        answers: [
            { text: "He takes you to the Kiln of the First Flame", correct: true },
            { text: "He opens the way to the Abyss", correct: false },
            { text: "He gives you the Dark Lord ending", correct: false },
            { text: "He becomes hostile", correct: false }
        ]
    },
    {
        question: "Which of these is NOT one of the four Lord Souls?",
        answers: [
            { text: "Soul of Gwyn", correct: false },
            { text: "Soul of Nito", correct: false },
            { text: "Soul of Seath", correct: true },
            { text: "Soul of the Bed of Chaos", correct: false }
        ]
    },
    {
        question: "What is the name of the covenant that Solaire is associated with?",
        answers: [
            { text: "Warriors of Sunlight", correct: true },
            { text: "Blade of the Darkmoon", correct: false },
            { text: "Forest Hunter", correct: false },
            { text: "Gravelord Servant", correct: false }
        ]
    },
    {
        question: "In Dark Souls, what does the 'Age of Dark' represent?",
        answers: [
            { text: "The natural end of the Age of Fire, ruled by humans/Dark", correct: true },
            { text: "The return of the dragons", correct: false },
            { text: "The complete hollowing of all beings", correct: false },
            { text: "The destruction of the First Flame", correct: false }
        ]
    },
    {
        question: "Who is the final boss of Dark Souls II's main game (Scholar of the First Sin / vanilla)?",
        answers: [
            { text: "Nashandra", correct: true },
            { text: "Aldia, Scholar of the First Sin", correct: false },
            { text: "The Rotten", correct: false },
            { text: "Vendrick", correct: false }
        ]
    }
];

// State
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// Event Listeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

// Functions
function startQuiz() {
    // Try to play music when added
    if (bgMusic) {
        bgMusic.volume = 0.4;
        bgMusic.play().catch(() => {
            // Autoplay blocked — ignore
        });
    }

    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = 0;

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion();
}

function showQuestion() {
    answersDisabled = false;

    const currentQuestion = quizQuestions[currentQuestionIndex];

    currentQuestionSpan.textContent = currentQuestionIndex + 1;

    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
    progressBar.style.width = progressPercent + "%";

    questionText.textContent = currentQuestion.question;

    answersContainer.innerHTML = "";

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answer-btn");
        button.dataset.correct = answer.correct;

        button.addEventListener("click", selectAnswer);
        answersContainer.appendChild(button);
    });
}

function selectAnswer(event) {
    if (answersDisabled) return;
    answersDisabled = true;

    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    Array.from(answersContainer.children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        } else if (button === selectedButton) {
            button.classList.add("incorrect");
        }
        button.disabled = true;
    });

    if (isCorrect) {
        score++;
        scoreSpan.textContent = score;
    }

    setTimeout(() => {
        currentQuestionIndex++;

        if (currentQuestionIndex < quizQuestions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1100);
}

function showResults() {
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");

    progressBar.style.width = "100%";
    finalScoreSpan.textContent = score;

    const percentage = (score / quizQuestions.length) * 100;

    resultScreen.classList.remove("you-died");

    if (percentage >= 90) {
        resultTitle.textContent = "Lord of Cinder";
        resultMessage.textContent = "You have linked the fire. The Age of Fire continues... for now.";
    } else if (percentage >= 75) {
        resultTitle.textContent = "Bearer of the Curse";
        resultMessage.textContent = "You walk the path of the undead with purpose. The fire yet flickers.";
    } else if (percentage >= 60) {
        resultTitle.textContent = "Unkindled One";
        resultMessage.textContent = "Ash seeks embers. Your journey is far from over.";
    } else if (percentage >= 40) {
        resultTitle.textContent = "Hollow";
        resultMessage.textContent = "The darkness seeps in. Do not go Hollow...";
    } else {
        resultScreen.classList.add("you-died");
        resultTitle.textContent = "YOU DIED";
        resultMessage.textContent = "The fire fades, and so do you.";
    }
}

function restartQuiz() {
    resultScreen.classList.remove("active");
    startQuiz();
}
