import { useEffect, useState } from 'react';

export function useWHeight() {
  const [h, setH] = useState(0);

  useEffect(() => {
    const resize = () => {
      setH(window.innerHeight);
    };
    resize();

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return h;
}