---
title: 'Midjourney Türkçe Rehber 2026: Sıfırdan Profesyonele A''dan Z''ye'
description: 'Midjourney''e nasıl kaydolunur, nasıl kullanılır, en iyi parametreler neler, Türkçe ipuçları, ücretler, alternatifleri ve gerçek kullanım örnekleri — hepsi tek rehberde.'
pubDate: 'May 7 2026'
heroImage: '../../assets/blog-placeholder-4.jpg'
category: 'rehber'
tags: ['midjourney', 'görsel ai', 'rehber', 'türkçe', 'tasarım']
---

Midjourney, AI ile görsel üretmenin altın standardı. Estetik kalite olarak DALL·E ve Stable Diffusion'ın bir adım önünde — özellikle illüstrasyon, konsept sanat, atmosferik görseller için. Bu rehberde **sıfırdan profesyonele** Midjourney'i Türkçe öğrenmek için ne biliyorsan onu sıralıyoruz.

## Midjourney Nedir, Nasıl Çalışır?

Midjourney, **metin (prompt) verdiğin** zaman sana 4 görsel üreten bir yapay zeka aracıdır. 2022'de Discord botu olarak başladı, 2024 sonunda **web arayüzü** ile beraber bağımsız bir platform haline geldi (midjourney.com).

İki temel kavram:
- **Prompt:** Metin tarifin. Örn: "kar yağışında yürüyen tarihi İstanbul sokağı, sinematik aydınlatma"
- **Parametreler:** Ayarlar (boy oran, stil, mod). Prompt sonuna `--` ile eklenir.

Üreticileri: Midjourney v6.1, v6, ve **niji 6** (anime için).

## Üyelik ve Fiyatlandırma (Türkiye 2026)

Ücretsiz deneme yok. Planlar:

| Plan | Aylık $ | Yıllık $ | Hızlı saat | Görsel/ay |
|---|---|---|---|---|
| Basic | 10 | 96 | 3.3 | ~200 |
| Standard | 30 | 288 | 15 | ~900 |
| Pro | 60 | 576 | 30 | ~1.800 + relax sınırsız |
| Mega | 120 | 1.152 | 60 | ~3.600 + relax sınırsız |

**Türkiye'den ödeme:** Direkt kart bilgisiyle kabul ediyor. KDV dahil yaklaşık 350-4.500 ₺ aralığı.

**Önerim:** Sadece deneyecek isen **Basic** yeterli. Profesyonel kullanım için **Standard** (en iyi denge). Pro üzeri sadece çok yoğun üretim yapıyorsan.

## İlk Görselin: 5 Dakikalık Hızlı Başlangıç

1. **midjourney.com**'a git, hesap oluştur (Google/Discord ile mümkün).
2. Plan seç (Basic önerilir test için).
3. Ana sayfada üst kısımdaki kutuya prompt yaz: `bir kedi kütüphanede kitap okuyor, sinematik, sıcak ışık`
4. Enter'a bas. 30-60 saniye bekle.
5. 4 görsel gelir. Beğendiğini büyütmek için **U1-U4** (Upscale), varyasyon için **V1-V4** butonlarına bas.

İşte ilk görsel.

## Prompt Yazma — 8 Altın Kural

### 1. İngilizce kullan
Midjourney İngilizce'yi daha iyi anlıyor. Türkçe çoğu zaman çalışır ama kalite düşer. **Çeviri:** ChatGPT veya DeepL ile çevir, sonra Midjourney'e ver.

### 2. Sıralama önemli
Prompt'un başındaki kelimeler **daha ağırlıklı**. En önemli özelliği başta yaz:
- Kötü: `forest, mystical, dark, foggy, tree`
- İyi: `mystical foggy forest, dark atmosphere, ancient trees`

### 3. Spesifik ol
"Güzel bir kadın" yerine "yağmurlu Paris'te elinde kahve tutan, krem ceketli kıvırcık saçlı genç kadın". Spesifiklik = kalite.

### 4. Sanat stilini belirt
- `oil painting style` (yağlı boya)
- `watercolor` (suluboya)
- `cinematic photo` (sinematik fotoğraf)
- `studio ghibli style` (anime stili)
- `digital art, trending on artstation` (dijital sanat)

### 5. Aydınlatmayı tanımla
- `golden hour lighting` (altın saat)
- `soft natural light` (yumuşak doğal ışık)
- `dramatic chiaroscuro` (dramatik karanlık-aydınlık)
- `neon lights` (neon ışık)

### 6. Kamera ayarlarını ekle
- `85mm portrait lens`
- `wide angle shot`
- `bokeh background`
- `shot on Kodak Portra 400` (film tarzı)

### 7. Negatif prompt kullan
Olmasını istemediğin şeyleri `--no` ile çıkar:
`a peaceful village --no people, --no cars`

### 8. Referans görsel kullan
Bir görsel URL'sini prompt başına koyarsan, Midjourney o görselin stilini esas alır:
`https://imgur.com/xyz.jpg a cat in similar style`

## Parametreler — En Kullanışlıları

Prompt sonuna `--` ile eklenir:

| Parametre | Açıklama | Örnek |
|---|---|---|
| `--ar 16:9` | Boy oranı | Sinematik için 16:9, Instagram için 1:1, Pinterest için 2:3 |
| `--stylize 0-1000` | Sanatsal yorumlama. 100 varsayılan. 1000 = çok sanatsal | `--stylize 750` |
| `--chaos 0-100` | Varyasyon. Yüksek = daha sürprizli | `--chaos 50` |
| `--niji 6` | Anime stili modeli | `--niji 6` |
| `--no X` | X olmasın | `--no text` |
| `--seed 12345` | Aynı tohum = benzer sonuç | `--seed 9876` |
| `--weird 0-3000` | Tuhaflık seviyesi | `--weird 1000` |
| `--quality 0.5-2` | Kalite/hız dengesi | `--quality 2` |

## Türk Kullanıcılar İçin Özel İpuçları

### Türk kültürünü prompt'ta kullanmak
Midjourney "Turkish culture", "Ottoman architecture", "Anatolia", "Istanbul" gibi terimleri tanıyor. Örnekler:

- `Ottoman miniature painting style, sultan in palace garden`
- `Cappadocia hot air balloons at sunrise, photorealistic`
- `Hagia Sophia interior, divine light, Byzantine mosaics`
- `Turkish coffee on copper tray, vintage table, soft afternoon light`

### Türkçe yazı içeren görseller
Midjourney **yazıyı bozar.** Yazı içeren görsel için **Ideogram** veya **DALL·E 3** kullan, sonra Midjourney'e referans olarak göster.

### Telif sorunu
Midjourney görseli ticari amaçlı kullanabilirsin (Basic plan da dahil) — ama bir başkasının yüzünü/markasını taklit eden bir görsel hukuki sorun yaratabilir.

## 10 Pratik Prompt Örneği

Direkt kullanabileceğin, test edilmiş prompt'lar:

1. **Logo:** `minimalist logo for a coffee shop, geometric, gold and black, vector style --ar 1:1 --stylize 200`
2. **Manzara:** `Cappadocia hot air balloons, sunrise, foggy valley, cinematic, golden hour --ar 16:9 --stylize 500`
3. **Portre:** `professional headshot of a young business person, neutral background, soft lighting, 85mm --ar 4:5`
4. **Ürün:** `luxury watch on dark stone, dramatic lighting, product photography, hyperrealistic --ar 1:1`
5. **Çocuk kitabı illustrasyonu:** `children book illustration, friendly dragon and a small girl in a magical forest, soft pastel colors, whimsical style --niji 6`
6. **Konsept sanat:** `cyberpunk Istanbul, neon lights reflecting on wet streets, futuristic minarets, blade runner aesthetic --ar 21:9 --stylize 800`
7. **Yiyecek:** `traditional Turkish breakfast spread on copper plates, warm morning light, overhead shot, food photography --ar 3:2`
8. **İçmimari:** `modern minimalist apartment interior, large window, soft natural light, Scandinavian style, plants --ar 16:9`
9. **Karakter tasarımı:** `character design sheet, brave knight in silver armor, front and side views, fantasy style, detailed --ar 16:9 --stylize 600`
10. **Tekstür/arka plan:** `seamless marble texture, white with gold veins, high resolution --tile`

## Yaygın Hatalar

- **Çok uzun prompt:** 50+ kelime prompt'lar genelde dağılır. 15-30 kelime tatlı nokta.
- **Çelişki:** "Realistic anime style" gibi çelişen terimler kalite düşürür.
- **Türkçe ısrarı:** Kalite önemliyse İngilizce'ye geç.
- **Stylize'i hep yüksek tutmak:** Yüksek stylize her zaman daha iyi değil. Realist görsel istiyorsan 100-300 kalmasını öner.

## Midjourney Alternatifleri

Eğer Midjourney pahalı geliyorsa:

- **Microsoft Designer / Bing Image Creator** (DALL·E 3 ücretsiz)
- **Leonardo.ai** (günlük 150 kredi ücretsiz)
- **Ideogram** (yazı içeren görseller için en iyi)
- **Flux Schnell** (açık kaynak, fal.ai üzerinden ücretsiz dene)

Her birinin kendi karakteri var. Detaylı karşılaştırma için "[AI Görsel Üreticiler 2026 Karşılaştırması](/blog/ai-gorsel-ureticiler-karsilastirma-2026/)" yazımıza bak.

## Midjourney ile Para Kazanmak Mümkün mü?

Evet, gerçek yollar:
- **Stock satışı:** Shutterstock, Adobe Stock'a yükle (AI etiketiyle)
- **Print-on-demand:** Redbubble, Society6'da poster sat
- **Sosyal medya hizmet:** İşletmelere içerik üret (1 görsel 100-500 ₺)
- **Etsy dijital indirme:** Dijital sanat baskısı sat
- **Çocuk kitabı illustrasyonu:** Yazarlara hizmet sat

Detaylı ekonomiyi "[AI ile Para Kazanma](/blog/ai-ile-para-kazanma-2026/)" yazımızda bulabilirsin.

## Sonuç

Midjourney, profesyonel kalite görsel üretimini herkesin erişebileceği hale getirdi. İlk hafta tuhaf sonuçlar alırsın, **ikinci haftadan itibaren kontrol sende.** Yukarıdaki 10 prompt örneğini denemekle başla, 50 görselden sonra kendi "stilini" bulmaya başlayacaksın.

Önerim: **Basic plan (10$) + bu rehberle 1 ay**. Eğer profesyonel kullanım için yapıyorsan **Standard'a** geç, aksi halde iptal et.

---

*Bu rehber bağımsızdır. Midjourney ile resmi bir bağlantımız yoktur. Tüm prompt örnekleri test edilmiştir.*
