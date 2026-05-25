// Language switching mechanism
function setLanguage(lang) {
    const idElements = document.querySelectorAll('.lang-id');
    const enElements = document.querySelectorAll('.lang-en');
    
    const btnId = document.getElementById('btn-lang-id');
    const btnEn = document.getElementById('btn-lang-en');

    if (lang === 'id') {
        idElements.forEach(el => el.classList.remove('hidden-lang'));
        enElements.forEach(el => el.classList.add('hidden-lang'));
        
        btnId.classList.remove('text-gray-300');
        btnId.classList.add('text-logoRed');
        btnEn.classList.remove('text-logoRed');
        btnEn.classList.add('text-gray-300');
        
        document.documentElement.lang = "id";
    } else {
        idElements.forEach(el => el.classList.add('hidden-lang'));
        enElements.forEach(el => el.classList.remove('hidden-lang'));
        
        btnId.classList.remove('text-logoRed');
        btnId.classList.add('text-gray-300');
        btnEn.classList.remove('text-gray-300');
        btnEn.classList.add('text-logoRed');
        
        document.documentElement.lang = "en";
    }
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

function toggleMobileMenu() {
    mobileMenu.classList.add('hidden');
}

// Hero Slider logic
let currentSlide = 1;
const totalSlides = 2;

function showSlide(index) {
    const slide1 = document.getElementById('slide-1');
    const slide2 = document.getElementById('slide-2');
    
    if (index === 1) {
        slide1.classList.remove('opacity-0');
        slide1.classList.add('opacity-100', 'z-10');
        slide2.classList.add('opacity-0');
        slide2.classList.remove('opacity-100', 'z-10');
    } else {
        slide2.classList.remove('opacity-0');
        slide2.classList.add('opacity-100', 'z-10');
        slide1.classList.add('opacity-0');
        slide1.classList.remove('opacity-100', 'z-10');
    }
}

function nextSlide() {
    currentSlide = currentSlide === totalSlides ? 1 : currentSlide + 1;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = currentSlide === 1 ? totalSlides : currentSlide - 1;
    showSlide(currentSlide);
}

// Auto play slider
let sliderInterval = setInterval(nextSlide, 6000);

// Reset interval on manual controls
function resetSliderTimer() {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(nextSlide, 6000);
}

document.querySelectorAll('button[onclick*="Slide"]').forEach(btn => {
    btn.addEventListener('click', resetSliderTimer);
});

// SCROLL TO TOP LOGIC (Tambahan Baru)
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
    // Tombol akan muncul saat pengunjung scroll ke bawah lebih dari 300px
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.remove("opacity-0", "invisible");
        scrollToTopBtn.classList.add("opacity-100", "visible");
    } else {
        scrollToTopBtn.classList.remove("opacity-100", "visible");
        scrollToTopBtn.classList.add("opacity-0", "invisible");
    }
});

// Initialize with defaults
window.addEventListener('DOMContentLoaded', () => {
    setLanguage('id'); // Default language is Indonesian
});