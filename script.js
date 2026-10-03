const menuLinks = document.querySelectorAll(".sidebar nav a");
const content = document.querySelector(".content");

menuLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        menuLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

        const tool = this.dataset.tool;

        if (tool === "dashboard") {
            showDashboard();
        } else {
            showTool(tool);
        }
    });
});

function showDashboard() {
    content.innerHTML = `
        <h2>Tools</h2>
        <p class="subtitle">
            Choose a developer utility to get started.
        </p>
    `;
}

function showTool(tool) {

    if (tool === "base64") {
        content.innerHTML = `
            <h2>Base64 Encoder / Decoder</h2>
            <p class="subtitle">Encode or decode Base64 text.</p>

            <div class="tool-panel">

                <textarea
                    id="base64Input"
                    placeholder="Enter text or Base64..."
                ></textarea>

                <div class="tool-actions">
                    <button onclick="encodeBase64Text()">Encode</button>
                    <button onclick="decodeBase64Text()">Decode</button>
                    <button onclick="clearBase64()">Clear</button>
                </div>

                <textarea
                    id="base64Output"
                    placeholder="Result..."
                    readonly
                ></textarea>

            </div>
        `;

        return;
    }

    content.innerHTML = `
        <h2>${tool}</h2>
        <p class="subtitle">${tool} tool is coming next.</p>
    `;
}

function encodeBase64Text() {
    const input = document.getElementById("base64Input").value;

    try {
        document.getElementById("base64Output").value = btoa(input);
    } catch {
        document.getElementById("base64Output").value = "Unable to encode.";
    }
}

function decodeBase64Text() {
    const input = document.getElementById("base64Input").value;

    try {
        document.getElementById("base64Output").value = atob(input);
    } catch {
        document.getElementById("base64Output").value = "Invalid Base64.";
    }
}

function clearBase64() {
    document.getElementById("base64Input").value = "";
    document.getElementById("base64Output").value = "";
}