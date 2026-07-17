// Hide Loader
window.onload = function () {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 3000);
};

// Your Birthday Letter
const message = `Happy Birthday to the girl who isn't my sister by blood but is my sister by heart.

There's one thought that always makes me smile: If only I had been older than you... maybe I would have tried my luck and fallen hopelessly in love with you. But life had a different story for us, and I'm grateful because it still gave me you.

No matter where life takes us, I want you to know that I'll always be there for you—to celebrate your happiest moments, support you during the difficult ones, and continue creating countless memories together.

Thank you for being the amazing person you are. Keep smiling, keep chasing your dreams, and never stop being the beautiful soul that makes everyone's life brighter.

Here's to more food adventures, more crime-partner moments, more laughter, and a lifetime of friendship.

Happy Birthday, my non-blood sister, my forever friend. ❤️

Happy Birthday, my Anamcara ❤️

You'll always be family to me.

Love,
Naveen ❤️`;

let i = 0;

function typeWriter() {
    if (i < message.length) {
        document.getElementById("typing").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 35);
    }
}

document.getElementById("enterBtn").addEventListener("click", () => {
    document.querySelector(".about").scrollIntoView({
        behavior: "smooth"
    });

    if (i === 0) {
        typeWriter();
    }

    confetti({
        particleCount: 250,
        spread: 180,
        origin: {
            y: 0.6
        }
    });
});

// Gift Button
document.getElementById("giftBtn").addEventListener("click", () => {

    document.getElementById("finalMessage").style.display = "block";

    // Fireworks
    const duration = 6000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 8,
            angle: 60,
            spread: 70,
            origin: {
                x: 0
            }
        });

        confetti({
            particleCount: 8,
            angle: 120,
            spread: 70,
            origin: {
                x: 1
            }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();

});

// Floating Hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration = (Math.random() * 4 + 4) + "s";

    heart.style.fontSize = (Math.random() * 20 + 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);

}

setInterval(createHeart, 500);

// Image Popup


// Auto Confetti Every 15 Seconds
setInterval(() => {

    if (typeof confetti === "function") {
        confetti({
            particleCount: 120,
            spread: 120,
            origin: {
                y: 0.6
            }
        });
    }

}, 15000);

// Music (optional)
const music = document.getElementById("music");

if (music) {

    document.addEventListener("click", () => {

        music.play().catch(() => {});

    }, { once: true });

}

// Smooth Fade-In Animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 1s ease";

    observer.observe(section);

});

console.log("🎂 Happy Birthday Website Loaded Successfully ❤️");
