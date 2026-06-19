'use client';
import { useState } from 'react';
import { useSheepBubble } from '@/app/hooks/useSheepBubble';

const facts: Record<string, string> = {
  'Chứng chỉ quỹ':   'Chỉ từ 10.000 VNĐ bạn có thể bắt đầu đầu tư Chứng chỉ quỹ ngay hôm nay! 🎉',
  'Trái phiếu iBond': 'Chỉ từ 100.000 VNĐ bạn có thể đầu tư Trái phiếu iConnect với lãi suất hấp dẫn tại TCBS! 📈',
  'iCopy':            'iCopy cho phép bạn sao chép danh mục của chuyên gia hàng đầu chỉ với vài thao tác đơn giản! 🧠',
  'iTracker':         'iTracker giúp bạn theo dõi và tối ưu danh mục đầu tư cổ phiếu được xây dựng bởi chuyên gia! 🔍',
};

const products = [
  { key: 'Chứng chỉ quỹ',   icon: 'pie_chart' },
  { key: 'Trái phiếu iBond', icon: 'account_balance' },
  { key: 'iCopy',            icon: 'content_copy' },
  { key: 'iTracker',         icon: 'monitoring' },
];

export default function Screen7({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  useSheepBubble('sheep-7', 'bubble-7');
  const [selected, setSelected] = useState<string | null>(null);
  const [overlay, setOverlay] = useState(false);
  const [factText, setFactText] = useState('');

  function handleSelect(key: string) {
    setSelected(key);
    setFactText(facts[key] || '');
    setOverlay(true);
  }

  return (
    <>
      <main className="flex-1 flex flex-col overflow-y-auto px-5 py-6">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-6 w-full max-w-3xl mx-auto">
          <div className="relative shrink-0 w-[130px] h-[130px] md:w-[160px] md:h-[160px]">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-gray-100/60 rounded-[100%] z-0" />
            <img id="sheep-7" src="/sheep/Cừu háo hức.png" alt="Cừu Cần Cù" className="w-full h-full object-contain relative z-10" />
          </div>
          <div id="bubble-7" className="bubble-hidden relative bg-white border-2 border-gray-200 rounded-2xl p-5 shadow-md flex-1">
            <h2 className="font-black text-xl md:text-2xl text-gray-800">Cùng chọn một sản phẩm để bắt đầu nhé!</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full max-w-3xl mx-auto">
          {products.map(p => (
            <button key={p.key}
              className={`s7-card group flex flex-col items-center gap-3 p-6 rounded-2xl border-2 bg-white transition-all text-center
                ${selected === p.key ? 'border-[#ea1b23] bg-red-50/60 ring-2 ring-[#ea1b23]' : 'border-gray-200 hover:border-[#ea1b23]/40 hover:bg-red-50/30'}`}
              onClick={() => handleSelect(p.key)}>
              <div className={`w-14 h-14 flex items-center justify-center rounded-xl transition-colors ${selected === p.key ? 'bg-[#ea1b23]/10' : 'bg-gray-100 group-hover:bg-[#ea1b23]/10'}`}>
                <span className="material-symbols-outlined text-[#ea1b23] text-3xl">{p.icon}</span>
              </div>
              <span className="font-black text-gray-800 text-base">{p.key}</span>
            </button>
          ))}
        </div>
      </main>

      {/* Fact modal */}
      {overlay && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[200] flex items-center justify-center px-4" onClick={() => setOverlay(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="p-6 flex flex-col items-center text-center">
              <span className="px-3 py-1 bg-red-100 text-[#ea1b23] text-xs font-black uppercase tracking-widest rounded-full mb-4">Bạn có biết</span>
              <div className="w-28 h-28 mb-4">
                <img src="/sheep/Đầu cừu.png" alt="Cừu" className="w-full h-full object-contain animate-sway" />
              </div>
              <p className="text-gray-700 font-bold text-base leading-relaxed mb-6">{factText}</p>
              <button className="w-full py-3 bg-[#ea1b23] hover:bg-[#c4161d] text-white font-black rounded-xl uppercase tracking-wider btn-red" onClick={() => setOverlay(false)}>Đã hiểu!</button>
            </div>
          </div>
        </div>
      )}

      <footer className="p-5 md:px-12 md:py-8 flex justify-end items-center gap-3 bg-white border-t border-gray-100">
        <button className="flex-1 md:flex-none md:px-10 py-4 text-[#ea1b23] font-black text-base rounded-2xl uppercase tracking-wider border-2 border-[#ea1b23] hover:bg-red-50 btn-outline" onClick={onBack}>← Quay lại</button>
        <button disabled={!selected}
          className="flex-1 md:flex-none md:px-14 py-4 text-white font-black text-base rounded-2xl uppercase tracking-wider transition-all"
          style={{ background: '#ea1b23', boxShadow: selected ? '0 4px 0 0 #9e1218' : 'none', opacity: selected ? 1 : 0.4, cursor: selected ? 'pointer' : 'not-allowed' }}
          onClick={onNext}>Tiếp tục</button>
      </footer>
    </>
  );
}
