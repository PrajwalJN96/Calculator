let numbers = document.getElementsByClassName("num");
let operators = document.getElementsByClassName("operators");
let dot = document.getElementById("dot");
let result = document.getElementById("result");
let operation = document.getElementById("operation");
let inputs = [];
let number1 = "";
let number2 = "";

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", (e) => {
    if (inputs[1] == undefined) {
      number1 += e.target.innerText;
      console.log(number1);
      inputs[0] = Number(number1);
    } else {
      number2 += e.target.innerText;
      console.log(number2);
      inputs[2] = Number(number2);
    }
    console.log(inputs);

    operation.innerText = `${inputs[0] ?? ""} ${inputs[1] ?? ""} ${
      inputs[2] ?? ""
    }`;
  });
}

for (let j = 0; j < operators.length; j++) {
  operators[j].addEventListener("click", (e) => {
    if (e.target.innerText == "AC") {
      number1 = "";
      number2 = "";
      inputs = [];
      result.innerText = "";
      operation.innerText = "";
      console.log(inputs);
    }
    // else if ((e.target.innerText = "DEL")) {
    //   if (inputs[1] == undefined) {
    //     number1 = number1.slice(0, number1.length - 1);
    //     console.log("click1");
    //     console.log(number1);
    //   } else if (inputs[2] == undefined) {
    //     inputs[1] = "";
    //     console.log("click2");
    //   } else {
    //     number2 = number2.slice(0, number2.length - 1);
    //     console.log("click3");
    //   }
    // }
    else {
      inputs.push(e.target.innerText);
      operation.innerText = `${inputs[0] ?? ""} ${inputs[1] ?? ""} ${
        inputs[2] ?? ""
      }`;
    }
  });
}

equals.addEventListener("click", () => {
  let operator = inputs[1];
  switch (operator) {
    case "+":
      result.innerText = parseInt(inputs[0] + inputs[2]);
      break;
    case "-":
      result.innerText = parseInt(inputs[0] - inputs[2]);
      break;
    case "/":
      result.innerText = parseInt(inputs[0] / inputs[2]);
      break;
    case "X":
      result.innerText = parseInt(inputs[0] * inputs[2]);
      break;
  }
  number1 = "";
  number2 = "";
});
