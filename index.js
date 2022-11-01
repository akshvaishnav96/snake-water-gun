
let str = ["Snake", "gun", "water"]
let chances = 0;
let userpoints = 0;
let computerpoints = 0;
let input = "";
let name = prompt("please enter your name to start the game")
let btn = document.getElementById("btn")
btn.addEventListener("click", () => {

  if (chances == 5) {
    let gameoverarea = document.getElementsByClassName("mb-3")[0]
    gameoverarea.innerHTML = ("Game Over")
    gameoverarea.style.color = "#6c5252";
    gameoverarea.style.fontSize = "6rem";
    gameoverarea.style.textShadow = "2px 2px 5px black";

    let result = () => {
      resultcont = document.getElementsByClassName("result-cont")[0];
      resultcont.innerHTML = ("Computer Total Points : " + computerpoints) + "<br>" + `${name} Total Points : ` + userpoints;

      if (userpoints > computerpoints) {
        let resultArea = document.getElementById("result");
        resultArea.innerHTML = (`Winner Of This game is ${name}`)
        resultArea.style.color = "rgb(72 14 14)";
        resultArea.style.fontSize = "3rem";
        resultArea.style.textShadow = "2px 2px 5px black";
      }
      else if (userpoints < computerpoints) {
        resultArea = document.getElementById("result");
        resultArea.innerHTML = (`Winner of this game is Computer`)
        resultArea.style.color = "rgb(72 14 14)";
        resultArea.style.fontSize = "3rem";
        resultArea.style.textShadow = "2px 2px 5px black";
      }
      else {
        let resultArea = document.getElementById("result");
        resultArea.innerHTML = ("This Game is Draw")
        resultArea.style.color = "rgb(72 14 14)";
        resultArea.style.fontSize = "3rem";
        resultArea.style.textShadow = "2px 2px 5px black";
      }
    }
    result();
  }

  else {
    let inputarea = document.getElementById("exampleFormControlInput1")
    let userInput = inputarea.value;
    chances = chances + 1;
    userInput = userInput.toUpperCase();
    console.log(`${name} input : ` + userInput)

    let randomnum = str[Math.floor(Math.random() * str.length)]
    randomnum = randomnum.toUpperCase();
    resultcont = document.getElementsByClassName("result-cont")[0];
    resultcont.innerHTML = `${name} Got : ` + userInput + `<br>` + `Computer Got :` + randomnum

    if (userInput == randomnum) {
      userpoints = userpoints + 1;
      computerpoints = computerpoints + 1;
      let resultArea = document.getElementById("result");
      resultArea.innerText = `Its a Draw Both ${name} & Computer Got 1 Point`;
      inputarea.value = input;
    }

    else if (userInput == "SNAKE" && randomnum == "GUN") {
      computerpoints = computerpoints + 1;
      resultArea = document.getElementById("result");
      resultArea.innerText = `computer wins computer winnings :${computerpoints}`
      inputarea.value = input;


    }
    else if (userInput == "SNAKE" && randomnum == "WATER") {
      userpoints = userpoints + 1;
      resultArea = document.getElementById("result");
      resultArea.innerText = `${name} wins ${name} winnings :${userpoints}`
      inputarea.value = input;

    }
    else if (userInput == "GUN" && randomnum == "SNAKE") {
      userpoints = userpoints + 1;
      resultArea = document.getElementById("result");
      resultArea.innerText = `${name} wins ${name} winnings :${userpoints}`
      inputarea.value = input;

    }
    else if (userInput == "GUN" && randomnum == "WATER") {
      Computerpoints = computerpoints + 1;
      resultArea = document.getElementById("result");
      resultArea.innerText = `computer wins computer winnings :${computerpoints}`
      inputarea.value = input;

    }
    else if (userInput == "WATER" && randomnum == "GUN") {
      userpoints = userpoints + 1;
      resultArea = document.getElementById("result");
      resultArea.innerText = `${name} wins ${name} winnings :${userpoints}`
      inputarea.value = input;

    }
    else if (userInput == "WATER" && randomnum == "SNAKE") {
      Computerpoints = computerpoints + 1;
      resultArea = document.getElementById("result");
      resultArea.innerText = (`computer wins computer winnings :${computerpoints}`)
      inputarea.value = input;

    }
    else {
      userpoints = userpoints - 1;
      resultArea = document.getElementById("result");
      resultArea.innerText = (`Sorry ${name} please enter Valid Input You loose One Point`)
      inputarea.value = input;


    }
  }

})







