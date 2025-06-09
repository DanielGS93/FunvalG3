const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let current = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      current = "";
    } else if (value === "=") {
      try {
        // Reemplaza "x" por "*", evalúa la operación
        const expression = current.replace(/x/g, "*");
        current = eval(expression).toString();
      } catch {
        current = "Error";
      }
    } else {
      current += value;
    }

    display.textContent = current || "0";
  });
});
