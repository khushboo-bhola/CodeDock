const menuLinks = document.querySelectorAll(".sidebar nav a");
const toolContent = document.getElementById("toolContent");
const pageTitle = document.getElementById("pageTitle");

menuLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const tool = link.dataset.tool;
        setActiveTool(link);
        loadTool(tool);
    });
});

document.addEventListener("click", event => {
    const button = event.target.closest("[data-open-tool]");

    if (!button) {
        return;
    }
    const tool = button.dataset.openTool;
    const sidebarLink = document.querySelector(
        `[data-tool="${tool}"]`
    );

    if (sidebarLink) {
        setActiveTool(sidebarLink);
    }

    loadTool(tool);
});

function setActiveTool(activeLink) {
    menuLinks.forEach(link => {
        link.classList.remove("active");
    });
    activeLink.classList.add("active");
}

async function loadTool(tool) {
    if (tool === "dashboard") {
        loadDashboard();
        return;
    }

    pageTitle.textContent = getToolTitle(tool);

    try {
        const response = await fetch(
            `tools/${tool}/view.html`
        );
        if (!response.ok) {
            throw new Error("Tool view not found.");
        }
        const html = await response.text();
        toolContent.innerHTML = html;
        await loadToolScript(tool);
    } 
    catch (error) {
        toolContent.innerHTML = `
            <h2>Tool Not Found</h2>
            <p class="subtitle">
                Unable to load the ${tool} tool.
            </p>
        `;

        console.error(error);
    }
}

function loadToolScript(tool) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.type = "module";
        script.src = `tools/${tool}/view.js`;
        script.onload = resolve;
        script.onerror = reject;

        document.body.appendChild(script);
    });
}

function loadDashboard() {
    pageTitle.textContent = "Dashboard";

    const newLocal = toolContent.innerHTML = `
        <h2>Welcome to codeDock</h2>

        <p class="subtitle">
            Simple developer utilities in one place.
        </p>

        <div class="container">
            <div class="tool-card">
                <h2>Base64</h2>
                <p>
                    Encode and decode Base64 text.
                </p>
                <button data-open-tool="base64">
                    Open Tool
                </button>
            </div>

            <div class="tool-card">
                <h2>URL Encoder</h2>
                <p>
                    Encode and decode URL text.
                </p>
                <button data-open-tool="url">
                    Open Tool
                </button>
            </div>

            <div class="tool-card">
                <h2>JWT</h2>
                <p>
                    Decode and inspect JWT tokens.
                </p>
                <button data-open-tool="jwt">
                    Open Tool
                </button>
            </div>

            <div class="tool-card">
                <h2>UUID</h2>
                <p>
                    Generate unique UUIDs.
                </p>
                <button data-open-tool="uuid">
                    Open Tool
                </button>
            </div>

            <div class="tool-card">
                <h2>Password Generator</h2>
                <p>
                    Generate secure random passwords.
                </p>
                <button data-open-tool="password">
                    Open Tool
                </button>
            </div>

            <div class="tool-card">
                <h2>QR Generator</h2>
                <p>
                    Generate QR codes from text or URLs.
                </p>
                <button data-open-tool="qr">
                    Open Tool
                </button>
            </div>

            <div class="tool-card">
                <h2>HMAC</h2>
                <p>
                    Generate HMAC signatures.
                </p>
                <button data-open-tool="hmac">
                    Open Tool
                </button>
            </div>

            <div class="tool-card">
                <h2>Timestamp</h2>
                <p>
                    Convert and work with timestamps.
                </p>
                <button data-open-tool="timestamp">
                    Open Tool
                </button>
            </div>

            <div class="tool-card">
                <h2>Cron Builder</h2>
                <p>
                    Create and understand cron expressions.
                </p>
                <button data-open-tool="cron">
                    Open Tool
                </button>
            </div>

            <div class="tool-card">
                <h2>Regex Tester</h2>
                <p>
                    Test regular expressions against text.
                </p>
                <button data-open-tool="regex">
                    Open Tool
                </button>
            </div>
        </div>
    `;
}

function getToolTitle(tool) {
    const titles = {
        base64: "Base64",
        url: "URL Encoder",
        jwt: "JWT",
        uuid: "UUID",
        password: "Password Generator",
        qr: "QR Generator",
        hmac: "HMAC",
        timestamp: "Timestamp",
        cron: "Cron Builder",
        regex: "Regex Tester"
    };

    

    return titles[tool] || "Developer Tool";
}
loadDashboard();