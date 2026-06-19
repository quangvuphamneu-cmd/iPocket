'use client';
import { useSheepBubble } from '@/app/hooks/useSheepBubble';

export default function Screen2({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  useSheepBubble('sheep-2', 'bubble-2');
  return (
    <>
      <main className="flex-1 flex flex-col items-center justify-center px-5 py-6 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 w-full max-w-3xl">
          <div className="relative shrink-0 w-[200px] h-[200px] md:w-[240px] md:h-[240px] lg:w-[280px] lg:h-[280px]">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-gray-100/60 rounded-[100%] z-0" />
            <img id="sheep-2" src="/sheep/Cừu khảo sát.png" alt="Cừu Cần Cù" className="w-full h-full object-contain relative z-10" />
          </div>
          <div id="bubble-2" className="bubble-hidden relative bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-md flex-1">
            <p className="text-lg md:text-xl font-bold text-gray-700 leading-snug">
              Cừu vừa thấy bạn chốt lời HPG <span className="text-green-500 font-black">+280.000 VNĐ</span> 🎉
            </p>
            <p className="text-sm md:text-base text-gray-500 mt-2 font-semibold leading-relaxed">
              Không phải nhà đầu tư nào cũng đạt được kết quả tích cực như vậy!
            </p>
          </div>
        </div>
      </main>
      <footer className="p-5 md:px-12 md:py-8 flex justify-end items-center gap-3 bg-white border-t border-gray-100">
        <button className="flex-1 md:flex-none md:px-10 py-4 text-[#ea1b23] font-black text-base rounded-2xl uppercase tracking-wider border-2 border-[#ea1b23] hover:bg-red-50 btn-outline" onClick={onBack}>← Quay lại</button>
        <button className="flex-1 md:flex-none md:px-14 py-4 bg-[#ea1b23] hover:bg-[#c4161d] text-white font-black text-base rounded-2xl uppercase tracking-wider btn-red" onClick={onNext}>Chắc chắn rồi</button>
      </footer>
    </>
  );
}
