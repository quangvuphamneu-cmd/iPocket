'use client';
import { useEffect } from 'react';

export default function Screen5({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  useEffect(() => {
    const sheep = document.getElementById('sheep-5')!;
    sheep.classList.remove('animate-sway', 'animate-breathe', 'animate-pop-in');
    void sheep.offsetWidth;
    sheep.classList.add('animate-pop-in');
    const cards = document.querySelectorAll<HTMLElement>('#cards-5 > div');
    cards.forEach((c, i) => {
      c.style.opacity = '0'; c.style.transform = 'translateY(16px)';
      setTimeout(() => {
        c.style.transition = 'all 0.45s cubic-bezier(0.23,1,0.32,1)';
        c.style.opacity = '1'; c.style.transform = 'translateY(0)';
      }, 600 + i * 130);
    });
    const onEnd = () => { sheep.classList.remove('animate-pop-in'); sheep.classList.add('animate-sway'); };
    sheep.addEventListener('animationend', onEnd, { once: true });
    return () => sheep.removeEventListener('animationend', onEnd);
  }, []);

  return (
    <>
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-6 md:px-12 py-8 overflow-y-auto">
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-[220px] h-[220px] md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px]">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-gray-100/50 rounded-[100%] z-0" />
              <img id="sheep-5" src="/sheep/Đầu cừu.png" alt="Cừu Cần Cù" className="w-full h-full object-contain relative z-10" />
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="space-y-3" id="cards-5">
              {[
                { icon: 'account_balance_wallet', text: <>Chỉ từ <span className="font-black text-gray-900">10.000 VNĐ</span>, bạn có cơ hội đầu tư sinh lời với <span className="text-[#ea1b23] font-black">Chứng chỉ Quỹ TCC</span></> },
                { icon: 'receipt_long',           text: <>Chỉ từ <span className="font-black text-gray-900">100.000 VNĐ</span>, bạn có thể bắt đầu đầu tư <span className="text-[#ea1b23] font-black">trái phiếu iConnect</span></> },
                { icon: 'monitoring',             text: <>Chỉ từ <span className="font-black text-gray-900">1.000.000 VNĐ</span>, bạn có danh mục cổ phiếu tối ưu bởi chuyên gia với <span className="text-[#ea1b23] font-black">iCopy và iTracker</span></> },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-2xl border-2 border-gray-100 hover:border-[#ea1b23]/30 hover:bg-red-50/40 transition-all group">
                  <div className="mt-1 w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-[#ea1b23] transition-colors">
                    <span className="material-symbols-outlined text-[#ea1b23] group-hover:text-white">{item.icon}</span>
                  </div>
                  <p className="text-gray-700 font-semibold text-base md:text-lg leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="border-l-4 border-[#ea1b23] pl-5 py-1">
              <p className="text-gray-700 italic font-semibold text-base md:text-lg leading-snug">
                "Điều quan trọng không phải là bạn bắt đầu với bao nhiêu tiền.<br />
                Mà là <span className="text-[#ea1b23] font-black not-italic">bạn bắt đầu từ hôm nay.</span>"
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="p-5 md:px-12 md:py-8 flex justify-end items-center gap-3 bg-white border-t border-gray-100">
        <button className="flex-1 md:flex-none md:px-10 py-4 text-[#ea1b23] font-black text-base rounded-2xl uppercase tracking-wider border-2 border-[#ea1b23] hover:bg-red-50 btn-outline" onClick={onBack}>← Quay lại</button>
        <button className="flex-1 md:flex-none md:px-10 py-4 bg-[#ea1b23] hover:bg-[#c4161d] text-white font-black text-base rounded-2xl uppercase tracking-wider btn-red flex items-center justify-center gap-2" onClick={onNext}>
          Cùng TCBS vượt trội hơn mỗi ngày
          <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
        </button>
      </footer>
    </>
  );
}
