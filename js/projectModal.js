document.addEventListener("DOMContentLoaded", () => {
  const projectModal = document.querySelector(".project-modal");
  const projectsContent = document.querySelectorAll(
    ".cssEasy-modal, .ecm-modal, .idiomus-modal, .pageasy-modal"
  );

  const buttonsProject = document.querySelectorAll("[data-project-modal]");

  projectsContent.forEach((content) => {
    content.style.display = "none";
    gsap.set(content, {
      opacity: 0,
      pointerEvents: "none",

      transformOrigin: "top center",
    });
  });

  let isModalOpen = false;
  console.log(isModalOpen);

  function openProjectModal(id) {
    if (id) {
      isModalOpen = true;
      projectsContent.forEach((content) => {
        let modalID = content.getAttribute("id");
        if (id === modalID) {
          projectModal.classList.add("opened");
          content.style.display = "block";
          gsap.to(content, {
            opacity: 1,
            pointerEvents: "all",

            delay: 0.5,
            transformOrigin: "top center",
            duration: 1,
            ease: "power4.out",
          });
          content.classList.add("opened-project");
          let swiper = new Swiper(".screenUISlider", {
            direction: "horizontal",
            centeredSlides: true,
            slidesPerView: 1.2,
            loop: true,
            autoplay: {
              delay: 4000,
            },
            breakpoints: {
              768: {
                slidesPerView: 1.4,
              },
            },
          });
        } else {
          content.style.display = "none";
        }
      });
    }
  }

  buttonsProject.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      openProjectModal(button.getAttribute("data-project-modal"));
    });
  });

  function closeProjectModal() {
    if (isModalOpen) {
      projectsContent.forEach((content) => {
        if (content.classList.contains("opened-project")) {
          content.classList.remove("opened-project");
          gsap.to(content, {
            opacity: 0,
            pointerEvents: "none",
            transformOrigin: "top center",
            duration: 1,
            ease: "power4.out",
          });
          projectModal.classList.remove("opened");
          setTimeout(() => {
            content.style.display = "none";
          }, 1000);
        }
      });
    }
  }

  const closeModalButtons = document.querySelectorAll(".closeModal");

  closeModalButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      closeProjectModal();
    });
  });

  document.addEventListener("keydown", (evt) => {
    evt = evt || window.event;
    if (evt.key == "Escape") {
      closeProjectModal();
    }
  });

  projectModal.addEventListener("click", (e) => {
    projectsContent.forEach((content) => {
      if (!content.contains(e.target)) {
        closeProjectModal();
      }
    });
  });
});
