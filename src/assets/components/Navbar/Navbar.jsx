import { useState } from 'react';
import Logo from '../Logo/Logo';
import MobileMenu from '../MobileMenu/MobileMenu';

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <>
        <MobileMenu open={menu} onClick={() => setMenu(false)} />
      <div
        className='d-flex-row ai-center jc-space-between pl-5 border-bottom-1 user-select-none pos-fixed'
        style={{ width: '100vw' }}
      >
        <div
          className='d-flex-row ai-center jc-center p-8 bora-full hover user-select-none cursor-pointer'
          style={{ height: '4rem' }}
        >
          <span
            className='material-symbols-outlined'
            onClick={() => setMenu(!menu)}
          >
            {menu ? 'menu_open' : 'menu'}
          </span>
        </div>
        <Logo size='small' />
      </div>
    </>
  );
}
