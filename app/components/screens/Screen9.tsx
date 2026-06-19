'use client';
import { useEffect, useState } from 'react';
import { useSheepBubble } from '@/app/hooks/useSheepBubble';

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

export default function Screen9({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  useSheepBubble('sheep-9', 'bubble-9');
  const [ts, setTs] = useState('--');
  useEffect(() => {
    setTs(new Date().toLocaleString('vi-VN', { hour:'2-digit', minute:'2-digit', second:'2-digit', day:'2-digit', month:'2-digit', year:'numeric' }));
    setTimeout(launchConfetti, 300);
  }, []);

  return (
    <>
      <main className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 overflow-y-auto">
        <div className="z-10 flex flex-col items-center max-w-md w-full gap-6 py-8">
          <div id="bubble-9" className="bubble-hidden relative bg-white rounded-2xl px-6 py-5 shadow-md border border-gray-100 text-center w-full" style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.07)' }}>
            <p className="text-gray-800 text-base leading-relaxed">
              <span className="font-extrabold text-gray-900">Xác nhận lệnh thành công!</span><br />
              Bạn có thể kiểm tra chi tiết tại <span className="font-bold text-[#ea1b23]">Sổ lệnh</span> nhé.
            </p>
            <div className="absolute left-1/2 -bottom-[18px] -translate-x-1/2 w-0 h-0" style={{ borderLeft:'16px solid transparent', borderRight:'16px solid transparent', borderTop:'18px solid white', filter:'drop-shadow(0 2px 2px rgba(0,0,0,0.06))' }} />
          </div>
          <div className="relative w-48 h-48 md:w-56 md:h-56 mt-4">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-5 bg-gray-100/60 rounded-[100%] z-0" />
            <img id="sheep-9" src="/sheep/Cừu Confetti.png" alt="Cừu ăn mừng" className="w-full h-full object-contain relative z-10" />
          </div>
          <div className="w-full space-y-3 mt-2">
            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Trạng thái</span>
              <span className="font-mono text-sm font-bold text-emerald-500">ĐÃ KHỚP ✓</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Thời gian</span>
              <span className="font-mono text-sm text-gray-800">{ts}</span>
            </div>
          </div>
        </div>
      </main>
      <footer className="p-5 md:px-12 md:py-8 flex justify-end items-center gap-3 bg-white border-t border-gray-100">
        <button className="flex-1 md:flex-none md:px-10 py-4 text-[#ea1b23] font-black text-base rounded-2xl uppercase tracking-wider border-2 border-[#ea1b23] hover:bg-red-50" onClick={onBack}>← Quay lại</button>
        <button className="flex-1 md:flex-none md:px-14 py-4 bg-[#ea1b23] hover:bg-[#c4161d] text-white font-black text-base rounded-2xl uppercase tracking-wider" onClick={onNext}>Tiếp tục</button>
      </footer>
    </>
  );
}
