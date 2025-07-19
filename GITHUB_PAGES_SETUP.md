# 🚀 GitHub Pages Kurulum Rehberi

Bu dosya, AK Emlak projesinin GitHub Pages'de yayınlanması için gerekli adımları içerir.

## 📋 Gerekli Adımlar

### 1. GitHub Repository Ayarları

1. **GitHub Repository'ye gidin**:
   ```
   https://github.com/ak-hosting/ak-emlak
   ```

2. **Settings sekmesine tıklayın**:
   - Repository ana sayfasında üst menüden "Settings" sekmesine tıklayın

3. **Pages bölümünü bulun**:
   - Sol menüde "Pages" seçeneğini bulun ve tıklayın

4. **Source ayarlarını yapın**:
   - **Source**: "Deploy from a branch" seçin
   - **Branch**: "gh-pages" seçin
   - **Folder**: "/ (root)" bırakın

5. **Save butonuna tıklayın**

### 2. GitHub Actions Kontrolü

1. **Actions sekmesine gidin**:
   ```
   https://github.com/ak-hosting/ak-emlak/actions
   ```

2. **Workflow durumunu kontrol edin**:
   - "Deploy to GitHub Pages" workflow'unun çalıştığını görün
   - Yeşil tik işareti deployment'ın başarılı olduğunu gösterir

### 3. Deployment Durumu

**Başarılı Deployment Belirtileri**:
- ✅ Actions sekmesinde yeşil tik
- ✅ gh-pages branch'i oluştu
- ✅ https://ak-hosting.github.io/ak-emlak çalışıyor

**Hata Durumları**:
- ❌ Actions sekmesinde kırmızı X
- ❌ gh-pages branch'i oluşmadı
- ❌ 404 hatası alıyorsunuz

## 🔧 Sorun Giderme

### GitHub Pages Aktif Değil
1. Repository ayarlarında Pages bölümünü kontrol edin
2. Source olarak "gh-pages" branch'ini seçtiğinizden emin olun
3. Save butonuna tıkladığınızdan emin olun

### gh-pages Branch'i Oluşmadı
1. Actions sekmesine gidin
2. "Deploy to GitHub Pages" workflow'unu manuel olarak çalıştırın
3. Workflow loglarını kontrol edin

### 404 Hatası
1. İlk deployment'ın tamamlanmasını bekleyin (2-5 dakika)
2. gh-pages branch'inde dosyaların olduğunu kontrol edin
3. Repository ayarlarında Pages'in aktif olduğunu kontrol edin

## 📊 Deployment Kontrol Listesi

### ✅ Repository Ayarları
- [ ] Pages aktif
- [ ] Source: Deploy from a branch
- [ ] Branch: gh-pages
- [ ] Folder: / (root)

### ✅ GitHub Actions
- [ ] Workflow dosyası mevcut
- [ ] Son commit'te workflow tetiklendi
- [ ] Deployment başarılı (yeşil tik)

### ✅ gh-pages Branch
- [ ] Branch oluştu
- [ ] index.html dosyası mevcut
- [ ] assets/ klasörü mevcut

### ✅ Canlı Site
- [ ] https://ak-hosting.github.io/ak-emlak çalışıyor
- [ ] Görseller yükleniyor
- [ ] Responsive tasarım çalışıyor

## 🚨 Yaygın Sorunlar

### 1. "gh-pages branch not found"
**Çözüm**: GitHub Actions workflow'unun çalışmasını bekleyin

### 2. "404 Not Found"
**Çözüm**: 
- İlk deployment'ın tamamlanmasını bekleyin
- Repository ayarlarında Pages'in aktif olduğunu kontrol edin

### 3. "Workflow failed"
**Çözüm**:
- Actions sekmesinde workflow loglarını kontrol edin
- GITHUB_TOKEN permission'larını kontrol edin

## 📞 Destek

Sorun yaşıyorsanız:
- **GitHub Issues**: https://github.com/ak-hosting/ak-emlak/issues
- **E-posta**: ak@ak-pro.com

## 🔗 Faydalı Linkler

- **Repository**: https://github.com/ak-hosting/ak-emlak
- **Actions**: https://github.com/ak-hosting/ak-emlak/actions
- **Settings**: https://github.com/ak-hosting/ak-emlak/settings
- **Pages**: https://github.com/ak-hosting/ak-emlak/settings/pages

---

**💡 İpucu**: İlk deployment 2-5 dakika sürebilir. Sabırlı olun!

**📧 Sorularınız için: ak@ak-pro.com** 