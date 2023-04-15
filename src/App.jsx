import './default.scss';

import Navbar from './assets/components/Navbar/Navbar';
import { useEffect, useRef, useState } from 'react';

export default function App() {
  const App = useRef(null);
  const [appSize, setAppSize] = useState('');
  useEffect(() => {
    setAppSize(App.current.getBoundingClientRect().width);
    function setSize() {
      setAppSize(App.current.getBoundingClientRect().width);
    }
    window.addEventListener('resize', setSize);
    // return window.removeEventListener('resize', setSize) //---> la page ne se reload jamais grace a vite donc si on met cette ligne de code l'eventlistener ne s'effectue jamais
  }, []);
  return (
    <div className='App' ref={App}>
      <Navbar />
    </div>
  );
}