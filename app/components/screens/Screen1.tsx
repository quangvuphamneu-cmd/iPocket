'use client';
import { useSheepBubble } from '@/app/hooks/useSheepBubble';

export default function Screen1({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  useSheepBubble('sheep-1', 'bubble-1');
  return (
    <>
      <main className="flex-1 flex flex-col items-center justify-center px-4 overflow-hidden">
        <div className="flex flex-col items-center">
          <div id="bubble-1" className="bubble-hidden relative bg-white border-2 border-gray-200 rounded-2xl px-6 py-3 mb-10 bubble-tail-down shadow-sm">
            <p className="text-xl font-bold text-gray-600">Chào bạn! Tớ là <span className="text-[#ea1b23] font-black">Cừu cần cù!</span> 🐑</p>
          </div>
          <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[460px] lg:h-[460px]">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-gray-100/60 rounded-[100%] z-0" />
            <img id="sheep-1" src="/sheep/Cừu Onboarding.png" alt="Cừu Cần Cù" className="w-full h-full object-contain relative z-10 animate-pop-in" />
          </div>
        </div>
      </main>
      <footer className="p-5 md:px-12 md:py-8 flex justify-end items-center gap-3 bg-white border-t border-gray-100">
        <button className="flex-1 md:flex-none md:px-10 py-4 text-[#ea1b23] font-black text-base rounded-2xl uppercase tracking-wider border-2 border-[#ea1b23] hover:bg-red-50 btn-outline" onClick={onBack}>← Quay lại</button>
        <button className="flex-1 md:flex-none md:px-14 py-4 bg-[#ea1b23] hover:bg-[#c4161d] text-white font-black text-base rounded-2xl uppercase tracking-wider btn-red" onClick={onNext}>Tiếp tục</button>
      </footer>
    </>
  );
}
