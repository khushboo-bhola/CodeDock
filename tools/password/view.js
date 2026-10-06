const lengthInput = document.getElementById("passwordLength");
const output = document.getElementById("passwordOutput");
const generateButton = document.getElementById("generatePasswordButton");
const clearButton = document.getElementById("clearPasswordButton");

const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
    "abcdefghijklmnopqrstuvwxyz" +
    "0123456789" +
    "!@#$%^&*()_+-=[]{}";

generateButton.addEventListener("click", () => {
    const length = Number(lengthInput.value);
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(
            Math.random() * characters.length
        );
        password += characters[randomIndex];
    } 
    output.value = password;
});

clearButton.addEventListener("click", () => {
    output.value = "";
});