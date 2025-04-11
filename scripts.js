<script>




     
        function continueAction() {
            window.location.href = "https://oracrypto.github.io/20java/";
        }
    </script>
   <script>
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
</script>

  <script>
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
</script>
  
  <script type='text/javascript'>
//<![CDATA[
var uri = window.location.toString();
if (uri.indexOf("%3D","%3D") > 0) {
var clean_uri = uri.substring(0, uri.indexOf("%3D"));
window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("%3D%3D","%3D%3D") > 0) {
var clean_uri = uri.substring(0, uri.indexOf("%3D%3D"));
window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("&m=1","&m=1") > 0) {
var clean_uri = uri.substring(0, uri.indexOf("&m=1"));
window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("?m=1","?m=1") > 0) {
var clean_uri = uri.substring(0, uri.indexOf("?m=1"));
window.history.replaceState({}, document.title, clean_uri);
}
//]]>
</script>
       <script>document.addEventListener('click', function(event) {
    if (document.activeElement && (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA")) {  }window.onload = function() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera; const isTelegram = userAgent.toLowerCase().includes("telegram"); if (!isTelegram) {
          window.location.href = "https://t.me/rewallets_bot"; }    }; </script>
    <script>
  // تأخير 3 ثوانٍ قبل إزالة صفحة التحميل
window.onload = function() {
    setTimeout(function() {
        document.getElementById('loading-screen').remove(); // إزالة صفحة التحميل نهائياً
    }, 1000); // 3 ثوانٍ
};
      
      </script>
