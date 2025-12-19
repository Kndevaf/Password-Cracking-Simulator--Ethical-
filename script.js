const commonPasswords = [
    "password",
    "123456",
    "12345678",
    "qwerty",
    "abc123",
    "password123"
];

function startSimulation() {
    const password = document.getElementById("passwordInput").value;
    const output = document.getElementById("output");

    output.innerHTML = "";
    
    if (password.length === 0) {
        output.innerHTML = "❌ Please enter a password.";
        return;
    }

    output.innerHTML = "🔍 Starting password analysis...<br>";

    setTimeout(() => dictionaryAttack(password), 1000);
}

function dictionaryAttack(password) {
    const output = document.getElementById("output");

    for (let guess of commonPasswords) {
        if (guess === password.toLowerCase()) {
            output.innerHTML += `❌ Cracked using dictionary word: <b>${guess}</b>`;
            return;
        }
    }

    output.innerHTML += "✅ Dictionary attack failed.<br>";
    setTimeout(() => bruteForceCheck(password), 1000);
}

function bruteForceCheck(password) {
    const output = document.getElementById("output");

    if (password.length < 8) {
        output.innerHTML += "❌ Password too short — brute-force likely successful.";
    } else {
        output.innerHTML += "🛡️ Password resisted brute-force attempt.";
    }

    output.innerHTML += "<br><br>✔ Simulation complete.";
}
