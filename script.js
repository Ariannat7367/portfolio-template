let ownerName = "Arianna T."; // update the part BETWEEN the "quotes"
let userName = "YourUsername"; // same here

document.querySelectorAll(".Ariannat7367").forEach((e) => {
    e.innerHTML = ownerName;
});

document.querySelector("#github").href = "http://github.com/" + userName;
document.querySelector("#fork").href = "http://github.com/" + userName + "/" + userName + ".github.io";
