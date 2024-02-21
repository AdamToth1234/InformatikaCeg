document.addEventListener("DOMContentLoaded", function() {
    fetch("/spin-login", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        let respond = false
        for (email of data["data"]) {
            if (email["email"] == data["user"]) {
                respond = true
            }
        }
        if (respond) return
        showPopup();
        document.getElementById("close-btn").addEventListener("click", function() {
            closePopup();
        });
    })
});

function showPopup() {
    document.getElementById("popup-container").style.display = "block";
}

function closePopup() {
    document.getElementById("popup-container").style.display = "none";
}
