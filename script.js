// دالة لتبديل اللغة
function toggleLanguage() {
    const htmlElement = document.documentElement;
    const langBtn = document.getElementById('langBtn');
    const langText = document.getElementById('langText');
    
    if (htmlElement.lang === 'ar') {
        htmlElement.lang = 'fr';
        htmlElement.dir = 'ltr';
        langText.textContent = 'AR';
        
        document.querySelectorAll('[data-fr]').forEach(element => {
            element.textContent = element.getAttribute('data-fr');
        });
    } else {
        htmlElement.lang = 'ar';
        htmlElement.dir = 'rtl';
        langText.textContent = 'FR';
        
        document.querySelectorAll('[data-ar]').forEach(element => {
            element.textContent = element.getAttribute('data-ar');
        });
    }
    
    // إعادة تهيئة السلايدرات
    setTimeout(() => {
        initSliders();
    }, 200);
}

// إنشاء بطاقات حسن
function createHassanCards() {
    const isArabic = document.documentElement.lang === 'ar';
    const cards = [];
    
    for (let i = 1; i <= 4; i++) {
        const titles = {
            1: isArabic ? 'أخصائي علاج طبيعي' : 'Spécialiste en Kinésithérapie',
            2: isArabic ? 'أخصائي تدليك طبي' : 'Spécialiste en Massage Médical',
            3: isArabic ? 'معالج بالكؤوس' : 'Thérapeute par Ventouses',
            4: isArabic ? 'مقدم رعاية منزلية' : 'Soignant à Domicile'
        };
        
        cards.push(`
            <div class="swiper-slide">
                <div class="card-real">
                    <img src="assets/cards/hassan-card${i}.jpg" 
                         alt="${isArabic ? 'بطاقة تعريفية' : 'Carte Identification'} ${i}"
                         class="card-image"
                         onerror="this.src='https://placehold.co/300x400/d32f2f/white?text=${isArabic ? 'بطاقة+حسن' : 'Hassan+Card'}+${i}';">
                    <div class="card-info">
                        <h4>${isArabic ? 'حسن تجرامت' : 'Tajerramat Hassan'}</h4>
                        <p>${titles[i]}</p>
                        <p class="card-center">${isArabic ? 'مركز الرحمة للترويض الطبي' : 'Centre Errahma de Kinésithérapie'}</p>
                    </div>
                </div>
            </div>
        `);
    }
    
    return cards.join('');
}

// إنشاء بطاقات بشرى
function createBouchraCards() {
    const isArabic = document.documentElement.lang === 'ar';
    const cards = [];
    
    for (let i = 1; i <= 2; i++) {
        cards.push(`
            <div class="swiper-slide">
                <div class="card-real">
                    <img src="assets/cards/bouchra-card${i}.jpg" 
                         alt="${isArabic ? 'بطاقة تعريفية' : 'Carte Identification'} ${i}"
                         class="card-image"
                         onerror="this.src='https://placehold.co/300x400/607d8b/white?text=${isArabic ? 'بطاقة+بشرى' : 'Bouchra+Card'}+${i}';">
                    <div class="card-info">
                        <h4>${isArabic ? 'بشرى الشداقي' : 'Chadaki Bouchra'}</h4>
                        <p>${isArabic ? 'أخصائية تدليك طبي' : 'Spécialiste en Massage Médical'}</p>
                        <p class="card-center">${isArabic ? 'مركز الرحمة للترويض الطبي' : 'Centre Errahma de Kinésithérapie'}</p>
                    </div>
                </div>
            </div>
        `);
    }
    
    return cards.join('');
}

// إنشاء شهادات حسن
function createHassanCertificates() {
    const isArabic = document.documentElement.lang === 'ar';
    const certificates = [];
    
    const certTitles = [
        isArabic ? 'التدليك التايلاندي' : 'Massage Thaïlandais',
        isArabic ? 'التدليك العلاجي' : 'Massage Thérapeutique',
        isArabic ? 'التدليك الاسترخائي' : 'Massage Relaxant',
        isArabic ? 'الإسعافات الأولية' : 'Secourisme',
        isArabic ? 'الرعاية المنزلية' : 'Accompagnement à Domicile',
        isArabic ? 'العناية بالمسنين' : 'Soins aux Personnes Âgées',
        isArabic ? 'المناشف المضادة للحريق' : 'Serviettes Antifeu',
        isArabic ? 'العلاج بالكؤوس' : 'Thérapie par Ventouses'
    ];
    
    certTitles.forEach((title, index) => {
        certificates.push(`
            <div class="swiper-slide">
                <div class="certificate-real">
                    <img src="assets/certificates/hassan-cert${index + 1}.jpg" 
                         alt="${title}"
                         class="certificate-image"
                         onerror="this.src='https://placehold.co/400x500/2c3e50/white?text=${encodeURIComponent(title)}';">
                    <div class="certificate-info">
                        <h4>${title}</h4>
                        <p>${isArabic ? 'شهادة معتمدة من' : 'Certifié par'} E-commerce Academy Marrakech</p>
                    </div>
                </div>
            </div>
        `);
    });
    
    return certificates.join('');
}

// إنشاء شهادات بشرى
function createBouchraCertificates() {
    const isArabic = document.documentElement.lang === 'ar';
    const certificates = [];
    
    const certTitles = [
        isArabic ? 'العناية بالمسنين' : 'Soins aux Personnes Âgées',
        isArabic ? 'الرعاية المنزلية' : 'Accompagnement à Domicile',
        isArabic ? 'الإسعافات الأولية' : 'Secourisme',
        isArabic ? 'التدليك التايلاندي' : 'Massage Thaïlandais',
        isArabic ? 'التدليك العلاجي' : 'Massage Thérapeutique',
        isArabic ? 'التدليك الاسترخائي' : 'Massage Relaxant'
    ];
    
    certTitles.forEach((title, index) => {
        certificates.push(`
            <div class="swiper-slide">
                <div class="certificate-real">
                    <img src="assets/certificates/bouchra-cert${index + 1}.jpg" 
                         alt="${title}"
                         class="certificate-image"
                         onerror="this.src='https://placehold.co/400x500/2c3e50/white?text=${encodeURIComponent(title)}';">
                    <div class="certificate-info">
                        <h4>${title}</h4>
                        <p>${isArabic ? 'شهادة معتمدة من' : 'Certifié par'} E-commerce Academy Marrakech</p>
                    </div>
                </div>
            </div>
        `);
    });
    
    return certificates.join('');
}

// تهيئة السلايدرات
function initSliders() {
    const isMenPage = window.location.pathname.includes('services-men.html');
    const isWomenPage = window.location.pathname.includes('services-women.html');
    
    // تهيئة سلايدر البطاقات
    const cardsSwiperEl = document.querySelector('.cards-swiper .swiper-wrapper');
    if (cardsSwiperEl) {
        if (isMenPage) {
            cardsSwiperEl.innerHTML = createHassanCards();
        } else if (isWomenPage) {
            cardsSwiperEl.innerHTML = createBouchraCards();
        }
    }
    
    // تهيئة سلايدر الشهادات
    const certsSwiperEl = document.querySelector('.certificates-swiper .swiper-wrapper');
    if (certsSwiperEl) {
        if (isMenPage) {
            certsSwiperEl.innerHTML = createHassanCertificates();
        } else if (isWomenPage) {
            certsSwiperEl.innerHTML = createBouchraCertificates();
        }
    }
    
    // إنشاء Swiper instances
    setTimeout(() => {
        // سلايدر البطاقات
        new Swiper('.cards-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.cards-swiper .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.cards-swiper .swiper-button-next',
                prevEl: '.cards-swiper .swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 1,
                },
                1024: {
                    slidesPerView: 1,
                },
            }
        });
        
        // سلايدر الشهادات
        new Swiper('.certificates-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.certificates-swiper .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.certificates-swiper .swiper-button-next',
                prevEl: '.certificates-swiper .swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 1,
                },
                1024: {
                    slidesPerView: 1,
                },
            }
        });
    }, 100);
}

// تهيئة قائمة التنقل للهواتف
function initMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const navList = document.getElementById('navList');
    
    if (navToggle && navList) {
        navToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
            navToggle.innerHTML = navList.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
}

// تهيئة الموقع
document.addEventListener('DOMContentLoaded', function() {
    // زر تبديل اللغة
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.addEventListener('click', toggleLanguage);
    }
    
    // قائمة التنقل
    initMobileNav();
    
    // تهيئة السلايدرات
    initSliders();
});