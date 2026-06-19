'use client';
import { useSheepBubble } from '@/app/hooks/useSheepBubble';
import { useEffect } from 'react';

function launchConfetti() {
  const cols = ['#ea1b23','#ff6b6b','#ffd93d','#6bcb77','#4d96ff','#ff9fd4','#fff'];
  for (let i = 0; i < 90; i++) {
    const el = document.createElement('div');
    el.className = 'cf-piece';
    const size = 7 + Math.random() * 10;
    const isCircle = Math.random() > 0.4;
    el.style.cssText = `left:${Math.random()*100}vw;width:${size}px;height:${isCircle?size:size*1.6}px;background:${cols[Math.floor(Math.random()*cols.length)]};border-radius:${isCircle?'50%':'3px'};animation-duration:${2.2+Math.random()*2.5}s;animation-delay:${Math.random()*1.4}s`;
    document.body.appendChild(el);
    el.addEventListener('animationend', () => el.remove());
  }
}

export default function Screen6({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  useSheepBubble('sheep-6', 'bubble-6');
  useEffect(() => { setTimeout(launchConfetti, 300); }, []);
  return (
    <>
      <main className="flex-1 flex flex-col items-center justify-center px-4 overflow-hidden">
        <div className="flex flex-col items-center">
          <div id="bubble-6" className="bubble-hidden relative bg-white border-2 border-gray-200 rounded-2xl px-8 py-4 mb-12 shadow-sm bubble-tail-down">
            <p className="text-xl md:text-2xl font-bold text-gray-600 text-center max-w-xl">
              Cừu sẽ giúp bạn tối ưu hiệu quả đầu tư từ những món tiền tưởng chừng như nhỏ bé
            </p>
          </div>
          <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px]">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-10 bg-gray-100/60 rounded-[100%] z-0" />
            <img id="sheep-6" src="/sheep/Cừu Confetti.png" alt="Cừu Cần Cù" className="w-full h-full object-contain relative z-10" />
          </div>
        </div>
      </main>
      <footer className="p-5 md:px-12 md:py-8 flex justify-end items-center gap-3 bg-white border-t border-gray-100">
        <button className="flex-1 md:flex-none md:px-10 py-4 text-[#ea1b23] font-black text-base rounded-2xl uppercase tracking-wider border-2 border-[#ea1b23] hover:bg-red-50 btn-outline" onClick={onBack}>← Quay lại</button>
        <button className="flex-1 md:flex-none md:px-14 py-5 bg-[#ea1b23] hover:bg-[#c4161d] text-white font-black text-lg rounded-2xl uppercase tracking-widest btn-red" onClick={onNext}>Tham gia ngay</button>
      </footer>
    </>
  );
}
