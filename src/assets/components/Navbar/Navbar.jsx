import { useState } from 'react';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

import styles from './Navbar.module.scss';

export default function Navbar({
  appInfo,
  startingRef,
  tattooProcessusRef,
  portfolioRef,
  setIsOpen,
}) {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <Menu
        appInfo={appInfo}
        menu={menu}
        setMenu={setMenu}
        onClick={() => setMenu(false)}
        onClick2={() => setMenu(!menu)}
        startingRef={startingRef}
        tattooProcessusRef={tattooProcessusRef}
        portfolioRef={portfolioRef}
        setIsOpen={setIsOpen}
      />
      <div
        className={styles.navbar}
        role='navigation'
      >
        <BurgerMenu menu={menu} onclick={() => setMenu(!menu)} />
        <Logo />
      </div>
    </>
  );
}
