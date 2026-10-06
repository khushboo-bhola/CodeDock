const input = document.getElementById("timestampInput");
const output = document.getElementById("timestampOutput");
const timestampToDateButton =
    document.getElementById("timestampToDateButton");
const dateToTimestampButton =
    document.getElementById("dateToTimestampButton");
const currentTimestampButton =
    document.getElementById("currentTimestampButton");
const clearButton =
    document.getElementById("clearTimestampButton");
  

timestampToDateButton.addEventListener("click", () => {
    const value = input.value.trim();
    if (!value || isNaN(value)) {
        output.value = "Enter a valid Unix timestamp.";
        return;
    }
    const timestamp = Number(value);
    const date = new Date(
        timestamp < 10000000000
            ? timestamp * 1000
            : timestamp
    );
    if (isNaN(date.getTime())) {
        output.value = "Invalid timestamp.";
        return;
    }
    output.value = date.toLocaleString();
});


dateToTimestampButton.addEventListener("click", () => {
    const value = input.value.trim();
    if (!value) {
        output.value = "Enter a date.";
        return;
    }
    const date = new Date(value);
    if (isNaN(date.getTime())) {
        output.value = "Invalid date.";
        return;
    }
    output.value = Math.floor(
        date.getTime() / 1000
    );
});


currentTimestampButton.addEventListener("click", () => {
    const timestamp = Math.floor(
        Date.now() / 1000
    );
    input.value = timestamp;
    output.value = new Date(
        timestamp * 1000
    ).toLocaleString();
});


clearButton.addEventListener("click", () => {
    input.value = "";
    output.value = "";
});