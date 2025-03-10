function appendToDisplay(value) {
    let inputDisplay = document.getElementById("input-display");
    let display = document.getElementById("display");
    inputDisplay.textContent += value; // Show input expression
    display.value += value;
}

function clearDisplay() {
    document.getElementById("input-display").textContent = ""; // Clear input display
    document.getElementById("display").value = ""; // Clear result display
}

function deleteLast() {
    let inputDisplay = document.getElementById("input-display");
    let display = document.getElementById("display");
    inputDisplay.textContent = inputDisplay.textContent.slice(0, -1);
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let inputDisplay = document.getElementById("input-display");
    let display = document.getElementById("display");
    try {
        let result = eval(display.value.replace('%', '/100'));
        inputDisplay.textContent = display.value; // Keep input expression
        display.value = result; // Show calculated result
    } catch {
        display.value = "Error"; // Show error on invalid input
    }
}
