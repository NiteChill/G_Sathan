import BurgerMenu from "../BurgerMenu/BurgerMenu";

export default function MobileMenu({ menu = false, onClick, onClick2 }) {
  return (
    <>
      <div
        className='pos-fixed'
        style={{
          zIndex: '30',
          width: '100vw',
          height: '100vh',
          left: menu === false ? '-100vw' : '0',
          background: '#000000',
          opacity: menu === false ? '0' : '.5',
        }}
        onClick={onClick}
      ></div>
      <div
        className='b-surface-1 pos-fixed'
        style={{
          zIndex: '30',
          left: menu === false ? '-30rem' : '0',
          width: '30rem',
          height: '100vh',
          transition: 'all .2s',
        }}
      >
        <div className='p-8 width-full border-bottom-1' style={{ height: '5.6rem' }}>
          <BurgerMenu menu={menu} onclick={onClick2} />
        </div>
      </div>
    </>
  );
}