import BurgerMenu from '../BurgerMenu/BurgerMenu';
import ButtonMenu from '../ButtonMenu/ButtonMenu';
import Divider from '../Divider/Divider';

export default function Menu({ menu = false, setMenu, onClick, onClick2 }) {
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
        className='b-surface-1 pos-fixed d-flex-column'
        style={{
          zIndex: '30',
          left: menu === false ? '-30rem' : '0',
          width: '30rem',
          height: '100vh',
          transition: 'all .2s',
        }}
      >
        <div
          className='p-8 width-full border-bottom-1 d-flex-row ai-center mb-12'
          style={{ height: '5.6rem' }}
        >
          <BurgerMenu menu={menu} onclick={onClick2} />
          <p className='ff-title fs-24 ml-24 c-on-surface'>G.Sathan</p>
        </div>
        <div className='d-flex-olumn w-full pr-8'>
          <ButtonMenu
            icon='library_books'
            name='Mes débuts'
            setMenu={setMenu}
            onClick={() => {}}
          />
          <ButtonMenu
            icon='conversion_path'
            name='Se faire tatouer'
            setMenu={setMenu}
            onClick={() => {}}
          />
          <ButtonMenu
            icon='photo_camera'
            name='Portfolio'
            setMenu={setMenu}
            onClick={() => {}}
          />
        </div>
        <Divider />
        <div className='d-flex-olumn w-full pr-8'>
          <ButtonMenu
            icon='library_books'
            name='Formulaire de contact'
            setMenu={setMenu}
            onClick={() => {}}
          />
          <ButtonMenu
            icon='mail'
            name='Mail'
            setMenu={setMenu}
            onClickType='url'
            onClick={() => {}}
          />
          <ButtonMenu
            icon='call'
            name='Telephone'
            setMenu={setMenu}
            onClickType='url'
            onClick={() => {}}
          />
          <ButtonMenu
            iconType='svg'
            icon='M11.0048 5.6094C8.02354 5.6094 5.61885 8.01409 5.61885 10.9953C5.61885 13.9766 8.02354 16.3813 11.0048 16.3813C13.986 16.3813 16.3907 13.9766 16.3907 10.9953C16.3907 8.01409 13.986 5.6094 11.0048 5.6094ZM11.0048 14.4969C9.07822 14.4969 7.50322 12.9266 7.50322 10.9953C7.50322 9.06409 9.07354 7.49377 11.0048 7.49377C12.936 7.49377 14.5063 9.06409 14.5063 10.9953C14.5063 12.9266 12.9313 14.4969 11.0048 14.4969ZM17.8673 5.38909C17.8673 6.08752 17.3048 6.64534 16.611 6.64534C15.9126 6.64534 15.3548 6.08284 15.3548 5.38909C15.3548 4.69534 15.9173 4.13284 16.611 4.13284C17.3048 4.13284 17.8673 4.69534 17.8673 5.38909ZM21.4345 6.66409C21.3548 4.98127 20.9704 3.49065 19.7376 2.26252C18.5095 1.0344 17.0188 0.650024 15.336 0.565649C13.6017 0.467212 8.40322 0.467212 6.66885 0.565649C4.99072 0.645337 3.5001 1.02971 2.26729 2.25784C1.03447 3.48596 0.654785 4.97659 0.57041 6.6594C0.471973 8.39377 0.471973 13.5922 0.57041 15.3266C0.650098 17.0094 1.03447 18.5 2.26729 19.7281C3.5001 20.9563 4.98604 21.3406 6.66885 21.425C8.40322 21.5235 13.6017 21.5235 15.336 21.425C17.0188 21.3453 18.5095 20.961 19.7376 19.7281C20.9657 18.5 21.3501 17.0094 21.4345 15.3266C21.5329 13.5922 21.5329 8.39846 21.4345 6.66409ZM19.1938 17.1875C18.8282 18.1063 18.1204 18.8141 17.197 19.1844C15.8142 19.7328 12.5329 19.6063 11.0048 19.6063C9.47666 19.6063 6.19072 19.7281 4.8126 19.1844C3.89385 18.8188 3.18604 18.111 2.81572 17.1875C2.26729 15.8047 2.39385 12.5235 2.39385 10.9953C2.39385 9.46721 2.27197 6.18127 2.81572 4.80315C3.18135 3.8844 3.88916 3.17659 4.8126 2.80627C6.19541 2.25784 9.47666 2.3844 11.0048 2.3844C12.5329 2.3844 15.8188 2.26252 17.197 2.80627C18.1157 3.1719 18.8235 3.87971 19.1938 4.80315C19.7423 6.18596 19.6157 9.46721 19.6157 10.9953C19.6157 12.5235 19.7423 15.8094 19.1938 17.1875Z'
            name='Instagram'
            setMenu={setMenu}
            onClickType='url'
            onClick={() => {}}
          />
        </div>
        <Divider />
        <div
          className='d-flex-column ai-center jc-end width-full pb-8'
          style={{ flex: '1' }}
        >
          <div className='d-flex-row ai-center jc-center w-full ff-title c-on-surface-variant'>
            <p>G.Sathan</p>
            <div
              className='b-on-surface-variant bora-full mr-8 ml-8'
              style={{ width: '.5rem', height: '.5rem' }}
            ></div>
            <p>Tout droits réservé</p>
          </div>
        </div>
      </div>
    </>
  );
}
