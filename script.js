// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.5, // Trigger animations when 50% of the section is visible
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const section = entry.target;

        // Home Section Animation
        if (section.id === "home") {
          gsap.from(".home-content img", {
            duration: 1,
            opacity: 0,
            scale: 0.8,
            ease: "power2.out",
          });
          gsap.from(".home-content h1", {
            duration: 1.2,
            opacity: 0,
            y: -50,
            delay: 0.3,
            ease: "power2.out",
          });
          gsap.from(".home-content p", {
            duration: 1.4,
            opacity: 0,
            x: 100,
            delay: 0.6,
            ease: "power2.out",
          });
        }

        // About Me Section Animation
        if (section.id === "about-me") {
          gsap.from(".about-image img", {
            duration: 1.2,
            opacity: 0,
            x: -100,
            ease: "power2.out",
          });
          gsap.from(".about-text", {
            duration: 1.4,
            opacity: 0,
            x: 100,
            delay: 0.4,
            ease: "power2.out",
          });
        }

        // Skills Section Animation
        if (section.id === "skills") {
          gsap.from(".skill", {
            duration: 0.8,
            opacity: 0,
            y: 50,
            stagger: 0.2, // Add a delay between each skill animation
            ease: "power2.out",
          });
          gsap.to(".circle", {
            duration: 1.5,
            onStart: function () {
              document.querySelectorAll(".circle").forEach((circle) => {
                const percentage = circle.getAttribute("data-skill");
                circle.style.background = `conic-gradient(#3498db ${percentage}%, #ccc ${percentage}%)`;
              });
            },
          });
        }

        // Education Section Animation
        if (section.id === "education") {
          gsap.from("#education table tbody tr", {
            duration: 1,
            opacity: 0,
            y: 30,
            stagger: 0.3, // Animate rows one by one
            ease: "power2.out",
          });
        }

        // Projects Section Animation
        if (section.id === "projects") {
          gsap.from(".project-card", {
            duration: 1.2,
            opacity: 0,
            y: 30,
            stagger: 0.3, // Animate cards one by one
            ease: "power2.out",
          });
        }

        // Certifications Section Animation
        if (section.id === "certifications") {
          gsap.from(".certification-circle", {
            duration: 1.2,
            opacity: 0,
            scale: 0.6,
            stagger: 0.3, // Animate circles one by one
            ease: "power2.out",
          });
          gsap.from(".certification-circle p", {
            duration: 1,
            opacity: 0,
            y: 20,
            stagger: 0.4,
            delay: 0.5,
            ease: "power2.out",
          });
        }

        // Achievements Section Animation
        if (section.id === "achievements") {
          gsap.from(".achievement", {
            duration: 1,
            opacity: 0,
            y: 50,
            stagger: 0.3, // Animate achievements one by one
            ease: "power2.out",
          });
        }

        // Contact Me Section Animation
        if (section.id === "contact-me") {
          gsap.from(".contact-info", {
            duration: 1.2,
            opacity: 0,
            x: -100,
            ease: "power2.out",
          });
          gsap.from(".contact-image img", {
            duration: 1.2,
            opacity: 0,
            x: 100,
            delay: 0.4,
            ease: "power2.out",
          });
        }
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observe each section
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => observer.observe(section));
});
