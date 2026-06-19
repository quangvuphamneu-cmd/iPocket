'use client';
import { useEffect, useRef } from 'react';

export function useSheepBubble(sheepId: string, bubbleId: string) {
  const ran = useRef(false);
  useEffect(() => {
    ran.current = false;
    const sheep  = document.getElementById(sheepId);
    const bubble = document.getElementById(bubbleId);
    if (!sheep || !bubble) return;
    sheep.classList.remove('animate-sway', 'animate-breathe', 'animate-pop-in');
    void (sheep as HTMLElement).offsetWidth;
    sheep.classList.add('animate-pop-in');
    bubble.classList.remove('bubble-pop');
    bubble.classList.add('bubble-hidden');
    const onEnd = () => {
      if (ran.current) return;
      ran.current = true;
      sheep.classList.remove('animate-pop-in');
      sheep.classList.add('animate-sway');
      bubble.classList.remove('bubble-hidden');
      bubble.classList.add('bubble-pop');
    };
    sheep.addEventListener('animationend', onEnd, { once: true });
    return () => sheep.removeEventListener('animationend', onEnd);
  }, [sheepId, bubbleId]);
}

export function useSheepOnly(sheepId: string, endClass = 'animate-sway') {
  useEffect(() => {
    const sheep = document.getElementById(sheepId);
    if (!sheep) return;
    sheep.classList.remove('animate-sway', 'animate-breathe', 'animate-pop-in');
    void (sheep as HTMLElement).offsetWidth;
    sheep.classList.add('animate-pop-in');
    const onEnd = () => {
      sheep.classList.remove('animate-pop-in');
      sheep.classList.add(endClass);
    };
    sheep.addEventListener('animationend', onEnd, { once: true });
    return () => sheep.removeEventListener('animationend', onEnd);
  }, [sheepId, endClass]);
}
