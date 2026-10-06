const input = document.getElementById(
    "base64Input"
);
const output = document.getElementById(
    "base64Output"
);
const encodeButton = document.getElementById(
    "encodeButton"
);
const decodeButton = document.getElementById(
    "decodeButton"
);
const clearButton = document.getElementById(
    "clearButton"
);

// Encode //

encodeButton.addEventListener("click",() => {
        try {
            output.value = btoa(input.value);
        } catch {
            output.value =
                "Unable to encode this text.";
        }
    }
);

// Decode //

decodeButton.addEventListener("click",() => {
        try {
            output.value = atob(input.value);
        } catch {
            output.value =
                "Invalid Base64.";
        }
    }
);

// Clear //

clearButton.addEventListener("click",() => {
        input.value = "";
        output.value = "";
    }
);