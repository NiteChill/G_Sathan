import picture from '../../images/gsathan_picture.webp';
import logo from '../../images/logo_gsathan_big.svg';
import { useRef, useEffect } from 'react';

export default function HeroHeader({ appSize }) {
  const heroHeaderRef = useRef(null);
  const observer = new IntersectionObserver((entries) => {
    entries.map(
      (entry) => {
        entry.isIntersecting
          ? ((heroHeaderRef.current.style.opacity = '1'),
            observer.unobserve(entry.target))
          : (heroHeaderRef.current.style.opacity = '0');
      },
      { threshold: 0.3 }
    );
  });
  useEffect(() => observer.observe(heroHeaderRef.current), []);
  return (
    <div
      className={`${
        appSize <= '550' ? 'd-flex-column' : 'd-flex-row-reverse'
      } width-full border-bottom-1`}
      style={{ marginTop: '5.6rem', opacity: 0, transition: 'opacity 1s' }}
      ref={heroHeaderRef}
    >
      <img
        src={picture}
        alt='picture'
        style={{ width: appSize > '550' && '35%', objectFit: 'cover' }}
        className={`${appSize <= '550' ? 'border-bottom-1' : ''}`}
      />
      <div
        className={`d-flex-row ai-center jc-center c-primary b-surface pt-24 pb-24 ${
          appSize > 550 && 'border-right'
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
              appSize < 350
                ? 'fs-24'
                : appSize < 450
                ? 'fs-32'
                : appSize < 550
                ? 'fs-40'
                : appSize < 800
                ? 'fs-32'
                : appSize < 1000
                ? 'fs-48'
                : appSize < 1350
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
