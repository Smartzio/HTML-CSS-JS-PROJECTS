// All reviews stored as an array of objects
const reviews = [
  {
    name: "James Carter",
    job: "Graphic Designer",
    photo: "images/3Review-Carousel/p2.jpg",
    text: "Modern automotive engineering relies heavily on advanced simulation software to test aerodynamics and structural integrity before physical prototypes are built. These digital models save companies significant time while radically improving overall passenger safety and fuel efficiency."
  },
  {
    name: "Sarah johnson",
    job: "web Developer",
    photo: "images/3Review-Carousel/p1.jpg",
    text: "Building responsive web applications requires a solid understanding of both structural elements and interactive logic. When developers master the Document Object Model, they can create dynamic experiences that seamlessly adapt to user inputs and varying screen sizes."
  },
  {
    name: "Emily Davis",
    job: "Product Manager",
    photo: "images/3Review-Carousel/p3.jpg",
    text: "Decentralized networks are fundamentally changing how we think about digital ownership and secure, peer-to-peer transactions across the globe. By utilizing blockchain technology, communities can build trustless systems that empower individual users rather than centralized servers."
  },
  {
    name: "Sarah johnson",
    job: "UX Designer",
    photo: "images/3Review-Carousel/p4.jpg",
    text: "The journey of learning to code is often filled with frustrating bugs and unexpected syntax errors that test your patience. However, every broken script is an opportunity to deepen your problem-solving skills and emerge as a stronger developer."
  }
];

// Track which review is currently showing
let currentIndex = 0;

// Grab all the elements that need to be updated
const photo = document.getElementById("photo");
const name = document.getElementById("name");
const job = document.getElementById("job");
const text = document.getElementById("text");

// Grab all three buttons
const prevBtn = document.getElementById("Prev");
const nextBtn = document.getElementById("Next");
const randomBtn = document.getElementById("random");

// Fills the card with the review at the given index
function showReview(index) {
  const review = reviews[index];
  photo.src = review.photo;
  name.textContent = review.name;
  job.textContent = review.job;
  text.textContent = review.text;
}

// Go to previous review
prevBtn.addEventListener("click" , () => {
  currentIndex = currentIndex === 0 ? reviews.length - 1 : currentIndex - 1;
  showReview(currentIndex);
});

// Go to next review
nextBtn.addEventListener("click" , () => {
  currentIndex = currentIndex === reviews.length - 1 ? 0 : currentIndex + 1;
  showReview(currentIndex);
});

// Jump to a random review
randomBtn.addEventListener("click" , () => {
  let randomIndex = Math.floor(Math.random() * reviews.length);
  currentIndex = randomIndex;
  showReview(currentIndex);
});

// Show the first review when the page loads
showReview(currentIndex);









