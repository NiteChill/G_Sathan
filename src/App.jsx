import './default.scss';

import Navbar from './assets/components/Navbar/Navbar';
import { useEffect, useRef, useState } from 'react';

import Starting from './assets/components/Starting/Starting';
import HeroHeader from './assets/components/HeroHeader/HeroHeader';
import ContactMe from './assets/components/ContactMe/ContactMe';

export default function App() {
  const appRef = useRef(null);
  const startingRef = useRef(null);
  const tattooProcessusRef = useRef(null);
  const portfolioRef = useRef(null);
  const [appSize, setAppSize] = useState('');
  useEffect(() => {
    setAppSize(appRef.current.getBoundingClientRect().width);
    window.addEventListener('resize', () => setAppSize(appRef.current.getBoundingClientRect().width));
    //  return window.removeEventListener('resize', setSize)   //---> la page ne se reload jamais grace a vite donc si on met cette ligne de code l'eventlistener ne s'effectue jamais
  }, []);
  return (
    <div className='App' ref={appRef}>
      <Navbar
        appSize={appSize}
        appRef={appRef}
        startingRef={startingRef}
        tattooProcessusRef={tattooProcessusRef}
        portfolioRef={portfolioRef}
      />
      <HeroHeader appSize={appSize} />
      <ContactMe appSize={appSize} />
      <Starting appSize={appSize} startingRef={startingRef} />
      <div style={{ height: '1000px'}}></div>
    </div>
  );
}
