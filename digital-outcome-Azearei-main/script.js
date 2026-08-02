// colour palette theme switcher
const themes = ["blue", "black", "white", "violet"];
let currentThemeIndex = 0;
const btn = document.getElementById("themeBtn");
function setTheme(theme) {
  document.body.classList.remove(...themes);
  document.body.classList.add(theme);
  localStorage.setItem("theme", theme);
}
const savedTheme = localStorage.getItem("theme");
if (savedTheme && themes.includes(savedTheme)) {
  currentThemeIndex = themes.indexOf(savedTheme);
  setTheme(savedTheme);
} else {
  setTheme(themes[0]);
}
const themeMenu = document.getElementById("themeMenu");
btn.addEventListener("click", () => {
  themeMenu.classList.toggle("show");
});
document.querySelectorAll(".theme-color").forEach(box => {
  box.addEventListener("click", () => {
    const selectedTheme = box.dataset.theme;
    setTheme(selectedTheme);
    currentThemeIndex = themes.indexOf(selectedTheme);
    themeMenu.classList.remove("show");
  });
});
  
// hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

  
const mainImage = document.getElementById("mainImage");

if (mainImage) {

// image gallery homepage
const images = [
    {
    src: "aimage/hp.h1.webp", 
    title: "Machine learning",
    description: "This type of AI looks at large amounts of data and learns how to make fast and accurate predictions based on that data."
    },
    {
    src: "aimage/hp.h2.webp",
    title: "Deep learning",
    description: "A type of machine learning. This type helps computers operate much like the human brain. It uses several layers of “thought” to recognize patterns and learn new information."
    },
    {
    src: "aimage/hp.h3.webp",
    title: "Generative AI",
    description: "A human can use generative AI to create text, videos, images, and more. It is based on deep learning."
    },
];
let current = 0;
const mainImage = document.getElementById("mainImage");
const imageTitle = document.getElementById("imageTitle");
const imageDescription = document.getElementById("imageDescription");
const leftPreview = document.getElementById("leftPreview");
const rightPreview = document.getElementById("rightPreview");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
// update all three images
function updateGallery() {
    mainImage.src = images[current].src;
    imageTitle.textContent = images[current].title;
    imageDescription.textContent = images[current].description;
    const leftIndex = (current - 1 + images.length) % images.length;
    const rightIndex = (current + 1) % images.length;
    leftPreview.src = images[leftIndex].src;
    rightPreview.src = images[rightIndex].src;
}
// next button
document.getElementById("next").addEventListener("click", () => {
    mainImage.style.transform = "translateX(-50px)";
    mainImage.style.opacity = "0";
    // right preview leans toward the center
    rightPreview.style.transform = "translateX(-25px) scale(1.12)";
    rightPreview.style.opacity = "1";
    // left preview follows the same motion
    leftPreview.style.transform = "translateX(-25px) scale(1.05)";
    leftPreview.style.opacity = "0.6";

    setTimeout(() => {
        current = (current + 1) % images.length;
        updateGallery();
        // reset the NEW right preview
        rightPreview.style.transition = "none";
        rightPreview.style.transform = "translateX(20px) scale(0.92)";
        rightPreview.style.transition = "transform 0.45s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease";
        rightPreview.style.opacity = "0.6";
        rightPreview.offsetHeight;
        requestAnimationFrame(() => {
            rightPreview.style.transform = "translateX(0) scale(1)";
        });
        // reset the NEW left preview
        leftPreview.style.transition = "none";
        leftPreview.style.transform = "translateX(20px) scale(0.95)";
        leftPreview.style.transition = "transform 0.45s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease";
        leftPreview.offsetHeight;
        requestAnimationFrame(() => {
            leftPreview.style.transform = "translateX(0) scale(1)";
        });
        mainImage.style.transform = "translateX(50px)";
        requestAnimationFrame(() => {
            mainImage.style.transform = "translateX(0)";
            mainImage.style.opacity = "1";
        });
    }, 300);
});
// prev button
document.getElementById("prev").addEventListener("click", () => {
    mainImage.style.transform = "translateX(50px)";
    mainImage.style.opacity = "0";
    // left preview leans toward the center
    leftPreview.style.transform = "translateX(25px) scale(1.12)";
    leftPreview.style.opacity = "1";
    // right preview follows the same motion
    rightPreview.style.transform = "translateX(25px) scale(1.05)";
    rightPreview.style.opacity = "0.6";
    setTimeout(() => {
        current = (current - 1 + images.length) % images.length;
        updateGallery();
        // reset the NEW left preview
        leftPreview.style.transition = "none";
        leftPreview.style.transform = "translateX(-20px) scale(0.92)";
        leftPreview.style.transition = "transform 0.45s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease";
        leftPreview.style.opacity = "0.6";
        leftPreview.offsetHeight;
        requestAnimationFrame(() => {
            leftPreview.style.transform = "translateX(0) scale(1)";
        });
        // reset the NEW right preview
        rightPreview.style.transition = "none";
        rightPreview.style.transform = "translateX(-20px) scale(0.95)";
        rightPreview.style.transition = "transform 0.45s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease";
        rightPreview.offsetHeight;
        requestAnimationFrame(() => {
            rightPreview.style.transform = "translateX(0) scale(1)";
        });
        mainImage.style.transform = "translateX(-50px)";
        requestAnimationFrame(() => {
            mainImage.style.transform = "translateX(0)";
            mainImage.style.opacity = "1";
        });
    }, 300);
});
// click previews to navigate
leftPreview.addEventListener("click", () => {
    document.getElementById("prev").click();
});
rightPreview.addEventListener("click", () => {
    document.getElementById("next").click();
});
// lightbox
const closeLightbox = document.getElementById("closeLightbox");
// open lightbox
mainImage.addEventListener("click", () => {
    lightboxImage.src = mainImage.src;
    lightbox.style.display = "flex";
    requestAnimationFrame(() => {
        lightbox.classList.add("show");
    });
    // disable scrolling
    document.body.classList.add("no-scroll");
});
// function to close lightbox
function closeImage() {
    lightbox.classList.remove("show");
    setTimeout(() => {
        lightbox.style.display = "none";
    }, 300);
    // enable scrolling again
    document.body.classList.remove("no-scroll");
}
// close with X button
closeLightbox.addEventListener("click", closeImage);
// close when clicking outside image
lightbox.addEventListener("click", closeImage);
// prevent clicking image itself from closing
lightboxImage.addEventListener("click", (e) => {
    e.stopPropagation();
});
// initial setup
updateGallery();
}

//history gallery
const historyMainImage = document.getElementById("historymainImage");
if (historyMainImage) {
const historyImages = [
    {
        src: "aimage/p2.h1.jpg",
        title: "1930s–1940s",
        description: "Alan Turing developed the idea that machines could follow instructions to solve problems. His work laid the foundation for modern computing."
    },
    {
        src: "aimage/p2.h2.jpeg",
        title: "1950",
        description: "Turing wrote a paper asking the famous question: “Can machines think?” He also proposed the Turing Test, which checks whether a machine can respond in a way that seems human."
    },
    {
        src: "aimage/p2.h3.webp",
        title: "1956",
        description: "A group of researchers met at the Dartmouth College summer workshop. This event is considered the beginning of AI as a formal field, and John McCarthy introduced the term 'artificial intelligence'."
    }
];

let historyCurrent = 0;
const historyMainImage = document.getElementById("historymainImage");
const historyImageTitle = document.getElementById("historyImageTitle");
const historyImageDescription = document.getElementById("historyImageDescription");
const historyLeftPreview = document.getElementById("historyleftPreview");
const historyRightPreview = document.getElementById("historyrightPreview");
const historyLightbox = document.getElementById("historylightbox");
const historyLightboxImage = document.getElementById("historylightboxImage");
const historyCloseLightbox = document.getElementById("historycloseLightbox");
// update gallery
function updateHistoryGallery() {
    historyMainImage.src = historyImages[historyCurrent].src;
    historyImageTitle.textContent = historyImages[historyCurrent].title;
    historyImageDescription.textContent = historyImages[historyCurrent].description;
    const leftIndex =
        (historyCurrent - 1 + historyImages.length) % historyImages.length;
    const rightIndex =
        (historyCurrent + 1) % historyImages.length;
    historyLeftPreview.src = historyImages[leftIndex].src;
    historyRightPreview.src = historyImages[rightIndex].src;
}
// next
document.getElementById("historynext").addEventListener("click", () => {

    historyMainImage.style.transform = "translateX(-50px)";
    historyMainImage.style.opacity = "0";
    historyRightPreview.style.transform = "translateX(-25px) scale(1.12)";
    historyRightPreview.style.opacity = "1";
    historyLeftPreview.style.transform = "translateX(-25px) scale(1.05)";
    historyLeftPreview.style.opacity = "0.6";
    setTimeout(() => {
        historyCurrent =
            (historyCurrent + 1) % historyImages.length;
        updateHistoryGallery();
        historyRightPreview.style.transition = "none";
        historyRightPreview.style.transform = "translateX(20px) scale(0.92)";
        historyRightPreview.style.transition =
            "transform 0.45s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease";
        historyRightPreview.style.opacity = "0.6";
        historyRightPreview.offsetHeight;
        requestAnimationFrame(() => {
            historyRightPreview.style.transform = "translateX(0) scale(1)";
        });
        historyLeftPreview.style.transition = "none";
        historyLeftPreview.style.transform = "translateX(20px) scale(0.95)";
        historyLeftPreview.style.transition =
            "transform 0.45s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease";
        historyLeftPreview.offsetHeight;
        requestAnimationFrame(() => {
            historyLeftPreview.style.transform = "translateX(0) scale(1)";
        });
        historyMainImage.style.transform = "translateX(50px)";
        requestAnimationFrame(() => {
            historyMainImage.style.transform = "translateX(0)";
            historyMainImage.style.opacity = "1";
        });
    }, 300);
});
// previous
document.getElementById("historyprev").addEventListener("click", () => {
    historyMainImage.style.transform = "translateX(50px)";
    historyMainImage.style.opacity = "0";
    historyLeftPreview.style.transform = "translateX(25px) scale(1.12)";
    historyLeftPreview.style.opacity = "1";
    historyRightPreview.style.transform = "translateX(25px) scale(1.05)";
    historyRightPreview.style.opacity = "0.6";
    setTimeout(() => {
        historyCurrent =
            (historyCurrent - 1 + historyImages.length) % historyImages.length;
        updateHistoryGallery();
        historyLeftPreview.style.transition = "none";
        historyLeftPreview.style.transform = "translateX(-20px) scale(0.92)";
        historyLeftPreview.style.transition =
            "transform 0.45s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease";
        historyLeftPreview.style.opacity = "0.6";
        historyLeftPreview.offsetHeight;
        requestAnimationFrame(() => {
            historyLeftPreview.style.transform = "translateX(0) scale(1)";
        });
        historyRightPreview.style.transition = "none";
        historyRightPreview.style.transform = "translateX(-20px) scale(0.95)";
        historyRightPreview.style.transition =
            "transform 0.45s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease";
        historyRightPreview.offsetHeight;
        requestAnimationFrame(() => {
            historyRightPreview.style.transform = "translateX(0) scale(1)";
        });
        historyMainImage.style.transform = "translateX(-50px)";
        requestAnimationFrame(() => {
            historyMainImage.style.transform = "translateX(0)";
            historyMainImage.style.opacity = "1";
        });
    }, 300);
});
// preview clicks
historyLeftPreview.addEventListener("click", () => {
    document.getElementById("historyprev").click();
});
historyRightPreview.addEventListener("click", () => {
    document.getElementById("historynext").click();
});
//lightbox
historyMainImage.addEventListener("click", () => {
    historyLightboxImage.src = historyMainImage.src;
    historyLightbox.style.display = "flex";
    requestAnimationFrame(() => {
        historyLightbox.classList.add("show");
    });
    document.body.classList.add("no-scroll");
});

function closeHistoryImage() {
    historyLightbox.classList.remove("show");
    setTimeout(() => {
        historyLightbox.style.display = "none";
    }, 300);
    document.body.classList.remove("no-scroll");
}
historyCloseLightbox.addEventListener("click", closeHistoryImage);
historyLightbox.addEventListener("click", closeHistoryImage);
historyLightboxImage.addEventListener("click", (e) => {
    e.stopPropagation();
});
// Initial setup
updateHistoryGallery();
}












