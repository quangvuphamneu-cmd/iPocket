'use client';
import { useSheepBubble } from '@/app/hooks/useSheepBubble';

export default function Screen3({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  useSheepBubble('sheep-3', 'bubble-3');
  return (
    <>
      <main className="flex-1 flex flex-col items-center justify-center px-5 py-6 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full max-w-3xl">
          <div className="relative shrink-0 w-[180px] h-[180px] md:w-[230px] md:h-[230px] lg:w-[260px] lg:h-[260px]">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-gray-100/50 rounded-[100%] z-0" />
            <img id="sheep-3" src="/sheep/Cừu khảo sát.png" alt="Cừu Cần Cù" className="w-full h-full object-contain relative z-10" />
          </div>
          <div id="bubble-3" className="bubble-hidden relative bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 shadow-md flex-1">
            <p className="text-base md:text-lg text-gray-500 font-bold mb-3">
              Bạn đang làm tốt hơn <span className="text-green-600 text-xl md:text-2xl font-black">75%</span> Nhà đầu tư khác.
            </p>
            <p className="text-xl md:text-2xl font-black text-gray-800 leading-snug mb-3">
              Bạn có muốn để khoản lãi này tiếp tục <span className="text-green-600">sinh lời thêm nhiều lần nữa</span> tại TCBS không?
            </p>
            <p className="text-sm md:text-base text-gray-400 font-semibold leading-relaxed">
              Bắt đầu từ khoản nhỏ hôm nay, tiền của bạn vẫn có thể tiếp tục <span className="font-black text-gray-600">lớn lên mỗi ngày.</span>
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
