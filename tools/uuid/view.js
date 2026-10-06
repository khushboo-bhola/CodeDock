const output = document.getElementById("uuidOutput");
const generateButton = document.getElementById("generateUuidButton");
const clearButton = document.getElementById("clearUuidButton");

generateButton.addEventListener("click", () => {
    output.value = crypto.randomUUID();
});

clearButton.addEventListener("click", () => {
    output.value = "";
});