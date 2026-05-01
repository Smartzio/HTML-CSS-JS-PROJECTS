// slide data
const slides = [
  {
    Image: "images/10image-Slider/img1.jpg",
    title: "Power bike",
    caption: "The Ghost rider's lead"
  },
  {
    Image: "images/10image-Slider/img2.jpg",
    title: "Cyber Legend",
    caption: "The master of coding and security"
  },
  {
    Image: "images/10image-Slider/img3.jpg",
    title: "Captain America",
    caption: "The legend of the military"
  },
  {
    Image: "images/10image-Slider/img4.jpg",
    title: "Spider Man",
    caption: "The super-hero that i love soo much"
  },
  {
    Image: "images/10image-Slider/img5.jpg",
    title: "The Auto Car",
    caption: "The ride will make you astonished"
  },
];

// Grab elements
const slider = document.getElementById("slider");
const sliderTrack = document.getElementById("sliderTrack");
const dotsContainer = document.getElementById("dots")
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
let autoPlayTimer;

// Build slides and dots from data
slides.forEach((slide, index) => {

  //Create each slides
  sliderTrack.innerHTML += `
    <div class= "slide">
      <img src="${slide.Image}" alt="${slide.title}" style = "color: white;">
      <div class="slideCaption">
        <h3>${slide.title}</h3>
        <p>${slide.caption}</p>
      </div>
    </div>
  `;

  //Create a dot for each slide
  dotsContainer.innerHTML += `
    <div class="dot ${index === 0 ? "active" : ""}"
        data-index="${index}">
    </div>
  `;
});

//Grab dots after they are created
const dots = document.querySelectorAll(".dot");

// Move to specific slide
function goToSlide(index) {

  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  currentIndex = index;

  //Slide the track by moving it left by currentIndex widths
  sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;

  //Update dots - remove active from all , add to current
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

//Button clicks
prevBtn.addEventListener("click", () => goToSlide(currentIndex - 1));
nextBtn.addEventListener("click", () => goToSlide(currentIndex + 1));

//Dot clicks
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    goToSlide(Number(dot.dataset.index));
  });
});

//Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") goToSlide(currentIndex - 1);
  if (e.key === "ArrowRight") goToSlide(currentIndex + 1);
});

//Auto Play
function startAutoPlay() {
  autoPlayTimer = setInterval(() => {
    goToSlide(currentIndex + 1);
  }, 3000);
}
function stopAutoPlay() {
  clearInterval(autoPlayTimer);
}

//Pause on mouse hover and remove on mouse leave
slider.addEventListener("mouseenter", stopAutoPlay);
slider.addEventListener("mouseleave", startAutoPlay);

goToSlide(0);
startAutoPlay();

