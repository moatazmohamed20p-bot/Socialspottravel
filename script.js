// تحديث سنة حقوق النشر تلقائياً
document.addEventListener('DOMContentLoaded', function() {
    // إضافة السنة الحالية في التذييل
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    // تسهيل التنقل للمناطق الداخلية (سلس وسريع)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // إضافة تأثير بسيط عند التمرير لأزرار الواتساب
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn');
    whatsappButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // رسالة ترحيب في الكونسول (للمطور)
    console.log("🌍 موقع سبوت ترافيل يعمل بنجاح! | Spot Travel");
});