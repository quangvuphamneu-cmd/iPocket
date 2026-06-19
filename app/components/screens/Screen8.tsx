'use client';
import { useSheepOnly } from '@/app/hooks/useSheepBubble';

export default function Screen8({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  useSheepOnly('sheep-8', 'animate-sway');
  return (
    <>
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start px-5 py-8">
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start gap-5">
            <div className="relative w-52 h-52 md:w-64 md:h-64">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-gray-100/50 rounded-[100%] z-0" />
              <img id="sheep-8" src="/sheep/Cừu trưởng thành.png" alt="Cừu Cần Cù" className="w-full h-full object-contain relative z-10" />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="font-black text-xl md:text-2xl text-gray-900 leading-snug mb-2">Bạn đang tiến gần hơn tới tự do tài chính!</h2>
              <p className="text-gray-500 font-semibold text-sm md:text-base leading-relaxed">Hãy cùng Cừu Cần Cù xây dựng một kế hoạch đầu tư bền vững, phù hợp với mục tiêu của riêng bạn.</p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 md:p-8 shadow-xl">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-red-50 text-[#ea1b23] text-xs font-black uppercase tracking-widest mb-2">Bước 5/5</span>
                <h1 className="font-black text-xl md:text-2xl text-gray-900">Thiết lập kế hoạch đầu tư</h1>
              </div>
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-wider text-gray-400">Sản phẩm đầu tư</label>
                  <button className="w-full flex items-center justify-between bg-gray-50 border-2 border-gray-200 hover:border-[#ea1b23] p-4 rounded-xl transition-all text-left group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-[#ea1b23]">account_balance</span>
                      </div>
                      <div>
                        <p className="font-black text-gray-900">Chứng chỉ quỹ (iFund)</p>
                        <p className="text-xs text-gray-400 font-semibold">Lợi nhuận kỳ vọng: 8–12%/năm</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-gray-400 group-hover:text-[#ea1b23]">expand_more</span>
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-wider text-gray-400">Lựa chọn số tiền</label>
                    <div className="flex gap-2 mb-3">
                      <button className="flex-1 py-2 px-3 rounded-xl border-2 border-gray-200 font-bold text-sm text-gray-500 hover:border-[#ea1b23] transition-all">Toàn bộ</button>
                      <button className="flex-1 py-2 px-3 rounded-xl bg-[#ea1b23] text-white font-black text-sm btn-red">Một phần</button>
                    </div>
                    <label className="text-xs font-black uppercase tracking-wider text-gray-400">Số tiền đầu tư (VNĐ)</label>
                    <div className="relative">
                      <input type="text" defaultValue="200,000" className="w-full bg-gray-50 border-2 border-gray-200 focus:border-[#ea1b23] p-4 rounded-xl font-black text-lg outline-none text-gray-900 transition-colors" />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-black">đ</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-wider text-gray-400">Tần suất</label>
                    <div className="relative">
                      <select className="w-full bg-gray-50 border-2 border-gray-200 focus:border-[#ea1b23] p-4 rounded-xl font-bold text-gray-900 outline-none appearance-none cursor-pointer transition-colors">
                        <option>Hàng tháng</option><option>Hàng quý</option><option>Đầu tư một lần</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">expand_more</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 py-2">
                  <p className="font-bold text-gray-700">Số tiền làm tròn sẽ đầu tư vào quỹ:</p>
                  <div className="flex flex-wrap gap-5">
                    {['TCBF','TCFF','TCEF'].map((f, i) => (
                      <label key={f} className="flex items-center gap-2 cursor-pointer">
                        <div className="relative flex items-center justify-center">
                          <input type="radio" name="fund_s8" defaultChecked={i === 0} className="peer appearance-none w-6 h-6 border-2 border-gray-300 rounded-full checked:border-[#ea1b23] transition-all" />
                          <div className="absolute w-3 h-3 bg-[#ea1b23] rounded-full scale-0 peer-checked:scale-100 transition-transform" />
                        </div>
                        <span className="font-black text-gray-800">{f}</span>
                        <span className="material-symbols-outlined text-gray-400 text-base" style={{ fontVariationSettings: "'FILL' 0" }}>info</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="p-5 md:px-12 md:py-8 flex justify-end items-center gap-3 bg-white border-t border-gray-100">
        <button className="flex-1 md:flex-none md:px-10 py-4 text-[#ea1b23] font-black text-base rounded-2xl uppercase tracking-wider border-2 border-[#ea1b23] hover:bg-red-50 btn-outline" onClick={onBack}>← Quay lại</button>
        <button className="flex-1 md:flex-none md:px-14 py-4 bg-[#ea1b23] hover:bg-[#c4161d] text-white font-black text-base rounded-2xl uppercase tracking-wider btn-red" onClick={onNext}>Xác nhận</button>
      </footer>
    </>
  );
}
