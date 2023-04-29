import { useState } from 'react';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

export default function Navbar({
  appSize,
  appRef,
  startingRef,
  tattooProcessusRef,
  portfolioRef,
}) {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <Menu
        appSize={appSize}
        menu={menu}
        setMenu={setMenu}
        onClick={() => setMenu(false)}
        onClick2={() => setMenu(!menu)}
        appRef={appRef}
        startingRef={startingRef}
        tattooProcessusRef={tattooProcessusRef}
        portfolioRef={portfolioRef}
      />
      <div
        className={`d-flex-row ai-center jc-space-between pr-8 pl-8 border-bottom-1 user-select-none pos-fixed b-surface`}
        style={{ width: '100vw', height: '5.6rem', zIndex: '10' }}
        role='navigation'
      >
        <BurgerMenu menu={menu} onclick={() => setMenu(!menu)} />
        <Logo />
      </div>
    </>
  );
}
