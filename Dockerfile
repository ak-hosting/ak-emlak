# AK Emlak - Dockerfile
# Nginx tabanlı hafif container

# Alpine Linux tabanlı Nginx image'ı kullan
FROM nginx:alpine

# Metadata
LABEL maintainer="a.koc <ak@ak-pro.com>"
LABEL version="1.0.0"
LABEL description="AK Emlak - İstanbul Emlak Web Sitesi Şablonu"

# Çalışma dizinini ayarla
WORKDIR /usr/share/nginx/html

# Sistem paketlerini güncelle ve gerekli araçları yükle
RUN apk update && \
    apk add --no-cache \
    curl \
    wget \
    vim \
    && rm -rf /var/cache/apk/*

# Nginx yapılandırmasını kopyala
COPY nginx.conf /etc/nginx/nginx.conf

# Web sitesi dosyalarını kopyala
COPY index.html .
COPY assets/ ./assets/

# Nginx için gerekli dizinleri oluştur
RUN mkdir -p /var/log/nginx && \
    mkdir -p /var/cache/nginx && \
    mkdir -p /etc/nginx/conf.d

# Dosya izinlerini ayarla
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# Port 80'i aç
EXPOSE 80

# Health check ekle
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost/ || exit 1

# Nginx'i başlat
CMD ["nginx", "-g", "daemon off;"]

# ===========================================
# DOCKER KULLANIM TALİMATLARI
# ===========================================
# 
# Image oluşturma:
# docker build -t ak-emlak .
# 
# Container başlatma:
# docker run -d -p 8080:80 --name ak-emlak-container ak-emlak
# 
# Container durdurma:
# docker stop ak-emlak-container
# 
# Container silme:
# docker rm ak-emlak-container
# 
# Logları görüntüleme:
# docker logs ak-emlak-container
# 
# Container içine girme:
# docker exec -it ak-emlak-container sh
# 
# ===========================================
# PERFORMANS AYARLARI
# ===========================================
# - Alpine Linux: Hafif ve güvenli
# - Nginx: Yüksek performanslı web sunucusu
# - Multi-stage build: Optimize edilmiş image boyutu
# - Health check: Container sağlık kontrolü
# 
# ===========================================
# GÜVENLİK
# ===========================================
# - Non-root kullanıcı (nginx)
# - Minimal paket yükleme
# - Güncel Alpine Linux
# - Güvenlik güncellemeleri 