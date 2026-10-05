const messageInput = document.getElementById("hmacMessage");
const secretInput = document.getElementById("hmacSecret");
const algorithmInput = document.getElementById("hmacAlgorithm");
const output = document.getElementById("hmacOutput");

const generateButton = document.getElementById("generateHmacButton");
const clearButton = document.getElementById("clearHmacButton");

generateButton.addEventListener("click", async () => {
    const message = messageInput.value;
    const secret = secretInput.value;
    const algorithm = algorithmInput.value;

    if (!message || !secret) {
        output.value = "Enter both message and secret key.";
        return;
    }

    const encoder = new TextEncoder();

    const key = await crypto.subtle.importKey(
        "raw",
        encoder.encode(secret),
        {
            name: "HMAC",
            hash: algorithm
        },
        false,
        ["sign"]
    );

    const signature = await crypto.subtle.sign(
        "HMAC",
        key,
        encoder.encode(message)
    );

    const bytes = new Uint8Array(signature);

    output.value = Array.from(bytes)
        .map(byte => byte.toString(16).padStart(2, "0"))
        .join("");
});

clearButton.addEventListener("click", () => {
    messageInput.value = "";
    secretInput.value = "";
    output.value = "";
});