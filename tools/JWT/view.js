const input = document.getElementById("jwtInput");
const headerOutput = document.getElementById("jwtHeader");
const payloadOutput = document.getElementById("jwtPayload");

const decodeButton = document.getElementById("decodeJwtButton");
const clearButton = document.getElementById("clearJwtButton");

decodeButton.addEventListener("click", () => {
    try {
        const parts = input.value.trim().split(".");

        if (parts.length !== 3) {
            throw new Error("Invalid JWT");
        }

        const header = JSON.parse(atob(parts[0]));
        const payload = JSON.parse(atob(parts[1]));

        headerOutput.value = JSON.stringify(header, null, 4);
        payloadOutput.value = JSON.stringify(payload, null, 4);

    } catch {
        headerOutput.value = "Invalid JWT.";
        payloadOutput.value = "Unable to decode token.";
    }
});

clearButton.addEventListener("click", () => {
    input.value = "";
    headerOutput.value = "";
    payloadOutput.value = "";
});