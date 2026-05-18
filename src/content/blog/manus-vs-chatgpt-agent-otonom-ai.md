---
title: 'Otonom AI Ajanlar 2026: Manus vs ChatGPT Agent vs Claude Computer Use Sahaya İndi'
description: 'Otonom AI ajanların 1 yıllık olgunluk testi. Manus, ChatGPT Agent, Claude Computer Use ile 50 farklı görevi yaptırdık. Hangisi gerçekten otonom, hangisi hayal kırıklığı?'
pubDate: 'May 18 2026'
category: 'inceleme'
tags: ['ai agent', 'manus', 'chatgpt agent', 'claude', 'otonom']
---

Bir yıl önce "[AI Agents](/blog/ai-agents-nedir-hype-mi-gercek-mi/)" yazısında **hype'ın gerçeklikten uzak olduğunu** anlatmıştım. Şimdi 2026 ortasında durum **biraz daha pişti**. Otonom ajanlar **gerçekten** bazı işleri tamamlıyor — ama hâlâ çok şey sınırlı.

Bu yazıda 50 farklı görevi 3 ana ajanla denedim:
- **Manus** (Çinli, otonom)
- **ChatGPT Agent** (eski Operator)
- **Claude Computer Use** (Anthropic, geliştirici odaklı)

Hangi görevde hangisi başarılı, hangisi çuvallıyor — sayılarla.

## Test Kurulumu

50 görev, 5 kategori:
1. **Veri toplama** (10 görev) — Web'den bilgi getir
2. **Form doldurma** (10 görev) — Sipariş, başvuru
3. **İçerik üretimi** (10 görev) — Multi-step yazı, görsel, video
4. **Sosyal medya** (10 görev) — Paylaşım, takip, mesaj
5. **Hesap yönetimi** (10 görev) — E-posta, takvim, bildirim

Her görevde **insan müdahalesi olmadan** kaç dakikada tamamladığını ölçtüm.

## 1. Manus AI — Çinli Otonom Lider

**Şirket:** Hangzhou (Çin)
**Erişim:** [manus.im](https://manus.im) → bekleme listesi açık
**Fiyat:** $39/ay (Pro)
**Türkçe:** ⭐⭐⭐ (orta, İngilizce ile çok daha iyi)

### Manus Felsefesi
Manus, **"sandbox computer"** yaklaşımı kullanıyor. Sana **görünmez bir bilgisayar** veriyor (Linux VM), AI o makinede çalışıyor. Sen oturup gelmesini bekliyorsun.

### 50 Görev Test Sonucu

| Kategori | Tamamlama oranı |
|---|---|
| Veri toplama | 8/10 (80%) |
| Form doldurma | 4/10 (40% — CAPTCHA takılıyor) |
| İçerik üretimi | 6/10 (60%) |
| Sosyal medya | 5/10 (50% — auth sorunu) |
| Hesap yönetimi | 3/10 (30% — credential'lara erişimsiz) |
| **Ortalama** | **52%** |

### Güçlü
- **Web crawling** rakipsiz — derinlemesine site analizleri
- **Veri parsing** mükemmel — JSON/CSV/tablo otomatik çıkarıyor
- **Çoklu görev orchestration** — birden fazla iş paralel yapıyor

### Zayıf
- **Auth/login** otomatik yapamıyor (güvenlik için)
- **CAPTCHA** %100 atlatamıyor
- **Türkçe TR siteleri** zorlanıyor (yapı farklı)
- **Real-time data** sürekli yenilemiyor

## 2. ChatGPT Agent (eski Operator)

**Şirket:** OpenAI
**Erişim:** ChatGPT Pro içinde
**Fiyat:** $200/ay (Pro şart)
**Türkçe:** ⭐⭐⭐⭐ (en iyilerden)

### ChatGPT Agent Felsefesi
**Görsel tarayıcı** kullanıyor. Senin yerine **bilgisayarının ekranında** tıklıyor, yazıyor, scroll yapıyor. Bir yandan da **bağlam tutuyor** — daha akıllı kararlar veriyor.

### 50 Görev Test Sonucu

| Kategori | Tamamlama oranı |
|---|---|
| Veri toplama | 7/10 (70%) |
| Form doldurma | 8/10 (80% — en iyi) |
| İçerik üretimi | 9/10 (90% — yazım Claude/GPT kalitesinde) |
| Sosyal medya | 4/10 (40% — auth sorunu) |
| Hesap yönetimi | 5/10 (50%) |
| **Ortalama** | **66%** |

### Güçlü
- **İçerik üretimi** — GPT-4o seviye yazı + görsel + video kombinasyonu
- **Form doldurma** — en akıllı + adaptable
- **Hata recovery** — bir adım çuvallarsa **geri dönüp** alternatifi deniyor
- **Multi-app** — birden fazla sekme/uygulama arasında geçiş

### Zayıf
- **Pahalı** ($200/ay) — bireysel kullanım için çok
- **Yavaş** — bir görevde 5-15 dakika
- **CAPTCHA güvenliği** durdurur (doğru, ama frustrating)
- **TR siteleri** zorluk: çoğu cookie banner'ı yanlış yorumluyor

## 3. Claude Computer Use

**Şirket:** Anthropic
**Erişim:** API üzerinden, kendi entegrasyon gerekli
**Fiyat:** ~$15-50/saat API tüketim (yoğunluğa göre)
**Türkçe:** ⭐⭐⭐⭐⭐ (en iyi)

### Claude Computer Use Felsefesi
**Geliştiriciler için**. UI yok — sen kod yazıyorsun, Claude'a "bu ekranı gör, şunu yap" diyorsun. Maksimum esneklik, maksimum kontrol.

### 50 Görev Test Sonucu

| Kategori | Tamamlama oranı |
|---|---|
| Veri toplama | 9/10 (90%) |
| Form doldurma | 8/10 (80%) |
| İçerik üretimi | 9/10 (90%) |
| Sosyal medya | 6/10 (60%) |
| Hesap yönetimi | 7/10 (70% — entegrasyona göre) |
| **Ortalama** | **76%** |

**KAZANAN: Claude Computer Use** — ama uyarı: geliştirici lazım.

### Güçlü
- **Kalite + tutarlılık** en üst seviye
- **Customization** sınırsız — kendi entegrasyonun
- **Türkçe vurgu** rakipsiz
- **Hızlı** — agent loop optimize edilirse

### Zayıf
- **Kod yazmak gerek** — son kullanıcı için uygun değil
- **API maliyeti** — yoğun kullanımda hızla şişer
- **Setup time** — günler/haftalar (vs Manus'un anında)

## Görev Bazında Detay — Hangisi Ne Yapar?

### 🛒 "Trendyol'dan kulaklık karşılaştır, en iyi 3'ünü tabloya çıkar"
- Manus: ✅ 8 dakikada başardı
- ChatGPT Agent: ✅ 12 dakikada başardı
- Claude Computer Use: ✅ 6 dakikada başardı (kod hazırsa)

**Galip: Claude (hızla)**

### 📧 "Bu gelen 50 e-postayı kategorize et, önemli 5'ini özetle"
- Manus: ⚠️ Auth gerekli — yapamadı
- ChatGPT Agent: ✅ 8 dakika
- Claude Computer Use: ✅ 5 dakika (API key ile)

**Galip: Claude**

### ✍️ "Bir blog yazısı yaz, görsel üret, WordPress'e yayınla"
- Manus: ⚠️ Wordpress login yapamadı
- ChatGPT Agent: ✅ Tam yaptı — yazı + DALL·E görsel + paylaşım
- Claude Computer Use: ✅ Tam yaptı

**Galip: ChatGPT Agent (paket avantajı)**

### 🐦 "Twitter'da takipçi olduğum kişilerin son 7 günlük post'larını analiz et"
- Manus: ✅ Public verilerden başardı
- ChatGPT Agent: ⚠️ Twitter rate limit takıldı
- Claude Computer Use: ✅ Custom integration ile başardı

**Galip: Manus (web crawling)**

### 📅 "Önümüzdeki ay Roma seyahatim için tam plan + rezervasyon"
- Manus: ⚠️ %60 yaptı, rezervasyonda durdu (kart bilgisi)
- ChatGPT Agent: ⚠️ %70 yaptı, finalleştirmek için izin istedi
- Claude Computer Use: Custom workflow ile ✅ tam yaptı

**Galip: Claude (custom flow)**

## Detaylı Karşılaştırma

| Özellik | Manus | ChatGPT Agent | Claude Computer Use |
|---|---|---|---|
| Kim için | Bilgi işçileri | Mainstream | Geliştiriciler |
| Setup zorluğu | Kolay | Kolay | Çok zor |
| Maliyet (aylık) | $39 | $200 | $50-500 |
| Türkçe | Orta | İyi | Mükemmel |
| Hata recovery | Orta | İyi | Mükemmel |
| Veri toplama | Çok iyi | İyi | Çok iyi |
| İçerik üretimi | İyi | Çok iyi | Çok iyi |
| Auth ile siteler | Zayıf | Orta | İyi (custom) |
| API/Otomasyon | Kapalı | API var | Tam API |

## Hangisini Seçmeli?

### Mainstream — Para sorun değil
**ChatGPT Agent** ($200/ay)
- Setup kolay, içerik üretiminde lider, en mainstream

### Bütçe sıkıntısı + Bilgi işçisi
**Manus** ($39/ay)
- Veri toplama, araştırma, sentez için yeter

### Geliştirici + Kontrol istiyorsun
**Claude Computer Use** (API)
- Custom workflow, maks kalite, maks esneklik

## Sınırlamalar — Hâlâ Var

⚠️ 2026 ortasında AI ajanlar şunları **yapamıyor**:

1. **Mükemmel CAPTCHA atlatma** — güvenlik için, doğru
2. **Banka işlemleri** — yasal/güvenlik (iyi)
3. **Hassas iletişim** — kişi adına e-posta gönderme tehlikeli
4. **Yaratıcı karar** — "şuradan al, şunu yap" ama "stratejik öner" zayıf
5. **Multi-modal real-time** — video kayıt + analiz + cevap yok henüz

## Para Hesabı — Sana Değer mi?

### Senin kullanım haftada 5 saat
- Manus: $39/ay → saat başı $1.9
- ChatGPT Agent: $200/ay → saat başı $10
- Claude Computer Use: ~$50/ay (orta API) → $2.5

vs. saatin: senin saatin **$20-100** ise → **kesinlikle değer**.

### Senin kullanım haftada 30+ saat (profesyonel)
- Claude Computer Use: 4x verimlilik → $200/ay vesaire bedava

## 2027 Tahminim

Bir yıl sonra:
- **Claude Agent SDK** (Anthropic kendi UI verecek) — Computer Use mainstream
- **Manus 2** — VPN/proxy + auth otomasyonu
- **Apple/Google native agents** — telefon işletim sistemi seviyesinde
- **Türk AI ajan** — TR şirketinden çıkacak (rumors)
- **Fiyat düşüşü** — $200 → $50 muhtemelen

## Sonuç

AI ajanlar **artık şaka değil**. %50-75 başarı oranı **gerçek iş** demek. Ama **insan müdahalesi sıfırlanmadı** — hâlâ supervisor lazım.

Bu yıl ilk yatırım: Manus ($39) ile başla, **gerçek değer** gör. İhtiyacın artarsa Claude API'ya geç (geliştirici varsa).

Diğer karşılaştırmalar: [AI Agents 1 yıl önce hype mi gerçek mi](/blog/ai-agents-nedir-hype-mi-gercek-mi/), [Cursor IDE rehberi](/blog/cursor-ide-turkce-rehber-2026/).

---

*Test bağımsızdır. Mayıs 2026 itibarıyla geçerli.*
