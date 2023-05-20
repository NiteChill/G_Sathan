import './default.scss';

import Navbar from './assets/components/Navbar/Navbar';
import { useEffect, useRef, useState } from 'react';

import Starting from './assets/components/Starting/Starting';
import HeroHeader from './assets/components/HeroHeader/HeroHeader';
import ContactMe from './assets/components/ContactMe/ContactMe';
import TattooProcessus from './assets/components/TattooProcessus/TattooProcessus';
import Portfolio from './assets/components/Portfolio/Portfolio';
import Footer from './assets/components/Footer/Footer';
import FollowCursor from './assets/components/FollowCursor/FollowCursor';

export default function App() {
  const appRef = useRef(null);
  const startingRef = useRef(null);
  const tattooProcessusRef = useRef(null);
  const portfolioRef = useRef(null);

  const [appInfo, setAppInfo] = useState({
    size: 0,
    scroll: 0,
    ref: appRef && appRef,
  });

  useEffect(() => {
    setAppInfo({
      ...appInfo,
      size: appRef.current.getBoundingClientRect().width,
      ref: appRef && appRef,
    });
    window.addEventListener('resize', () =>
      setAppInfo({
        ...appInfo,
        size: appRef.current.getBoundingClientRect().width,
      })
    );
  }, [appRef]);
  return (
    <div
      className='App'
      ref={appRef}
      onScroll={(e) => {
        setAppInfo({ ...appInfo, scroll: e.target.scrollTop });
      }}
    >
      <FollowCursor />
      <Navbar
        appInfo={appInfo}
        startingRef={startingRef}
        tattooProcessusRef={tattooProcessusRef}
        portfolioRef={portfolioRef}
      />
      <HeroHeader appInfo={appInfo} />
      <ContactMe appInfo={appInfo} />
      <Starting appInfo={appInfo} startingRef={startingRef} />
      <TattooProcessus
        tattooProcessusRef={tattooProcessusRef}
        appInfo={appInfo}
      />
      <Portfolio portfolioRef={portfolioRef} appInfo={appInfo} />
      <Footer appInfo={appInfo} />
    </div>
  );
}
