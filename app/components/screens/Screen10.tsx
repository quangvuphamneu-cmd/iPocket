'use client';
import { useSheepBubble } from '@/app/hooks/useSheepBubble';

export default function Screen10({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  useSheepBubble('sheep-10', 'bubble-10');
  return (
    <>
      <main className="flex-1 flex flex-col md:flex-row items-center justify-center px-6 md:px-16 gap-8 md:gap-12 overflow-y-auto relative">
        <div className="absolute top-0 left-0 w-80 h-80 bg-red-50 rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-30 translate-x-1/3 translate-y-1/3 pointer-events-none" />
        <div className="flex-shrink-0 flex items-center justify-center w-44 h-44 md:w-72 md:h-72 relative">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-5 bg-gray-100/60 rounded-[100%] z-0" />
          <img id="sheep-10" src="/sheep/Cừu sáng kiến.png" alt="Cừu Sáng Kiến" className="w-full h-full object-contain relative z-10" />
        </div>
        <div className="flex-1 max-w-lg">
          <div id="bubble-10" className="bubble-hidden relative bg-white border-2 border-gray-100 rounded-3xl px-8 py-8 md:ml-4" style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}>
            <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[18px] w-0 h-0" style={{ borderTop:'14px solid transparent', borderBottom:'14px solid transparent', borderRight:'18px solid white', filter:'drop-shadow(-2px 0 2px rgba(0,0,0,0.05))' }} />
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-[#ea1b23] rounded-full w-fit">
                <span className="material-symbols-outlined text-[18px]">lightbulb</span>
                <span className="text-xs font-bold uppercase tracking-wider">Bạn có biết</span>
              </div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 leading-snug">
                Cừu cần cù sẽ đồng hành và lớn lên cùng dòng tiền đầu tư của bạn.
              </h2>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                Mọi hành trình vạn dặm đều bắt đầu từ những bước chân nhỏ nhất. Hãy để chúng tôi tối ưu hóa từng đồng vốn của bạn mỗi ngày.
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="p-5 md:px-12 md:py-8 flex justify-end items-center gap-3 bg-white border-t border-gray-100">
        <button className="flex-1 md:flex-none md:px-10 py-4 text-[#ea1b23] font-black text-base rounded-2xl uppercase tracking-wider border-2 border-[#ea1b23] hover:bg-red-50" onClick={onBack}>← Quay lại</button>
        <button className="flex-1 md:flex-none md:px-14 py-4 bg-[#ea1b23] hover:bg-[#c4161d] text-white font-black text-base rounded-2xl uppercase tracking-wider" onClick={onNext}>Ghé thăm Cừu của bạn</button>
      </footer>
    </>
  );
}
