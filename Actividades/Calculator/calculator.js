var valueX;
var valueY;
var result;

function calcularArea() {
  var elementX = document.getElementById("valueX");
  var elementY = document.getElementById("valueY");
  var stringToPrint = "";
  let operations = ["sum", "sub", "times", "div", "squared", "pow", "sqrt"];

  valueX = elementX.value;
  valueY = elementY.value;

  console.log(valueX);
  console.log(valueY);

  result = valueX * valueY;

  var areaElement = document.getElementById("result");
  operations.forEach(function(element, index, array) {
    switch(element) {
      case "sum":
        result = parseInt(valueX) + parseInt(valueY);
        stringToPrint += "x + y = " + result + "<br>";
        break;
      case "sub":
        result = valueX - valueY;
        stringToPrint += "x - y = " + result + "<br>";
        break;
      case "times":
        result = valueX * valueY;
        stringToPrint += "x * y = " + result + "<br>";
        break;
      case "div":
        result = valueX / valueY;
        stringToPrint += "x / y = " + result + "<br>";
        break;
      case "squared":
        result = Math.pow(valueX, 2);
        stringToPrint += "x ^ 2 = " + result + "<br>";
        break;
      case "pow":
        result = Math.pow(valueX, valueY);
        stringToPrint += "x ^ y = " + result + "<br>";
        break;
      case "sqrt":
        result = Math.sqrt(valueX);
        stringToPrint += "sqrt(x) = " + result + "<br>";
        break;
    }
  });
  areaElement.innerHTML = stringToPrint;
}