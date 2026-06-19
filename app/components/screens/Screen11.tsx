'use client';
import { useEffect } from 'react';

export default function Screen11({ onBack }: { onBack: () => void }) {
  useEffect(() => {
    const sheep = document.getElementById('sheep-11')!;
    sheep.style.animation = 'none';
    void sheep.offsetWidth;
    sheep.style.animation = 'sheepPopIn 0.9s cubic-bezier(0.34,1.56,0.64,1) forwards';
    sheep.addEventListener('animationend', () => {
      sheep.style.animation = 'comic-bounce 4s ease-in-out infinite';
    }, { once: true });
  }, []);

  return (
    <div className="flex h-full w-full overflow-hidden">
      <aside className="hidden md:flex h-full w-56 border-r border-slate-100 bg-white flex-col py-6 px-3 flex-shrink-0">
        <div className="px-3 mb-8 flex items-center gap-2">
          <div className="w-10 h-10 bg-[#ea1b23] rounded-2xl flex items-center justify-center shadow-lg shadow-red-200">
            <span className="material-symbols-outlined text-white text-2xl">pets</span>
          </div>
          <div>
            <h1 className="font-bold text-base text-slate-900 leading-tight">Cừu Cần Cù</h1>
            <p className="text-[10px] text-slate-400 font-medium">Đầu tư tích lũy</p>
          </div>
        </div>
        <nav className="flex-1 space-y-1">
          <a className="bg-[#ea1b23] text-white font-bold rounded-xl px-4 py-2.5 flex items-center gap-3 shadow-md shadow-red-100" href="#">
            <span className="material-symbols-outlined text-[20px]">home</span><span className="text-sm">Trang chủ</span>
          </a>
          {[['account_balance_wallet','Danh mục'],['emoji_events','Nhiệm vụ'],['settings','Cài đặt']].map(([icon,label]) => (
            <a key={label} className="text-slate-500 hover:bg-slate-50 hover:text-[#ea1b23] font-semibold rounded-xl px-4 py-2.5 flex items-center gap-3 transition-all" href="#">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings:"'FILL' 0" }}>{icon}</span><span className="text-sm">{label}</span>
            </a>
          ))}
        </nav>
        <div className="mt-auto px-1">
          <button className="w-full py-3 bg-[#ea1b23] text-white font-black rounded-xl text-xs shadow-lg shadow-red-100 hover:bg-red-600 transition-all uppercase tracking-widest">BẮT ĐẦU THỬ THÁCH</button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col h-full min-w-0">
        <header className="flex justify-between items-center px-6 w-full h-16 bg-white border-b border-slate-50 flex-shrink-0">
          <h2 className="text-xl font-black text-slate-800">Tổng quan</h2>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 rounded-xl border border-slate-100">
              <span className="material-symbols-outlined text-[#ea1b23] text-[18px]">monetization_on</span>
              <span className="font-bold text-slate-700 text-sm">2,458 iXu</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 rounded-xl border border-slate-100">
              <span className="material-symbols-outlined text-[#ea1b23] text-[18px]">local_fire_department</span>
              <span className="font-bold text-slate-700 text-sm">18 Ngày</span>
            </div>
            <button className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-[#ea1b23] bg-slate-50 border border-slate-100">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings:"'FILL' 0" }}>notifications</span>
            </button>
          </div>
        </header>

        <div className="flex-1 p-5 grid grid-cols-12 gap-5 overflow-y-auto">
          <section className="col-span-12 lg:col-span-7 bg-slate-50/40 rounded-3xl relative flex flex-col items-center justify-center overflow-hidden" style={{ minHeight: 400 }}>
            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20">
              <div className="bg-white px-6 py-2 rounded-2xl shadow-md border border-slate-50 flex items-center gap-1">
                <h3 className="text-xl font-black text-slate-800">Cừu của Vũ</h3>
                <span className="material-symbols-outlined text-slate-400 text-xl cursor-pointer hover:text-[#ea1b23] transition-colors" style={{ fontVariationSettings:"'FILL' 0" }}>edit</span>
              </div>
            </div>
            <div className="absolute left-4 top-20 bg-white p-3 rounded-2xl shadow-lg border border-slate-50 z-20">
              <div className="flex items-center gap-1 mb-1"><span className="material-symbols-outlined text-green-400 text-sm">trending_up</span><span className="text-[9px] font-black text-slate-400 uppercase">Tổng vốn</span></div>
              <div className="text-sm font-bold text-slate-800">200.000 VNĐ</div>
            </div>
            <div className="absolute right-4 top-20 bg-white p-3 rounded-2xl shadow-lg border border-slate-50 z-20 max-w-[160px]">
              <p className="text-xs font-bold text-slate-800 leading-snug">"Cho em bé ăn đi bố Vũ ơi! Ngày kia có tiền TCB về mà đúng không?"</p>
            </div>
            <div className="absolute right-4 top-48 bg-white p-3 rounded-2xl shadow-lg border border-slate-50 z-20">
              <div className="flex items-center gap-1 mb-1"><span className="material-symbols-outlined text-green-400 text-sm">payments</span><span className="text-[9px] font-black text-slate-400 uppercase">Lợi nhuận</span></div>
              <div className="text-base font-black text-green-400">+0.1%</div>
            </div>
            <div className="relative z-10">
              <img id="sheep-11" src="/sheep/Cừu sơ sinh.png" alt="Cừu Non" className="w-64 h-64 object-contain drop-shadow-xl" />
            </div>
            <div className="absolute bottom-5 w-full max-w-xs px-4 z-20">
              <div className="bg-white p-4 rounded-2xl shadow-md border border-slate-50">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-tight">Tiến độ cấp 2</span>
                  <span className="text-xs font-bold text-[#ea1b23]">200 / 1000 EXP</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#ea1b23] rounded-full transition-all duration-1000" style={{ width:'20%', boxShadow:'0 0 8px rgba(234,27,35,0.4)' }} />
                </div>
              </div>
            </div>
          </section>

          <aside className="col-span-12 lg:col-span-5 flex flex-col gap-4">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 flex-1">
              <h4 className="text-base font-black text-slate-800 mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ea1b23]">auto_graph</span>Trưởng thành
              </h4>
              <div className="space-y-4 relative ml-2 border-l-2 border-slate-100">
                {[
                  { range:'Cấp 1-3', name:'Cừu non', active:true, opacity:'' },
                  { range:'Cấp 4-10', name:'Cừu con', active:false, opacity:'opacity-60' },
                  { range:'Cấp 11-18', name:'Cừu thanh niên', active:false, opacity:'opacity-50' },
                  { range:'Cấp 19-30', name:'Cừu trưởng thành', active:false, opacity:'opacity-40' },
                  { range:'Cấp 31-50', name:'Cừu lão làng', active:false, opacity:'opacity-30' },
                ].map(s => (
                  <div key={s.name} className={`relative pl-6 ${s.opacity}`}>
                    <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 border-white shadow-sm ${s.active ? 'bg-[#ea1b23] shadow-red-200' : 'bg-slate-200'}`} style={s.active ? { animation:'pulse 2s infinite' } : {}} />
                    <p className={`text-[9px] font-black uppercase ${s.active ? 'text-[#ea1b23]' : 'text-slate-400'}`}>{s.range}</p>
                    <h5 className={`text-sm ${s.active ? 'font-black text-slate-800' : 'font-bold text-slate-600'}`}>{s.name}</h5>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#ea1b23] rounded-3xl p-6 flex items-center justify-between shadow-xl shadow-red-100 overflow-hidden relative">
              <div className="relative z-10">
                <p className="text-[9px] text-white/80 font-black uppercase tracking-widest mb-1">Xếp hạng hiện tại</p>
                <h3 className="text-3xl font-black text-white">CẤP 1</h3>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center relative z-10">
                <span className="material-symbols-outlined text-3xl text-white">workspace_premium</span>
              </div>
              <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-white/10 rounded-full blur-2xl" />
            </div>
          </aside>

          <section className="col-span-12">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6">
              <div className="flex justify-between items-center mb-5">
                <div>
                  <h4 className="text-base font-black text-slate-800">Phần thưởng sắp tới</h4>
                  <p className="text-xs text-slate-400 font-medium">Thăng cấp ngay để mở khóa ưu đãi độc quyền!</p>
                </div>
                <button className="px-4 py-1.5 bg-slate-50 text-[#ea1b23] font-bold rounded-xl hover:bg-red-50 transition-colors border border-slate-100 text-xs">Kế hoạch nuôi Cừu</button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon:'confirmation_number', title:'10 vé iLucky', sub:'Tại cấp 5', locked:false },
                  { icon:'monetization_on',     title:'Hoàn 10 iXu', sub:'Tại cấp 10', locked:false },
                  { icon:'checkroom',           title:'Trang phục đặc biệt', sub:'Tại cấp 20', locked:false },
                  { icon:'lock',                title:'Quà bí mật', sub:'Tại cấp 15', locked:true },
                ].map(r => (
                  <div key={r.title} className={`bg-slate-50/50 p-4 rounded-2xl border border-slate-100 flex items-center gap-4 ${r.locked ? 'opacity-40' : ''}`}>
                    <div className={`w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-slate-100 flex-shrink-0 ${r.locked ? 'text-slate-300' : 'text-[#ea1b23]'}`}>
                      <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: r.locked ? "'FILL' 0" : "'FILL' 1" }}>{r.icon}</span>
                    </div>
                    <div>
                      <h6 className="font-black text-slate-700 text-sm">{r.title}</h6>
                      <p className="text-[10px] text-slate-400 font-bold uppercase">{r.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="h-9 bg-white border-t border-slate-50 flex items-center overflow-hidden flex-shrink-0">
          <div className="whitespace-nowrap flex items-center gap-12 text-[10px] font-bold uppercase tracking-widest text-slate-400" style={{ animation:'ticker 40s linear infinite' }}>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block" /> VN-INDEX: 1,254.32 (+1.25%)</span>
            <span>iXu Bonus: Nhân đôi EXP sau 15h</span>
            <span>Sự kiện: Cừu Săn Deal - Mở khóa skins giới hạn</span>
            <span>Top tuần: Nguyễn Văn A (Lv 45)</span>
            <span>Tỷ giá: 1 iXu = 1,000 VND</span>
          </div>
        </div>
      </main>
    </div>
  );
}
