# codeDock

codeDock is a web-based collection of developer utilities built using HTML, CSS, and Vanilla JavaScript.

The main goal of codeDock is to provide commonly used developer tools in one place instead of using different websites for small development tasks.

The application has a fixed sidebar for navigation. When a user selects a tool, only the main content area changes.

---

# Project Overview

codeDock currently contains 10 developer utilities:

1. Base64 Encoder / Decoder
2. URL Encoder / Decoder
3. JWT Decoder
4. UUID Generator
5. Password Generator
6. QR Generator
7. HMAC Generator
8. Timestamp Converter
9. Cron Builder
10. Regex Tester

The application is designed to be simple, fast, responsive, and easy to understand.

---

# Technologies Used

## HTML5

HTML is used to create the structure of the application.

It is responsible for:

- Sidebar
- Navigation links
- Header
- Dashboard
- Tool cards
- Buttons
- Inputs
- Textareas
- Select elements
- Tool panels

Main HTML file:

```text
index.html
```

---

## CSS3

CSS is used to control the appearance and layout of the application.

It handles:

- Colors
- Fonts
- Sidebar
- Dashboard
- Cards
- Buttons
- Inputs
- Borders
- Shadows
- Hover effects
- Animations
- Responsive design

Main CSS file:

```text
style.css
```

---

## Vanilla JavaScript

JavaScript is used for all application logic and interaction.

It handles:

- Sidebar navigation
- Dashboard navigation
- Dynamic tool loading
- Tool-specific functionality
- Input validation
- Error handling
- Copy functionality
- Generating values
- Encoding and decoding
- DOM manipulation

Main JavaScript file:

```text
script.js
```

Every tool also has its own JavaScript file.

---

# Complete Project Structure

```text
CodeDock/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── tools/
    │
    ├── base64/
    │   ├── view.html
    │   └── view.js
    │
    ├── url/
    │   ├── view.html
    │   └── view.js
    │
    ├── jwt/
    │   ├── view.html
    │   └── view.js
    │
    ├── uuid/
    │   ├── view.html
    │   └── view.js
    │
    ├── password/
    │   ├── view.html
    │   └── view.js
    │
    ├── qr/
    │   ├── view.html
    │   └── view.js
    │
    ├── hmac/
    │   ├── view.html
    │   └── view.js
    │
    ├── timestamp/
    │   ├── view.html
    │   └── view.js
    │
    ├── cron/
    │   ├── view.html
    │   └── view.js
    │
    └── regex/
        ├── view.html
        └── view.js
```

---

# Main File Connection

The main connection between the files is:

```text
index.html
    ↓
style.css
    ↓
script.js
    ↓
Sidebar / Dashboard
    ↓
loadTool()
    ↓
tools/{tool}/view.html
    ↓
tools/{tool}/view.js
    ↓
Tool functionality
```

The important idea is that `index.html` provides the main structure, `style.css` provides the design, `script.js` controls navigation and loading, and each tool has its own HTML and JavaScript.

---

# 1. index.html

`index.html` is the main HTML file of the project.

It contains:

- Sidebar
- Logo
- Navigation
- Topbar
- Dashboard
- Main content area
- QRCode.js library
- script.js

The basic structure is:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>codeDock</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>

    <aside class="sidebar">

        <div class="logo">
            <h2>codeDock</h2>
        </div>

        <nav>

            <a href="#" class="active" data-tool="dashboard">
                🏠
                <span>Dashboard</span>
            </a>

            <p class="menu-title">ENCODING</p>

            <a href="#" data-tool="base64">
                🔐
                <span>Base64</span>
            </a>

            <a href="#" data-tool="url">
                🔗
                <span>URL Encoder</span>
            </a>

            <a href="#" data-tool="jwt">
                🎫
                <span>JWT</span>
            </a>

            <p class="menu-title">GENERATORS</p>

            <a href="#" data-tool="uuid">
                🆔
                <span>UUID</span>
            </a>

            <a href="#" data-tool="password">
                🔑
                <span>Password</span>
            </a>

            <a href="#" data-tool="qr">
                ▦
                <span>QR Generator</span>
            </a>

            <p class="menu-title">DEVELOPER</p>

            <a href="#" data-tool="hmac">
                #️⃣
                <span>HMAC</span>
            </a>

            <a href="#" data-tool="timestamp">
                🕐
                <span>Timestamp</span>
            </a>

            <a href="#" data-tool="cron">
                ⏱️
                <span>Cron Builder</span>
            </a>

            <a href="#" data-tool="regex">
                🔎
                <span>Regex Tester</span>
            </a>

        </nav>

    </aside>

    <main class="main-content">

        <header class="topbar">

            <h1 id="pageTitle">Dashboard</h1>

            <span>Developer Utilities</span>

        </header>

        <section class="content" id="toolContent">

            Dashboard content is displayed here.

        </section>

    </main>

    <script src="https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js"></script>
    <script src="script.js"></script>

</body>

</html>
```

---

# Sidebar

The sidebar is fixed on the left side of the application.

Tools are divided into three categories:

```text
ENCODING

Base64
URL Encoder
JWT


GENERATORS

UUID
Password
QR Generator


DEVELOPER

HMAC
Timestamp
Cron Builder
Regex Tester
```

Each sidebar link contains a `data-tool` attribute.

Example:

```html
<a href="#" data-tool="base64">
    🔐
    <span>Base64</span>
</a>
```

The important part is:

```text
data-tool="base64"
```

JavaScript reads this value to know which tool the user selected.

---

# Dashboard

The dashboard is the default page of codeDock.

It contains cards for all the tools.

Each card contains:

- Tool name
- Description
- Open Tool button

Example:

```html
<div class="tool-card">

    <h2>Base64</h2>

    <p>
        Encode and decode Base64 text.
    </p>

    <button data-open-tool="base64">
        Open Tool
    </button>

</div>
```

The important part is:

```text
data-open-tool="base64"
```

This tells JavaScript that the Base64 tool should be opened.

---

# 2. style.css

`style.css` controls the complete appearance of the application.

It handles:

- Theme
- Colors
- Sidebar
- Dashboard
- Cards
- Buttons
- Inputs
- Textareas
- Borders
- Shadows
- Hover effects
- Animations
- Responsive design

The project uses a dark theme with orange and mint accents.

Main CSS variables:

```css
:root {
    --bg: #11100e;
    --sidebar: #151411;
    --surface: #211f1a;
    --border: #39352d;
    --text: #f5f1e8;
    --text-soft: #c5beb0;
    --text-muted: #81796b;
    --orange: #f59e0b;
    --orange-light: #fbbf24;
    --mint: #8fd694;
}
```

CSS variables make the theme easier to maintain.

For example:

```css
color: var(--orange);
```

can be reused throughout the project.

---

# Important CSS Components

## Sidebar

The sidebar is styled using:

```css
.sidebar
```

It contains:

- Logo
- Navigation links
- Menu categories
- Active tool styling

---

## Main Content

The main content uses:

```css
.main-content
```

It contains:

- Topbar
- Page title
- Tool content

---

## Dashboard Cards

Dashboard cards use:

```css
.tool-card
```

Cards contain:

- Heading
- Description
- Button

---

## Tool Panels

Individual tools use:

```css
.tool-panel
```

This provides a consistent layout for:

- Labels
- Inputs
- Textareas
- Select elements
- Buttons
- Outputs

---

# Responsive Design

The project is responsive and works on desktop and mobile screens.

CSS media queries are used for smaller screen sizes.

Example:

```css
@media (max-width: 900px)
```

and:

```css
@media (max-width: 700px)
```

On mobile:

- Sidebar becomes compact
- Navigation text can be hidden
- Icons remain visible
- Dashboard cards become one column
- Main content gets more space
- Tool buttons can stack vertically

This allows codeDock to work properly on mobile devices.

---

# 3. script.js

`script.js` is the main controller of the application.

It handles:

- Sidebar navigation
- Dashboard navigation
- Active tool
- Dynamic HTML loading
- Dynamic JavaScript loading
- Page title
- Dashboard creation

The main architecture is:

```text
index.html
    ↓
script.js
    ↓
loadTool()
    ↓
view.html
    ↓
view.js
```

---

# menuLinks

The sidebar links are selected using:

```javascript
const menuLinks = document.querySelectorAll(".sidebar nav a");
```

This selects all navigation links inside the sidebar.

Then `forEach()` is used to add a click event to every link.

---

# Sidebar Click Event

When a user clicks a sidebar link:

```javascript
menuLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();

        const tool = link.dataset.tool;

        setActiveTool(link);
        loadTool(tool);
    });
});
```

The flow is:

```text
User clicks tool
        ↓
Click event runs
        ↓
preventDefault()
        ↓
Read data-tool
        ↓
setActiveTool()
        ↓
loadTool()
```

For example:

```html
<a href="#" data-tool="jwt">
```

gives:

```text
tool = "jwt"
```

Then:

```javascript
loadTool("jwt");
```

is called.

---

# Why preventDefault() Is Used

The sidebar links use:

```html
href="#"
```

Normally, clicking a link can change the browser URL or move the page.

The application does not need that behavior because JavaScript controls navigation.

Therefore:

```javascript
event.preventDefault();
```

stops the default link behavior.

---

# Dashboard Button Navigation

Dashboard buttons use:

```html
<button data-open-tool="base64">
    Open Tool
</button>
```

The project listens for clicks on the document:

```javascript
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
```

The flow is:

```text
Dashboard button clicked
        ↓
event.target
        ↓
closest("[data-open-tool]")
        ↓
Button found
        ↓
dataset.openTool
        ↓
Tool name obtained
        ↓
Matching sidebar link found
        ↓
Sidebar active state updated
        ↓
loadTool() called
```

---

# Why document.addEventListener() Is Used

The dashboard content can be generated dynamically.

Because the dashboard buttons may not exist when the initial JavaScript starts, the application listens for clicks on the document.

This allows dynamically created dashboard buttons to work.

---

# setActiveTool()

The function:

```javascript
function setActiveTool(activeLink)
```

controls the active sidebar item.

First, it removes the `active` class from all links.

Then it adds the `active` class to the selected link.

Flow:

```text
Remove active from all links
        ↓
Add active to selected link
```

This gives the user a visual indication of the currently selected tool.

---

# loadTool()

`loadTool()` loads the selected tool.

For example:

```javascript
loadTool("base64");
```

loads:

```text
tools/base64/view.html
```

For HMAC:

```text
tools/hmac/view.html
```

For Regex:

```text
tools/regex/view.html
```

The general pattern is:

```text
tools/{tool}/view.html
```

---

# Fetch API

The project uses the browser's Fetch API:

```javascript
const response = await fetch(
    `tools/${tool}/view.html`
);
```

The response is converted into text:

```javascript
const html = await response.text();
```

Then the HTML is inserted into:

```javascript
toolContent.innerHTML = html;
```

This means all tools do not need to be permanently written inside `index.html`.

---

# loadToolScript()

After the tool HTML is loaded, its JavaScript file is loaded.

The function creates a script element:

```javascript
const script = document.createElement("script");
```

Then:

```javascript
script.type = "module";
```

and:

```javascript
script.src = `tools/${tool}/view.js`;
```

For example:

```text
tools/hmac/view.js
```

or:

```text
tools/regex/view.js
```

This keeps the JavaScript of every tool separate.

---

# getToolTitle()

`getToolTitle()` stores the names of the available tools.

Example:

```javascript
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
```

When a tool is opened, its title can be displayed in the topbar.

---

# Dynamic Loading Architecture

The most important concept in the project is dynamic tool loading.

```text
User selects a tool
        ↓
JavaScript gets tool name
        ↓
loadTool(tool)
        ↓
fetch tools/{tool}/view.html
        ↓
Insert HTML into toolContent
        ↓
loadToolScript(tool)
        ↓
Load tools/{tool}/view.js
        ↓
Tool becomes functional
```

---

# Why Every Tool Has view.html and view.js

Every tool follows this structure:

```text
tool/
├── view.html
└── view.js
```

`view.html` contains the interface.

`view.js` contains the functionality.

This separation makes the project:

- Modular
- Easier to debug
- Easier to maintain
- Easier to extend

---

# TOOL 1 - Base64

Folder:

```text
tools/base64/
```

Files:

```text
view.html
view.js
```

## Purpose

The Base64 tool provides:

- Base64 encoding
- Base64 decoding

The browser functions used are:

```javascript
btoa()
```

for encoding and:

```javascript
atob()
```

for decoding.

---

# Base64 Flow

```text
User enters text
        ↓
Click Encode
        ↓
btoa()
        ↓
Base64 output
```

For decoding:

```text
User enters Base64
        ↓
Click Decode
        ↓
atob()
        ↓
Original text
```

Invalid input is handled using error handling.

---

# TOOL 2 - URL Encoder

Folder:

```text
tools/url/
```

Files:

```text
view.html
view.js
```

## Purpose

The URL Encoder provides:

- URL encoding
- URL decoding

URL encoding is useful when characters need to be safely represented inside URLs.

The tool contains:

- Input
- Encode button
- Decode button
- Clear button
- Output

---

# TOOL 3 - JWT Decoder

Folder:

```text
tools/jwt/
```

Files:

```text
view.html
view.js
```

JWT means:

```text
JSON Web Token
```

A JWT normally contains:

```text
header.payload.signature
```

The JWT tool checks that the token contains three sections.

The important JavaScript logic is:

```javascript
const parts = input.value.trim().split(".");
```

Then:

```javascript
if (parts.length !== 3) {
    throw new Error("Invalid JWT");
}
```

The header and payload are decoded and converted from JSON.

The tool displays:

```text
Header
Payload
```

The tool is mainly for inspecting the contents of a JWT.

It does not verify the JWT signature.

---

# JWT Flow

```text
User enters JWT
        ↓
Split token using "."
        ↓
Check for 3 parts
        ↓
Decode header
        ↓
Decode payload
        ↓
Parse JSON
        ↓
Display header and payload
```

If the token is invalid:

```text
Invalid JWT
```

is displayed.

---

# TOOL 4 - UUID Generator

Folder:

```text
tools/uuid/
```

Files:

```text
view.html
view.js
```

UUID stands for:

```text
Universally Unique Identifier
```

The UUID tool generates unique UUID values.

UUIDs are commonly used in:

- Applications
- Databases
- APIs
- Backend systems
- Development projects

---

# UUID Flow

```text
User clicks Generate
        ↓
UUID is generated
        ↓
Generated UUID displayed
        ↓
User can copy or generate again
```

---

# TOOL 5 - Password Generator

Folder:

```text
tools/password/
```

Files:

```text
view.html
view.js
```

## Purpose

The Password Generator creates random passwords.

It can be used when a developer needs a random password for testing or development.

The generated password can be copied and used where required.

---

# Password Generator Flow

```text
User chooses password options
        ↓
Click Generate
        ↓
Random password is created
        ↓
Password displayed
```

---

# TOOL 6 - QR Generator

Folder:

```text
tools/qr/
```

Files:

```text
view.html
view.js
```

## Purpose

The QR Generator converts text or URLs into QR codes.

The project uses:

```text
QRCode.js
```

QRCode.js is loaded through a CDN in `index.html`.

The CDN script is:

```html
<script src="https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js"></script>
```

The QR tool uses this library to generate a QR code.

---

# QR Flow

```text
User enters text or URL
        ↓
Click Generate
        ↓
QRCode.js receives input
        ↓
QR code is generated
        ↓
QR code displayed
```

---

# TOOL 7 - HMAC Generator

Folder:

```text
tools/hmac/
```

Files:

```text
view.html
view.js
```

HMAC stands for:

```text
Hash-based Message Authentication Code
```

The HMAC tool accepts:

- Message
- Secret Key
- Algorithm

Supported algorithms:

```text
SHA-256
SHA-384
SHA-512
```

The HMAC tool uses the browser's Web Crypto API.

Main API:

```javascript
crypto.subtle
```

---

# HMAC HTML

The HMAC interface contains:

```html
<h2>HMAC Generator</h2>

<p class="subtitle">
    Generate an HMAC hash from a message and secret key.
</p>

<div class="tool-panel">

    <label for="hmacMessage">
        Message
    </label>

    <textarea
        id="hmacMessage"
        placeholder="Enter message..."
    ></textarea>

    <label for="hmacSecret">
        Secret Key
    </label>

    <input
        type="text"
        id="hmacSecret"
        placeholder="Enter secret key..."
    >

    <label for="hmacAlgorithm">
        Algorithm
    </label>

    <select id="hmacAlgorithm">
        <option value="SHA-256">SHA-256</option>
        <option value="SHA-384">SHA-384</option>
        <option value="SHA-512">SHA-512</option>
    </select>

    <div class="tool-actions">

        <button id="generateHmacButton">
            Generate HMAC
        </button>

        <button id="clearHmacButton">
            Clear
        </button>

    </div>

    <textarea
        id="hmacOutput"
        placeholder="HMAC result..."
        readonly
    ></textarea>

</div>
```

---

# HMAC JavaScript

The HMAC JavaScript gets the required elements:

```javascript
const messageInput = document.getElementById("hmacMessage");
const secretInput = document.getElementById("hmacSecret");
const algorithmInput = document.getElementById("hmacAlgorithm");
const output = document.getElementById("hmacOutput");

const generateButton = document.getElementById("generateHmacButton");
const clearButton = document.getElementById("clearHmacButton");
```

When the Generate button is clicked:

```javascript
generateButton.addEventListener("click", async () => {
```

the message, secret, and algorithm are read.

If either message or secret is missing:

```javascript
if (!message || !secret) {
    output.value = "Enter both message and secret key.";
    return;
}
```

A `TextEncoder` is used to convert the text into bytes.

The secret key is imported:

```javascript
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
```

The HMAC signature is generated:

```javascript
const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(message)
);
```

The result is converted to hexadecimal:

```javascript
output.value = Array.from(bytes)
    .map(byte => byte.toString(16).padStart(2, "0"))
    .join("");
```

---

# HMAC Flow

```text
Message
   +
Secret Key
   +
Algorithm
   ↓
TextEncoder
   ↓
crypto.subtle.importKey()
   ↓
crypto.subtle.sign()
   ↓
Signature bytes
   ↓
Hexadecimal conversion
   ↓
HMAC output
```

---

# TOOL 8 - Timestamp Converter

Folder:

```text
tools/timestamp/
```

Files:

```text
view.html
view.js
```

## Purpose

The Timestamp tool is used to work with timestamp and date/time values.

Timestamps are commonly used in:

- APIs
- Databases
- Logs
- Backend systems
- Date/time calculations

The tool provides a simple interface for working with timestamp values.

---

# TOOL 9 - Cron Builder

Folder:

```text
tools/cron/
```

Files:

```text
view.html
view.js
```

## Purpose

The Cron Builder creates and explains cron expressions.

A common cron expression contains five fields:

```text
minute hour day month weekday
```

Example:

```text
* * * * *
```

means:

```text
Runs every minute.
```

Another example:

```text
0 9 * * 1-5
```

means:

```text
Runs at 9:00 on weekdays.
```

The Cron Builder provides inputs for:

- Minute
- Hour
- Day
- Month
- Weekday

It also provides common presets.

The JavaScript combines the five fields into a cron expression.

---

# Cron Flow

```text
User selects preset
        ↓
Cron fields are filled
        ↓
Generate Cron
        ↓
Five fields are combined
        ↓
Cron expression displayed
        ↓
Description displayed
```

---

# TOOL 10 - Regex Tester

Folder:

```text
tools/regex/
```

Files:

```text
view.html
view.js
```

Regex means:

```text
Regular Expression
```

A regular expression is used to describe patterns inside text.

The Regex Tester accepts:

- Regular expression
- Test text
- Regex flags

Supported flags:

```text
g
i
m
```

Where:

```text
g = global
i = ignore case
m = multiline
```

The JavaScript creates the regex using:

```javascript
new RegExp(pattern, flags);
```

Then the input text is tested.

The tool displays:

- Match status
- Match count
- Individual matches

Invalid regular expressions are handled using `try...catch`.

---

# Regex Flow

```text
User enters regex
        ↓
User enters test text
        ↓
Select flags
        ↓
Create RegExp object
        ↓
Test text
        ↓
Find matches
        ↓
Display match count
        ↓
Display individual matches
```

---

# Input Validation

Input validation is used throughout the project.

The purpose is to prevent invalid or empty input from causing problems.

Examples:

```text
Base64
    ↓
Invalid Base64

JWT
    ↓
Invalid JWT

HMAC
    ↓
Missing message or secret

Regex
    ↓
Invalid regular expression
```

The user receives an understandable message instead of the application breaking.

---

# Error Handling

The project uses `try...catch` for operations that can fail.

General structure:

```javascript
try {
    // operation
} catch {
    // error message
}
```

For example, the JWT tool uses error handling because invalid JWT input can cause decoding or JSON parsing to fail.

The Regex Tester also uses error handling because an invalid regular expression can cause `new RegExp()` to throw an error.

---

# Copy Functionality

Some tools contain Copy buttons.

The Clipboard API is used:

```javascript
navigator.clipboard.writeText(output.value);
```

After copying, the button can temporarily display:

```text
Copied
```

This gives feedback to the user.

---

# Browser APIs Used

## DOM API

The DOM API is used for:

- Finding elements
- Changing values
- Changing text
- Adding event listeners
- Adding/removing classes
- Creating elements
- Inserting HTML

Examples:

```javascript
document.getElementById()
```

```javascript
document.querySelector()
```

```javascript
element.addEventListener()
```

```javascript
element.innerHTML
```

---

## Fetch API

The Fetch API is used to load tool HTML files dynamically.

Example:

```javascript
fetch(`tools/${tool}/view.html`)
```

---

## Web Crypto API

The Web Crypto API is used by HMAC.

Example:

```javascript
crypto.subtle
```

---

## Clipboard API

The Clipboard API is used for copying output.

Example:

```javascript
navigator.clipboard.writeText()
```

---

# External Library

The project uses:

```text
QRCode.js
```

It is loaded using a CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js"></script>
```

QRCode.js is used only for QR code generation.

The rest of the application is implemented using HTML, CSS, and Vanilla JavaScript.

---

# Why Vanilla JavaScript?

The project uses Vanilla JavaScript instead of React, Vue, Angular, or another framework.

Reasons:

- Lightweight
- Easy to understand
- No framework setup required
- Direct DOM manipulation
- Easy to demonstrate in viva
- Shows understanding of core JavaScript
- Uses browser APIs directly

The project demonstrates practical JavaScript concepts rather than depending on a frontend framework.

---

# Why Separate Tool Files?

Each tool has its own:

```text
view.html
view.js
```

This means the code is modular.

For example:

```text
tools/hmac/
```

contains HMAC-specific code.

```text
tools/regex/
```

contains Regex-specific code.

```text
tools/cron/
```

contains Cron-specific code.

If one tool needs to be changed, the other tools do not need to be modified.

---

# Adding a New Tool

To add a new tool:

## Step 1

Create a folder:

```text
tools/newtool/
```

## Step 2

Create:

```text
view.html
view.js
```

## Step 3

Add a sidebar link:

```html
<a href="#" data-tool="newtool">
    Icon
    <span>New Tool</span>
</a>
```

## Step 4

Add a dashboard card:

```html
<button data-open-tool="newtool">
    Open Tool
</button>
```

## Step 5

Add the title to `script.js`:

```javascript
newtool: "New Tool"
```

## Step 6

Create the interface:

```text
tools/newtool/view.html
```

## Step 7

Create the functionality:

```text
tools/newtool/view.js
```

Because the application already uses:

```text
tools/{tool}/view.html
tools/{tool}/view.js
```

the new tool can follow the same structure.

---

# Complete File Relationship

```text
                         codeDock
                            |
          +-----------------+-----------------+
          |                 |                 |
          ↓                 ↓                 ↓
     index.html         style.css         script.js
          |                                   |
          |                          +--------+--------+
          |                          |                 |
          ↓                          ↓                 ↓
      Sidebar                   Dashboard         Navigation
          |                          |                 |
          |                          +--------+--------+
          |                                   |
          |                                   ↓
          |                              loadTool()
          |                                   |
          |                                   ↓
          |                         view.html loaded
          |                                   |
          |                                   ↓
          |                         view.js loaded
          |                                   |
          |                                   ↓
          |                            Tool functionality
          |
          ↓
    QRCode.js library
```

---

# Example: Opening HMAC

When the user clicks HMAC:

```text
1. User clicks HMAC
        ↓
2. Click event is detected
        ↓
3. data-tool gives "hmac"
        ↓
4. setActiveTool() updates sidebar
        ↓
5. loadTool("hmac") runs
        ↓
6. tools/hmac/view.html is fetched
        ↓
7. HTML is inserted into toolContent
        ↓
8. tools/hmac/view.js is loaded
        ↓
9. HMAC event listeners are created
        ↓
10. HMAC tool becomes ready
```

---

# Example: Opening a Tool From Dashboard

```text
User clicks Open Tool
        ↓
data-open-tool="regex"
        ↓
document click listener
        ↓
closest("[data-open-tool]")
        ↓
tool = "regex"
        ↓
Find sidebar link with data-tool="regex"
        ↓
setActiveTool()
        ↓
loadTool("regex")
        ↓
tools/regex/view.html
        ↓
tools/regex/view.js
        ↓
Regex Tester works
```

---

# Complete Application Flow

```text
User opens codeDock
        ↓
index.html loads
        ↓
style.css loads
        ↓
script.js loads
        ↓
Dashboard is displayed
        ↓
User selects a tool
        ↓
JavaScript reads tool name
        ↓
loadTool() runs
        ↓
Tool HTML is fetched
        ↓
HTML is inserted into toolContent
        ↓
Tool JavaScript is loaded
        ↓
Tool becomes functional
```

---

# Responsive Design

## Desktop Layout

```text
+----------------+-----------------------------+
|                |                             |
|    Sidebar     |        Main Content         |
|                |                             |
|                |       Dashboard / Tool      |
|                |                             |
+----------------+-----------------------------+
```

## Mobile Layout

```text
+------+----------------------+
|      |                      |
| Side |     Main Content     |
| bar  |                      |
|      |                      |
+------+----------------------+
```

On mobile:

- Sidebar becomes compact
- Navigation labels can be hidden
- Icons remain visible
- Dashboard cards become one column
- Main content gets more space
- Tool buttons can stack vertically

---

# Development Approach

The project was developed step by step.

```text
Create main HTML structure
        ↓
Create sidebar
        ↓
Create navigation
        ↓
Create dashboard
        ↓
Create Base64 tool
        ↓
Create URL Encoder
        ↓
Create JWT tool
        ↓
Create UUID tool
        ↓
Create Password Generator
        ↓
Create QR Generator
        ↓
Create HMAC Generator
        ↓
Create Timestamp tool
        ↓
Create Cron Builder
        ↓
Create Regex Tester
        ↓
Connect tools using script.js
        ↓
Add common CSS
        ↓
Add responsive design
        ↓
Test tools
        ↓
Test mobile layout
        ↓
Polish UI
```

---

# Testing

Every tool was tested individually.

The tested tools are:

```text
Base64
URL Encoder
JWT
UUID
Password Generator
QR Generator
HMAC
Timestamp
Cron Builder
Regex Tester
```

Testing included:

- Sidebar navigation
- Dashboard navigation
- Tool loading
- Input handling
- Output generation
- Buttons
- Clear functionality
- Copy functionality
- Error handling
- Invalid input
- Responsive layout
- Mobile layout

---

# What I Learned From This Project

This project helped demonstrate practical understanding of:

- HTML5
- CSS3
- Responsive design
- Vanilla JavaScript
- DOM manipulation
- Event listeners
- Event delegation
- Data attributes
- Functions
- Async JavaScript
- Fetch API
- Dynamic HTML loading
- Dynamic script loading
- Browser APIs
- Web Crypto API
- Clipboard API
- Error handling
- Input validation
- Modular project structure
- Responsive UI design

---

# Viva Questions and Answers

## What is codeDock?

codeDock is a web-based collection of developer utilities built using HTML, CSS, and Vanilla JavaScript.

---

## What is the main purpose of codeDock?

The main purpose is to provide commonly used developer utilities in one place.

---

## How many tools are available?

There are 10 tools:

```text
Base64
URL Encoder
JWT
UUID
Password Generator
QR Generator
HMAC
Timestamp
Cron Builder
Regex Tester
```

---

## Which technologies are used?

The project uses:

```text
HTML5
CSS3
Vanilla JavaScript
Browser APIs
QRCode.js
```

---

## Why did you use Vanilla JavaScript?

I used Vanilla JavaScript to keep the project lightweight and to directly implement concepts such as DOM manipulation, event handling, dynamic loading, and browser APIs.

---

## What is the role of index.html?

`index.html` provides the main structure of the application.

It contains the sidebar, navigation, topbar, dashboard area, external QRCode.js library, and main JavaScript file.

---

## What is the role of style.css?

`style.css` controls the complete appearance of the application.

It handles:

- Theme
- Layout
- Cards
- Buttons
- Inputs
- Hover effects
- Animations
- Responsive design

---

## What is the role of script.js?

`script.js` is the main controller of the application.

It handles:

- Sidebar navigation
- Dashboard buttons
- Active states
- Dynamic HTML loading
- Dynamic JavaScript loading
- Page titles
- Dashboard content

---

## Why are tools separated into folders?

Each tool has its own HTML and JavaScript.

This makes the application modular and easier to maintain.

---

## How does sidebar navigation work?

Each sidebar link contains a `data-tool` attribute.

Example:

```html
<a href="#" data-tool="jwt">
```

JavaScript reads:

```javascript
link.dataset.tool
```

which gives:

```text
jwt
```

Then:

```javascript
loadTool("jwt");
```

is called.

---

## What is data-tool?

`data-tool` is a custom HTML data attribute.

It stores the name of the tool that a navigation link represents.

Example:

```html
data-tool="base64"
```

---

## What is data-open-tool?

`data-open-tool` is used by dashboard buttons.

Example:

```html
<button data-open-tool="base64">
```

It tells JavaScript which tool should be opened when the button is clicked.

---

## Why is document.addEventListener() used for dashboard buttons?

The dashboard content can be generated dynamically.

The buttons may not exist when the initial JavaScript starts.

Therefore, a document-level click listener is used to detect clicks on dynamically created buttons.

---

## What does closest() do?

The code:

```javascript
event.target.closest("[data-open-tool]")
```

finds the nearest parent element that contains the `data-open-tool` attribute.

This is useful when the user clicks on an element inside the button.

---

## Why is preventDefault() used?

The navigation links use:

```html
href="#"
```

`preventDefault()` stops the browser's default link behavior because JavaScript is handling the navigation.

---

## What is loadTool()?

`loadTool()` is the function responsible for loading a selected tool.

It loads:

```text
tools/{tool}/view.html
```

and then:

```text
tools/{tool}/view.js
```

---

## Why is fetch() used?

`fetch()` is used to dynamically load the selected tool's HTML file.

This avoids putting all 10 tools into one large HTML file.

---

## What happens when a tool is opened?

```text
User clicks tool
        ↓
Tool name is read
        ↓
loadTool()
        ↓
view.html loaded
        ↓
HTML inserted
        ↓
view.js loaded
        ↓
Tool becomes functional
```

---

## What is JWT?

JWT stands for JSON Web Token.

It normally contains:

```text
Header.Payload.Signature
```

The JWT tool decodes and displays the header and payload.

---

## Does the JWT tool verify the signature?

No.

The current JWT tool is mainly used for decoding and inspecting the token contents.

---

## What is Base64?

Base64 is an encoding method used to represent data as text.

The tool supports encoding and decoding.

---

## What is HMAC?

HMAC stands for Hash-based Message Authentication Code.

It uses a secret key and a hashing algorithm to generate a message authentication code.

---

## Which algorithms are available in HMAC?

The HMAC tool supports:

```text
SHA-256
SHA-384
SHA-512
```

---

## Which API is used for HMAC?

The browser's Web Crypto API is used.

Main object:

```javascript
crypto.subtle
```

Methods include:

```javascript
crypto.subtle.importKey()
```

and:

```javascript
crypto.subtle.sign()
```

---

## What is UUID?

UUID stands for Universally Unique Identifier.

It is used to represent unique values.

---

## What is Regex?

Regex means Regular Expression.

It is used to define patterns for searching and matching text.

---

## Which regex flags are supported?

The Regex Tester supports:

```text
g = global
i = ignore case
m = multiline
```

---

## What is Cron?

Cron is a scheduling format.

A common cron expression has five fields:

```text
minute hour day month weekday
```

---

## How is QR generation implemented?

QRCode.js is loaded through a CDN and used by the QR Generator to create QR codes.

---

## What is the Fetch API?

The Fetch API is a browser API used to request resources.

In this project it is used to load tool HTML files dynamically.

---

## What is the DOM?

DOM stands for Document Object Model.

It represents the HTML page as objects that JavaScript can access and modify.

For example:

```javascript
document.getElementById()
```

is used to find an HTML element.

---

## What is event handling?

Event handling means responding to user actions such as:

- Click
- Input
- Change
- Submit

In this project, `addEventListener()` is mainly used.

Example:

```javascript
button.addEventListener("click", () => {
});
```

---

## What is responsive design?

Responsive design means the website adapts to different screen sizes.

In codeDock, CSS media queries are used to make the interface work on desktop and mobile.

---

## How is error handling done?

Error handling is mainly done using:

```javascript
try {
    
} catch {
    
}
```

This prevents invalid input from breaking the tool.

---

# Short Viva Explanation

If I need to explain the complete project quickly:

> My project is called codeDock. It is a web-based collection of developer utilities built using HTML, CSS, and Vanilla JavaScript. It contains 10 tools: Base64, URL Encoder, JWT, UUID, Password Generator, QR Generator, HMAC, Timestamp, Cron Builder, and Regex Tester.
>
> The main file is index.html. It contains the main application structure including the sidebar, navigation, topbar, dashboard, and main content area.
>
> style.css is responsible for the complete design of the project. It handles the dark theme, colors, cards, buttons, inputs, hover effects, animations, and responsive layout.
>
> script.js is the main controller. It handles sidebar navigation, dashboard buttons, active states, page titles, and dynamic loading of tools.
>
> Each tool is stored separately inside the tools folder. Every tool has a view.html file for its interface and a view.js file for its functionality.
>
> When a user selects a tool, JavaScript reads the tool name from the data-tool attribute. The loadTool() function uses fetch() to load that tool's view.html. After the HTML is inserted into the main content area, the corresponding view.js file is loaded dynamically.
>
> This makes the project modular because every tool has its own interface and logic while script.js controls the overall navigation and loading.
>
> The project also uses browser APIs such as the DOM API, Fetch API, Clipboard API, and Web Crypto API. QRCode.js is used for QR code generation.
>
> CSS media queries make the project responsive so that it works on both desktop and mobile screens.
>
> Overall, codeDock demonstrates HTML structure, CSS styling, JavaScript logic, DOM manipulation, event handling, dynamic content loading, browser APIs, input validation, error handling, modular structure, and responsive web design.

---

# Future Improvements

Possible future improvements include:

- Add more developer tools
- Add tool search
- Add favorites
- Add light and dark themes
- Improve accessibility
- Add keyboard navigation
- Add local history
- Add more JWT features
- Add more Cron presets
- Add more Regex features
- Improve mobile navigation
- Add tool sharing

---

# Final Architecture Summary

The easiest way to remember the complete project is:

```text
                         codeDock
                            |
          +-----------------+-----------------+
          |                 |                 |
          ↓                 ↓                 ↓
     index.html         style.css         script.js
          |                                   |
          ↓                                   ↓
      Sidebar                            Navigation
          |                                   |
          ↓                                   ↓
      Dashboard                         loadTool()
                                              |
                                              ↓
                                  tools/{tool}/view.html
                                              |
                                              ↓
                                  tools/{tool}/view.js
                                              |
                                              ↓
                                      Tool functionality
```

The main concept is:

```text
index.html
    ↓
script.js
    ↓
loadTool()
    ↓
view.html
    ↓
view.js
    ↓
Tool functionality
```

This architecture keeps codeDock organized, modular, responsive, and easy to maintain.