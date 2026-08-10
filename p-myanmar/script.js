// topic section carousel
new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    // This is pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints: {
      0: {
          slidesPerView: 1
      },
      768: {
          slidesPerView: 2
      },
      1024: {
          slidesPerView: 3
      },
    }
  });

  const sliderTabs = document.querySelectorAll(".impact-tab");
  const sliderIndicator = document.querySelector(".impact-indicator");
  const sliderControls = document.querySelector(".impact-controls");

  const updateIndicator = (tab,index) => {
    sliderIndicator.style.transform = `translateX(${tab.
      offsetLeft - 20}px)`;
      sliderIndicator.style.width = `${tab.getBoundingClientRect
      ().width}px`;
      // getBoundingClientRect().width returns the width of an element. 

// Calcuate the scroll postion and scroll smoothly
      const scrollLeft = sliderTabs[index].offsetLeft - sliderControls.
      offsetWidth / 2 + sliderTabs[index].offsetWidth / 2;
      sliderControls.scrollTo({ left: scrollLeft, behavior: "smooth" });
  };

  // Initialize swiper instance
  const swiper = new Swiper(".impact-container", {
    effect: "fade",
    speed: 1300,
    // autoplay: { delay:4000},

    navigation: {
      prevEl: "#impact-prev",
      nextEl: "#impact-next"
    },

    on: {
      // Update the indicator on slide change
      slideChange: () => {
        const currentTabIndex = [...sliderTabs].indexOf(sliderTabs[swiper.activeIndex]);
        updateIndicator(sliderTabs[swiper.activeIndex],
          currentTabIndex);
      },
      reachEnd: () => swiper.autoplay.stop()
    }

  });

  // update the slide and indicator on tab click
  sliderTabs.forEach((tab,index) => {
    tab.addEventListener("click",() => {
      swiper.slideTo(index);
      updateIndicator(tab,index);
    });
  });

  updateIndicator(sliderTabs[0], 0);
  window.addEventListener ("resize", () => updateIndicator
  (sliderTabs[swiper.activeIndex], 0));
  


