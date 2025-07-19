# AK Emlak - Özelleştirme Rehberi

Bu rehber, AK Emlak şablonunu kendi ihtiyaçlarınıza göre özelleştirmeniz için hazırlanmıştır.

## 🎨 Renk Teması Değiştirme

### Ana Renkler
`assets/css/style.css` dosyasındaki CSS değişkenlerini değiştirin:

```css
:root {
    --primary-color: #1A3C6D;    /* Ana renk - İstanbul mavisi */
    --secondary-color: #E0E0E0;  /* İkincil renk */
    --accent-color: #F4A261;     /* Vurgu rengi */
    --success-color: #28a745;    /* Başarı rengi */
    --warning-color: #ffc107;    /* Uyarı rengi */
    --danger-color: #dc3545;     /* Hata rengi */
    --light-color: #f8f9fa;      /* Açık renk */
    --dark-color: #343a40;       /* Koyu renk */
    --text-color: #333;          /* Metin rengi */
    --text-muted: #6c757d;       /* Soluk metin rengi */
    --border-color: #dee2e6;     /* Kenarlık rengi */
}
```

### Önerilen Renk Kombinasyonları

#### Mavi Tema (Varsayılan)
```css
--primary-color: #1A3C6D;
--secondary-color: #E0E0E0;
--accent-color: #F4A261;
```

#### Yeşil Tema
```css
--primary-color: #2E7D32;
--secondary-color: #E8F5E8;
--accent-color: #FF9800;
```

#### Kırmızı Tema
```css
--primary-color: #C62828;
--secondary-color: #FFEBEE;
--accent-color: #FFC107;
```

#### Mor Tema
```css
--primary-color: #6A1B9A;
--secondary-color: #F3E5F5;
--accent-color: #FF9800;
```

## 🖼️ Görselleri Değiştirme

### Görsel Boyutları
- **Property Kartları**: 800x600px (4:3 oranı)
- **Galeri Görselleri**: 1200x800px (3:2 oranı)
- **Hero Background**: 1920x1080px (16:9 oranı)
- **About Section**: 800x600px (4:3 oranı)
- **Logo**: 200x80px (önerilen)
- **Favicon**: 32x32px (ICO formatı)

### Mevcut Görseller
Proje şu görselleri içerir (Unsplash'den ücretsiz):

**Property Kartları:**
- `property1.jpg` - Modern daire içi (Kadıköy Satılık Daire)
- `property2.jpg` - Ofis alanı (Şişli Kiralık Ofis)
- `property3.jpg` - Villa dış görünüm (Beşiktaş Satılık Arsa)
- `property4.jpg` - Lüks daire (Üsküdar Kiralık Daire)
- `property5.jpg` - Bahçeli ev (Fatih Satılık Villa)
- `property6.jpg` - Modern ofis (Kadıköy Kiralık Ofis)

**Galeri Görselleri:**
- `gallery1.jpg` - `gallery6.jpg` - Çeşitli emlak görselleri

**Diğer Görseller:**
- `hero-bg.jpg` - İstanbul manzarası (Hero section background)
- `about-us.jpg` - Emlak ofisi (About section)
- `favicon.ico` - Site ikonu

### Görsel Optimizasyonu
1. **Format**: JPEG (fotoğraflar için), PNG (logo ve ikonlar için)
2. **Kalite**: %80-85 (iyi kalite, küçük dosya boyutu)
3. **Boyut**: Maksimum 500KB per görsel
4. **Alt Text**: SEO için açıklayıcı alt metinler ekleyin

### Görsel Değiştirme Adımları
1. `assets/images/` klasörüne yeni görsellerinizi ekleyin
2. `index.html` dosyasındaki görsel yollarını güncelleyin:

```html
<!-- Eski -->
<img src="assets/images/property1.jpg" alt="Kadıköy Satılık Daire">

<!-- Yeni -->
<img src="assets/images/your-property.jpg" alt="Beşiktaş Satılık Daire">
```

## 📝 İçerik Değiştirme

### Şirket Bilgileri
`index.html` dosyasında şu alanları güncelleyin:

```html
<!-- Navbar -->
<a class="navbar-brand" href="#">YOUR COMPANY NAME</a>

<!-- Hero Section -->
<h1>YOUR COMPANY NAME'e Hoş Geldiniz!</h1>
<p>İstanbul'da satılık ve kiralık emlak fırsatları.</p>

<!-- Footer -->
<h5>YOUR COMPANY NAME</h5>
<p>İstanbul'da güvenilir emlak çözümleri.</p>
```

### İletişim Bilgileri
```html
<!-- Contact Section -->
<div class="contact-item">
    <i class="fas fa-map-marker-alt text-primary"></i>
    <div>
        <h6>Adres</h6>
        <p>YOUR ADDRESS, İstanbul, Türkiye</p>
    </div>
</div>
<div class="contact-item">
    <i class="fas fa-phone text-primary"></i>
    <div>
        <h6>Telefon</h6>
        <p>+90 (212) YOUR PHONE</p>
    </div>
</div>
<div class="contact-item">
    <i class="fas fa-envelope text-primary"></i>
    <div>
        <h6>E-posta</h6>
        <p>info@yourcompany.com</p>
    </div>
</div>
```

### Emlak İlanları
Her property kartı için şu bilgileri güncelleyin:

```html
<div class="col-lg-4 col-md-6 mb-4" data-type="satilik" data-category="daire" data-district="kadikoy">
    <div class="property-card">
        <div class="property-image">
            <img src="assets/images/your-property.jpg" class="img-fluid" alt="Property Title">
            <div class="property-badge">Satılık</div>
        </div>
        <div class="property-content">
            <h4>YOUR PROPERTY TITLE</h4>
            <p class="property-location">
                <i class="fas fa-map-marker-alt me-2"></i>LOCATION, İstanbul
            </p>
            <div class="property-details">
                <span><i class="fas fa-bed me-1"></i>ROOM TYPE</span>
                <span><i class="fas fa-ruler-combined me-1"></i>SIZE m²</span>
                <span><i class="fas fa-building me-1"></i>FLOOR</span>
            </div>
            <p class="property-description">
                YOUR PROPERTY DESCRIPTION
            </p>
            <div class="property-price">₺PRICE</div>
            <div class="property-actions">
                <button class="btn btn-primary btn-sm" onclick="showPropertyDetails(1)">
                    <i class="fas fa-eye me-1"></i>İncele
                </button>
                <button class="btn btn-outline-primary btn-sm" onclick="contactAboutProperty(1)">
                    <i class="fas fa-phone me-1"></i>Ara
                </button>
            </div>
        </div>
    </div>
</div>
```

## 🔧 JavaScript Özelleştirmeleri

### Property Verilerini Güncelleme
`assets/js/script.js` dosyasındaki `getPropertyData` fonksiyonunu güncelleyin:

```javascript
function getPropertyData(propertyId) {
    const propertyData = {
        1: {
            title: 'YOUR PROPERTY TITLE',
            price: '₺YOUR PRICE',
            location: 'YOUR LOCATION, İstanbul',
            details: 'YOUR DETAILS',
            description: 'YOUR DESCRIPTION',
            features: ['Feature 1', 'Feature 2', 'Feature 3'],
            images: ['assets/images/your-property.jpg']
        },
        2: {
            title: 'YOUR SECOND PROPERTY',
            price: '₺YOUR PRICE',
            location: 'YOUR LOCATION, İstanbul',
            details: 'YOUR DETAILS',
            description: 'YOUR DESCRIPTION',
            features: ['Feature 1', 'Feature 2', 'Feature 3'],
            images: ['assets/images/your-second-property.jpg']
        }
        // Diğer property'ler...
    };
    return propertyData[propertyId];
}
```

### Filtreleme Seçenekleri
`index.html` dosyasındaki filtreleme seçeneklerini güncelleyin:

```html
<!-- Emlak Tipi -->
<select class="form-select" id="propertyType">
    <option value="">Emlak Tipi</option>
    <option value="satilik">Satılık</option>
    <option value="kiralik">Kiralık</option>
</select>

<!-- Kategori -->
<select class="form-select" id="propertyCategory">
    <option value="">Kategori</option>
    <option value="daire">Daire</option>
    <option value="villa">Villa</option>
    <option value="ofis">Ofis</option>
    <option value="arsa">Arsa</option>
    <option value="dükkan">Dükkan</option>
    <option value="fabrika">Fabrika</option>
</select>

<!-- İlçe -->
<select class="form-select" id="district">
    <option value="">İlçe</option>
    <option value="kadikoy">Kadıköy</option>
    <option value="besiktas">Beşiktaş</option>
    <option value="sisli">Şişli</option>
    <option value="uskudar">Üsküdar</option>
    <option value="fatih">Fatih</option>
    <option value="beyoglu">Beyoğlu</option>
    <option value="sariyer">Sarıyer</option>
    <option value="maltepe">Maltepe</option>
    <option value="atasehir">Ataşehir</option>
    <option value="umraniye">Ümraniye</option>
</select>
```

## 📧 E-posta Yapılandırması

### SMTP Ayarları
`.env` dosyasını oluşturun ve SMTP ayarlarınızı ekleyin:

```env
# Gmail SMTP Ayarları
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FROM_EMAIL=your-email@gmail.com
TO_EMAIL=info@yourbusiness.com

# Outlook SMTP Ayarları
# SMTP_HOST=smtp-mail.outlook.com
# SMTP_PORT=587
# SMTP_USER=your-email@outlook.com
# SMTP_PASS=your-password
# FROM_EMAIL=your-email@outlook.com
# TO_EMAIL=info@yourbusiness.com

# Yandex SMTP Ayarları
# SMTP_HOST=smtp.yandex.com
# SMTP_PORT=587
# SMTP_USER=your-email@yandex.com
# SMTP_PASS=your-app-password
# FROM_EMAIL=your-email@yandex.com
# TO_EMAIL=info@yourbusiness.com
```

### Gmail App Password Oluşturma
1. Google Hesabınıza gidin
2. Güvenlik > 2 Adımlı Doğrulama'yı açın
3. Uygulama Şifreleri > Yeni uygulama şifresi oluşturun
4. Oluşturulan şifreyi `SMTP_PASS` alanına yazın

## 🔍 SEO Optimizasyonu

### Meta Etiketleri
`index.html` dosyasının `<head>` bölümündeki meta etiketlerini güncelleyin:

```html
<meta name="description" content="YOUR COMPANY NAME - İstanbul'da satılık ve kiralık emlak fırsatları. Kadıköy, Beşiktaş, Şişli ve diğer ilçelerde ev, ofis, arsa ilanları.">
<meta name="keywords" content="İstanbul satılık daire, kiralık ev, emlakçı YOUR DISTRICT, YOUR DISTRICT ofis, İstanbul emlak, satılık arsa, kiralık ofis">
<meta name="author" content="YOUR COMPANY NAME">
<title>YOUR COMPANY NAME - İstanbul Emlak Sitesi | Satılık Kiralık Daire Ofis Arsa</title>
```

### Open Graph Etiketleri
```html
<meta property="og:title" content="YOUR COMPANY NAME - İstanbul Emlak Sitesi">
<meta property="og:description" content="İstanbul'da satılık ve kiralık emlak fırsatları. Profesyonel emlak danışmanlığı.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://yourwebsite.com">
<meta property="og:image" content="https://yourwebsite.com/assets/images/og-image.jpg">
```

## 📱 Mobil Optimizasyonu

### Viewport Ayarları
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
```

### Touch Optimizasyonu
```css
/* Mobil cihazlarda touch hedef boyutları */
.btn, .nav-link, .property-actions button {
    min-height: 44px;
    min-width: 44px;
}

/* Mobil cihazlarda hover efektlerini kaldır */
@media (hover: none) {
    .property-card:hover {
        transform: none;
    }
    
    .gallery-image:hover {
        transform: none;
    }
}
```

## 🚀 Performans Optimizasyonu

### Görsel Optimizasyonu
```bash
# Görselleri optimize etmek için (Node.js gerekli)
npm install -g imagemin-cli
imagemin assets/images/* --out-dir=assets/images/optimized
```

### CSS/JS Minifikasyonu
```bash
# CSS minifikasyonu
npx clean-css-cli assets/css/style.css -o assets/css/style.min.css

# JS minifikasyonu
npx terser assets/js/script.js -o assets/js/script.min.js
```

### Lazy Loading
```html
<!-- Lazy loading için -->
<img src="assets/images/property1.jpg" loading="lazy" alt="Property">
```

## 🔧 Gelişmiş Özelleştirmeler

### Özel Font Ekleme
Google Fonts'tan font eklemek için:

```html
<!-- HTML head bölümüne ekleyin -->
<link href="https://fonts.googleapis.com/css2?family=YOUR+FONT:wght@400;600;700&display=swap" rel="stylesheet">
```

```css
/* CSS'de font ailesini değiştirin */
body {
    font-family: 'YOUR FONT', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

### Özel İkonlar
Font Awesome yerine özel ikonlar kullanmak için:

```html
<!-- SVG ikon örneği -->
<svg class="custom-icon" width="16" height="16" viewBox="0 0 16 16">
    <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"/>
</svg>
```

### Özel Animasyonlar
```css
/* Özel animasyon eklemek için */
@keyframes slideInFromLeft {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

.slide-in-left {
    animation: slideInFromLeft 0.5s ease-out;
}
```

## 📋 Kontrol Listesi

### Temel Özelleştirmeler
- [ ] Şirket adı ve logo değiştirildi
- [ ] İletişim bilgileri güncellendi
- [ ] Renk teması değiştirildi
- [ ] Emlak ilanları eklendi/güncellendi
- [ ] Görseller değiştirildi ve optimize edildi

### SEO Optimizasyonu
- [ ] Meta etiketleri güncellendi
- [ ] Open Graph etiketleri eklendi
- [ ] Alt text'ler eklendi
- [ ] Sayfa başlıkları optimize edildi
- [ ] URL yapısı kontrol edildi

### Mobil Optimizasyonu
- [ ] Responsive tasarım test edildi
- [ ] Touch hedefleri optimize edildi
- [ ] Yükleme hızı test edildi
- [ ] Farklı cihazlarda test edildi

### Performans
- [ ] Görseller optimize edildi
- [ ] CSS/JS minifikasyonu yapıldı
- [ ] Lazy loading eklendi
- [ ] Browser caching ayarlandı

## 🆘 Sorun Giderme

### Yaygın Sorunlar

#### Görseller Yüklenmiyor
- Dosya yollarını kontrol edin
- Dosya adlarında Türkçe karakter kullanmayın
- Dosya izinlerini kontrol edin

#### Form Gönderilmiyor
- SMTP ayarlarını kontrol edin
- `.env` dosyasının doğru konumda olduğunu kontrol edin
- E-posta sunucusu ayarlarını kontrol edin

#### Responsive Sorunları
- Bootstrap CSS'inin yüklendiğini kontrol edin
- Viewport meta tag'inin eklendiğini kontrol edin
- CSS media query'lerini kontrol edin

#### JavaScript Hataları
- Console'da hata mesajlarını kontrol edin
- JavaScript dosyasının doğru yüklendiğini kontrol edin
- Browser cache'ini temizleyin

## 📞 Destek

Özelleştirme konusunda yardıma ihtiyacınız varsa:

- **E-posta**: ak@ak-pro.com
- **GitHub Issues**: [Sorun bildirin](https://github.com/ak-hosting/ak-emlak/issues)
- **Ücretli Destek**: Özel özelleştirmeler için ücretli hizmet sunuyoruz

---

**💡 İpucu**: Özelleştirme yaparken her zaman bir yedek kopya oluşturun!

**📧 Sorularınız için: ak@ak-pro.com** 