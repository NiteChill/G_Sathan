export default function BurgerMenu({menu, onclick}) {
  return (
    <div
      className='d-flex-row ai-center jc-center p-8 bora-full hover user-select-none cursor-pointer'
      style={{ height: '4rem', width: '4rem' }}
      onClick={onclick}
      data-title='Menu Principal'
    >
      <span className='material-symbols-outlined cursor-pointer user-select-none c-on-surface'>
        {menu ? 'menu_open' : 'menu'}
      </span>
    </div>
  );
}