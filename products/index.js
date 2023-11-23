document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("flowerVideo");

    video.play();

    video.addEventListener("ended", function () {
        video.currentTime = 0;
        video.play();
    });

    window.openModal = function (flowerName, flowerPrice) {
        const flowerModal = document.getElementById("flowerModal");
        const flowerNameElement = document.getElementById("flowerName");
        const flowerPriceElement = document.getElementById("flowerPrice");

        flowerNameElement.textContent = flowerName;
        flowerPriceElement.textContent = flowerPrice;

        flowerModal.style.display = "block";
    };


    window.closeModal = function () {
        const flowerModal = document.getElementById("flowerModal");
        flowerModal.style.display = "none";
    };
});
