const minuteInput = document.getElementById("cronMinute");
const hourInput = document.getElementById("cronHour");
const dayInput = document.getElementById("cronDay");
const monthInput = document.getElementById("cronMonth");
const weekdayInput = document.getElementById("cronWeekday");

const output = document.getElementById("cronOutput");
const description = document.getElementById("cronDescription");

const generateButton = document.getElementById("generateCronButton");
const clearButton = document.getElementById("clearCronButton");

generateButton.addEventListener("click", () => {
    const minute = minuteInput.value;
    const hour = hourInput.value;
    const day = dayInput.value;
    const month = monthInput.value;
    const weekday = weekdayInput.value;

    const expression = `${minute} ${hour} ${day} ${month} ${weekday}`;

    output.value = expression;
    description.textContent = getDescription(
        minute,
        hour,
        day,
        month,
        weekday
    );
});

clearButton.addEventListener("click", () => {
    minuteInput.value = "*";
    hourInput.value = "*";
    dayInput.value = "*";
    monthInput.value = "*";
    weekdayInput.value = "*";

    output.value = "";
    description.textContent = "";
});

function getDescription(minute, hour, day, month, weekday) {
    if (
        minute === "*" &&
        hour === "*" &&
        day === "*" &&
        month === "*" &&
        weekday === "*"
    ) {
        return "Runs every minute.";
    }

    if (
        minute !== "*" &&
        hour !== "*" &&
        day === "*" &&
        month === "*" &&
        weekday === "*"
    ) {
        return `Runs every day at ${hour}:${minute.padStart(2, "0")}.`;
    }

    return "Custom cron schedule.";
}