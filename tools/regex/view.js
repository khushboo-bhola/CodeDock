const regexInput = document.getElementById("regexInput");
const regexText = document.getElementById("regexText");

const globalFlag = document.getElementById("globalFlag");
const ignoreCaseFlag = document.getElementById("ignoreCaseFlag");
const multilineFlag = document.getElementById("multilineFlag");

const testButton = document.getElementById("testRegexButton");
const clearButton = document.getElementById("clearRegexButton");

const status = document.getElementById("regexStatus");
const matchCount = document.getElementById("matchCount");
const matchesContainer = document.getElementById("regexMatches");

testButton.addEventListener("click", () => {
    const pattern = regexInput.value;
    const text = regexText.value;

    if (!pattern) {
        status.textContent = "Enter a regular expression.";
        matchCount.textContent = "";
        matchesContainer.innerHTML = "";
        return;
    }

    let flags = "";

    if (globalFlag.checked) {
        flags += "g";
    }

    if (ignoreCaseFlag.checked) {
        flags += "i";
    }

    if (multilineFlag.checked) {
        flags += "m";
    }

    try {
        const regex = new RegExp(pattern, flags);
        const matches = text.match(regex);

        if (!matches) {
            status.textContent = "No matches found.";
            matchCount.textContent = "Matches: 0";
            matchesContainer.innerHTML = "";
            return;
        }

        status.textContent = "Regex matched successfully.";
        matchCount.textContent = `Matches: ${matches.length}`;

        matchesContainer.innerHTML = "";

        matches.forEach((match, index) => {
            const item = document.createElement("div");

            item.className = "regex-match";
            item.textContent = `${index + 1}. ${match}`;

            matchesContainer.appendChild(item);
        });
    } catch (error) {
        status.textContent = "Invalid regular expression.";
        matchCount.textContent = "";
        matchesContainer.innerHTML = "";
    }
});

clearButton.addEventListener("click", () => {
    regexInput.value = "";
    regexText.value = "";

    globalFlag.checked = false;
    ignoreCaseFlag.checked = false;
    multilineFlag.checked = false;

    status.textContent = "Enter a regex and test text.";
    matchCount.textContent = "";
    matchesContainer.innerHTML = "";
});