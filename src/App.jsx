import './default.scss';

import Navbar from './assets/components/Navbar/Navbar';
import { useEffect, useRef, useState } from 'react';

import Starting from './assets/components/Starting/Starting';
import HeroHeader from './assets/components/HeroHeader/HeroHeader';
import ContactMe from './assets/components/ContactMe/ContactMe';
import TattooProcessus from './assets/components/TattooProcessus/TattooProcessus';
import Portfolio from './assets/components/Portfolio/Portfolio';
import Footer from './assets/components/Footer/Footer';

export default function App() {
  const appRef = useRef(null);
  const startingRef = useRef(null);
  const tattooProcessusRef = useRef(null);
  const portfolioRef = useRef(null);
  const [appSize, setAppSize] = useState('');

  const [visibleContact, setVisibleContact] = useState(false);
  const [visibleStarting, setVisibleStarting] = useState(false);
  const [visibleTattooProcessus, setVisibleTattooProcessus] = useState(false);
  const [visiblePortfolio, setVisiblePortfolio] = useState(false);

  useEffect(() => {
    setAppSize(appRef.current.getBoundingClientRect().width);
    window.addEventListener('resize', () =>
      setAppSize(appRef.current.getBoundingClientRect().width)
    );
    //  return window.removeEventListener('resize', setSize)   //---> la page ne se reload jamais grace a vite donc si on met cette ligne de code l'eventlistener ne s'effectue jamais
  }, []);
  return (
    <div className='App' ref={appRef}>
      {/* <FollowCursor /> */}
      <Navbar
        appSize={appSize}
        appRef={appRef}
        startingRef={startingRef}
        tattooProcessusRef={tattooProcessusRef}
        portfolioRef={portfolioRef}
        visibleContact={visibleContact}
        visibleStarting={visibleStarting}
        visibleTattooProcessus={visibleTattooProcessus}
        visiblePortfolio={visiblePortfolio}
      />
      <HeroHeader appSize={appSize} />
      <ContactMe
        appSize={appSize}
        visible={visibleContact}
        setVisible={setVisibleContact}
      />
      <Starting
        appSize={appSize}
        startingRef={startingRef}
        visible={visibleStarting}
        setVisible={setVisibleStarting}
      />
      <TattooProcessus
        tattooProcessusRef={tattooProcessusRef}
        appSize={appSize}
        visible={visibleTattooProcessus}
        setVisible={setVisibleTattooProcessus}
      />
      <Portfolio
        portfolioRef={portfolioRef}
        appSize={appSize}
        visible={visiblePortfolio}
        setVisible={setVisiblePortfolio}
      />
      <Footer appSize={appSize} />
    </div>
  );
}
