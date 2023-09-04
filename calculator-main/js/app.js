(function () {
  "use strict";

  const btnNumberArea = document.querySelector(".app-main");
  const btnResultArea = document.querySelector(".div-result");
  const resultNumber = document.querySelector(".result");
  const btnClearNumber = document.querySelector(".operator-clear");
  const btnPlus = document.querySelector(".operator-add");
  const btnMinus = document.querySelector(".operator-minus");
  const btnDivision = document.querySelector(".operator-division");
  const btnMultiply = document.querySelector(".operator-multiply");
  const btnEqual = document.querySelector(".operator-equal");
  const btnDot = document.querySelector(".button-dot");

  function createNumberBtnsDOM(number) {
    const btnNumber = document.createElement("div");
    btnNumber.classList.add("button-number");
    btnNumber.innerText = `${number}`;
    btnNumberArea.insertBefore(btnNumber, btnResultArea);
    btnNumber.addEventListener("click", (e) => updateNumber(e.target.innerText));
  }

  for (let i = 0; i <= 9; i++) {
    createNumberBtnsDOM(i);
  }

  const updateNumber = (number) => {
    console.log(number);
    if (number === "." && resultNumber.innerText === "0") {
      resultNumber.innerText = "0.";
    }
    if (number === "." && resultNumber.innerText.includes(".")) return;
    if (resultNumber.innerText === "0") {
      resultNumber.innerText = number.toString();
    } else {
      resultNumber.innerText = resultNumber.innerText.toString() + number.toString();
    }
  };

  const clearNumber = () => {
    resultNumber.innerText = "0";
  };

  const btnAdd = (add) => {
    console.log(add);
    const resultNumberLastValue = resultNumber.innerText[resultNumber.innerText.length - 1];
    if (resultNumberLastValue === ("." || "+" || "-" || "/")) return;
    resultNumber.innerText = resultNumber.innerText.toString() + add.toString();
  };

  btnClearNumber.addEventListener("click", clearNumber);
  btnDot.addEventListener("click", (e) => updateNumber(e.target.innerText));
  btnPlus.addEventListener("click", (e) => btnAdd(e.target.innerText));
})();
