'use client';
import { useEffect } from 'react';

export default function Screen4({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  useEffect(() => {
    const sheep  = document.getElementById('sheep-4')!;
    const bubble = document.getElementById('bubble-4')!;
    sheep.classList.remove('animate-sway', 'animate-breathe', 'animate-pop-in');
    void sheep.offsetWidth;
    sheep.classList.add('animate-pop-in');
    bubble.classList.remove('bubble-pop');
    bubble.classList.add('bubble-hidden');
    const onEnd = () => {
      sheep.classList.remove('animate-pop-in');
      sheep.classList.add('animate-breathe');
      bubble.classList.remove('bubble-hidden');
      bubble.classList.add('bubble-pop');
    };
    sheep.addEventListener('animationend', onEnd, { once: true });
    return () => sheep.removeEventListener('animationend', onEnd);
  }, []);

  return (
    <>
      <main className="flex-1 flex flex-col items-center justify-center px-5 py-6 overflow-y-auto">
        <div className="w-full max-w-3xl flex flex-col items-center gap-8">
          <div className="flex flex-col items-center">
            <div id="bubble-4" className="bubble-hidden">
              <div className="bg-[#ea1b23] text-white px-8 py-3 rounded-full shadow-lg mb-4">
                <p className="font-black text-lg tracking-wide">Bạn có biết?</p>
              </div>
            </div>
            <div className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px]">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-gray-100/60 rounded-[100%] z-0" />
              <img id="sheep-4" src="/sheep/Cừu háo hức.png" alt="Cừu Cần Cù" className="w-full h-full object-contain relative z-10" />
            </div>
          </div>
          <p className="text-center text-gray-500 font-semibold text-sm md:text-base leading-relaxed max-w-2xl italic">
            Việc đầu tư không nhất thiết phải bắt đầu từ một số vốn lớn. Đôi khi, hành trình tích lũy có thể bắt đầu từ những khoản rất nhỏ — số tiền mà chúng ta vẫn thường gọi là <span className="text-[#ea1b23] font-black not-italic">"tiền lẻ"</span>.
          </p>
          <div className="grid grid-cols-3 gap-4 w-full">
            {[
              { icon: 'coffee',   label: 'Một ly cà phê' },
              { icon: 'savings',  label: 'Một khoản chi tiêu nhỏ được tối ưu' },
              { icon: 'payments', label: 'Một phần tiền nhàn rỗi mỗi ngày' },
            ].map(c => (
              <div key={c.icon} className="bento-card p-6 flex flex-col items-center text-center gap-3">
                <span className="material-symbols-outlined text-[#ea1b23] text-4xl">{c.icon}</span>
                <p className="font-black text-gray-800 text-sm md:text-base">{c.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center font-black text-gray-900 text-lg md:text-xl leading-snug max-w-xl">
            Tất cả đều có thể trở thành bước khởi đầu cho thói quen đầu tư dài hạn.
          </p>
        </div>
      </main>
      <footer className="p-5 md:px-12 md:py-8 flex justify-end items-center gap-3 bg-white border-t border-gray-100">
        <button className="flex-1 md:flex-none md:px-10 py-4 text-[#ea1b23] font-black text-base rounded-2xl uppercase tracking-wider border-2 border-[#ea1b23] hover:bg-red-50 btn-outline" onClick={onBack}>← Quay lại</button>
        <button className="flex-1 md:flex-none md:px-14 py-4 bg-[#ea1b23] hover:bg-[#c4161d] text-white font-black text-base rounded-2xl uppercase tracking-wider btn-red" onClick={onNext}>Tiếp tục</button>
      </footer>
    </>
  );
}
