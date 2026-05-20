---
title: 'AI ile Excel Otomasyonu: VBA Yerine ChatGPT — 50 Hazır Formül + Workflow'
description: 'Excel''de saatlerce kaybetmek mi? ChatGPT ile formül üret, makro yaz, pivot kur, veri temizle. 50 hazır ChatGPT komutu + Türkçe ipuçları.'
pubDate: 'May 21 2026'
category: 'rehber'
tags: ['excel', 'chatgpt', 'otomasyon', 'iş hayatı', 'rehber']
---

Excel hâlâ iş dünyasının **en yaygın** aracı. Ama %90 kullanıcı sadece **temel formüller** biliyor. VLOOKUP'tan ileri gidemiyor. AI bu sınırı **kaldırdı**.

Bu yazıda ChatGPT ile Excel'i **gerçekten** profesyonel düzeyde kullanmanın yolları. **50 hazır prompt** + workflow + alternatif araçlar.

## Önce: AI Excel'de Ne Yapabilir?

✅ **Yapabilir:**
- Karmaşık formüller üret (SUMPRODUCT, INDEX-MATCH, dinamik diziler)
- VBA makroları yaz (Excel için Visual Basic)
- Excel formülünden Python'a, SQL'e çevir
- Pivot table önerileri
- Veri temizleme önerileri (regex, find/replace)
- Çıktı görselleştirme (chart suggestion)

❌ **Yapamaz (direk):**
- Excel dosyana fiziksel olarak müdahale (kopyala/yapıştır lazım)
- Çok büyük dosyalarda performans (500K+ satır)
- Real-time veri (canlı borsa, vs.)

## Yöntem 1: ChatGPT Plus + Excel (En Pratik)

ChatGPT'ye Excel dosyanı yükle → "Bunu analiz et" diye sor → veri analizi + grafikleri otomatik.

```
Prompt: "Bu Excel'i analiz et. Aylık satış trendi nasıl?
        En çok satan 5 ürün hangileri? Anormallikleri bul."
```

ChatGPT Code Interpreter çalışır → Python pandas ile veri analiz → grafikler döner.

⚠️ **Hassas veri** yükleme — şirket verileri yerine örnek/anonim veri kullan.

## Yöntem 2: Microsoft Copilot 365 (Resmi entegrasyon)

Bkz: [Microsoft Copilot 365 incelemesi](/blog/microsoft-copilot-365-pro-office-ai/). Excel içinde direkt AI.

## Yöntem 3: ChatGPT'ye formül yazdır

En yaygın senaryom bu. Excel'de bir sorun var → ChatGPT'ye sor → formül al → yapıştır.

## 50 Hazır ChatGPT Prompt (Excel için)

### Veri Aramak (1-5)

```
1) "INDEX-MATCH ile şu durumu çöz: A sütununda [değer] bul,
    aynı satırın D sütununu döndür."

2) "VLOOKUP'tan farkı ile en yeni Excel'in XLOOKUP'unu kullanan
    formül yaz. [Senaryo açıkla]."

3) "Bir tabloda [koşul1] VE [koşul2] sağlayan satırları say.
    COUNTIFS kullan."

4) "Birden fazla sayfada arama yapan formül. Sayfa isimleri:
    Ocak, Şubat, Mart..."

5) "Bir hücrede 'kahve' kelimesi geçiyorsa, başka hücreden
    fiyatı çek."
```

### Hesaplama (6-15)

```
6) "Sütun B'de 5'ten büyük olan değerleri topla, sayılarını
    da say."

7) "Aylık toplamı hesapla, ay sütunu E."

8) "Eğer hücre değeri negatifse 0, değilse aynı bırak."

9) "Yüzde değişim hesapla: bu ay (B) ve geçen ay (A) arası."

10) "Bileşik faiz formülü: ana para, oran, dönem."

11) "Çalışma günleri hesapla, hafta sonu hariç."

12) "Doğum tarihinden tam yaşını hesapla."

13) "İki tarih arası gün sayısı + hafta sonu hariç sayısı."

14) "Ortalama, ama 0'ları hariç tut."

15) "Maksimum değerin tekrar adedi."
```

### Veri Temizleme (16-25)

```
16) "Boş hücreleri 'YOK' ile doldur."

17) "Sütundaki yinelenenleri kaldıran formül."

18) "Telefon numarasından sadece rakamları çıkar (309-555-1234 → 3095551234)."

19) "Türkçe karakterleri Latin'e çevir: ç→c, ş→s, vs."

20) "Ad-Soyad sütununu Ad ve Soyad olarak böl."

21) "Tarih formatını DD.MM.YYYY'den YYYY-MM-DD'ye çevir."

22) "Para birimini sayıya çevir: '1.500,50 ₺' → 1500.50"

23) "Başında/sonunda boşlukları temizle (TRIM)."

24) "İlk harfi büyük yap (proper case)."

25) "Excel formülüyle regex-benzeri pattern matching."
```

### Pivot + Analiz (26-35)

```
26) "Şu veri için pivot table tasarla: [veri açıklaması].
     Satır, sütun, değerleri neyin olsun?"

27) "Çoklu kriterle pivot: müşteri, ay, ürün kategorisi."

28) "Pivot içinde % değişim göster: ay-ay karşılaştırma."

29) "Top 10 müşteriyi otomatik göster."

30) "Outlier (uç değer) tespit formülü (3 standart sapma)."

31) "Veride trend var mı? LINEST kullanarak."

32) "Korelasyon hesapla: 2 sütun arası."

33) "Frekans analizi: hangi değerden kaç tane var."

34) "Veri için en uygun chart tipini öner (analiz et)."

35) "Pareto (80-20) analizi formülü."
```

### Görselleştirme (36-40)

```
36) "Conditional formatting: 100'ün üzerinde yeşil, altında kırmızı."

37) "Heatmap renkler: değerlere göre gradient."

38) "Sparkline (mini grafik) hücre içinde."

39) "Sütunlu chart ama 0 değer gizlensin."

40) "Dynamic chart range — yeni satır eklendikçe genişler."
```

### Makro & VBA (41-50)

```
41) "VBA makro yaz: Dosyaları otomatik bir klasöre kaydet."

42) "Tüm sheetlerin isimlerini al, bir özet sheete listele."

43) "Belirli hücre değiştiğinde otomatik e-posta gönder (VBA)."

44) "Klasördeki tüm Excel'leri birleştir tek dosyada."

45) "PDF'e otomatik export VBA."

46) "Belirli zamanda otomatik kaydet."

47) "Filtre uygula, sonucu yeni sheete kopyala."

48) "Bir butona basınca dashboard otomatik güncellensin."

49) "Birden fazla dosyayı tarayıp belirli kriterlere uyanları
     birleştir."

50) "Yinelenenleri silen ve audit log tutan VBA."
```

## Excel'in 5 Süper Power Move

### 1. AI'a örnek veri ver
Sadece "formül yaz" demek yeterli değil. **Örnek satır göster**:

```
"Şu yapıda 5 satırım var:
A1: 'Ahmet', B1: 100
A2: 'Mehmet', B2: 200
...
İstediğim: A'da 'h' harfi geçenlerin B'lerini topla."
```

### 2. Cevabı test et
AI bazen yanlış formül üretir. **Önce küçük bir veri seti**'nde test et.

### 3. AI'a Excel versiyonunu söyle
"Excel 365" / "Excel 2019" / "Google Sheets" — versiyona göre fonksiyonlar farklı.

### 4. Türkçe Excel kullanıyorsan!
Türkçe Excel: TOPLA, DÜŞEYARA, vs.
İngilizce: SUM, VLOOKUP.

ChatGPT genelde İngilizce verir. "Türkçe Excel için" diye belirt → SUM yerine TOPLA verir.

### 5. Karmaşık problemleri parçala
"Tüm raporu yap" yerine: "Önce şu sütunu temizle, sonra şu pivot kur, sonra şu grafiği üret" — adım adım.

## ChatGPT vs Microsoft Copilot — Excel İçin

| Senaryo | ChatGPT | Copilot 365 |
|---|---|---|
| Formül üretmek | ✅ Mükemmel | ✅ Direkt entegre |
| Veri analizi (yüklersen) | ✅ Code Interpreter | ❌ |
| Excel içinden çalışma | ❌ Kopya gerek | ✅ |
| Çok büyük dosyalar | ⚠️ 50MB sınır | ✅ Yerel |
| VBA üretme | ✅ | ⚠️ Sınırlı |

**Sonuç:** İkisi de farklı işler. ChatGPT analiz için, Copilot içeride çalışma için.

## Türkçe Excel İpuçları

⚠️ **Türkçe karakter sorunları:**
- Ondalık ayrım virgül (1,5 değil 1.5) — `;` formül ayracı olur, `,` değil
- Tarih formatı DD.MM.YYYY (TR), MM/DD/YYYY (US)
- Para birimi ₺ veya $

**ChatGPT'ye prompt'ta belirt:** "Türkçe Excel kullanıyorum, formül ayracı ';'"

## Para Hesabı

| Plan | Aylık | Excel için değer |
|---|---|---|
| ChatGPT Plus | $20 | Veri analizi + formül üretimi |
| Copilot 365 | $30 | Excel içeri entegre AI |
| Her ikisi | $50 | Tam kombinasyon |

Eğer haftada **5 saat** Excel'de kaybediyorsan, $20'lık ChatGPT yatırımı **kendini öder** (saatin $4+ ise zaten ödüyor).

## Sonuç

Excel + AI = **yeni süper güç**. Saatlerin dakikalara, dakikaların saniyelere düşer.

İlk pratik denemen:
1. **ChatGPT Plus'a abone** (yoksa)
2. **Bu listeden 5 prompt** seç, kendi Excel'inde dene
3. Bir hafta sonu Excel maharetini **2 katı** kat

İlgili: [Microsoft Copilot 365](/blog/microsoft-copilot-365-pro-office-ai/), [50 ChatGPT Prompt](/blog/chatgpt-50-hazir-prompt-kopyala-yapistir/).

---

*Pratik rehber, Mayıs 2026 itibarıyla geçerli.*
