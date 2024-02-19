document.addEventListener("DOMContentLoaded", function() {
    // Ablak megjelenítése betöltéskor
    showPopup();

    // Dátum beállítása
    // setDate();

    // Ablak bezárása kattintásra
    document.getElementById("close-btn").addEventListener("click", function() {
        closePopup();
    });
});

function showPopup() {
    document.getElementById("popup-container").style.display = "block";
}

function closePopup() {
    document.getElementById("popup-container").style.display = "none";
}

// function setDate() {
//     var currentDate = new Date();
//     var formattedDate = currentDate.toDateString();
//     document.getElementById("date-display").innerText = "Mai dátum: " + formattedDate;
// }
