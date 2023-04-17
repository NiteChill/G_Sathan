import { useState } from 'react';
import Logo from '../Logo/Logo';
import MobileMenu from '../MobileMenu/MobileMenu';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

export default function Navbar({ appSize }) {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <MobileMenu
        menu={menu}
        onClick={() => setMenu(false)}
        onClick2={() => setMenu(!menu)}
      />
      <div
        className={`d-flex-row ai-center jc-space-between pr-8 pl-8 border-bottom-1 user-select-none pos-fixed b-surface`}
        style={{ width: '100vw', height: '5.6rem' }}
      >
        <BurgerMenu menu={menu} onclick={() => setMenu(!menu)} />
        <Logo />
      </div>
    </>
  );
}
