// منع النقر الأيمن ونسخ النص
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('هذا الإجراء غير مسموح به');
});

document.addEventListener('copy', function(e) {
    e.preventDefault();
    alert('نسخ المحتوى غير مسموح به');
});

// منع فتح أدوات المطورين
document.onkeydown = function(e) {
    if (e.keyCode == 123 || // F12
        (e.ctrlKey && e.shiftKey && e.keyCode == 73) || // Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && e.keyCode == 74) || // Ctrl+Shift+J
        (e.ctrlKey && e.keyCode == 85)) { // Ctrl+U
        e.preventDefault();
        alert('هذا الإجراء غير مسموح به');
        return false;
    }
};

// إنشاء فقاعات عائمة
const bubblesContainer = document.getElementById('bubbles');
const bubbleCount = 20;

for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    const size = Math.random() * 100 + 20;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    
    bubble.style.left = `${Math.random() * 100}%`;
    
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    bubble.style.animationDuration = `${duration}s`;
    bubble.style.animationDelay = `${delay}s`;
    
    bubblesContainer.appendChild(bubble);
}

// عرض الشرائح
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function changeSlide() {
    // إخفاء جميع الشرائح
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // الانتقال للشريحة التالية
    currentSlide = (currentSlide + 1) % totalSlides;
    
    // إظهار الشريحة الحالية
    slides[currentSlide].classList.add('active');
    
    // اختيار تأثير عشوائي مختلف لكل شريحة
    const effects = [
        'zoomIn 1.4s ease',
        'fadeInRotate 1.4s ease',
        'slideIn 1.4s ease',
        'flipIn 1.4s ease',
        'bounceIn 1.4s ease'
    ];
    const randomEffect = effects[Math.floor(Math.random() * effects.length)];
    
    // تطبيق التأثير العشوائي
    slides[currentSlide].style.animation = randomEffect;
}

// تغيير الشريحة كل 1.4 ثانية
setInterval(changeSlide, 1400);

// بدء عرض الشرائح
changeSlide();

// منع سحب الصور
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('dragstart', function(e) {
        e.preventDefault();
    });
});