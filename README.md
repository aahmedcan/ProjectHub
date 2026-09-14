# ProjectHub 🚀

**SaaS Platformu - Proje Yönetim ve Ekip Kolaborasyonu**

ProjectHub, küçük işletmeler ve startuplar için tasarlanmış modern bir proje yönetim platformudur. Ekip kolaborasyonunu basitleştirin, görevleri takip edin ve verimliliği artırın.

## ✨ Özellikler

- ✅ **Proje Yönetimi** - Projeleri oluşturun ve yönetin
- 👥 **Ekip Kolaborasyonu** - Gerçek zamanlı işbirliği
- 📊 **Görev Takibi** - Görevleri atayın ve takip edin
- 🔐 **Güvenli Kimlik Doğrulama** - Kullanıcı sistemi ve oturum yönetimi
- 📱 **Responsive Tasarım** - Tüm cihazlarda çalışır
- 📈 **Raporlama** - Proje ilerleme raporları

## 🛠️ Tech Stack

- **Backend**: Node.js + Express.js
- **Frontend**: React.js
- **Database**: PostgreSQL
- **Authentication**: JWT
- **Styling**: Tailwind CSS
- **Deployment**: Docker + AWS/Vercel

## 📁 Proje Yapısı

```
ProjectHub/
├── backend/           # Node.js + Express API
├── frontend/          # React uygulaması
├── database/          # PostgreSQL şemaları
├── docker-compose.yml # Docker yapılandırması
└── README.md
```

## 🚀 Hızlı Başlangıç

### Gereksinimler
- Node.js 18+
- PostgreSQL 14+
- npm veya yarn

### Kurulum

1. **Repository'yi klonla**
```bash
git clone https://github.com/aahmedcan/ProjectHub.git
cd ProjectHub
```

2. **Backend kurulumu**
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

3. **Frontend kurulumu**
```bash
cd ../frontend
npm install
npm start
```

Uygulama `http://localhost:3000` adresinde açılacak.

## 📝 API Endpoints (Planlanan)

### Kullanıcılar
- `POST /api/auth/register` - Kayıt
- `POST /api/auth/login` - Giriş
- `GET /api/users/profile` - Profil bilgisi

### Projeler
- `GET /api/projects` - Tüm projeleri listele
- `POST /api/projects` - Yeni proje oluştur
- `PUT /api/projects/:id` - Proje güncelle
- `DELETE /api/projects/:id` - Proje sil

### Görevler
- `GET /api/tasks` - Görevleri listele
- `POST /api/tasks` - Yeni görev oluştur
- `PUT /api/tasks/:id` - Görev güncelle
- `DELETE /api/tasks/:id` - Görev sil

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen şunları yapın:
1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'e push yapın (`git push origin feature/AmazingFeature`)
5. Pull Request açın

## 📄 Lisans

Bu proje MIT Lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 📧 İletişim

- Email: aahmedcan@example.com
- GitHub: [@aahmedcan](https://github.com/aahmedcan)

---

**ProjectHub** ile takımınızın verimliliğini artırın! 🎯
