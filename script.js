// Hide Loader
window.onload = function () {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 3000);
};

// Your Birthday Letter
const message = `Happy Birthday to the girl who isn't my sister by blood but is my sister by heart.

You've been my partner in crime, my favorite foodie companion, and someone who can turn even the most ordinary day into an unforgettable memory.

Every laugh, every meal, every silly conversation with you has become a memory I'll always treasure.

Sometimes I smile thinking that if life had written our story differently, maybe I would have admired you in a completely different way. But I'm truly grateful that life made you my sister by heart, because that's a bond I'll cherish forever.

No matter where life takes us, I want you to know that I'll always be there for you—to celebrate your happiest moments, support you during the difficult ones, and continue creating countless memories together.

Thank you for being the amazing person you are.

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
