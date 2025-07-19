// AK Emlak - İstanbul Emlak Sitesi JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll efekti
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-primary');
            navbar.classList.remove('bg-transparent');
        } else {
            navbar.classList.remove('bg-primary');
            navbar.classList.add('bg-transparent');
        }
    });

    // Smooth scroll için navbar linklerini ayarla
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Back to top button
    const backToTopBtn = document.createElement('a');
    backToTopBtn.href = '#home';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // Contact form işlemleri
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // Property filtreleme
    setupPropertyFiltering();

    // Lazy loading için Intersection Observer
    setupLazyLoading();

    // Property detay modalı
    setupPropertyModals();

    // Form validation
    setupFormValidation();
});

// Emlak filtreleme fonksiyonu
function filterProperties() {
    const propertyType = document.getElementById('propertyType').value;
    const propertyCategory = document.getElementById('propertyCategory').value;
    const district = document.getElementById('district').value;

    const propertyCards = document.querySelectorAll('[data-type][data-category][data-district]');
    
    propertyCards.forEach(card => {
        const cardType = card.getAttribute('data-type');
        const cardCategory = card.getAttribute('data-category');
        const cardDistrict = card.getAttribute('data-district');

        let showCard = true;

        if (propertyType && cardType !== propertyType) {
            showCard = false;
        }
        if (propertyCategory && cardCategory !== propertyCategory) {
            showCard = false;
        }
        if (district && cardDistrict !== district) {
            showCard = false;
        }

        if (showCard) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s ease-in';
        } else {
            card.style.display = 'none';
        }
    });

    // Sonuç sayısını göster
    const visibleCards = document.querySelectorAll('[data-type][data-category][data-district]:not([style*="display: none"])');
    showFilterResults(visibleCards.length);
}

// Filtre sonuçlarını göster
function showFilterResults(count) {
    let resultsDiv = document.getElementById('filterResults');
    if (!resultsDiv) {
        resultsDiv = document.createElement('div');
        resultsDiv.id = 'filterResults';
        resultsDiv.className = 'alert alert-info text-center mt-3';
        document.querySelector('.search-card').appendChild(resultsDiv);
    }

    if (count === 0) {
        resultsDiv.innerHTML = '<i class="fas fa-info-circle me-2"></i>Seçtiğiniz kriterlere uygun ilan bulunamadı.';
        resultsDiv.className = 'alert alert-warning text-center mt-3';
    } else {
        resultsDiv.innerHTML = `<i class="fas fa-check-circle me-2"></i>${count} adet ilan bulundu.`;
        resultsDiv.className = 'alert alert-success text-center mt-3';
    }
}

// Property filtreleme kurulumu
function setupPropertyFiltering() {
    const filterInputs = document.querySelectorAll('#propertyType, #propertyCategory, #district');
    filterInputs.forEach(input => {
        input.addEventListener('change', filterProperties);
    });
}

// Lazy loading kurulumu
function setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// Property detay modalı kurulumu
function setupPropertyModals() {
    // Property detaylarını göster
    window.showPropertyDetails = function(propertyId) {
        const propertyData = getPropertyData(propertyId);
        if (propertyData) {
            showPropertyModal(propertyData);
        }
    };

    // Property hakkında iletişim
    window.contactAboutProperty = function(propertyId) {
        const propertyData = getPropertyData(propertyId);
        if (propertyData) {
            // İletişim formunu property bilgileriyle doldur
            document.getElementById('subject').value = 'emlak_sorgusu';
            document.getElementById('message').value = `${propertyData.title} hakkında bilgi almak istiyorum.`;
            
            // İletişim bölümüne scroll yap
            document.getElementById('contact').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };
}

// Property verisi getir
function getPropertyData(propertyId) {
    const propertyData = {
        1: {
            title: 'Kadıköy Satılık Daire',
            price: '₺3.500.000',
            location: 'Kadıköy, İstanbul',
            details: '3+1, 120 m², 5. Kat',
            description: 'Deniz manzaralı, merkezi konumda, yeni yapılmış lüks daire. Metro ve otobüs duraklarına yürüme mesafesinde.',
            features: ['Deniz Manzarası', 'Merkezi Konum', 'Metro Yakını', 'Otopark', 'Güvenlik'],
            images: ['assets/images/property1.jpg', 'assets/images/gallery1.jpg']
        },
        2: {
            title: 'Şişli Kiralık Ofis',
            price: '₺25.000/ay',
            location: 'Şişli, İstanbul',
            details: '2 Oda, 100 m², 3. Kat',
            description: 'Merkezi konumda, modern ofis. Toplu taşıma imkanları, güvenlik sistemi ve otopark mevcut.',
            features: ['Modern Ofis', 'Güvenlik Sistemi', 'Otopark', 'Toplu Taşıma', 'Merkezi Konum'],
            images: ['assets/images/property2.jpg', 'assets/images/gallery2.jpg']
        },
        3: {
            title: 'Beşiktaş Satılık Arsa',
            price: '₺5.000.000',
            location: 'Beşiktaş, İstanbul',
            details: '500 m², Yol Cepheli',
            description: 'Yatırım için ideal arsa. İmar durumu konut, altyapı hazır, yola cepheli.',
            features: ['Yatırım Fırsatı', 'Yol Cepheli', 'Altyapı Hazır', 'İmar Konut', 'Yeşil Alan'],
            images: ['assets/images/property3.jpg', 'assets/images/gallery3.jpg']
        },
        4: {
            title: 'Üsküdar Kiralık Daire',
            price: '₺12.000/ay',
            location: 'Üsküdar, İstanbul',
            details: '2+1, 85 m², 2. Kat',
            description: 'Boğaz manzaralı, ferah daire. Metro ve vapur iskelesine yakın, eşyalı kiralık.',
            features: ['Boğaz Manzarası', 'Eşyalı', 'Metro Yakını', 'Vapur İskelesi', 'Ferah'],
            images: ['assets/images/property4.jpg', 'assets/images/gallery4.jpg']
        },
        5: {
            title: 'Fatih Satılık Villa',
            price: '₺8.500.000',
            location: 'Fatih, İstanbul',
            details: '4+2, 250 m², Bahçeli',
            description: 'Lüks villa, özel havuz, bahçe ve garaj. Tarihi yarımadaya yakın, prestijli lokasyon.',
            features: ['Lüks Villa', 'Özel Havuz', 'Bahçe', 'Garaj', 'Prestijli Lokasyon'],
            images: ['assets/images/property5.jpg', 'assets/images/gallery5.jpg']
        },
        6: {
            title: 'Kadıköy Kiralık Ofis',
            price: '₺35.000/ay',
            location: 'Kadıköy, İstanbul',
            details: '3 Oda, 150 m², 6. Kat',
            description: 'Modern ofis, deniz manzaralı. Toplantı salonu, resepsiyon ve güvenlik sistemi mevcut.',
            features: ['Deniz Manzarası', 'Toplantı Salonu', 'Resepsiyon', 'Güvenlik Sistemi', 'Modern Ofis'],
            images: ['assets/images/property6.jpg', 'assets/images/gallery6.jpg']
        }
    };

    return propertyData[propertyId];
}

// Property modal göster
function showPropertyModal(propertyData) {
    // Modal HTML oluştur
    const modalHTML = `
        <div class="modal fade" id="propertyModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${propertyData.title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6">
                                <img src="${propertyData.images[0]}" class="img-fluid rounded" alt="${propertyData.title}">
                            </div>
                            <div class="col-md-6">
                                <h6 class="text-primary">${propertyData.price}</h6>
                                <p><i class="fas fa-map-marker-alt me-2"></i>${propertyData.location}</p>
                                <p><i class="fas fa-info-circle me-2"></i>${propertyData.details}</p>
                                <p>${propertyData.description}</p>
                                <h6>Özellikler:</h6>
                                <ul class="list-unstyled">
                                    ${propertyData.features.map(feature => `<li><i class="fas fa-check text-success me-2"></i>${feature}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                        <button type="button" class="btn btn-primary" onclick="contactAboutProperty(${propertyData.id})">
                            <i class="fas fa-phone me-2"></i>İletişime Geç
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Eski modalı kaldır
    const oldModal = document.getElementById('propertyModal');
    if (oldModal) {
        oldModal.remove();
    }

    // Yeni modalı ekle
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Modalı göster
    const modal = new bootstrap.Modal(document.getElementById('propertyModal'));
    modal.show();
}

// İletişim formu işleme
function handleContactForm(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    // Loading durumu
    submitBtn.innerHTML = '<span class="loading"></span> Gönderiliyor...';
    submitBtn.disabled = true;

    // Form verilerini topla
    const formObject = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };

    // Simüle edilmiş form gönderimi (gerçek uygulamada backend'e gönderilir)
    setTimeout(() => {
        // Başarı mesajı göster
        showAlert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.', 'success');
        
        // Formu temizle
        e.target.reset();
        
        // Button'u eski haline getir
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Alert mesajı göster
function showAlert(message, type = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;

    // Mevcut alert'leri kaldır
    const existingAlerts = document.querySelectorAll('.alert');
    existingAlerts.forEach(alert => alert.remove());

    // Yeni alert'i ekle
    const contactSection = document.getElementById('contact');
    contactSection.insertBefore(alertDiv, contactSection.firstChild);

    // 5 saniye sonra otomatik kaldır
    setTimeout(() => {
        if (alertDiv.parentNode) {
            alertDiv.remove();
        }
    }, 5000);
}

// Form validation kurulumu
function setupFormValidation() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const inputs = form.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearValidation);
    });
}

// Alan validasyonu
function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    // Validation kuralları
    const rules = {
        name: {
            required: true,
            minLength: 2
        },
        email: {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        },
        phone: {
            pattern: /^[\+]?[0-9\s\-\(\)]{10,}$/
        },
        message: {
            required: true,
            minLength: 10
        }
    };

    const fieldRules = rules[field.name];
    if (!fieldRules) return;

    let isValid = true;
    let errorMessage = '';

    // Required kontrolü
    if (fieldRules.required && !value) {
        isValid = false;
        errorMessage = 'Bu alan zorunludur.';
    }
    // Min length kontrolü
    else if (fieldRules.minLength && value.length < fieldRules.minLength) {
        isValid = false;
        errorMessage = `En az ${fieldRules.minLength} karakter olmalıdır.`;
    }
    // Pattern kontrolü
    else if (fieldRules.pattern && !fieldRules.pattern.test(value)) {
        isValid = false;
        errorMessage = 'Geçersiz format.';
    }

    // Validation sonucunu göster
    if (!isValid) {
        showFieldError(field, errorMessage);
    } else {
        clearFieldError(field);
    }
}

// Alan hatası göster
function showFieldError(field, message) {
    field.classList.add('is-invalid');
    
    // Mevcut error mesajını kaldır
    const existingError = field.parentNode.querySelector('.invalid-feedback');
    if (existingError) {
        existingError.remove();
    }
    
    // Yeni error mesajını ekle
    const errorDiv = document.createElement('div');
    errorDiv.className = 'invalid-feedback';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
}

// Alan hatasını temizle
function clearFieldError(field) {
    field.classList.remove('is-invalid');
    field.classList.add('is-valid');
    
    const errorDiv = field.parentNode.querySelector('.invalid-feedback');
    if (errorDiv) {
        errorDiv.remove();
    }
}

// Validation temizle
function clearValidation(e) {
    const field = e.target;
    field.classList.remove('is-invalid', 'is-valid');
    
    const errorDiv = field.parentNode.querySelector('.invalid-feedback');
    if (errorDiv) {
        errorDiv.remove();
    }
}

// Daha fazla ilan yükle
function loadMoreProperties() {
    const loadMoreBtn = document.querySelector('.btn-outline-primary');
    const originalText = loadMoreBtn.innerHTML;
    
    loadMoreBtn.innerHTML = '<span class="loading"></span> Yükleniyor...';
    loadMoreBtn.disabled = true;

    // Simüle edilmiş yükleme (gerçek uygulamada API'den veri çekilir)
    setTimeout(() => {
        // Yeni property kartları eklenebilir
        loadMoreBtn.innerHTML = originalText;
        loadMoreBtn.disabled = false;
        
        // Başarı mesajı
        showAlert('Daha fazla ilan yüklendi!', 'success');
    }, 2000);
}

// Sayfa yüklendiğinde çalışacak ek fonksiyonlar
window.addEventListener('load', function() {
    // Sayfa yüklendiğinde animasyonları başlat
    const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-fade-in-delay, .animate-fade-in-delay-2');
    animatedElements.forEach(element => {
        element.style.opacity = '1';
    });

    // Performance için console log
    console.log('AK Emlak sitesi başarıyla yüklendi!');
    console.log('Geliştirici: a.koc - https://github.com/ak-hosting');
    console.log('Özelleştirme için: ak@ak-pro.com');
}); 