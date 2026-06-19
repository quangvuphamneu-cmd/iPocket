'use client';
import { useCallback, useState } from 'react';
import Screen1 from './components/screens/Screen1';
import Screen2 from './components/screens/Screen2';
import Screen3 from './components/screens/Screen3';
import Screen4 from './components/screens/Screen4';
import Screen5 from './components/screens/Screen5';
import Screen6 from './components/screens/Screen6';
import Screen7 from './components/screens/Screen7';
import Screen8 from './components/screens/Screen8';
import Screen9 from './components/screens/Screen9';
import Screen10 from './components/screens/Screen10';
import Screen11 from './components/screens/Screen11';

const TOTAL = 11;

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState<'forward' | 'back'>('forward');
  const [key, setKey] = useState(0);

  const navigate = useCallback((idx: number, direction: 'forward' | 'back') => {
    setDir(direction);
    setCurrent(idx);
    setKey(k => k + 1);
  }, []);

  const goNext = () => { if (current < TOTAL - 1) navigate(current + 1, 'forward'); };
  const goBack = () => { if (current > 0) navigate(current - 1, 'back'); };

  const enterAnim = dir === 'forward' ? 'animate-slide-in' : 'animate-slide-in-back';
  const isDashboard = current === 10;

  const renderScreen = () => {
    switch (current) {
      case 0:  return <Screen1  onNext={goNext} />;
      case 1:  return <Screen2  onNext={goNext} onBack={goBack} />;
      case 2:  return <Screen3  onNext={goNext} onBack={goBack} />;
      case 3:  return <Screen4  onNext={goNext} onBack={goBack} />;
      case 4:  return <Screen5  onNext={goNext} onBack={goBack} />;
      case 5:  return <Screen6  onNext={goNext} onBack={goBack} />;
      case 6:  return <Screen7  onNext={goNext} onBack={goBack} />;
      case 7:  return <Screen8  onNext={goNext} onBack={goBack} />;
      case 8:  return <Screen9  onNext={goNext} onBack={goBack} />;
      case 9:  return <Screen10 onNext={goNext} onBack={goBack} />;
      case 10: return <Screen11 onBack={goBack} />;
      default: return null;
    }
  };

  return (
    <div className="h-screen w-full overflow-hidden relative bg-white">
      {/* Close X */}
      <button
        className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full bg-[#ea1b23] flex items-center justify-center shadow-lg hover:bg-[#c4161d] transition-colors"
        aria-label="Đóng"
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="white" strokeWidth="2.5" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Progress bar (screens 0–9) */}
      {!isDashboard && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex gap-1.5 items-center">
          {Array.from({ length: TOTAL - 1 }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300
                ${i === current ? 'w-6 bg-[#ea1b23]' : i < current ? 'w-1.5 bg-[#ea1b23]/40' : 'w-1.5 bg-gray-200'}`}
            />
          ))}
        </div>
      )}

      {/* Animated screen */}
      <div
        key={key}
        className={`absolute inset-0 flex flex-col ${enterAnim}`}
      >
        {renderScreen()}
      </div>
    </div>
  );
}
