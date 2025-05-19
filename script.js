const display = document.getElementById('display');

function appendSymbol(symbol) {
  display.value += symbol;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    // Use eval carefully - this is a simple example
    const result = eval(display.value);
    display.value = result;
  } catch (e) {
    display.value = 'Error';
  }
}
