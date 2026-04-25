  const slides = [
            {
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
                title: "Mountain Peaks",
                caption: "The silence above the clouds"
            },
            {
                image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
                title: "Ocean Horizon",
                caption: "Where the sea meets the sky"
            },
            {
                image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800",
                title: "Forest Path",
                caption: "Lost in the right direction"
            },
            {
                image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800",
                title: "Desert Dunes",
                caption: "Where the wind writes stories"
            },
            {
                image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800",
                title: "Northern Lights",
                caption: "Nature's own light show"
            }
        ];

        // ── Grab elements ──
        const sliderTrack = document.getElementById("sliderTrack");
        const dotsContainer = document.getElementById("dots");
        const slider = document.getElementById("slider");
        const prevBtn = document.getElementById("prevBtn");
        const nextBtn = document.getElementById("nextBtn");

        let currentIndex = 0;
        let autoPlayTimer;

        // ── Build slides and dots from data ──
        slides.forEach((slide, index) => {

            // Create each slide
            sliderTrack.innerHTML += `
                <div class="slide">
                    <img src="${slide.image}" alt="${slide.title}">
                    <div class="slide-caption">
                        <h3>${slide.title}</h3>
                        <p>${slide.caption}</p>
                    </div>
                </div>
            `;

            // Create a dot for each slide
            dotsContainer.innerHTML += `
                <div class="dot ${index === 0 ? "active" : ""}" 
                     data-index="${index}">
                </div>
            `;
        });

        // Grab dots after they are created
        const dots = document.querySelectorAll(".dot");

        // ── Move to a specific slide ──
        function goToSlide(index) {

            // Wrap around if going past the ends
            if (index < 0) index = slides.length - 1;
            if (index >= slides.length) index = 0;

            currentIndex = index;

            // Slide the track by moving it left by currentIndex widths
            sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;

            // Update dots — remove active from all, add to current
            dots.forEach((dot) => dot.classList.remove("active"));
            dots[currentIndex].classList.add("active");
        }

        // ── Button clicks ──
        prevBtn.addEventListener("click", () => goToSlide(currentIndex - 1));
        nextBtn.addEventListener("click", () => goToSlide(currentIndex + 1));

        // ── Dot clicks ──
        dots.forEach((dot) => {
            dot.addEventListener("click", () => {
                goToSlide(Number(dot.dataset.index));
            });
        });

        // ── Keyboard navigation ──
        document.addEventListener("keydown", (e) => {
            if (e.key === "ArrowLeft") goToSlide(currentIndex - 1);
            if (e.key === "ArrowRight") goToSlide(currentIndex + 1);
        });

        // ── Auto play ──
        function startAutoPlay() {
            autoPlayTimer = setInterval(() => {
                goToSlide(currentIndex + 1);
            }, 3000);
        }

        function stopAutoPlay() {
            clearInterval(autoPlayTimer);
        }

        // Pause on hover, resume on mouse leave
        slider.addEventListener("mouseenter", stopAutoPlay);
        slider.addEventListener("mouseleave", startAutoPlay);

        // ── Start everything ──
        goToSlide(0);
        startAutoPlay();
