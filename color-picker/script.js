const colorInput = document.getElementById("colorInput");
const colorCode = document.getElementById("colorCode");
const colorDisplay = document.getElementById("colorDisplay");
const copyButton = document.getElementById("copyButton");

function getTextColor(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness > 128 ? "#000000" : "#ffffff";
}

let selectedColor = colorInput.value;

colorInput.addEventListener("input", function (event) {
    selectedColor = event.target.value;

    colorCode.textContent = selectedColor;
    colorDisplay.style.backgroundColor = selectedColor;
    copyButton.style.backgroundColor = selectedColor
    copyButton.style.color = getTextColor(selectedColor)
});

copyButton.addEventListener("click", function () {
    navigator.clipboard.writeText(selectedColor);
});
