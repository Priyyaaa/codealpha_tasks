document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-image");
    var captionText = document.getElementById("caption");
    var currentIndex = 0;

    var images = document.querySelectorAll(".gallery-item");

    images.forEach(function(image, index) {
        image.addEventListener("click", function() {
            currentIndex = index;
            openModal();
            displayImage();
        });
    });

    var span = document.getElementsByClassName("close")[0];
    span.addEventListener("click", function() {
        closeModal();
    });

    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.querySelector(".prev").addEventListener("click", function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        displayImage();
    });

    document.querySelector(".next").addEventListener("click", function() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        displayImage();
    });

    function openModal() {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }

    function displayImage() {
        modalImg.src = images[currentIndex].src;
        captionText.innerHTML = images[currentIndex].alt;
    }
});
