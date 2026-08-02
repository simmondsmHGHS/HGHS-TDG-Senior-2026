/* Old old flashcard code 
document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        { question: "What is the A?", answer: "A"},
        { question: "What is the B?", answer: "B"},
        { question: "What is the C?", answer: "C"},
    ];

    let currentCard = 0;

    const flashcardElement = document.getElementById('flashcard');
    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');

    function displayCard() {
        questionElement.textContent = flashcards[currentCard].question;
        answerElement.textContent = flashcards[currentCard].answer;
        flashcardElement.classList.remove('is-flipped');
    }

    document.getElementById('flip-card').addEventListener('click', () => {
        flashcardElement.classList.toggle('is-flipped');
    });

    document.getElementById('next-card').addEventListener('click', () => {
        currentCard = (currentCard + 1) % flashcards.length;
        displayCard();
    });

    displayCard();
});
*/


/* old flashcard code 
const container = document.querySelector(".container");
const addQuestionCard = document.getElementById("add-question-card");
const cardButton = document.getElementById("save-btn");
const answer = document.getElementById("answer");
const errorMessage = document.getElementById("error");
const addQuestion = document.getElementById("add-flashcard");
const closeBtn = document.getElementById("close-btn");
let editBool = false;

addQuestion.addEventListener("click", () => {
    container.classList.add("hide");
    addQuestion.value = "";
    answer.value = "";
    addQuestionCard.classList.remove("hide");
})

closeBtn.addEventListener (
    "click",
    (submitQuestion = () => {
        editBool = false;
        tempQuestion = question.value.trim();
        tempAnswer = answer.value.trim();
        if(!tempQuestion || tempAnswer){
            errorMessage.classList.remove("hide");
        }else{
            container.classList.remove("hide");
            errorMessage.classList.add("hide");
            viewlist();
            question.value = "";
            answer.value = "";
        }
    })
);

function viewlist(){
    var lisrCard = document.getElementsByClassName("card-list-container");
    var idv =document.createdElement("div");
    div.classList.add("card");
    div.innerHTML +=
    <p class="question-div">${question.value}</p>
    var displayAnswer = document.createdElement("p");
    displayAnswer,classList.add("answer-div", "hide");
    displayAnswer.innerText = answer.value;

    var link = document.createElement("a");
    link.setAttribute("href", "#");
    link.setAttribute("class", "show-hide-btn");
    link.innerHTML = "show/hide";
    link.addEventListener("click", () => {
        displayAnswer.classList.toggle("hide");
    })

    div.appendChild(link);
    div.appendChild (displayAnswer);

    let buttonCon = document.createdElement("div");
    buttonCon.classList.add("buttons-con");
    var editButton = document.createdElement("button");
    editButton.setAttribute("class", "edit");
    editButton.innerHTML = '<i class="fa-solid fa-pen-tosquare"></i>'  ??? 
    editButton.addEventListener("click", () => {
        editBool = true;
        modifyElement(editButton, true);
        addQuestionCard.classList.remove("hide");
    })
    buttonCon.appendChild(deleteButton);

    div.appendChild(buttonCon);
    listCard[0].appendChild(div);
    hideQuestion();

    const modifyElement = (element, edit = false) => {
        let parentDiv =  element.parentElement.parentElement;
        let parentQuestion = parentDiv.querySelector(".answer-div").innerText;
        if(edit) {
            answer.value = parentAns;
            question.value = parentQuestion;
            disableButtons(true);
        }
    }
    parentDiv.remove();
};

const disableButtons = (value) => {
    let editButton = document.getElementsByClassName("edit");
    Array.from(editButton).forEach((element) => {
        element.diabled = value;
    })
}
*/

/* navbar responsive menu*/
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

/* w3school navbar test */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* image gallery 
document.querySelectorAll('.image-container img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});
document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
}
    */