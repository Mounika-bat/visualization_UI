document.addEventListener("DOMContentLoaded", function () {

    console.log("InsightHub Analytics UI Collection loaded successfully.");

    // Template cards hover effect
    const cards = document.querySelectorAll(".template-card");

    cards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {
            this.style.zIndex = "5";
        });

        card.addEventListener("mouseleave", function () {
            this.style.zIndex = "1";
        });

    });


    // Smooth navigation
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId !== "#") {

                const target = document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });


    // Simple welcome message
    console.log("Welcome to InsightHub!");

});