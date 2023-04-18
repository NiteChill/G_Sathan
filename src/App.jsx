import './default.scss';

import Navbar from './assets/components/Navbar/Navbar';
import { useEffect, useRef, useState } from 'react';

import Starting from './assets/components/Starting/Starting';
import HeroHeader from './assets/components/HeroHeader/HeroHeader';

export default function App() {
  const appRef = useRef(null);
  const [appSize, setAppSize] = useState('');
  useEffect(() => {
    setAppSize(appRef.current.getBoundingClientRect().width);
    function setSize() {
      setAppSize(appRef.current.getBoundingClientRect().width);
    }
    window.addEventListener('resize', setSize);
    //  return window.removeEventListener('resize', setSize)   //---> la page ne se reload jamais grace a vite donc si on met cette ligne de code l'eventlistener ne s'effectue jamais
  }, []);
  return (
    <div className='App' ref={appRef}>
      <Navbar appSize={appSize} />
      <HeroHeader appSize={appSize} />
      <Starting appSize={appSize} />
    </div>
  );
}
