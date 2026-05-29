# Portfolio Website — สุจินดา ใจปินตา

เว็บไซต์ Portfolio ส่วนตัวแบบ single-page ที่รวบรวมประวัติการศึกษา, ทักษะ, ผลงาน,
ใบรับรอง และผลงานตีพิมพ์ ออกแบบในธีมโทนม่วง-ชมพู พร้อมอนิเมชันลื่นไหล

> 🔗 เว็บใช้งานจริง: https://portfolio-website-mumuch5432-3185s-projects.vercel.app/

---

## ✨ ฟีเจอร์

- 🎬 **อนิเมชันด้วย Framer Motion** — fade-in ขณะ scroll, parallax, hover effects
- 🧭 **Navigation แบบ smooth scroll** — ไฮไลต์เมนูตาม section ที่กำลังดูอยู่
- 📱 **Responsive** — รองรับทั้งมือถือและเดสก์ท็อป
- 🎨 **UI สวยงาม** — glassmorphism, gradient, backdrop blur

### Section ภายในเว็บ

`Hero` · `Education` · `Skills` · `Experience` · `Projects` · `Side Projects` · `Certificates` · `Publications` · `Languages` · `Contact`

---

## 🛠️ เทคโนโลยีที่ใช้

| ส่วน | เทคโนโลยี |
|------|-----------|
| Framework | Next.js 14 (App Router) + React 18 + TypeScript |
| UI | Tailwind CSS + shadcn/ui (Radix UI) |
| Animation | Framer Motion |
| Icons | lucide-react |
| Deploy | Vercel |

---

## 📁 โครงสร้างโปรเจกต์

```
Portfolio-Website-main/
├── app/
│   ├── page.tsx        # หน้าหลัก Portfolio ทั้งหมด (single page)
│   ├── layout.tsx      # root layout
│   └── globals.css
├── components/
│   ├── ui/             # shadcn/ui components
│   └── theme-provider.tsx
├── lib/utils.ts
├── public/             # รูปภาพและ asset
└── tailwind.config.ts
```

ข้อมูลทั้งหมด (ประวัติ, skills, projects ฯลฯ) ถูกกำหนดไว้ในไฟล์
[app/page.tsx](app/page.tsx) สามารถแก้ไขเนื้อหาได้ที่นี่โดยตรง

---

## 🚀 วิธีติดตั้งและรัน

```bash
pnpm install     # หรือ npm install
pnpm dev         # รันที่ http://localhost:3000
pnpm build       # build สำหรับ production
```

---

## 📬 ติดต่อ

- **Email:** mumuch4321@gmail.com
- **GitHub:** [github.com/mumuhrk](https://github.com/mumuhrk)
