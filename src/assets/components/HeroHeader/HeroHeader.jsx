import picture from '../../images/gsathan_picture.webp';
import logo from '../../images/logo_gsathan_big.svg';
import { useRef, useEffect } from 'react';

export default function HeroHeader({ appInfo }) {
  const heroHeaderRef = useRef(null);
  useEffect(() => {
    if (
      appInfo.scroll +
        appInfo.ref.current.getBoundingClientRect().height -
        heroHeaderRef.current.getBoundingClientRect().height / 4 >=
      heroHeaderRef.current.offsetTop
    ) {
      heroHeaderRef.current.style.opacity = '1';
    } else {
      heroHeaderRef.current.style.opacity = '0';
    }
  }, [heroHeaderRef, appInfo]);
  return (
    <div
      className={`${
        appInfo.size <= '550' ? 'd-flex-column' : 'd-flex-row-reverse'
      } width-full border-bottom-1`}
      style={{ marginTop: '5.6rem', opacity: 0, transition: 'opacity 1s' }}
      ref={heroHeaderRef}
    >
      <img
        src={picture}
        alt='picture'
        style={{
          width: appInfo.size > 550 && '35%',
          objectFit: 'cover',
          minWidth: '100px',
        }}
        className={`${appInfo.size <= 550 ? 'border-bottom-1' : ''}`}
      />
      <div
        className={`d-flex-row ai-center jc-center c-primary b-surface pt-24 pb-24 ${
          appInfo.size > 550 && 'border-right'
        }`}
        style={{ flex: '1' }}
      >
        <div
          className='d-flex-row ai-center jc-center'
          style={{ width: '100%' }}
        >
          {/* <img src={logo} alt='logo gsathan' style={{ width: '23%' }} /> */}
          <h1
            className={`d-flex-row ai-center jc-center ${
              appInfo.size < 350
                ? 'fs-24'
                : appInfo.size < 450
                ? 'fs-32'
                : appInfo.size < 550
                ? 'fs-40'
                : appInfo.size < 800
                ? 'fs-32'
                : appInfo.size < 1000
                ? 'fs-48'
                : appInfo.size < 1350
                ? 'fs-56'
                : 'fs-80'
            }`}
          >
            Tattoos
            <img
              src={logo}
              alt='logo gsathan'
              style={{ width: '23%', marginLeft: '3%' }}
            />
            Artworks
          </h1>
        </div>
      </div>
    </div>
  );
}
