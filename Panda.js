const forgiveBtn = document.getElementById("forgiveBtn");

const answer = document.getElementById("answer");

const heartsContainer =
    document.getElementById("hearts-container");


/* Button Click */

forgiveBtn.addEventListener("click", function () {

    answer.classList.remove("hidden");

    forgiveBtn.innerHTML =
        "Thank You My Love ❤️";

    createManyHearts();

    answer.scrollIntoView({
        behavior: "smooth"
    });

});


/* Create One Heart */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    const heartList = [
        "❤️",
        "💕",
        "💖",
        "💗",
        "💓",
        "💘",
        "🥰"
    ];

    const randomHeart =
        Math.floor(
            Math.random() * heartList.length
        );

    heart.innerHTML =
        heartList[randomHeart];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (20 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (3 + Math.random() * 4) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(function () {

        heart.remove();

    }, 7000);
}


/* Many Hearts */

function createManyHearts() {

    for (let i = 0; i < 30; i++) {

        setTimeout(function () {

            createHeart();

        }, i * 100);
    }
}


/* Background Hearts */

setInterval(function () {

    createHeart();

}, 800);