---
title: 'AI ile Mock Interview: İş Görüşmesi Öncesi Provayı ChatGPT''ye Yaptır'
description: 'İş görüşmesi öncesi ChatGPT veya Claude ile gerçekçi mock interview yap. Davranışsal, teknik, vaka analizi — her soru için pratik et. Eli boş gitme.'
pubDate: 'May 14 2026'
category: 'rehber'
tags: ['mock interview', 'iş görüşmesi', 'kariyer', 'chatgpt']
---

İş görüşmesinden bir gün önce **aynı 3 cümleyi** evimde, banyoda, mutfakta tekrar ettim: *"Kendimi tanıtmam istenince ne diyeceğim?"* Cevap **hep aynıydı, çünkü tek başıma pratik yapıyordum**. Görüşmede İK soruyu farklı sordu, ben donup kaldım.

İkinci görüşme öncesi sistemim değişti: **ChatGPT'ye mock interview yaptırdım**. 2 saat boyunca **AI 30 farklı şekilde** beni sorguladı. Bana neyin zayıf olduğunu söyledi. Gün sonu kendimi **çok daha hazırlıklı** hissettim. Pozisyonu aldım.

Bu yazıda **ChatGPT/Claude ile mock interview sistemi** anlatılıyor. Sıfırdan, 2 saatte tam hazırlık.

## Niye AI ile Mock Interview?

Klasik prova:
- ❌ Tek başına aynı cevabı tekrar etme
- ❌ Bir arkadaşa pratik yapma (zaman alır)
- ❌ "Coach" — pahalı (saat $50-200)

AI ile:
- ✅ 7/24 erişim
- ✅ Sınırsız tekrar
- ✅ Sıfır utanç
- ✅ Anında geri bildirim
- ✅ Bedava (ChatGPT Plus'la)

## Adım 1: Şirket + Pozisyon Araştırması

Mock interview'a başlamadan önce **şirketi tanı**:

```
Prompt: "Aşağıdaki şirket hakkında bana derin bir özet ver:
- Şirket adı: [ŞİRKET]
- Ne yapar: [Senin bildiğin]

Açıkla:
1. Şirket kültürü (Glassdoor, LinkedIn'den ne çıkar)
2. Son haberleri / büyük gelişmeleri (son 6 ay)
3. Rakipleri ve farkları
4. Yöneticileri (CEO, CTO, CMO)
5. Ürün portföyü
6. Mali durum (halka açıksa)
7. Mülakat süreci ipuçları"
```

Bu cevabı **al, oku**. Şirketin bildiği biri gibi sohbete gir.

## Adım 2: AI'a "Mülakatçı" Rolü Verme

ChatGPT'ye **rol ataması** kritik. Şu prompt ile başla:

```
Sen [ŞİRKET]'in İK uzmanısın. Pozisyon: [POZİSYON].

Şirket kültürü: [Önceki adımdan bilgi]
Mülakat tipi: 45 dakikalık davranışsal + teknik

Şimdi bir gerçekçi mülakat simülasyonu yap.

Kurallar:
1. Birden fazla soru aynı anda sorma
2. Cevap bekle, ben yazana kadar dur
3. Cevap aldıktan sonra:
   a) Cevabı 1-10 değerlendir (1 zayıf, 10 mükemmel)
   b) Spesifik geri bildirim ver (ne iyi, ne eksik)
   c) "Daha güçlü nasıl olur" önerisi
   d) Sonraki soruyu sor

Soru tipleri karışık:
- Davranışsal (STAR formatı)
- Teknik
- Vaka analizi
- "Neden buradasınız?" tipi motivasyon

Sert sor ama nazik ol. Mülakat 10 soruyla bitsin.

Hazırsam: ilk soruyu sor."
```

ChatGPT bu rolü **iyi** yakalıyor. Senin "Hazırım" cevabınla mülakat başlıyor.

## Adım 3: Soru Türleri — Hazırlıklı Ol

Mülakatlarda **5 ana soru tipi** var:

### A. Tanışma Soruları (Warm-up)
- "Kendinizi tanıtır mısınız?"
- "Bu pozisyona neden başvurdunuz?"
- "Burada görmek istediğiniz nedir?"

### B. Davranışsal (Behavioral) — STAR Formatı
- "Bir gün ekibinizle anlaşamadığınız bir durumu anlatın."
- "En zor müşteriniz nasıldı?"
- "Liderlik gösterdiğiniz bir an?"

**STAR**: Situation (Durum) - Task (Görev) - Action (Aksiyon) - Result (Sonuç)

### C. Teknik
- Pozisyona özel kavramsal sorular
- Kod çözme (developer için)
- Vaka analizi (consulting için)
- Tasarım challenge (designer için)

### D. Motivasyon
- "5 yıl sonra kendinizi nerede görüyorsunuz?"
- "Bu şirketin sizi neden işe alması gerekiyor?"
- "Diğer tekliflerle nasıl karşılaştıracaksınız?"

### E. Curveball Sorular
- "Sizin en büyük zayıflığınız nedir?"
- "Eski şefiniz hakkında ne söyler?"
- "Şu an dünyayı değiştirecek olsa, ne değiştirirdiniz?"

AI'a her birinden örnek isteyebilirsin:
```
"Şimdi sadece davranışsal sorular sor, STAR formatında cevap bekle."
```

## Adım 4: AI Geri Bildirim Almak

Her cevabımdan sonra ChatGPT bana şunu söyler (örnek):

```
👤 Cevabın: "Şirketinizde 5 yıl çalışmak istiyorum çünkü..."

🤖 Değerlendirme: 6/10

Güçlü yanlar:
- Net hedef bildirdin (5 yıl)
- Şirkete bağlılık vurgusu

Eksikler:
- Çok geneldin — "şirkete katkı sağlamak" demek başkaları da diyor
- Spesifik bir ürüne / projeye değinmediğin
- Kendi gelişimini de bağlamadın

Daha güçlü cevap önerisi:
"Şirketinizin Q3 raporundaki uluslararası genişleme stratejisi
beni özellikle etkiledi. Buna katkı sağlayacak [SPESIFIK BECERI]
geliştirmek + 5 yıl içinde [SPESIFIK ROL] olmak hedefim."

Sonraki soru: "...
```

Bu detay altın değerinde. **Geri bildirim olmadan tekrar bir şey ezberlemek** sıfır.

## Adım 5: Türkçe Tuzaklar

⚠️ Türkçe mülakatlarda dikkat:

### "Anlatın bana" değil "Nasıl"
İK "Anlatın bana" derken `tell me about` çevirisi. Senin cevabın hikaye olmalı, liste değil.

### "Aslında" kullanımı
Çok cevapta "Aslında..." başlıyoruz Türkler. Bu **savunmacı** geliyor. Onun yerine:
- "Şöyle düşünüyorum: ..."
- "Benim gözlemim: ..."
- "Deneyimim şu yönde: ..."

### Aşırı tevazu
İngilizce "I achieved X" diyenler Türkçe "Naçizane yapabildiğim X" diyor. Bu **kendine değer vermek** açısından zararlı. Kendi başarılarını **net** söyle.

### Aşırı detay
Türkler hikaye anlatırken **çok detaya** giriyor. İK 90 saniye dinler. STAR formatını **kısa** tut.

AI'a şunu ekleyebilirsin:
```
"Cevaplarımda 'aslında' kullanırsam uyar.
Aşırı tevazuya kayarsam uyar.
90 saniyeden uzun cevaplara uyar.
Türkçe konuşma diline çok kayarsam uyar."
```

## Adım 6: Curveball Sorulara Hazırlık

AI'a şunu yazarsan curveball sorularda zaten hazırsın:

```
"Şimdi bana 10 curveball / saçma / çok zor mülakat sorusu sor.
Cevaplamamla ilgilenme — sadece sorular.
Sonra cevaplarımı strateji açısından eleştir."
```

Çıkanlar genelde:
- "Eğer bir hayvan olsaydınız?"
- "Pencereden dışarı görmediğiniz bir şey ne kadar?" (Fermi problem)
- "Bana 10 dakikada bu kalemi sat."
- "Son kitabınızı 30 saniyede özetleyin."
- "Şimdi anlatın bana — neden CV'nizi reddetmeli?"

## Adım 7: Vaka Analizi (Case Study)

Stratejik/danışmanlık rolleri için **vaka analizi**:

```
"Şimdi bana danışmanlık tarzı vaka analizi sor.

Senaryo: Müşteri startup, B2B SaaS, Türkiye pazarı,
müşterik tutma sorunu. Soru: 30 dakikada nasıl çözersin?

Cevabımı yapılandırılmış (1-2-3 ya da MECE) gözle değerlendir.
Hipotez kalitesi, soru sorma becerisi, çerçeve kullanımı."
```

## Adım 8: Maaş Pazarlığı Provası

Mülakat sonu kritik:

```
"Şimdi maaş pazarlığı provası yapalım.

Sen İK'sın. Bana teklif vereceksin. Cevap vereceğim.
Sen bunu pazarlık olarak yorumlayacaksın.

Hedefim: piyasa ortalamasının %15 üzerinde.
Karşı tarafın bütçesi sınırlı (varsay).

Hadi başla."
```

AI sıkı pazarlık yapar. **2-3 kez yapılırsa** gerçek pazarlığa hazır olursun.

## Adım 9: Soru Sorma Pratik

İK "Bana soru sormak ister misiniz?" diye sorduğunda **boş kalmamak** kritik. 5 hazır sorun olsun:

```
"Bana [POZİSYON] için İK'ya 10 akıllı soru öner.
Sırada: ekip, kültür, gelişim, zorluklar, ölçüm."
```

İK bu sorulara cevap verirken **şirketi sana satıyor** = senin için iyi bilgi.

## Adım 10: Görüşme Günü

Görüşme sabahı:
- AI'a son bir özet yaptır: "Sana karşı 20 soru hazırla, hızlı cevap pratik et."
- Sakin gör — provada her şeyi yaptın.

## Yararlı 5 İpucu

### 1. AI'ı düzenli sınırla
Her cevabın için detaylı geri bildirim isteme — overkill. Sadece **kritik 5-6 soruda** derin geri bildirim al.

### 2. Sesli prova yap
ChatGPT Voice Mode ile **sesli** mock interview yap. Yazılı pratik ≠ sözlü pratik.

### 3. 2 AI kullan
- ChatGPT — geleneksel, gerçekçi
- Claude — daha analitik, **daha sert** sorular sorar

İkisini sırayla kullan, farklı perspektif.

### 4. Şirkete özel mock
Genel pratik faydalı ama **şirkete özel** daha iyi:
```
"Sen [ŞİRKET]'in İK'sı, [POZİSYON] için. Bu şirketin değerleri:
[DEĞERLER]. Şirket misyonu: [MİSYON]. Buna göre sor."
```

### 5. Notları sakla
Her mock'tan sonra "Bugün öğrendiklerim" notu çıkar. Bir ay sonra başka görüşme öncesi tekrar oku.

## Sınırlamalar

⚠️ AI mock interview **şu konularda eksik**:
- Vücut dili (kameraya çıkmıyor — Veed.io vs alternatif)
- Sesinin titremesi/güvensizliği (sesli olmadığında)
- Salondaki gerginlik (gerçek mülakat farklı)
- Beklenmedik kişisel soru ("Babanız ne iş yapıyor?" gibi)

**Çözüm:** AI prova + 1 gerçek insan (arkadaş/coach) ile **sesli** prova = altın kombinasyon.

## Para Açısından

Coaching: $50-200/saat × 4 saat = $200-800
AI mock interview: ChatGPT Plus $20/ay × 1 ay = **$20**

Tasarruf: %95+.

## Sonuç

Mete'nin "[AI ile İngilizce öğrenme](/blog/ai-ile-ingilizce-ogrenme-rehberi/)" gibi, Ahmet'in "[CV yazma vaka](/blog/ai-ile-cv-yazma-vaka-calismasi/)" gibi: mock interview'ı AI ile yapmak **kariyer geçişlerini** hızlandırıyor.

İlk büyük mülakatın varsa **2 saat AI ile pratik yap** — ezbersiz, doğal, hazırlıklı gidersin. Coaching parası ödemen gerekmiyor.

Diğer kariyer kaynakları: [CV yazma vaka](/blog/ai-ile-cv-yazma-vaka-calismasi/), [50 ChatGPT prompt](/blog/chatgpt-50-hazir-prompt-kopyala-yapistir/).

---

*Bu rehber bağımsız + uygulamalıdır. Mayıs 2026 itibarıyla geçerli.*
