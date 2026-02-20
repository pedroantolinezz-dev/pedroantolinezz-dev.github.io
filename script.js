const options = ["Cybersecurity Analyst.", "SOC Tier 1.", "Software Engineer.", "Pentester."];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
    const fullText = options[i];
    if (isDeleting) {
        currentText = fullText.substring(0, j - 1);
        j--;
    } else {
        currentText = fullText.substring(0, j + 1);
        j++;
    }

    document.getElementById("typewriter").innerHTML = currentText;

    let typeSpeed = 100;
    if (isDeleting) typeSpeed /= 2;

    if (!isDeleting && j === fullText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % options.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

window.onload = type;