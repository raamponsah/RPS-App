const computerChoices = ["rock", "paper", "scissors"];

const choiceButtons = document.querySelectorAll(".choices button");
const computerText = document.querySelector("h2.bot-choice");
const humanText = document.querySelector("h2.human-choice");
const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

const overlay = document.querySelector(".overlay");
const gamedText = document.querySelector(".overlay h3");
const score = document.querySelector(".score h1");

// localStorage.setItem("score", 0);

score.innerText = parseInt(localStorage.getItem("score")) 

const timeRange = [1,2,3,4,5]
const computerThinkingText = document.createElement("span");

choiceButtons.forEach(button => {
    button.addEventListener("click", e => {
        humanText.innerText = `You selected ${e.target.id.toUpperCase()}`;
        computerText.appendChild(computerThinkingText);

        computerThinkingText.innerText = "Am thinking...🤔";
        
        setTimeout(() => {
            computerThinkingText.innerText = `I selected ${computerChoice.toUpperCase()}`;
            if(computerChoice.toLocaleLowerCase() == e.target.id.toLocaleLowerCase()){
                console.log(computerChoice.toLocaleLowerCase())
                console.log(e.target.id.toLocaleLowerCase())
                console.log("Tie")

                overlay.style.display = "flex";
                gamedText.innerText = "Tie!"
                localStorage.setItem("score", parseInt(localStorage.getItem("score")) + 1);
            }
            
            if(computerChoice.toLocaleLowerCase() == "rock" && e.target.id.toLocaleLowerCase() == "paper"){
                console.log(computerChoice.toLocaleLowerCase())
                console.log(e.target.id.toLocaleLowerCase())
                console.log("You win")
                overlay.style.display = "flex";
                gamedText.innerText = "You win"
                localStorage.setItem("score", parseInt(localStorage.getItem("score")) + 2);
            }

            if(computerChoice.toLocaleLowerCase() == "rock" && e.target.id.toLocaleLowerCase() == "scissors"){
                console.log(computerChoice.toLocaleLowerCase())
                console.log(e.target.id.toLocaleLowerCase())
                console.log("You lose")
                overlay.style.display = "flex";
                gamedText.innerText = "You lose"
                localStorage.setItem("score", parseInt(localStorage.getItem("score")) - 1);

            }

            if(computerChoice.toLocaleLowerCase() == "paper" && e.target.id.toLocaleLowerCase() == "rock"){
                console.log(computerChoice.toLocaleLowerCase())
                console.log(e.target.id.toLocaleLowerCase())
                console.log("You lose")
                overlay.style.display = "flex";
                gamedText.innerText = "You lose"
                localStorage.setItem("score", parseInt(localStorage.getItem("score")) - 1);

            }

            if(computerChoice.toLocaleLowerCase() == "paper" && e.target.id.toLocaleLowerCase() == "scissors"){
                console.log(computerChoice.toLocaleLowerCase())
                console.log(e.target.id.toLocaleLowerCase())
                console.log("You win")
                overlay.style.display = "flex";
                gamedText.innerText = "You win"
                localStorage.setItem("score", parseInt(localStorage.getItem("score")) + 2);

            }

            if(computerChoice.toLocaleLowerCase() == "scissors" && e.target.id.toLocaleLowerCase() == "rock"){
                console.log(computerChoice.toLocaleLowerCase())
                console.log(e.target.id.toLocaleLowerCase())
                console.log("You win")
                overlay.style.display = "flex";
                gamedText.innerText = "You win"
                localStorage.setItem("score", parseInt(localStorage.getItem("score")) + 2);

            }

            if(computerChoice.toLocaleLowerCase() == "scissors" && e.target.id.toLocaleLowerCase() == "paper"){
                console.log(computerChoice.toLocaleLowerCase())
                console.log(e.target.id.toLocaleLowerCase())
                console.log("You lose")
                overlay.style.display = "flex";
                gamedText.innerText = "You lose"
                localStorage.setItem("score", parseInt(localStorage.getItem("score")) -1);

            }




        }, timeRange[Math.floor(Math.random() * timeRange.length)] * 1000);

    });
});




