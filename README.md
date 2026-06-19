# TCBS Cừu Cần Cù — Next.js

## Cài đặt

1. Tải Node.js LTS từ https://nodejs.org và cài đặt
2. Mở Terminal, cd vào thư mục này:

```bash
cd /Users/phamquangvu/iPocket/tcbs-nextjs
npm install
npm run dev
```

3. Mở trình duyệt: http://localhost:3000

## Cấu trúc

```
app/
  page.tsx              ← Main page với navigation state
  layout.tsx            ← Root layout
  globals.css           ← Animations, global styles
  components/
    SheepImage.tsx      ← Sheep với pop-in → sway animation
    SpeechBubble.tsx    ← Bubble với delayed fade-in
    Footer.tsx          ← Back / Next buttons
    screens/
      Screen1.tsx  → Screen11.tsx   ← 11 screens
public/
  sheep/                ← Tất cả ảnh cừu (đã xoá nền)
```
