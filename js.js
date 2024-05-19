// Script.js

// Vordefinierte Love Strength-Werte für bestimmte Namen
var predefinedLoveStrengths = {
    "dom-anna": 121,
    "bom-dom": -87,
    "dior-bv": 98,
    "dior-bom": 98,
    "dior-bvbom": 98,
    "dior-onur": 98,
};

function calculateLoveStrength() {
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;

    // Überprüfen, ob die Namen gültig sind (Buchstaben und nicht leer)
    if (!isValidName(name1) || !isValidName(name2)) {
        alert("Error: Please type in valid names.");
        return;
    }

    // Überprüfen, ob ein vordefiniertes Paar vorhanden ist
    var predefinedPairKey = name1.toLowerCase() + "-" + name2.toLowerCase();
    if (predefinedLoveStrengths.hasOwnProperty(predefinedPairKey)) {
        var loveStrength = predefinedLoveStrengths[predefinedPairKey];
    } else {
        // Andernfalls die Berechnung wie zuvor durchführen
        var commonLetters = getCommonLetters(name1, name2).length;
        var loveStrength = (name1.length + name2.length + commonLetters * 37) % 101; // Modulo 101, um die Zahl zwischen 0 und 100 zu halten
    }

    // Erstelle das Popup-Fenster
    var popupContent = `
        <div id="lovePopup">
            <img src="thatzane.com/love/assests/love.gif" width="fit-content" height="auto"></img>
            <h2>Love Strength</h2>
            <p>${name1} and ${name2}</p>
            <p>Love Strength: ${loveStrength}%</p>
            <button onclick="closePopup()">Close</button>
        </div>
    `;

    var popupContainer = document.createElement("div");
    popupContainer.innerHTML = popupContent;
    popupContainer.classList.add("popup-container");

    document.body.appendChild(popupContainer);
}

function closePopup() {
    var popupContainer = document.querySelector(".popup-container");
    popupContainer.remove();
}

// Funktion zur Überprüfung der Gültigkeit des Namens
function isValidName(name) {
    return /^[a-zA-Z]+$/.test(name) && name.trim() !== "";
}

// Hilfsfunktion, um gemeinsame Buchstaben zu erhalten
function getCommonLetters(str1, str2) {
    var commonLetters = [];
    for (var i = 0; i < str1.length; i++) {
        if (str2.indexOf(str1[i]) !== -1 && commonLetters.indexOf(str1[i]) === -1) {
            commonLetters.push(str1[i]);
        }
    }
    return commonLetters;
}
