const flashcards = {
  reactions: [
    { question: "What is a chemical reaction?", answer: "A process where substances combine to form a new substance with different properties." },
    { question: "Give an example of a common chemical reaction.", answer: "Combustion of fuel to produce heat, water, and carbon dioxide." },
  ],
  reactionRate: [
    { question: "What is the rate of a reaction?", answer: "The amount of reactants converted into products per unit time." },
    { question: "How does temperature affect reaction rate?", answer: "Increasing temperature speeds up particles, causing more collisions and increasing the reaction rate." },
  ],
  catalysts: [
    { question: "What is a catalyst?", answer: "A substance that speeds up a reaction without being consumed." },
    { question: "Give an example of a biological catalyst.", answer: "Enzymes, like amylase in saliva, which help speed up biological reactions." },
  ],
  hydrocarbons: [
    { question: "What is a hydrocarbon?", answer: "An organic compound made of hydrogen and carbon atoms." },
    { question: "Name the first 3 alkanes.", answer: "Methane (CH4), Ethane (C2H6), and Propane (C3H8)." },
  ],
  galvanicCells: [
    { question: "What is a galvanic cell?", answer: "A cell that converts chemical energy into electrical energy through redox reactions." },
    { question: "What happens at the anode in a galvanic cell?", answer: "Oxidation occurs, where electrons are lost." },
  ]
};

let currentCategory = 'reactions';
let currentIndex = 0;

function showCategory(category) {
  currentCategory = category;
  currentIndex = 0;
  displayFlashcard();
}

function displayFlashcard() {
  const flashcard = flashcards[currentCategory][currentIndex];
  document.getElementById("flashcard-question").textContent = flashcard.question;
  document.getElementById("flashcard-answer").textContent = flashcard.answer;
  document.getElementById("flashcard-answer").style.display = "none";
}

function flipFlashcard() {
  const answer = document.getElementById("flashcard-answer");
  answer.style.display = answer.style.display === "none" ? "block" : "none";
}

function nextFlashcard() {
  currentIndex = (currentIndex + 1) % flashcards[currentCategory].length;
  displayFlashcard();
}

// Initialize with the first flashcard
displayFlashcard();
