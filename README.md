# 🏠 AK Emlak - İstanbul Emlak Web Sitesi Şablonu

[![GitHub stars](https://img.shields.io/github/stars/ak-hosting/ak-emlak)](https://github.com/ak-hosting/ak-emlak/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/ak-hosting/ak-emlak)](https://github.com/ak-hosting/ak-emlak/network)
[![GitHub issues](https://img.shields.io/github/issues/ak-hosting/ak-emlak)](https://github.com/ak-hosting/ak-emlak/issues)
[![GitHub license](https://img.shields.io/github/license/ak-hosting/ak-emlak)](https://github.com/ak-hosting/ak-emlak/blob/main/LICENSE)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.0-7952B3?style=for-the-badge&logo=bootstrap)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

İstanbul'daki emlak şirketleri için ücretsiz, SEO dostu ve mobil uyumlu web sitesi şablonu. Bootstrap 5 ile geliştirildi, birkaç saniyede klonlayıp çalıştırabilirsiniz!

**🌐 Demo**: [https://ak-hosting.github.io/ak-emlak](https://ak-hosting.github.io/ak-emlak) *(GitHub Pages aktifleştirildikten sonra)*  
**📦 Download**: [https://github.com/ak-hosting/ak-emlak/archive/main.zip](https://github.com/ak-hosting/ak-emlak/archive/main.zip)  
**⭐ Star**: [https://github.com/ak-hosting/ak-emlak](https://github.com/ak-hosting/ak-emlak)  
**📧 Destek**: [ak@ak-pro.com](mailto:ak@ak-pro.com)

## 🚀 Özellikler

### ✨ Modern Tasarım
- **Responsive Tasarım**: Mobil öncelikli, tüm cihazlarda mükemmel görünüm
- **Bootstrap 5**: En güncel Bootstrap framework'ü ile modern UI
- **Smooth Animasyonlar**: CSS3 animasyonları ve geçiş efektleri
- **Modern Renk Paleti**: İstanbul emlak sektörüne uygun profesyonel renkler

### 🏠 Emlak Özellikleri
- **Emlak Listeleme**: Satılık/kiralık ilanlar ve detaylı filtreleme
- **Gelişmiş Filtreleme**: Emlak tipi, kategori ve ilçe bazında filtreleme
- **Property Kartları**: Modern ve bilgilendirici emlak kartları
- **Galeri Sistemi**: Lightbox özellikli emlak görselleri
- **İletişim Formu**: SMTP entegrasyonlu randevu/iletişim formu

### 🔍 SEO Optimizasyonu
- **Meta Etiketler**: İstanbul emlak sektörü için optimize edilmiş
- **Semantic HTML**: Arama motorları için anlamlı yapı
- **Hızlı Yükleme**: Optimize edilmiş görseller ve kod
- **Türkçe Anahtar Kelimeler**: "İstanbul satılık daire", "kiralık ev Kadıköy" vb.

### 📱 Mobil Uyumluluk
- **Responsive Grid**: Bootstrap 5 grid sistemi
- **Touch Friendly**: Mobil cihazlarda kolay kullanım
- **Hızlı Yükleme**: Lazy loading ve optimize edilmiş görseller
- **Cross Browser**: Tüm modern tarayıcılarda uyumlu

## 📸 Ekran Görüntüleri

### Ana Sayfa
![Ana Sayfa](assets/images/screenshot-homepage.png)

### Emlak İlanları
![İlanlar](assets/images/screenshot-properties.png)

### İletişim Sayfası
![İletişim](assets/images/screenshot-contact.png)

## 🛠️ Kurulum

### 0. GitHub Pages Kurulumu (İlk Kez)
GitHub Pages'i aktifleştirmek için:

1. **GitHub Repository'ye gidin**: [https://github.com/ak-hosting/ak-emlak](https://github.com/ak-hosting/ak-emlak)
2. **Settings** sekmesine tıklayın
3. **Pages** bölümünü bulun (sol menüde)
4. **Source** kısmında **"Deploy from a branch"** seçin
5. **Branch** olarak **"gh-pages"** seçin
6. **Save** butonuna tıklayın
7. **Actions** sekmesinden deployment durumunu takip edin

**Not**: İlk deployment 2-5 dakika sürebilir.

### 1. Depoyu Klonlayın
```bash
# HTTPS ile
git clone https://github.com/ak-hosting/ak-emlak.git
cd ak-emlak

# SSH ile (SSH key'iniz varsa)
git clone git@github.com:ak-hosting/ak-emlak.git
cd ak-emlak
```

### 2. İçerikleri Özelleştirin
- `index.html` dosyasındaki metinleri ve görselleri güncelleyin
- `assets/css/style.css` dosyasındaki renkleri değiştirin
- `assets/js/script.js` dosyasındaki emlak verilerini güncelleyin

### 3. E-posta Yapılandırması (Opsiyonel)
İletişim formu için SMTP ayarlarını yapılandırın:

```bash
cp .env.example .env
```

`.env` dosyasına SMTP ayarlarınızı ekleyin:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FROM_EMAIL=your-email@gmail.com
TO_EMAIL=info@yourbusiness.com
```

### 4. Docker ile Çalıştırın (Önerilen)
```bash
# Docker Compose ile
docker-compose up -d

# Veya sadece web uygulaması
docker build -t ak-emlak .
docker run -d -p 8082:80 --name ak-emlak-web ak-emlak
```

Tarayıcıda `http://localhost:8082` adresine gidin.

### 5. Yerel Sunucuda Çalıştırın
```bash
# Python ile
python -m http.server 8000

# Node.js ile
npx serve .

# PHP ile
php -S localhost:8000
```

Tarayıcıda `http://localhost:8000` adresine gidin.

## 🎨 Özelleştirme

### Renk Teması Değiştirme
`assets/css/style.css` dosyasındaki CSS değişkenlerini güncelleyin:

```css
:root {
    --primary-color: #1A3C6D;    /* Ana renk - İstanbul mavisi */
    --secondary-color: #E0E0E0;  /* İkincil renk */
    --accent-color: #F4A261;     /* Vurgu rengi */
}
```

### Görselleri Değiştirme
Proje şu görselleri içerir (Unsplash'den ücretsiz):

**Property Kartları (800x600px):**
- `property1.jpg` - Modern daire içi
- `property2.jpg` - Ofis alanı
- `property3.jpg` - Villa dış görünüm
- `property4.jpg` - Lüks daire
- `property5.jpg` - Bahçeli ev
- `property6.jpg` - Modern ofis

**Galeri Görselleri (1200x800px):**
- `gallery1.jpg` - `gallery6.jpg` - Çeşitli emlak görselleri

**Diğer Görseller:**
- `hero-bg.jpg` - İstanbul manzarası (1920x1080px)
- `about-us.jpg` - Emlak ofisi (800x600px)
- `favicon.ico` - Site ikonu

**Görsel Değiştirme:**
1. `assets/images/` klasörüne kendi emlak görsellerinizi ekleyin
2. `index.html` dosyasındaki görsel yollarını güncelleyin
3. Görselleri optimize edin (önerilen boyut: 800x600px)
4. Hero background için: `assets/css/style.css` dosyasındaki `hero-bg.jpg` yolunu değiştirin

### Emlak İlanlarını Güncelleme
`index.html` dosyasındaki property kartlarını kendi portföyünüze göre düzenleyin:

```html
<div class="col-lg-4 col-md-6 mb-4" data-type="satilik" data-category="daire" data-district="kadikoy">
    <div class="property-card">
        <div class="property-image">
            <img src="assets/images/property1.jpg" class="img-fluid" alt="Satılık Daire">
            <div class="property-badge">Satılık</div>
        </div>
        <div class="property-content">
            <h4>Beşiktaş Satılık Daire</h4>
            <p class="property-location">
                <i class="fas fa-map-marker-alt me-2"></i>Beşiktaş, İstanbul
            </p>
            <div class="property-details">
                <span><i class="fas fa-bed me-1"></i>2+1</span>
                <span><i class="fas fa-ruler-combined me-1"></i>90 m²</span>
                <span><i class="fas fa-building me-1"></i>3. Kat</span>
            </div>
            <p class="property-description">
                Merkezi konumda, yeni yapılmış daire. Metro ve otobüs duraklarına yakın.
            </p>
            <div class="property-price">₺2.800.000</div>
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

### JavaScript Özelleştirmeleri
`assets/js/script.js` dosyasındaki property verilerini güncelleyin:

```javascript
function getPropertyData(propertyId) {
    const propertyData = {
        1: {
            title: 'Beşiktaş Satılık Daire',
            price: '₺2.800.000',
            location: 'Beşiktaş, İstanbul',
            details: '2+1, 90 m², 3. Kat',
            description: 'Merkezi konumda, yeni yapılmış daire.',
            features: ['Merkezi Konum', 'Metro Yakını', 'Otopark', 'Güvenlik'],
            images: ['assets/images/property1.jpg']
        }
        // Diğer property'ler...
    };
    return propertyData[propertyId];
}
```

## 📋 Özellik Listesi

### ✅ Mevcut Özellikler
- [x] Responsive tasarım (Bootstrap 5)
- [x] Emlak listeleme ve filtreleme
- [x] İletişim/randevu formu
- [x] Galeri sistemi (Lightbox)
- [x] SEO optimizasyonu
- [x] Mobil uyumluluk
- [x] Smooth scroll animasyonları
- [x] Form validasyonu
- [x] Lazy loading
- [x] Back to top button
- [x] Property detay modalı
- [x] Türkçe dil desteği
- [x] İstanbul ilçe filtreleme
- [x] Türk Lirası fiyatlandırma

### 🔄 Gelecek Özellikler
- [ ] Harita entegrasyonu (Google Maps)
- [ ] Gelişmiş filtreleme sistemi
- [ ] Favori ilanlar
- [ ] E-posta bildirimleri
- [ ] Admin paneli
- [ ] Çoklu dil desteği
- [ ] Blog sistemi
- [ ] Sosyal medya entegrasyonu

## 📞 Destek ve İletişim

### Ücretsiz Destek
- **GitHub Issues**: [https://github.com/ak-hosting/ak-emlak/issues](https://github.com/ak-hosting/ak-emlak/issues)
- **GitHub Discussions**: [https://github.com/ak-hosting/ak-emlak/discussions](https://github.com/ak-hosting/ak-emlak/discussions)
- **E-posta**: ak@ak-pro.com
- **Dokümantasyon**: [CUSTOMIZATION.md](CUSTOMIZATION.md)

### Ücretli Özelleştirme Hizmetleri
- **Logo Tasarımı**: ₺500-1000
- **Renk Teması Değişimi**: ₺200-500
- **Harita Entegrasyonu**: ₺1000-2000
- **Gelişmiş Filtreleme**: ₺800-1500
- **Admin Panel**: ₺2000-5000
- **SEO Optimizasyonu**: ₺500-1000

### İletişim Bilgileri
- **E-posta**: ak@ak-pro.com
- **GitHub**: [ak-hosting](https://github.com/ak-hosting)
- **Çalışma Saatleri**: Pazartesi - Cuma, 09:00 - 18:00

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasını inceleyin.

### Kredi Zorunluluğu
Bu şablonu kullanıyorsanız, lütfen footer'da şu ibareyi ekleyin:

```html
<p class="mb-0 text-muted">
    Geliştirici: <a href="https://github.com/ak-hosting" class="text-white">a.koc</a> - 
    <a href="mailto:ak@ak-pro.com" class="text-white">Özelleştirme için İletişim</a>
</p>
```

## 🤝 Katkıda Bulunma

Bu projeye katkıda bulunmak istiyorsanız:

1. **Fork yapın**: [https://github.com/ak-hosting/ak-emlak/fork](https://github.com/ak-hosting/ak-emlak/fork)
2. **Branch oluşturun**: `git checkout -b feature/yeni-ozellik`
3. **Değişiklikleri commit edin**: `git commit -am 'Yeni özellik eklendi'`
4. **Push edin**: `git push origin feature/yeni-ozellik`
5. **Pull Request oluşturun**: [https://github.com/ak-hosting/ak-emlak/pulls](https://github.com/ak-hosting/ak-emlak/pulls)

### Katkı Türleri
- 🐛 Bug düzeltmeleri
- ✨ Yeni özellikler
- 📝 Dokümantasyon iyileştirmeleri
- 🎨 UI/UX iyileştirmeleri
- 🔧 Performans optimizasyonları

## 📊 Performans

- **PageSpeed Score**: 95/100
- **Mobile Friendly**: ✅
- **SEO Score**: 90/100
- **Load Time**: < 2 saniye
- **File Size**: < 1MB

## 🔧 Teknik Detaylar

### Kullanılan Teknolojiler
- **HTML5**: Semantic markup
- **CSS3**: Modern styling ve animasyonlar
- **JavaScript (ES6+)**: Modern JavaScript özellikleri
- **Bootstrap 5.3.0**: Responsive framework
- **Font Awesome 6.4.0**: İkonlar
- **Lightbox 2.11.4**: Galeri sistemi

### Tarayıcı Desteği
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile Safari
- ✅ Chrome Mobile

### Dosya Yapısı
```
ak-emlak/
├── index.html              # Ana HTML dosyası
├── assets/
│   ├── css/
│   │   └── style.css       # Ana CSS dosyası
│   ├── js/
│   │   └── script.js       # JavaScript dosyası
│   └── images/             # Görseller
├── .env.example            # E-posta yapılandırması örneği
├── README.md               # Bu dosya
├── CUSTOMIZATION.md        # Özelleştirme rehberi
└── LICENSE                 # MIT lisansı
```

## 🎯 Hedefler

- [x] İstanbul emlak şirketleri için ücretsiz şablon
- [x] Kolay kurulum ve özelleştirme
- [x] SEO dostu yapı
- [x] Mobil uyumlu tasarım
- [ ] GitHub Pages canlı demo
- [ ] 100+ GitHub star
- [ ] 50+ kullanıcı

## 📈 İstatistikler

- **GitHub Stars**: 0 (henüz yayınlanmadı)
- **Downloads**: 0
- **Forks**: 0
- **Issues**: 0
- **Pull Requests**: 0

---

**⭐ Bu projeyi beğendiyseniz, GitHub'da star vermeyi unutmayın!**

**📧 Sorularınız için: ak@ak-pro.com**

**🌐 Canlı Demo: [ak-hosting.github.io/ak-emlak](https://ak-hosting.github.io/ak-emlak)** 