//Project Carousel
document.addEventListener('DOMContentLoaded', function () {
    const glide = new Glide('.glide', {
        type: 'carousel', // Carousel type
        startAt: 0, // Start at the first slide
        perView: 3, // Number of slides visible at once
        gap: 20, // Space between slides
        autoplay: 2000, // Autoplay interval in milliseconds
        hoverpause: true, // Pause autoplay on hover
        focusAt: 0, // Focus on the first slide (index starts at 0)
        keyboard: true, // Enable keyboard navigation
        bound: true, // Prevent infinite looping
        animationDuration: 800, // Animation duration in milliseconds
        direction: 'ltr', // Slide direction (left-to-right)
        breakpoints: {
            1024: {
                perView: 2, // Show 2 slides on tablets
            },
            768: {
                perView: 1, // Show 1 slide on smaller tablets
            },
            480: {
                perView: 1, // Show 1 slide on mobile
            },
        },
    });
    
    //dynamically generate bullets
    const slides = document.querySelectorAll(".glide__slides .glide-slide");
    const bulletsContainer = document.querySelector(".glide__bullets");
    bulletsContainer.innerHTML = "";//clear existing bullets

    slides.forEach((_, index)=>{
        const bullet = document.createElement('button');
        bullet.className = 'glide__bullet';
        bullet.setAttribute("data-glide-dir", `=${index}`);
        bulletsContainer.appendChild(bullet);
    });

    glide.mount();
});



//tingling and dancing animation effect on hire-me button
document.addEventListener('DOMContentLoaded', () => {
    const hireMeButton = document.querySelector('.hire-me');
    const experienceSection = document.querySelector('#experience-section');

    // Create an Intersection Observer
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add the animation class when the section is visible
                    hireMeButton.classList.add('animate');
                } else {
                    // Remove the animation class when the section is not visible
                    hireMeButton.classList.remove('animate');
                }
            });
        },
        { threshold: 0.3 } // Trigger when 50% of the section is visible
    );

    // Observe the "About Me" section
    observer.observe(experienceSection);
});


//animation on experience timeline-item
document.addEventListener("DOMContentLoaded", () => {
    const timelineItems = document.querySelectorAll(".timeline-item");
    const experienceSection = document.querySelector(".experience-section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add the animation class when the section is visible
                    timelineItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add("animate");
                        }, index * 200); // Add delay for staggered animation
                    });
                } else {
                    // Remove the animation class when the section is not visible
                    timelineItems.forEach((item) => {
                        item.classList.remove("animate");
                    });
                }
            });
        },
        { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    observer.observe(experienceSection);
});

document.addEventListener("DOMContentLoaded", () => {
    const heroLeft = document.querySelector(".hero-left");
    const heroRightImage = document.querySelector(".hero-right img");

    // Add the "animate" class to trigger the animation
    setTimeout(() => {
        heroLeft.classList.add("animate");
        heroRightImage.classList.add("animate");
    }, 200); // Add a slight delay for better effect
});