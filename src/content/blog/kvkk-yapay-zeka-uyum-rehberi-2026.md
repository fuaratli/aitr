---
title: 'KVKK ve Yapay Zeka: ChatGPT Kullanırken Veri İhlali Yapmamak İçin Rehber (2026)'
description: 'ChatGPT''ye müşteri verisi yapıştırmak KVKK ihlali mi? Yapay zeka kullanırken 6698 sayılı kanuna uyum: açık rıza, yurt dışı aktarım, en sık 5 hata ve 2026 güncel cezalar.'
pubDate: 'Jun 04 2026'
category: 'rehber'
tags: ['kvkk', 'yapay zeka', 'veri güvenliği', 'kobi', 'hukuk', 'rehber']
faq:
  - q: "ChatGPT'ye müşteri verisi yazmak KVKK ihlali mi?"
    a: "Olabilir. Halka açık bir AI aracına gerçek kişiye ait isim, telefon, e-posta, TC kimlik no gibi veriyi girmek KVKK kapsamında 'veri işleme' sayılır. Bir hukuki sebep (açık rıza veya kanunun saydığı diğer sebepler) yoksa ve aydınlatma yapılmamışsa ihlal doğar. 'ChatGPT otomatik yaptı' savunması veri sorumlusunun sorumluluğunu kaldırmaz."
  - q: "KVKK yapay zeka için ayrı bir kural yayınladı mı?"
    a: "Evet. KVKK 2021'de 'Yapay Zeka Alanında Kişisel Verilerin Korunmasına Dair Tavsiyeler'i, 24 Kasım 2025'te ise '15 Soruda Üretken Yapay Zeka ve Kişisel Verilerin Korunması Rehberi'ni yayınladı. Ayrıca 'Etken Yapay Zeka (Agentic AI)' üzerine bir bilgilendirme de var. Bunlar 6698 sayılı kanunun üstüne yeni bir kanun değil; mevcut kanunu AI bağlamında nasıl uygulayacağını açıklayan rehberler."
  - q: "Yapay zekayı KVKK'ya uygun kullanmak imkansız mı?"
    a: "Hayır. Veriyi anonimleştir/maskele, kurumsal (zero-retention) plan kullan, yerel çalışan modelleri tercih et, aydınlatma metnini güncelle ve açık rıza gerekiyorsa usulüne uygun al. Yapılabilir; sadece 'kopyala-yapıştır' refleksinden vazgeçmek gerekiyor."
  - q: "2026'da KVKK cezaları ne kadar?"
    a: "2026 yeniden değerleme oranı %25,49 ile güncellendi. Aydınlatma yükümlülüğünü ihlal 85.437 – 1.709.200 TL; veri güvenliği tedbirlerini almama 256.357 – 17.092.242 TL; Kurul kararına uymama 427.263 – 17.092.242 TL aralığında."
---

> ⚖️ **Önemli not:** Bu yazı bilgilendirme amaçlıdır, hukuki tavsiye değildir. Somut bir durumda mutlaka bir KVKK/veri koruma avukatına danış. Cezalar ve mevzuat değişebilir; rakamlar 2026 başı itibarıyladır.

Bir pazarlama ajansında çalışıyorsun. Müşteri listesini Excel'den kopyalayıp ChatGPT'ye yapıştırdın: "Bu 200 kişiye kişiselleştirilmiş e-posta yaz." 10 saniyede iş bitti. **Tebrikler — muhtemelen az önce bir KVKK ihlali yaptın.**

Türkiye'de yapay zeka kullanımı patlarken neredeyse kimsenin konuşmadığı bir taraf var: **kişisel verilerin korunması**. Bu yazıda KVKK'nın yapay zeka konusunda ne dediğini, en sık yapılan hataları ve **yakalanmadan değil, doğru şekilde** AI kullanmanın yolunu anlatıyorum.

## Önce Net: AI "Sorumluluğu" Ortadan Kaldırmaz

KVKK'nın (Kişisel Verileri Koruma Kurumu) en net mesajı şu:

> "ChatGPT yaptı" veya "araç otomatik üretti" savunması, **veri sorumlusunun yükümlülüklerini ortadan kaldırmaz.**

Yani aracı sen seçtin, veriyi sen girdin → sorumlu sensin (ya da şirketin). 6698 sayılı **Kişisel Verilerin Korunması Kanunu** 2016'dan beri yürürlükte ve yapay zeka bunun **istisnası değil**.

Bir kişiye ait şu bilgilerden herhangi birini bir AI aracına giriyorsan, KVKK kapsamında **kişisel veri işliyorsun** demektir:

- Ad-soyad, telefon, e-posta, adres
- TC kimlik no, IBAN, müşteri no
- Sağlık, din, siyasi görüş gibi **özel nitelikli** veriler (bunlar çok daha katı kurala tabi)
- Hatta bir kişiyi **dolaylı olarak** tanımlayabilen veriler

## KVKK Yapay Zeka İçin Ne Yayınladı?

KVKK, AI için **yeni bir kanun çıkarmadı** — mevcut 6698'i AI'a nasıl uygulayacağını anlatan **rehberler** yayınladı:

1. **Yapay Zeka Alanında Kişisel Verilerin Korunmasına Dair Tavsiyeler (2021):** Geliştiriciler, üreticiler ve hizmet sağlayıcılar için ilk çerçeve. "Tasarımdan itibaren mahremiyet" (privacy by design), ayrımcılık/önyargı riskinin önlenmesi, veri minimizasyonu.

2. **15 Soruda Üretken Yapay Zeka ve Kişisel Verilerin Korunması Rehberi (24 Kasım 2025):** En güncel ve en pratik belge. Üretken AI'ın (ChatGPT, Gemini, Midjourney gibi) yaşam döngüsü, riskleri, **bireyler ve ebeveynler** için günlük kullanım tavsiyeleri ve veri sorumluları için uyum başlıkları.

3. **Etken Yapay Zeka (Agentic AI):** Senin adına işlem yapan **otonom ajanlar** çağına dönük yeni bir bilgilendirme. Ajan senin verinle bir şey yaparken sorumluluk zinciri nasıl işliyor?

> 💡 İlgili: Bu ajanların ne olduğunu merak ediyorsan [otonom AI ajanlar karşılaştırmamıza](/blog/manus-vs-chatgpt-agent-otonom-ai/) göz at.

## En Sık Yapılan 5 KVKK Hatası (AI ile)

### 1. Gerçek veriyi halka açık AI'a yapıştırmak

En yaygın hata. Müşteri listesi, CV havuzu, çalışan bordrosu, hasta kaydı... Bunları ücretsiz ChatGPT/Gemini arayüzüne girmek, veriyi **üçüncü tarafa aktarmak** demektir. Üstelik bu veriler genelde **yurt dışındaki sunuculara** gider (bkz. madde 9).

### 2. Açık rıza olmadan işlemek

KVKK'nın altını çizdiği kritik nokta: **açık rıza son çaredir.** Önce kanunun saydığı diğer hukuki sebepler (sözleşme, hukuki yükümlülük, meşru menfaat vb.) var mı diye bakılır. Açık rıza alınacaksa da:

- **Bilgilendirilmiş** olmalı (kişi neye onay verdiğini bilmeli)
- **Belirli** olmalı (tek bir amaç/işlemle sınırlı)
- **Özgür iradeyle** verilmeli (baskı/koşul olmadan)

"Genel geçer", önceden alınmış, ya da hizmet şartına bağlanmış onaylar **geçersiz**.

### 3. Aydınlatma metnine AI kullanımını yazmamak

Kanunun **10. maddesi** aydınlatma yükümlülüğünü düzenler. Eğer süreçlerinde verileri bir AI aracıyla işliyorsan, aydınlatma metninde bunu açıkça belirtmen gerekir: hangi veri, hangi amaç, kime aktarılıyor, ne kadar saklanıyor. Çoğu şirketin metni 2016'dan kalma; AI'dan hiç bahsetmiyor.

### 4. Yurt dışına veri aktarımını görmezden gelmek

ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google) — sunucuları büyük ölçüde **ABD'de**. Gerçek kişisel veriyi bunlara girmek **yurt dışına veri aktarımıdır** ve KVKK **madde 9**'a tabidir. 2024 değişikliğiyle standart sözleşme gibi yeni mekanizmalar geldi, ama "hiçbir şey yapmadan aktarmak" seçenekler arasında değil.

### 5. Verinin model eğitiminde kullanılmasına izin vermek

Ücretsiz/tüketici planlarında girdiğin veri, varsayılan olarak **modeli eğitmekte** kullanılabilir. Bu, veriyi geri alamayacağın anlamına gelir. Kurumsal/API planlarında genelde "zero data retention" veya "eğitime kullanma" opt-out'u vardır — ama bunu **aktif olarak** açman gerekir.

## Peki Doğrusu Nasıl? — Pratik Uyum Checklist'i

Amaç AI'dan kaçmak değil; **doğru kullanmak.** İşte uygulanabilir adımlar:

### ✅ Veriyi anonimleştir / maskele
AI'a göndermeden önce gerçek isimleri `[MÜŞTERİ]`, telefonları `[TELEFON]` ile değiştir. Çoğu görevde (e-posta taslağı, özet, analiz) modelin gerçek isme ihtiyacı yok. Sonucu kendin gerçek veriyle doldur.

### ✅ Kurumsal / API planı kullan (zero-retention)
ChatGPT Team/Enterprise, Claude for Work, Gemini'nin kurumsal planları girdini eğitime kullanmaz ve daha sıkı veri sözleşmeleri sunar. KOBİ için aylık birkaç yüz lira, bir KVKK cezasının yanında **hiçbir şey**.

### ✅ Hassas veride yerel (offline) AI kullan
En radikal çözüm: veri bilgisayardan **hiç çıkmasın**. [Ollama ile bilgisayarında yerel AI çalıştırmak](/blog/ollama-turkce-yerel-ai-rehberi/) bedava ve veri internete gitmediği için yurt dışı aktarım / üçüncü taraf sorunu **tamamen ortadan kalkar**. Hasta kaydı, hukuki belge, finansal veri gibi şeyler için en güvenli yol bu.

### ✅ Aydınlatma metnini ve envanteri güncelle
Veri işleme envanterine AI araçlarını ekle. Aydınlatma metnini "verileriniz X aracıyla işlenebilir" diyecek şekilde güncelle. Gerekiyorsa VERBİS kaydını gözden geçir.

### ✅ Riskli işlemlerde etki değerlendirmesi yap
Çok sayıda kişiyi veya özel nitelikli veriyi AI ile işliyorsan, bir veri koruma etki değerlendirmesi (DPIA mantığı) yap. Hangi veri, neden, nereye gidiyor, risk ne?

## 2026 KVKK Cezaları — Neden Ciddiye Almalısın

Cezalar her yıl yeniden değerleme oranıyla otomatik artıyor. **2026 oranı %25,49** ve güncel tutarlar:

| İhlal | 2026 Ceza Aralığı |
|---|---|
| Aydınlatma yükümlülüğünü yerine getirmeme | **85.437 – 1.709.200 TL** |
| Veri güvenliği tedbirlerini almama (md. 12) | **256.357 – 17.092.242 TL** |
| Kurul kararına uymama | **427.263 – 17.092.242 TL** |
| VERBİS yükümlülüğüne aykırılık | **341.809 – 17.092.242 TL** |

Bir KOBİ için tek bir veri güvenliği ihlali **256 bin liradan** başlıyor. "Bize bir şey olmaz" pahalı bir bahis.

## Birey Olarak Kendi Verini Koru

KVKK'nın 2025 rehberi sadece şirketlere değil, **bireylere ve ebeveynlere** de sesleniyor:

- AI sohbetlerine **kendi** TC no, sağlık bilgisi, özel fotoğraf gibi şeyleri girme — onlar da bir yere gidiyor.
- Çocuğunun kullandığı AI uygulamalarının veri politikasına bak; çocuk verisi ekstra korumalı.
- Bir uygulama "ücretsiz" ise ürün genelde **senin verin** olabilir — veri politikasını oku.
- Hesap ayarlarından **"verilerimi eğitime kullanma"** seçeneğini kapat.

> 💡 Tamamen ücretsiz ve gizlilik dostu seçenekler için [ücretsiz yapay zeka araçları listemize](/blog/ucretsiz-yapay-zeka-araclari-2026/) bakabilirsin.

## Sonuç

Yapay zeka Türkiye'de bir verimlilik devrimi — ama **veri sorumluluğu** geride kalıyor. İyi haber şu: KVKK uyumu, AI'dan vazgeçmek anlamına gelmiyor. Üç cümlede özet:

1. **Gerçek kişisel veriyi halka açık AI'a yapıştırma.** Anonimleştir, maskele ya da yerel model kullan.
2. **Aracı doğru seç.** Hassas veride zero-retention kurumsal plan veya [offline Ollama](/blog/ollama-turkce-yerel-ai-rehberi/).
3. **Kağıt işini güncelle.** Aydınlatma metni, envanter, açık rıza — AI'ı kapsayacak şekilde.

"ChatGPT yaptı" bir savunma değil. Ama doğru kurulduğunda, AI hem hızlı hem KVKK'ya uygun olabilir. Önce refleksini değiştir: **kopyala-yapıştırmadan önce iki saniye düşün.**

---

*Kaynaklar: KVKK — [Yapay Zeka Alanında Kişisel Verilerin Korunmasına Dair Tavsiyeler](https://www.kvkk.gov.tr/Icerik/7048/Yapay-Zeka-Alaninda-Kisisel-Verilerin-Korunmasina-Dair-Tavsiyeler), [15 Soruda Üretken Yapay Zeka Rehberi (24.11.2025)](https://www.kvkk.gov.tr/Icerik/8547/uretken-yapay-zeka-ve-kisisel-verilerin-korunmasi-rehberi-15-soruda), [İdari Para Cezası Tutarları](https://www.kvkk.gov.tr/Icerik/8145/6698-sayili-kisisel-verilerin-korunmasi-kanunu-kapsaminda-idari-para-cezasi-tutarlari). 2026 ceza tutarları yeniden değerleme oranına (%25,49) göre güncellenmiştir.*
