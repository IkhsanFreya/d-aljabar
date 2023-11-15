document.addEventListener("DOMContentLoaded", function () {
  const expressionInput = document.getElementById("expression");
  const calculateButton = document.getElementById("Kalkulator");
  const resultDiv = document.getElementById("result");

  calculateButton.addEventListener("click", function () {
    const expression = expressionInput.value;

    try {
      const derivative = math.derivative(expression, "x");
      resultDiv.innerHTML = `Turunan dari ${expression} adalah: ${derivative.toString()}`;
    } catch (error) {
      resultDiv.innerHTML =
        "Terjadi kesalahan. Pastikan ekspresi matematika valid.";
    }
  });
});
