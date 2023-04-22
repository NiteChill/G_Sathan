import picture from '../../images/gsathan_picture.webp';
import banner from '../../images/banniere.svg';
import { useRef, useEffect } from 'react';

export default function HeroHeader({ appSize }) {
  const heroHeaderRef = useRef(null);
  const observer = new IntersectionObserver((entries) => {
    entries[0].intersectionRatio >= 0
      ? (heroHeaderRef.current.style.opacity = '1')
      : (heroHeaderRef.current.style.opacity = '0');
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
        style={{ width: appSize > '550' && '35%' }}
        className={`${appSize <= '550' ? 'border-bottom-1' : ''}`}
      />
      <div
        className={`d-flex-row ai-center jc-center c-primary b-surface pt-24 pb-24 ${
          // appSize < '450'
          //   ? 'fs-40'
          //   : appSize < 650
          //   ? 'fs-56'
          //   : appSize < 850
          //   ? 'fs-80 border-right'
          //   : appSize < 1150
          //   ? 'fs-104 border-right'
          //   : appSize < 1400
          //   ? 'fs-144 border-right'
          //   : appSize < 1650
          //   ? 'fs-176 border-right'
          //   : 'fs-224 border-right'
          appSize > 550 && 'border-right'
        }`}
        style={{ flex: '1' }}
      >
        {/* <p className='ff-title'>G.Sathan</p> */}
        <img
          src={banner}
          alt='baniere'
          style={{ width: appSize > 550 ? '80%' : '60%' }}
        />
      </div>
    </div>
  );
}
