

let slides = [
    {
        title: "Pic 1",
        image: "/images/14.jpg",

        thumb: {
            number: "01",
            title: "Exotic Jellyfish",

        },
    },
    {
        title: "Pic 2",
        image: "/images/14.jpg",

        thumb: {
            number: "02",
            title: "Deep Sea Dive",
            subtitle: "EVERY FRIDAY | 8PM",
        },
    },
    {
        title: "Pic 3",
        image: "/images/15.jpg",
        thumb: { number: "03", title: "In Plain Sight", subtitle: "JULY 27 | 6PM" },
    },
];
let currentIndex = 0;
let Title = document.querySelector(".title");
let Time = document.querySelector(".actions .text-secondary");
let Hero = document.querySelector("#hero");
let sliderControler = document.querySelector(".slider-controler");

slides.forEach((slide, index) => {
    let { thumb } = slide;
    let thumbElement = document.createElement("div");
    thumbElement.classList.add("slider-thumb");
    if (index === 0) {
        thumbElement.classList.add("active");
    }
    thumbElement.innerHTML = `
  <div class="slider-thumb-left">
            <h2>${thumb.number}</h2>
          </div>
          <div class="slider-thumb-right">
            <h3 class="thumb-title">${thumb.title}</h3>
            
  </div>
  `;
    thumbElement.id = `thumb-${thumb.number}`;
    sliderControler.appendChild(thumbElement);
});
let thumbs = document.querySelectorAll(".slider-thumb");
let animationInterval;
const interval = 6000;

function updateSlide(index) {
    let { title, image, thumb } = slides[index];
    Title.innerText = title;
    // Time.innerText = time;
    Hero.style.transition = "background 0.5s ease-in-out";
    Hero.style.background = `url("${image}") no-repeat top/cover`;
    Hero.offsetHeight;
    thumbs.forEach((thumb) => {
        thumb.classList.remove("active");
    });
    document.getElementById(`thumb-${thumb.number}`).classList.add("active");
    currentIndex = index;
}

function startAnimation() {
    animationInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlide(currentIndex);
    }, interval);
}
function stopAnimation() {
    clearInterval(animationInterval);
}

thumbs.forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
        stopAnimation();
        updateSlide(index);

        setTimeout(() => {
            stopAnimation();
            startAnimation();
        }, 500);
    });
});

startAnimation();
