//const images = document.querySelectorAll("img[data-src]")
let images = document.querySelectorAll("img[src]")

console.log(images)

function preloadImage(img) {
    const src = img.getAttribute("src");
    if (!src) {
        return;
    }
    img.setAttribute("src", img.getAttribute("data-src"))
    img.removeAttribute("data-src");
    console.log(img.src)
}

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 500px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
        }
        imgObserver.unobserve(entry.target);
    })
}, imgOptions);
images.forEach(image => {
    console.log(image)
    imgObserver.observe(image);
});