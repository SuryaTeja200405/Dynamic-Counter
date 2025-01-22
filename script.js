let counterElement = document.getElementById("counterValue");

function onIncrement() {
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    if (updatedCounterValue > 0) {
        counterElement.style.color = "#0d5731";
    } else if (updatedCounterValue < 0) {
        counterElement.style.color = "#4a0a18";
    } else {
        counterElement.style.color = "#0a1bad";
    }
    counterElement.textContent = updatedCounterValue;
    document.getElementById("icrementbutton").style.backgroundColor = "#54f070";
    document.getElementById("decrementbutton").style.backgroundColor = "#f1f5f8";
    document.getElementById("resetbutton").style.backgroundColor = "#f1f5f8";
    document.getElementById("counterValue1").textContent = "Increased Value";

}

function onDecrement() {
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) - 1;
    if (updatedCounterValue > 0) {
        counterElement.style.color = "#0d5731";
    } else if (updatedCounterValue < 0) {
        counterElement.style.color = "#4a0a18";
    } else {
        counterElement.style.color = "#0a1bad";
    }
    counterElement.textContent = updatedCounterValue;
    document.getElementById("icrementbutton").style.backgroundColor = "#f1f5f8";
    document.getElementById("decrementbutton").style.backgroundColor = "#ab0921";
    document.getElementById("resetbutton").style.backgroundColor = "#f1f5f8";
    document.getElementById("counterValue1").textContent = "Decreased Value";
}

function onReset() {
    let counterValue = 0;
    counterElement.textContent = counterValue;
    counterElement.style.color = "#0a1bad";
    document.getElementById("icrementbutton").style.backgroundColor = "#f1f5f8";
    document.getElementById("decrementbutton").style.backgroundColor = "#f1f5f8";
    document.getElementById("resetbutton").style.backgroundColor = "#4a58cf";
    document.getElementById("counterValue1").textContent = "Reset Value";
}