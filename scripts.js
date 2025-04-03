function continueAction() {
    window.location.href = "https://oracrypto.github.io/20java/";
}

document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll("img[data-src]");
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute("data-src");
                observer.unobserve(img);
            }
        });
    });
    lazyImages.forEach(image => imageObserver.observe(image));
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

document.addEventListener('copy', function(e) {
    e.preventDefault();
    alert('عذراً، النسخ غير مسموح!');
});

// تأخير 3 ثوانٍ قبل إزالة صفحة التحميل
window.onload = function() {
    setTimeout(function() {
        document.getElementById('loading-screen').remove(); // إزالة صفحة التحميل نهائياً
    }, 1000); // 3 ثوانٍ
};
