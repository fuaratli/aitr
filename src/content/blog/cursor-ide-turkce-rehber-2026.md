---
title: 'Cursor IDE Türkçe Rehber 2026: AI ile Kod Yazmanın Yeni Standardı'
description: 'Cursor IDE''ye nasıl başlanır, en güçlü özellikleri (Tab, Composer, Agent), Türkçe ipuçları, fiyatlar, VS Code''dan geçiş ve gerçek kullanım örnekleri tek rehberde.'
pubDate: 'May 12 2026'
category: 'rehber'
tags: ['cursor', 'ai kod', 'yazılım', 'geliştirici', 'rehber', '2026']
---

Cursor, 2024 sonundan itibaren yazılımcıların yeni standardı haline geldi. **VS Code üzerine inşa edilmiş, AI'ı kod yazımının merkezine koyan** bir IDE. Bu rehberde sıfırdan başlayarak Cursor'ı **Türkçe** öğrenmen için ne biliyorsam onu sıralıyorum: kurulum, en güçlü özellikler, fiyatlandırma, gerçek kullanım örnekleri, alternatifler.

## Cursor Nedir, Niye Bu Kadar Popüler?

Kısa cevap: **VS Code, ama AI içeriden**.

Uzun cevap: GitHub Copilot bir VS Code eklentisidir, autocomplete yapar. Cursor ise VS Code'u fork edip içine **derin AI özellikleri yerleştirmiştir** — Tab autocomplete'ten "tüm dosyaları anla, yeniden yaz" agent moduna kadar.

2026 itibarıyla:
- Kullanıcı sayısı: 1 milyon+ aktif geliştirici
- Şirket değerlemesi: $2.5 milyar
- Anthropic, OpenAI, Vercel gibi şirketlerin geliştiricileri **standart olarak Cursor kullanıyor**

## Kurulum (5 Dakika)

1. **[cursor.com](https://cursor.com)** → **Download for Windows / macOS / Linux**
2. İndir, kur. VS Code kuruluymuş gibi açılır.
3. İlk açılışta:
   - "Import VS Code settings" → **Evet** (varsa)
   - Klavye kısayolu: **VS Code** stilini seç (alıştığın şey)
   - Tema: **Modern Dark** öneririm
4. Hesap aç → Pro plan istersen $20/ay, **ücretsiz plan da deneyebilirsin**

## Cursor'ın 5 Süper Özelliği

### 1. ⚡ Cursor Tab (Otomatik Tamamlama)
GitHub Copilot'tan 10x daha güçlü. Tek satır değil, **çoklu satır ve çoklu yerleşim** önerir.

Örnek: Bir fonksiyonu değiştirirsen, Cursor o fonksiyonun **tüm kullanım yerlerini** otomatik günceller. Sen sadece **Tab**'a basıyorsun.

### 2. 💬 Cmd+K (Inline Edit)
Bir kod satırı/bloku seç → **Cmd+K** (Win: Ctrl+K) → Türkçe yaz: *"bu fonksiyona hata yönetimi ekle"*. Cursor inline değiştirir.

Örnek prompt'lar:
- "Bu kod async olsun"
- "Bu fonksiyon için unit test yaz"
- "Buradaki magic number'ları sabit yap"
- "TypeScript tipini ekle"

### 3. 💻 Cmd+L (Chat)
Sağ panelde AI chat. Kod sorularını sorabilirsin. **Tüm projeyi bağlam olarak alabilir** — bu Copilot'ta yok.

```
@codebase Bu projedeki authentication akışı nasıl çalışıyor?
@file:auth.ts Bu dosyada güvenlik açığı var mı?
@docs:react Hook kuralları nedir?
```

### 4. 🤖 Composer / Agent Modu
Cursor'ın en güçlü özelliği. **Bir görev tarif et, Cursor onu uçtan uca yapar** — birden fazla dosya değiştirebilir.

Örnek:
```
Composer'a yaz:
"Bir blog post için yeni bir sayfa oluştur:
- pages/posts/[id].tsx
- API endpoint: /api/posts/[id]
- Markdown render desteği
- SEO meta tagları"

Cursor 4-5 dosyayı eş zamanlı oluşturup birbirine bağlar.
```

### 5. 🔄 Cursor Rules (Proje Hafızası)
Proje köküne `.cursorrules` dosyası ekle → her sohbette Cursor bu kuralları hatırlar:
```
- TypeScript strict mode kullan
- Tailwind CSS kullan, inline style yok
- React Server Components tercih et
- Hata mesajları Türkçe yaz
```

## Fiyatlandırma (2026)

| Plan | Aylık | Özellikler |
|---|---|---|
| **Hobby (Free)** | 0 $ | Sınırlı Tab, ayda 50 fast request, 200 slow request |
| **Pro** | 20 $ | Sınırsız Tab, 500 fast request, sınırsız slow request |
| **Business** | 40 $/kullanıcı | Pro + ekip yönetimi, gizlilik garanti |

**TR'den ödeme:** Kart ile sorunsuz. Yaklaşık aylık 750 TL Pro için.

**İlk hangi planı al?** Önce **ücretsiz** dene 1-2 hafta, eğer günlük 2+ saatten fazla kullanıyorsan Pro'ya geç.

## VS Code'dan Cursor'a Geçiş

İyi haber: **Aynı.** VS Code uzantıların, ayarların, kısayolların hepsi import edilebiliyor. İlk açılışta "Import VS Code" derken otomatik yapar.

Farklılıklar:
- Komut paleti aynı (Ctrl+Shift+P)
- Klavye kısayolları aynı (varsayılan)
- Eklentiler çoğu çalışıyor (VSIX uyumlu)
- **Cmd+K, Cmd+L, Tab** yeni — ezberle.

## Türkçe Kullanım İpuçları

### Türkçe prompt yazabilir misin?
**Evet, kullanılır ama dikkat:**
- Cursor altta Claude / GPT modelleri çalıştırıyor — Türkçe anlıyorlar
- Yine de **kod yorumları ve değişken isimleri İngilizce yaz**, Cursor o pattern'a alışkın
- Karmaşık taleplerde İngilizce daha güvenilir

### En iyi pratik
```
✅ İyi: "add error handling to fetchUser function in user.ts"
✅ İyi: "fetchUser fonksiyonuna hata yönetimi ekle"
❌ Kötü: "userI fetcjla işte hatayı düzenle"  ← yazım hatası, prompt başarısız olabilir
```

## Cursor + Türk Geliştiricisi Senaryoları

### Senaryo 1: Junior — Öğrenirken
```
Yöntem: Bir kod yazdın, anlamıyorsan
Cmd+L → "@file Bu fonksiyonu satır satır Türkçe açıkla, junior'a anlatır gibi"
```

### Senaryo 2: Mid-level — Hızlı geliştirme
```
Yöntem: Bir feature düşünüyorsun
Composer → "Bir CRUD ekle: products. Postgres tablo + Next.js API routes + React component"
Cursor 10 dakikada ana iskeleti oluşturur
```

### Senaryo 3: Senior — Kod inceleme
```
Yöntem: PR review yapıyorsun
Cmd+L → "@diff Bu PR'da güvenlik veya performance sorunu var mı?"
Cursor mantıklı uyarılar verir
```

## Cursor Alternatifleri

| Alternatif | Cursor'a göre farkı |
|---|---|
| **GitHub Copilot** | Daha ucuz ($10), VS Code eklentisi, Tab kalitesi Cursor kadar değil |
| **Windsurf** (Codeium) | Cursor'un en yakın rakibi. Cascade adında agent modu var, biraz daha smooth ama ekosistem küçük |
| **Zed** | Performans odaklı yeni IDE, AI özellikleri Cursor kadar derin değil |
| **VS Code + Continue.dev** | Açık kaynak, kendi API anahtarın, %100 ücretsiz |

Detaylı karşılaştırma için "[ChatGPT, Claude, Gemini karşılaştırması](/blog/chatgpt-claude-gemini-karsilastirma-2026/)" yazımıza bak — Cursor altyapısında Claude kullanıyor, model seçimi önemli.

## Performans + Hız

Cursor M1 MacBook'ta ve Windows 16GB RAM'de **çok hızlı**. 8GB RAM'de:
- Açılış 5-10 saniye
- Büyük projelerde (10K+ dosya) hafıza tüketimi yüksek
- Cursor Tab gecikme bazen artıyor

Önerim: **16GB+ RAM**, SSD üzerinde.

## Para Kazanma — Cursor'la

Cursor'la yapabileceğin para kazanma yolları:
- **Freelance hızlanma** — aynı zamanda 3-4x daha çok teslim et
- **Mikro-SaaS** — fikrini Cursor'la 1 haftada MVP'ye dönüştür
- **Müşteri portföyü** — kalite artarken çalışılan müşteri sayısı artırılabilir

Detay için "[AI ile Para Kazanma](/blog/ai-ile-para-kazanma-2026/)" yazısına bak — Cursor + freelance kombosu en yüksek getirili yollardan biri.

## Sıkça Karşılaşılan Sorunlar

**❓ Cursor Tab önerileri saçma sapan geliyor**
Çözüm: `.cursorrules` dosyası yaz, proje contextini belirt. Cursor zekileşir.

**❓ Composer'da dosya kaybolur, geri alamam**
Çözüm: Composer'da değişiklik öncesi **commit** yap. Cursor'un "Restore Checkpoint" özelliği var.

**❓ Türkçe yazınca model hata veriyor**
Çözüm: Türkçe karakterleri (ç, ş, ı, ğ) "düz" yazmayı dene veya İngilizce'ye geç.

**❓ Pro'da limit doluyor (500 fast)**
Çözüm: Geçici olarak slow mod'a düşersin, kalite biraz azalır ama çalışır. Veya Pro+ yükselt.

## Sonuç: Cursor Almalı mıyım?

**Evet, eğer:**
- Yazılım geliştiriyor + günlük 1+ saat kod yazıyorsan
- VS Code zaten ana editörünse
- Freelance / startup işiniz varsa (hız çok kazandırıyor)
- Yeni framework / dil öğreniyorsan (Cursor öğretmen gibi)

**Hayır, eğer:**
- Çok az kod yazıyorsan (haftada 2-3 saat altı)
- Şirketin sıkı gizlilik politikası varsa (kod buluta gidiyor, dikkat)
- Düşük bütçen varsa → GitHub Copilot ($10) yeterli olabilir

Önerim: **Ücretsiz planda 1 hafta dene.** Sevdiysen Pro'ya geç, aksi halde Copilot veya Continue.dev'e dön.

Daha geniş AI araçları için "[Ücretsiz AI Araçları 2026](/blog/ucretsiz-yapay-zeka-araclari-2026/)" listemize bak — Cursor dışında 20 daha öneriyoruz.

---

*Bu rehber bağımsızdır. Cursor ile resmi bir bağlantımız yoktur. Tüm özellikler Mayıs 2026 itibarıyla geçerlidir.*
