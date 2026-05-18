---
title: 'AI ile Borsa: Trading Bot Yapmak Gerçekten Para Kazandırır mı? (Dürüst Cevap)'
description: 'YouTube''daki "ChatGPT ile borsada zengin ol" videolarının çoğu yalan. Bir yazılımcının 6 aylık AI trading bot deneyimi: gerçek kazanç, gerçek kayıp, gerçek dersler.'
pubDate: 'May 17 2026'
category: 'inceleme'
tags: ['borsa', 'trading', 'ai', 'finans', 'kazanç']
---

⚠️ **Önemli baştan uyarı:** Yatırım tavsiyesi değildir. Borsa **kayıp riski içerir**. Bu yazı bir kişisel deneyim aktarımı + gerçeklik kontrolüdür. Yatırım kararları için **uzman ekonomist/yatırım danışmanı**na danış.

---

YouTube'da bir sürü video gördüm: "ChatGPT ile haftalık 50K kazandım!", "AI bot kurdum, otomatik para basıyor!"

Bunların **%99'u yalan**. Ya da gerçeği gizleyerek anlatıyor.

Ben yazılımcıyım, Python biliyorum, finansal piyasalara da ilgim var. Bu yıl 6 ay boyunca **AI trading bot** kurdum + çalıştırdım + gözledim. Bu yazıda **gerçek rakamlarla** anlatıyorum: ne kazandım, ne kaybettim, hangi araçları kullandım, **neden çoğu insan bunu yapmamalı**.

## Önce: AI Trading Aslında Nedir?

3 ana yaklaşım:

### A. ChatGPT'ye Soruyorsun → Borsadan Al/Sat
- "ChatGPT, BIST 100 şu an alıma uygun mu?"
- Klasik insan trading, sadece tavsiyeyi AI veriyor
- **Genelde berbat sonuç** — AI piyasayı tahmin etmiyor

### B. AI ile Otomatik Strateji Yazıyorsun
- Python + GPT-4 API ile strateji kodla
- Backtest et (geçmiş veride dene)
- Çalışıyorsa canlıya çıkar
- **Yarı yapay, yarı bilim**

### C. AI'a Tam Otonomi Veriyorsun (En Tehlikeli)
- "AI, hesabımı yönet, kar yap"
- Kontrol yok, sınır yok
- **%99 felaket** ile sonuçlanır

Ben **B yöntemi** ile gittim. Aşağıda detay.

## Stratejimi Nasıl Kurdum?

### Adım 1: Hedef belirledim
- **Aylık %3 kar hedefliyorum** (yıllık %43)
- **Maksimum %15 kayıp** kabul ediyorum (stop loss)
- **Sermaye:** 50.000 TL ile başladım

Not: Hisse, kripto değil — **BIST 100** odaklı.

### Adım 2: Veri topladım
- BIST API üzerinden son 5 yıl fiyat datası
- Hacim, açık-kapanış, ATR (ortalama gerçek aralık)
- Türkiye Cumhuriyet Merkez Bankası ekonomik göstergeler
- Twitter sentiment (Sentiment Analysis için)

### Adım 3: ChatGPT/Claude ile strateji kurdum
```
"Python'da BIST 100 için bir trading strateji öner:
- Veri: günlük fiyat + hacim
- Sinyaller: RSI < 30 al, RSI > 70 sat (basit)
- Pozisyon: max %20 portföy / hisse
- Stop loss: %5
- Take profit: %15"
```

Claude bana 200 satırlık Python kodu yazdı. Test ettim, çalıştı.

### Adım 4: Backtest
Son 3 yıllık verisinde stratejiyi simüle ettim:
- **Brüt kar:** %47/yıl
- **Net kar (komisyonlar):** %38/yıl
- **Max drawdown:** %18 (kabul edilebilir)
- **Win rate:** %52 (kazanan trade)

İyi görünüyor.

### Adım 5: Paper trading (sanal hesap)
İlk **2 ay** sanal hesapla canlı denedim:
- Kar/zarar: **+%4 (2 ay)**
- Yıllık eşdeğer: **+%24**

Backtest sonucunun **yarısı**. Normal — geçmiş verisi optimize edilmiş.

### Adım 6: Canlıya çıkış
**Gerçek 50.000 TL** ile başladım. AI bot'um Aybars Yatırım hesabımdan API ile alış-satış yapıyor.

## 6 Ay Sonra — Gerçek Sonuç

| Ay | Başlangıç | Bitiş | % Değişim | Notlar |
|---|---|---|---|---|
| Ay 1 | 50.000 | 51.800 | **+3.6%** | İyi başlangıç |
| Ay 2 | 51.800 | 50.400 | **-2.7%** | Beklenmedik bir haber, hisseler düştü |
| Ay 3 | 50.400 | 53.100 | **+5.4%** | Toparlanma |
| Ay 4 | 53.100 | 49.800 | **-6.2%** | Bot panik sattı, kötü |
| Ay 5 | 49.800 | 52.000 | **+4.4%** | Manuel müdahale ettim, kazanç |
| Ay 6 | 52.000 | 51.500 | **-1.0%** | Sıkışık piyasa |

**Net 6 aylık sonuç:** +%3.0 = **1.500 TL kar**.

**Yıllık eşdeğer:** +%6 — banka mevduatından **DÜŞÜK** (TR'de mevduat %40+).

**Üzgün gerçek:** **AI bot, paramı mevduatta tutmaktan daha kötü** sonuç verdi.

## Niye Çuvalladı? — 5 Öğrendiğim Şey

### 1. Backtest yanılgısı
Geçmiş veri optimize edilmiş. Gelecek farklı davranıyor. **"Past performance does not guarantee future results"** boş laf değil.

### 2. Black swan olaylar
Ay 2'de **beklenmedik makroekonomik haber** geldi. AI bot bunu **bilmiyordu**. Manuel trader olsa "Bu gün durayım" derdi.

### 3. Komisyon + spread maliyetleri
Her trade için **0.02-0.05 spread** + **komisyon**. Çok trade yapan bot **kayıp**. AI bot'um ayda 30-50 trade yaptı.

### 4. Duygusal kararlar mı, sistematik mi?
Ay 4'te bot **panik sattı**. Trend hâlâ devam ederken algoritma "tehlike" sinyali aldı. Sonra hisse yükseldi. **Insan trader bu hatayı yapmazdı** belki.

### 5. Veri gecikmesi
BIST'in canlı verisi **15 dakika gecikmeli** (ücretsiz API'lerde). Anlık fiyat değişimini bot **bilmiyordu**. Profesyonel kuruluşların **anlık veriye** yıllık $50K+ ödediğini şimdi anlıyorum.

## Profesyonel AI Trading vs Bizim Botumuz

| Özellik | Hedge Fund (Renaissance, Two Sigma) | Bizim Bot |
|---|---|---|
| Veri | Saniye altı, çoklu kaynak | 15 dakika gecikmeli, tek kaynak |
| Sermaye | Milyarlar | 50K TL |
| Ekip | PhD'ler, yıllar AR-GE | 1 yazılımcı, 1 hafta |
| Risk yönetimi | Karmaşık, çoklu strateji | Basit stop loss |
| Komisyon | Special institution rates | Standart broker |
| Yıllık getiri | %30-66 (Renaissance Medallion fund) | %6 (bizim) |

**Karşılaştırma anlamsız** — onlar profesyonel, biz hobi.

## Daha İyi Sonuçlar Almak İçin Ne Yapmalı?

### 1. Strateji çeşitlendir
Tek strateji yerine **5-10 strateji** paralel çalışsın. Biri kötü gidince diğerleri tutar.

### 2. Veri kalitesi
- Canlı veri (paid)
- Birden fazla kaynak
- Alternative data (haber sentiment, sosyal medya)

### 3. Risk yönetimi
- Position sizing (Kelly criterion)
- Korelasyon analizi (hisseler benzer hareket ediyorsa yatırım dağılmıyor)
- Volatilite ayarı

### 4. Sürekli güncelleme
- AI modelini ayda bir yeniden eğit
- Yeni stratejiler ekle
- Eski stratejilerin **degrade** olup olmadığını izle

### 5. **Risk sermayesi**
Asla **yaşam paranı** veya **vazgeçemeyeceğin** parayı kullanma. %100 kaybetmeyi kabul edebileceğin para.

## Kripto vs Hisse — AI Trading Açısından

### Hisse senetleri (BIST, NYSE)
- **24/5 piyasa** (hafta sonu kapalı)
- Regülasyon var, koruma var
- Daha **öngörülebilir** trend
- Bot kontrolü kolay

### Kripto
- **24/7 piyasa** (bot avantajlı)
- Çok daha **oynak**
- Regülasyon az → daha çok manipülasyon
- Pump & dump şemaları yaygın
- **AI trading bot kripto'da daha riskli ama daha karlı potansiyel**

Benim deneyim: **Hisse senetlerinde** kalıyorum, kripto bot'larından **uzak duruyorum**.

## YouTube/Twitter Gurularının Yalanları

Tipik yalan başlıkları:
- ❌ "ChatGPT ile günde 1.000 TL"
- ❌ "AI ile pasif gelir trading"
- ❌ "Şu botu kullanın, %500 yıllık"
- ❌ "Coinleri AI seçecek, sen sadece bekle"

**Gerçek:**
- 95% retail trader **kaybediyor** (regülasyon raporu)
- AI bot ortalama trader'dan **biraz daha iyi** olabilir, ama **profesyonel hedge fund'ları geçemez**
- "Pasif" diye satılan şeyler **aktif gözetim** istiyor
- Garanti **yok** — her "kar" hikayesi geçmiştir

## Çözüm: AI Trading Yerine Ne?

### Daha akıllı paranı koruma yolları:
1. **TR'de mevduat / katılım hesap** — %40+ faiz (2026)
2. **TLREF endeksli mevduat** — risksiz
3. **Eurobond fonları** — döviz riskinden kaçınma
4. **Endeks fonu (BIST 100 ETF)** — uzun vadeli, basit
5. **Altın** — TR'de geleneksel sığınma

### Aktif trading yapacaksan
- **Eğitim** önce — kitaplar, kurs (Türkiye'de SPK lisansli)
- **Risk yönetimi** öğren
- **Backtest** her stratejiyi
- **Sermayenin sadece %5-10**'unu trading'e ayır

## Sonuç

AI ile trading **mucize değil**. 6 aylık deneyimim — **bot, banka mevduatından daha az** kazandırdı. Eğitim, kalite veri, zaman maliyetlerini ekleyince **net kayıp**.

YouTube'daki "AI ile zengin ol" videolarına kanma. Trading **uzmanlık + zaman + sermaye** ister. AI sadece **bir araç**, sihir değil.

Eğer **gerçekten** AI ile trading yapacaksan:
1. Önce **fizibilite kuralı** — kaybetmeye razı olduğun para kadar
2. **Paper trading** ile 6 ay test
3. **Profesyonel mentor** ile çalış
4. **Karmaşık risk yönetimi**

İlgili: [AI ile Para Kazanma — 12 Gerçek Yol](/blog/ai-ile-para-kazanma-2026/) (trading değil!), [TR'de AI İçerik Üretici Olmak](/blog/turkiyede-ai-icerik-uretici-olmak-gercek-rakamlar/).

---

**Tekrar:** Bu yazı yatırım tavsiyesi değildir. Yatırım kararları için lisanslı SPK uzmanı / yatırım danışmanı ile görüş.

*Mayıs 2026 itibarıyla geçerli.*
