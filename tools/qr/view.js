const input = document.getElementById("qrInput");
const output = document.getElementById("qrOutput");
const generateButton = document.getElementById("generateQrButton");
const clearButton = document.getElementById("clearQrButton");

generateButton.addEventListener("click", () => {
    const text = input.value.trim();
    output.innerHTML = "";
    if (text === "") {
        output.textContent = "Please enter some text or a URL.";
        return;
    }

    new QRCode(output, {
        text: text,
        width: 200,
        height: 200
    });
});

clearButton.addEventListener("click", () => {
    input.value = "";
    output.innerHTML = "";
});