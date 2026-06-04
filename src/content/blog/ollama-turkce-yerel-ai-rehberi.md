---
title: 'Ollama Türkçe Rehberi: Bilgisayarında Bedava ve Gizli AI Çalıştırmak'
description: 'Ollama ile ChatGPT''yi kendi bilgisayarında çalıştır. Sıfır internet, sıfır gizlilik endişesi, sıfır maliyet. Llama, Mistral, DeepSeek, Qwen — hepsi yerel. Kurulum + ipuçları.'
pubDate: 'May 15 2026'
category: 'rehber'
tags: ['ollama', 'yerel ai', 'gizlilik', 'açık kaynak', 'llama']
---

ChatGPT abonesi olarak sevdiğim şey çok. Beğenmediğim bir şey **çok**: her şey **bulutta**. Cumhurbaşkanlığı yardımcılığı yapan birinin "ChatGPT'yi nasıl kullanıyorlar?" sorusunu duydum geçen ay — cevap **kullanmıyorlar**. Çünkü her mesaj **OpenAI sunucularına** gidiyor.

Bunun çözümü: **AI'ı kendi bilgisayarında çalıştırmak**. Hiç internet'e gitmez, hiç kimseye gitmez, hiç kimsenin görmediği şekilde sohbet edebilirsin.

Bu yazıda **Ollama** ile **Türkçe konuşan LLM'leri** kendi laptop'ında nasıl çalıştıracağını anlatıyorum. Kurulum 5 dakika, kullanım ChatGPT kadar kolay.

## Önce: Yerel AI Kim İçin?

✅ **Senin için ideal eğer:**
- Hassas iş yapıyorsan (hukuk, sağlık, finans, savunma) — veri bilgisayardan çıkmadığı için [KVKK uyumu](/blog/kvkk-yapay-zeka-uyum-rehberi-2026/) açısından en güvenli yol
- Gizliliğe **fanatik** önem veriyorsan
- Şirket politikası AI bulut kullanımı kısıtlıyorsa
- Sıfır internet'le çalışmak istiyorsan (uçak, kamp, vs.)
- Geliştiriciysen, **API maliyetlerinden kaçıyorsan**
- AI'ı öğrenmek istiyorsan (model nasıl çalışır?)

❌ **Sana göre değil eğer:**
- Eski/güçsüz bilgisayar (RAM düşük)
- Sadece "biraz" AI kullanan (overkill)
- "En yeni model" peşindesen (yerel modeller GPT-5'i geçmez)
- Görsel/ses/video AI istiyorsan (Ollama sadece metin)

## Donanım Gereksinimi — Net Tablo

| Sistemin | Çalıştırabileceğin model |
|---|---|
| **8 GB RAM** | Phi-3 (3.8B), Llama 3.2 1B-3B — küçük modeller, basit görevler |
| **16 GB RAM** | Llama 3.1 8B, Mistral 7B, DeepSeek-R1 7B — günlük kullanım için iyi |
| **32 GB RAM + GPU** | Llama 3.1 70B (quantized), Mixtral 8x7B — profesyonel |
| **64 GB RAM + iyi GPU** | DeepSeek-V3 distilled, Qwen 72B — ChatGPT seviye |

**M-series Mac (M1, M2, M3, M4)** çok iyi performance veriyor. Apple Silicon optimize edilmiş.

**Windows + NVIDIA GPU** ideal. AMD GPU çalışır ama daha yavaş.

**Linux**: en güçlü performans.

## Kurulum — 5 Dakika

### 1. Ollama'yı indir
[ollama.com](https://ollama.com) → İndir butonu
- Mac: `.dmg` dosyası
- Windows: `.exe` installer
- Linux: tek satır komut

### 2. Kur
Çift tıkla, kurulum sihirbazını izle.

Mac'te:
- "Install command line tool" — onayla
- Menubar'da Ollama ikonu görünür

Windows'ta:
- Background service olarak çalışır

### 3. Terminal aç + ilk model indir
```bash
ollama pull llama3.1:8b
```

3-5 GB indiriliyor (internet hızına göre 5-20 dk).

### 4. İlk sohbet
```bash
ollama run llama3.1:8b
```

Terminalde sohbet kutusu açılır:
```
>>> Merhaba, Türkçe konuşabilir misin?
Evet, elbette! Sana nasıl yardımcı olabilirim?

>>> Türk mutfağından 3 öneri ver.
Tabii ki! İşte 3 lezzetli Türk mutfağı önerisi:
1. Mantı...
2. Köfte...
3. Baklava...
```

Bu kadar. **İnternet bağlantınız var mı yok mu fark etmez** — model laptop'unda çalışıyor.

## Türkçe Performans — Modeller

5 farklı modeli aynı 10 Türkçe prompt'la test ettim:

| Model | Boyut | Türkçe | Hız | Notlar |
|---|---|---|---|---|
| **Llama 3.1 8B** | 4.7 GB | ⭐⭐⭐⭐ | Hızlı | En dengeli |
| **Mistral 7B** | 4.4 GB | ⭐⭐⭐ | Hızlı | Resmi yazımda iyi |
| **Qwen 2.5 7B** | 4.4 GB | ⭐⭐⭐⭐⭐ | Hızlı | TR sürprizi — en iyi |
| **DeepSeek-R1 7B (distilled)** | 4.7 GB | ⭐⭐⭐⭐ | Orta | Akıl yürütme şampiyonu |
| **Phi-3 medium** | 7.9 GB | ⭐⭐⭐ | Hızlı | Microsoft kalitesi |

**Sürpriz kazanan: Qwen 2.5 (Alibaba)**. Çinli model ama Türkçe vurguyu en iyi yapan. İndir:
```bash
ollama pull qwen2.5:7b
```

## Hangi Modeli Seçmeli?

### Günlük genel sohbet → **Llama 3.1 8B**
```bash
ollama run llama3.1:8b
```

### Türkçe odaklı yazım → **Qwen 2.5 7B**
```bash
ollama run qwen2.5:7b
```

### Karmaşık problem → **DeepSeek-R1 7B distilled**
```bash
ollama run deepseek-r1:7b
```

### Düşük RAM (8GB) → **Llama 3.2 3B**
```bash
ollama run llama3.2:3b
```

### Yazılım/kod → **Qwen 2.5 Coder 7B**
```bash
ollama run qwen2.5-coder:7b
```

## ChatGPT Tarzı UI — Open WebUI

Terminal'de yazmak istemiyorsan, **Open WebUI** kur. ChatGPT'ye birebir benzeyen yerel arayüz.

### Kurulum (Docker ile)
```bash
docker run -d -p 3000:8080 \
  --add-host=host.docker.internal:host-gateway \
  -v open-webui:/app/backend/data \
  --name open-webui \
  --restart always \
  ghcr.io/open-webui/open-webui:main
```

`http://localhost:3000` aç → ChatGPT görünümü → Ollama modellerine erişim.

### Docker yoksa
Open WebUI Python ile de kurulur:
```bash
pip install open-webui
open-webui serve
```

## Önemli Sınırlamalar — Beklentin Doğru Olsun

⚠️ **Yerel modeller şu konularda zayıf:**

### 1. Güncel bilgi
Modeller **eğitim tarihine** kadar bildiğini biliyor. "2026 İstanbul'da popüler restoranlar?" → cevap yanlış veya genel.

### 2. Çok karmaşık problem
GPT-5, Claude Opus 4 seviyesinde **akıl yürütme** yerelde **yok**. Karmaşık matematik, derin felsefi problem — yerel modeller çuvallıyor.

### 3. Multimodal
- Görsel anlamak — Llama 3.2 vision var ama sınırlı
- Görsel üretmek — Ollama yapmıyor (Stable Diffusion ayrı)
- Ses — yok

### 4. Çok uzun bağlam
ChatGPT'nin 128K, Gemini'nin 2M context'i yerelde yok. 8K-32K tipik.

### 5. Plug-in / Tools
Custom GPTs, ChatGPT search, code interpreter — bunlar yerel modelde **yok**. Workflow için **n8n + Ollama** kombosu lazım.

## Para Açısından

ChatGPT Plus vs Ollama (1 yıl):
- ChatGPT Plus: 12 ay × $20 = **$240 (~8.500 TL)**
- Ollama: $0 (sadece elektrik + donanım)

**Donanım yatırımı:**
- Mevcut laptop yetiyorsa: **$0**
- 16GB → 32GB RAM upgrade: ~$100
- M4 Mac mini base: ~$600 (yıllar boyu çalışır)

**1 yıl sonunda Ollama'nın TCO (toplam sahip olma maliyeti)** ChatGPT Plus'tan **çok daha az**.

## Profesyonel Kullanım — n8n + Ollama

Yerel AI'ı **iş süreçlerine** entegre etmek için **n8n** (open-source automation):
- e-posta gelir → Ollama özetler
- doküman yüklenir → Ollama analiz
- form doldurulur → Ollama Türkçe karşılık üretir

Hassas iş süreçleri için **bulut yerine yerel** = altın.

## Türkçe Eksiklikler

⚠️ **Yerel modeller şu Türkçe konularda zayıf:**
- Türk hukuk sistemi (mahkeme kararı, mevzuat)
- Türkçe atasözleri / deyimler — bazen kelimesi kelimesine çeviri yapar
- Türk popüler kültürü (filmler, diziler) — 2024 sonrası bilmiyor
- TR e-ticaret/banka isimler — yabancı

## Karşılaştırma — Yerel vs Bulut

| Özellik | Ollama (Yerel) | ChatGPT/Claude (Bulut) |
|---|---|---|
| Maliyet | Bedava | $20/ay |
| Gizlilik | %100 | Şirkete güveniyorsun |
| Hız | Donanıma bağlı | Genelde hızlı |
| Kalite | İyi (GPT-3.5 / GPT-4 arası) | Daha üst |
| Güncellik | Eğitim tarihi sabit | Sürekli güncel |
| İnternet gerekiyor | ❌ | ✅ |
| Görsel/Ses üretimi | ❌ | ✅ |
| Custom GPTs / Tools | Manuel kurulum | Hazır |
| Türkçe vurgu | Qwen 2.5 ile iyi | En iyi (Claude, GPT-4o) |

## Geliştirici Için — API Entegrasyonu

Ollama bir HTTP API açıyor (port 11434).

```python
import requests

response = requests.post('http://localhost:11434/api/generate', json={
    'model': 'llama3.1:8b',
    'prompt': 'Merhaba, sen kim?',
    'stream': False
})

print(response.json()['response'])
```

OpenAI SDK uyumlu wrapper'lar var:
```python
from openai import OpenAI

client = OpenAI(
    base_url='http://localhost:11434/v1',
    api_key='ollama',  # gerekmez ama format için
)

resp = client.chat.completions.create(
    model='llama3.1:8b',
    messages=[{'role': 'user', 'content': 'Merhaba'}],
)
```

Mevcut OpenAI kodlarını **2 satır değişiklikle** yerele taşıyabilirsin.

## Sıkça Sorulan Sorular

**❓ Mac M1 ile çalışır mı?**
Çok iyi. Apple Silicon optimize. 16GB M1 Mac → Llama 3.1 8B sorunsuz.

**❓ İlk sefer sohbet ne kadar yavaş?**
İlk komut **modelin RAM'a yüklenmesi** için 3-5 saniye. Sonra çok hızlı.

**❓ Birden fazla model çalışabilir mi?**
Evet ama RAM tüketir. Pratikte 1 ana model + 1 küçük model paralel OK.

**❓ Model güncellemeleri nasıl?**
`ollama pull llama3.1:8b` ile yeniden indir, yeni sürüm gelir.

**❓ Bilgisayarı kapatınca ne olur?**
Hiçbir şey. Tekrar açtığında `ollama run` ile devam.

**❓ Yapay zeka modeli laptop'unu yavaşlatır mı?**
Model **kullanırken** yavaşlatır (CPU/GPU çalışır). Kullanmadığında sıfır etki.

## Sonuç

Yerel AI **gerçek özgürlük**. Bulut servisleri "Sen yazışırsın, biz kaydederiz." Ollama: "**Sen yazışırsın, sadece sen**."

Türk pazarında özellikle:
- Hassas iş için (banka, hukuk, sağlık) — yerel **şart**
- Genel kullanım için — yerel **alternatif** (bedava + gizli)
- Geliştirici için — yerel **deneme alanı** (API maliyeti sıfır)

Önerim: **Bu hafta sonu** Ollama indir + Qwen 2.5 7B kur + 1 saat oyna. ChatGPT'nin neyi nasıl yaptığına dair perdenin arkasını göreceksin.

Diğer açık kaynak araçlar için "[Ücretsiz AI Araçları](/blog/ucretsiz-yapay-zeka-araclari-2026/)", DeepSeek detayı için "[DeepSeek incelemesi](/blog/deepseek-incelemesi-chatgpt-rakibi-mi/)".

---

*Bu rehber bağımsız + uygulamalıdır. Ollama açık kaynak, MIT lisansı. Mayıs 2026 itibarıyla geçerli.*
