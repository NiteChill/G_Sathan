import './default.scss';

import Navbar from './assets/components/Navbar/Navbar';
import { useEffect, useRef, useState } from 'react';

import picture from './assets/images/gsathan_picture.webp';

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
      <div
        className={`${
          appSize <= '650' ? 'd-flex-column' : 'd-flex-row-reverse'
        } width-full border-bottom-1`}
        style={{ paddingTop: '5.3rem' }}
      >
        <img
          src={picture}
          alt='picture'
          style={{ width: appSize > '650' && '35%' }}
          className={`${appSize <= '650' ? 'border-bottom-1' : ''}`}
        />
        <div
          className={`d-flex-row ai-center jc-center c-primary b-surface pt-24 pb-24 ${
            appSize < '450'
              ? 'fs-40'
              : appSize < '650'
              ? 'fs-56'
              : appSize < '850'
              ? 'fs-80 border-right'
              : appSize < '1150'
              ? 'fs-104 border-right'
              : appSize < '1400'
              ? 'fs-144 border-right'
              : appSize < '1650'
              ? 'fs-176 border-right'
              : 'fs-224 border-right'
          }`}
          style={{ flex: '1' }}
        >
          <p className='ff-title'>G.Sathan</p>
        </div>
      </div>
    </div>
  );
}
