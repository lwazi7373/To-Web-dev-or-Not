    console.log("Entertainment DOM has loaded");

    const images = document.querySelectorAll(".movie-image");

    images.forEach(image => {
    image.addEventListener("click", () => {
         const ImageID = image.getAttribute("id");
         window.location.href = `show.html?id=${ImageID}`;
  });
});
