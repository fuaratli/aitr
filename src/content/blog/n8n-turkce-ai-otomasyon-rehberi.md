---
title: 'n8n Türkçe Rehber: AI ile İş Akışı Otomasyonu — Zapier''dan 10x Ucuza'
description: 'n8n nedir, nasıl kurulur, AI nodes ile (OpenAI, Claude, Pinecone) gerçek otomasyon kur. 5 hazır workflow, fiyatlandırma, Zapier/Make alternatifi.'
pubDate: 'May 21 2026'
category: 'rehber'
tags: ['n8n', 'otomasyon', 'workflow', 'ai agent', 'rehber']
---

Zapier aylık $50 alıyor + her **görev başına ek ücret**. **n8n** aynı şeyi yapıyor, **bedava** + **sınırsız** (self-hosted). 2026'da n8n = **otomasyonun yeni standardı**, özellikle **AI workflow** çağında.

Bu yazıda n8n'i sıfırdan kurulumdan profesyonel kullanıma kadar anlatıyorum. **5 hazır workflow** ve **AI entegrasyonu** dahil.

## n8n Nedir?

**n8n** = open-source workflow automation. Düğüm bazlı görsel editör. Zapier benzeri ama:
- ✅ Açık kaynak (kendi sunucunda)
- ✅ Sınırsız executions (kendin host edersen)
- ✅ AI nodes built-in
- ✅ Custom code (JS/Python)
- ⚠️ Setup biraz teknik (Zapier'dan)

400+ entegrasyon: Gmail, Slack, Google Sheets, Notion, Airtable, OpenAI, Claude, Telegram, WhatsApp Business, Trello, Shopify, Stripe, vs.

## Erişim ve Fiyat

| Seçenek | Fiyat | Kim için |
|---|---|---|
| **n8n Cloud Starter** | $24/ay | Setup istemeyenler |
| **n8n Cloud Pro** | $50/ay | Daha fazla execution |
| **Self-hosted (Docker)** | $0 + sunucu (~$5/ay) | Geliştirici |
| **Self-hosted Desktop** | $0 | Lokalde test |

**Tavsiye:** Geliştiriciysen self-host → toplam $5/ay (DigitalOcean droplet). Değilsen Cloud Starter.

## 5 Dakikalık Kurulum (Docker)

```bash
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```

`http://localhost:5678` aç → ilk kullanıcıyı kur → işlem tamam.

Production için: DigitalOcean'da Docker droplet ($5/ay) → 1-click kurulum.

## İlk Workflow — 5 Dakikada

**Hedef:** Yeni Notion sayfası açıldığında ChatGPT özetle, Slack'e gönder.

1. **Trigger:** Notion → "New page added" node
2. **Process:** OpenAI ChatGPT → "Summarize"
3. **Action:** Slack → "Send message"

5 dakikada workflow hazır.

## 5 Hazır AI Workflow

### 1. Gmail → AI Özet → Notion
- Tetikleyici: Yeni gelen e-posta (etiketli)
- AI: Claude/GPT ile 2 cümlelik özet
- Çıktı: Notion sayfasına eklenir

### 2. Twitter/X izleme → Sentiment Analiz → Dashboard
- Tetikleyici: Belirli keyword'lerle tweet gelir
- AI: Pozitif/negatif sentiment skoru
- Çıktı: Google Sheets dashboard

### 3. RSS feed → AI ile içerik üret → WordPress yayını
- Tetikleyici: 5 favori blog'tan yeni yazılar
- AI: Özet + kendine özel yorum
- Çıktı: Senin WordPress'e otomatik yayınlanır

⚠️ Etik not: Telif riski var. **Kaynak göster + kendi yorumun**.

### 4. WhatsApp mesajı → AI cevap → otomatik gönder
- Tetikleyici: Müşteriden WhatsApp mesajı (Business API)
- AI: Sıkça sorulan soruysa otomatik cevap, değilse human'a yönlendir
- Çıktı: Müşteri otomatik mesaj alır

### 5. PDF dosyası → AI analiz → Telegram bildirim
- Tetikleyici: Google Drive'a yeni PDF eklenir
- AI: NotebookLM benzeri özet
- Çıktı: Telegram'a bildirim + özet

## AI Nodes — Detaylı

n8n'in built-in AI nodes:
- **OpenAI** — GPT-4, DALL-E, Whisper
- **Anthropic** — Claude
- **Google Vertex** — Gemini
- **Cohere**
- **HuggingFace**
- **AI Agent** (LangChain) — multi-step otonom akış
- **Memory** — sohbet hafızası
- **Pinecone / Qdrant** — vector DB
- **Tools** — Web search, calculator, code interpreter

Bu kombinasyonla **kendi AI asistanını** n8n üstüne kurabilirsin — Zapier'da bu yok.

## Zapier vs Make vs n8n

| Özellik | Zapier | Make.com | n8n |
|---|---|---|---|
| Başlangıç fiyat | $20/ay | $9/ay | $0 (self-host) |
| Pro fiyat | $50-300/ay | $30-100/ay | $24/ay Cloud |
| Operations (executions) | 100-50K/ay | 10K-1M/ay | Sınırsız (self) |
| AI nodes | Sınırlı | Sınırlı | ✅ Built-in geniş |
| Code (JS) | ✅ | ✅ | ✅ |
| Self-host | ❌ | ❌ | ✅ |
| Türkçe arayüz | ⚠️ Yarı | ⚠️ Yarı | ⚠️ Sınırlı |
| Mobile app | ✅ | ❌ | ❌ |

**Sonuç:** n8n **en güçlü + en ucuz**, ama biraz daha teknik.

## Türkçe Otomasyon Örnekleri

### Esnaf için
- Trendyol → yeni sipariş → WhatsApp'tan müşteriye Türkçe onay
- Hepsiburada → iade talebi → AI sınıflandır + e-posta tasla

### Freelance için
- Üyelik formu → AI ile karakter analizi → CRM
- Yeni mail → Türkçe AI özet + öncelik etiketle

### Profesyonel için
- LinkedIn job alerts → AI ile uygunluk skoru → favoriler listesi
- Calendly → randevu → AI ile brief hazırla → e-posta

## Para Açısından — Realiteler

Aylık 1000 görev için:
- **Zapier:** $50+
- **Make.com:** $20
- **n8n Cloud:** $24
- **n8n Self-hosted:** $5 (sunucu)

500 görev sonrası **n8n net karlı**.

## Sınırlamalar

⚠️ **n8n için zorluklar:**
1. **Visual UI** Zapier kadar olgun değil
2. **Hata yönetimi** manuel kuruluyor
3. **Mobil yok**
4. **Topluluk** Zapier'dan küçük (ama büyüyor)

**Çözüm:** İlk haftalar **YouTube tutorialları** + **n8n Discord** topluluğu.

## Sonuç

n8n, **otomasyonun açık kaynak rüyası** — pratik gerçekleştirilmiş hali. AI + workflow kombosu için **en güçlü** araç şu an.

İlk adım: bu hafta sonu **n8n Cloud Starter** ile başla (Docker yok, hızlı). Beğendiysen 3 ay sonra self-host'a geç.

İlgili: [AI Agents](/blog/ai-agents-nedir-hype-mi-gercek-mi/), [AI ile Para Kazanma](/blog/ai-ile-para-kazanma-2026/).

---

*Bağımsız rehber. Mayıs 2026 itibarıyla geçerli.*
