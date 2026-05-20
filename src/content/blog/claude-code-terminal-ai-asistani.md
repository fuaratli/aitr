---
title: 'Claude Code: Terminal''den AI ile Yazılım Geliştirme — Cursor''ın Tek Rakibi'
description: 'Claude Code nedir, terminal''de nasıl çalışır, Cursor IDE''den farkı ne? Anthropic''in CLI tabanlı geliştirici asistanı 60 günlük deneyim, fiyat, kurulum, gerçek senaryolar.'
pubDate: 'May 21 2026'
category: 'rehber'
tags: ['claude code', 'terminal', 'cli', 'yazılım', 'rehber']
---

Cursor IDE seveni çok ([rehberim](/blog/cursor-ide-turkce-rehber-2026/)) — ama **terminalden** çıkmak istemeyenler de var. Vim, tmux, Emacs kullanıcıları, sysadmin'ler. Onlar için Anthropic **Claude Code**'u çıkardı: **terminal'de gerçek bir AI geliştirici asistanı**.

60 gün boyunca Claude Code'u günlük rutinime kattım. Bu yazıda nedir, ne yapar, ne yapamaz, **Cursor'dan farkı ne** — detaylı anlatıyorum.

## Claude Code Nedir?

**Claude Code** = Anthropic'in komut satırı asistanı. Cursor gibi bir IDE değil — **terminal'inde yaşıyor**. Sen yazılır, Claude:
- Mevcut kod tabanını **anlıyor**
- Dosyaları **okuyor, yazıyor, değiştiriyor**
- Terminal komutları **çalıştırıyor**
- Git ile **çalışıyor**

Önemli: Bu **agentic** — sen "şunu yap" diyorsun, Claude **kendi başına** araştırıyor, planlıyor, yapıyor.

## Kurulum — 2 Dakika

```bash
npm install -g @anthropic-ai/claude-code
```

veya pip ile:
```bash
pip install claude-code
```

Sonra:
```bash
claude
```

İlk açılışta API key sorar. [console.anthropic.com](https://console.anthropic.com) → API key oluştur → yapıştır.

## Fiyat

- **Free Tier:** Claude Pro abonesi ($20/ay) ile kullanılabilir (sınırlı)
- **API üzerinden:** Token başı ödeme (~$3-15/saat ağır kullanım)
- **Claude Max:** $200/ay sınırsız Claude Code + Claude Pro web

**Hesap:** Profesyonel dev için aylık ~$50-200, hobi için $20.

## İlk Görev — 5 Dakika

Mevcut bir Astro projesi içindeyim:
```bash
cd ~/projects/aitr
claude
```

Açıldı. Claude dosya yapısını taradı, hazır.

**Konuşma:**
```
Sen: "Yeni bir makale eklemek istiyorum. Konu: AI ile İş Görüşmesi.
      Mevcut makalelerin yapısına uyumlu olmalı."

Claude: "Tamam. Mevcut makaleleri inceledim. Şu yapıyı takip
        edeceğim: frontmatter (title, description, pubDate,
        category, tags) + giriş + 5-7 ana bölüm + sonuç.
        Yazı yazıyorum, 2 dakika..."

[Claude src/content/blog/ai-ile-is-gorusmesi.md yazdı]

Sen: "Görüntü çek + 'Commit it'"

Claude: [git add, git commit -m "feat: AI ile iş görüşmesi makalesi"]
```

5 dakika — yeni makale, yazıldı, commitlendi.

## Cursor IDE vs Claude Code — Ana Farklar

| Özellik | Cursor IDE | Claude Code |
|---|---|---|
| Arayüz | VS Code | Terminal |
| Görsel kod editör | ✅ | ❌ (vim/emacs/nano) |
| Görsel diff | ✅ | Text-based |
| Çoklu dosya değişim | ✅ | ✅ |
| Custom commands | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ (shell ile) |
| Headless / CI | ❌ | ✅ |
| SSH server | Zor | ✅ Doğal |
| Background agent | Yok | ✅ var |
| Türkçe konuşma | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Maliyet | $20/ay flat | Token bazlı veya $20-200 |

**Kim için Cursor:** Visual learner, GUI seven, dosya gezgini ile çalışan
**Kim için Claude Code:** Terminal'de yaşayan, sysadmin, headless ortam, SSH

## Claude Code'un 5 Güçlü Yanı

### 1. **Anlama derinliği**
Cursor 'codebase' parametresiyle proje anlıyor. Claude Code **doğal olarak** dosyaları okur, anlar, hatırlar. "/codebase" yazmana gerek yok.

### 2. **Komut çalıştırma**
```
Sen: "npm test çalıştır, hatalar varsa düzelt"

Claude: [npm test çalıştırır, çıktıyı okur, sorun bulur, fix yapar, tekrar test eder]
```

### 3. **Git workflow**
```
Sen: "Bu son 5 commit'i squash et, mesajı 'feat: auth flow refactor' yap"

Claude: [git rebase -i, conflicts varsa çözüyor, commit yapıyor]
```

### 4. **Multi-file refactor**
Cursor da yapıyor ama Claude Code **daha az 'kayboluyor'** çok dosyalı projelerde.

### 5. **Headless mod**
CI/CD'de Claude Code'u çalıştırabilirsin:
```bash
claude --non-interactive "Run tests and create PR for any issues"
```

## Türkçe Performans

Claude Code Türkçe çok iyi:
- ⭐⭐⭐⭐⭐ Türkçe komutları anlıyor
- ⭐⭐⭐⭐⭐ Türkçe yorumlar yazıyor
- ⭐⭐⭐⭐ Türkçe değişken isimleri (bazen kalkışıyor "user" kullanmaya, ama söylersen düzeltir)

## 60 Günlük Deneyimde Öğrendiklerim

### 1. **Background agent'i kullan**
Uzun bir görev başlat (bug fix, feature) → terminal'i kapat. Claude arka planda çalışıyor. Geri dön → bitmiş.

### 2. **CLAUDE.md** dosyası kullan
Proje köküne `CLAUDE.md` koy → her açılışta otomatik okur. Sen koy:
- Proje tarz kuralları
- Önemli pattern'lar
- "Şunu kullanma, bunu kullan"

### 3. **Slash commands**
Custom komutlar oluştur:
- `/test` → projeyi test eder
- `/deploy` → Vercel'e gönderir
- `/lint` → linter çalıştırır + fix yapar

`~/.claude/commands/` altına shell script koy.

### 4. **Plan modu**
"Önce planla, sonra yap" demek için: Claude büyük değişikliklerden önce **plan sunar**. Sen onaylarsın → sonra yapar. Çok değerli.

### 5. **Çoklu instance**
Birden fazla terminal'de Claude aç → birden fazla görev paralel.

## Sınırlamalar

⚠️ Claude Code zayıf:
1. **Görsel debug** — image, çizim gerektiren işler
2. **Browser otomasyon** — Cursor + Playwright daha iyi
3. **WYSIWYG düzenleme** — CSS önizleme, vs.
4. **Onboarding** — yeni başlayanlar için Cursor daha kolay

## Ne Zaman Cursor + Claude Code Birlikte?

Çoğu profesyonel **ikisini birden** kullanıyor:
- **Cursor IDE:** Frontend, UI işleri, görsel tasarım
- **Claude Code:** Backend, refactor, DevOps, scripting

Maliyet: $20 (Cursor) + $20-50 (Claude API) = aylık ~$50.

## Para Hesabı — TR

Freelance dev için aylık maliyet:
- Cursor Pro: $20 = 700 TL
- Claude API (ortalama): $40 = 1.400 TL
- **Toplam: 2.100 TL/ay**

Bunu **2 saatlik freelance iş** karşılıyor. Verimlilik artışı: %30-50.

## Sonuç

Claude Code, **Cursor'a alternatif değil — tamamlayıcı**. Terminal'de yaşayan biriysen **kullanmaman komik**.

İlk denemen önerim: Cursor zaten kullanıyorsan, Claude Code'u **paralel** dene 1 hafta. Sonra hibrit workflow'una karar ver.

İlgili: [Cursor IDE Rehberi](/blog/cursor-ide-turkce-rehber-2026/), [DeepSeek vs Gemini vs Claude Benchmark](/blog/deepseek-vs-gemini-vs-claude-kod-benchmark/).

---

*Bağımsız rehber, 60 günlük gerçek kullanım. Mayıs 2026.*
