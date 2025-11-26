# SafePaste 🔒

![SafePaste Logo](icon/logo.png)

**Zero-Trust AI Privacy for Developers**

Stop leaking secrets to AI assistants. SafePaste automatically sanitizes sensitive data before you copy code, then restores it when you paste back. Your secrets never leave your machine.

---

## 🎯 Why SafePaste?

Every time you paste code into ChatGPT, Claude, or Gemini, you risk exposing:

- 🔑 API keys and tokens
- 📧 Email addresses
- 🌐 IP addresses and infrastructure details
- ☁️ AWS credentials

**SafePaste solves this in 2 commands.**

---

## ⚡ Quick Start

### 1️⃣ Sanitize & Copy

Select code with secrets → `Ctrl+Shift+P` → **SafePaste: Sanitize & Copy**

**Before:**

```typescript
const config = {
  apiKey: "sk_live_51MzABC123...",
  email: "admin@company.com",
  dbHost: "192.168.1.100",
};
```

**After (in clipboard):**

```typescript
const config = {
  apiKey: "<API_KEY_1>",
  email: "<EMAIL_1>",
  dbHost: "<IP_1>",
};
```

### 2️⃣ Paste & Restore

Get AI's response → `Ctrl+Shift+P` → **SafePaste: Paste & Restore**

Original values are automatically restored in your editor.

---

## 🛡️ What Gets Detected

| Type             | Example                      | Placeholder   |
| ---------------- | ---------------------------- | ------------- |
| **API Keys**     | `sk_live_...`, `api_key_...` | `<API_KEY_N>` |
| **AWS Keys**     | `AKIAIOSFODNN7EXAMPLE`       | `<AWS_KEY_N>` |
| **Emails**       | `user@example.com`           | `<EMAIL_N>`   |
| **IP Addresses** | `192.168.1.1`                | `<IP_N>`      |

---

## 🚀 Real-World Use Cases

### 1. Environment Files

```bash
# .env
STRIPE_SECRET=sk_live_51Mz...     # ✅ Sanitized
AWS_ACCESS_KEY_ID=AKIA...         # ✅ Sanitized
SUPPORT_EMAIL=help@startup.io     # ✅ Sanitized
```

### 2. Error Logs

```
[ERROR] Connection failed to 10.0.2.15  # ✅ IP sanitized
[INFO] User john@company.com logged in  # ✅ Email sanitized
```

### 3. Any Programming Language

Works with Python, JavaScript, Go, SQL, JSON, YAML, and more.

---

## 📋 How to Use

1. **Select** code containing secrets
2. **Run** `SafePaste: Sanitize & Copy` (Command Palette)
3. **Paste** into ChatGPT/Claude/Gemini
4. **Copy** AI's improved code
5. **Run** `SafePaste: Paste & Restore`

Done! Your secrets are back where they belong.

---

## 🔐 Privacy First

- ✅ **100% Local** - Secrets never leave your machine
- ✅ **In-Memory Only** - No disk writes, no logs
- ✅ **Zero Config** - Works out of the box
- ✅ **Language Agnostic** - Regex-based detection

---

## 🤝 Contributing

Found a bug or want a feature? [Open an issue](https://github.com/lucasgiovanella/safepaste/issues)!

---

## 📄 License

MIT © Lucas Giovanella
