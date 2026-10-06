const input = document.getElementById("urlInput");
const output = document.getElementById("urlOutput");
const encodeButton = document.getElementById("encodeUrlButton");
const decodeButton = document.getElementById("decodeUrlButton");
const clearButton = document.getElementById("clearUrlButton");

encodeButton.addEventListener("click", () => {
    output.value = encodeURIComponent(input.value);
});

decodeButton.addEventListener("click", () => {
    try {
        output.value = decodeURIComponent(input.value);
    } catch {
        output.value = "Invalid encoded URL.";
    }
});

clearButton.addEventListener("click", () => {
    input.value = "";
    output.value = "";
});