# Güvenlik Denetimi Düzeltme Raporu — 2026-06-03

Kaynak: Denetçi raporu (`İndirilenler/2026-06-03.pdf`) · Hedef: aitr.blog
Özet: 0 CRITICAL · 0 HIGH · 1 MEDIUM · 13 LOW · 34 INFO

## ✅ Kodda düzeltilenler (bu commit)

| Bulgu | Durum | Nasıl |
|---|---|---|
| CSP eksik (apex + www) | Kapandı | `public/_headers` artık git'te + enforce CSP |
| X-Frame-Options eksik | Kapandı | `_headers`: `X-Frame-Options: DENY` |
| X-Content-Type-Options eksik | Kapandı | `_headers`: `nosniff` |
| HSTS eksik | Kapandı | `_headers`: `max-age=31536000; includeSubDomains; preload` |
| Referrer-Policy eksik | Kapandı | `_headers`: `strict-origin-when-cross-origin` |
| Metatag CMS / Astro sürüm sızıntısı | Kapandı | `<meta name="generator">` kaldırıldı |

> **Kök neden:** `public/_headers` 1 Haziran'da oluşturulmuş ama git'e hiç
> eklenmemişti (untracked) → hiçbir deploy'a girmemiş → canlıda hiçbir başlık yoktu.
> Şimdi takipli ve build `dist/_headers`'a kopyalıyor. **Deploy edilince** bu 6
> bulgu (her iki domain için toplam ~10 LOW satırı) otomatik kapanır.

CSP artık **enforce** modunda. Microsoft Clarity (`clarity.ms`, `c.bing.com`)
allowlist'e eklendi. Yeni bir 3. parti script eklersen origin'ini
`script-src`/`connect-src`/`frame-src`'a eklemeyi unutma.

## ⚙️ Cloudflare panelinden yapılması gerekenler (kod değil)

Bunlar TLS/sunucu ayarı; repodan çözülemez, Cloudflare Dashboard'dan:

- **LOW — Weak Cipher Suites** (`TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA`, TLS 1.0)
- **INFO — Deprecated TLS 1.0 / 1.1**

  → SSL/TLS → **Edge Certificates** → **Minimum TLS Version = 1.2**
  (tercihen 1.3), ve **TLS 1.0/1.1'i kapat**. Tek hamlede üç bulgu da kapanır.
  HSTS'i panelden de "Enable HSTS" ile teyit edebilirsin (header zaten gönderiliyor).

## ℹ️ Aksiyon gerektirmeyen / yanlış pozitifler

- **MEDIUM — Reflected/DOM XSS (dalfox):** Hedef alanı **boş**, sadece "GET".
  Site statik Astro; URL parametresini DOM'a basan (innerHTML'e kullanıcı girdisi)
  bir sink yok. Tek `innerHTML` kullanımı sabit SVG string'i. → Yanlış pozitif.
- **INFO — Açık port 8080 / 8443:** Bunlar **Cloudflare'in kendi proxy portları**
  (Cloudflare 80/443 yanında 8080/8443'te de servis verir). Senin sunucun değil. → Yok hükmünde.
- **INFO — Missing SRI** (gtag.js, adsbygoogle.js): Google bu script'leri sürekli
  günceller ve sabit hash/SRI vermez; SRI eklemek reklamları kırar. → Uygulanamaz, kabul edilir.
- **INFO — Email Extractor `senin@email.com`:** Sızıntı değil; form input'larındaki
  `placeholder` metni ("senin@email.com" örnek gösterim). → Zararsız.
- **INFO — WAF/DNS/robots.txt/SSL issuer/tech-detect/CAA/AAAA/RDAP:** Bilgi amaçlı
  keşif çıktısı, zafiyet değil. → Aksiyon yok.

## Deploy

```bash
# Git-bağlı Cloudflare (Pages/Workers Builds) ise:
git push origin main          # otomatik build + deploy

# Manuel wrangler ise:
npm run build && npx wrangler deploy
```

Deploy sonrası doğrulama:
```bash
curl -sI https://aitr.blog/ | grep -iE 'content-security|x-frame|strict-transport|x-content-type|referrer-policy'
```
