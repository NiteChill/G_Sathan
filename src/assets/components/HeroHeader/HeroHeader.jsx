import picture from '../../images/gsathan_picture.webp';
import logo from '../../images/logo_gsathan_big.svg';
import { useRef, useEffect, useState } from 'react';

import styles from './HeroHeader.module.scss';

export default function HeroHeader({ appInfo }) {
  const heroHeaderRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (
      appInfo.scroll +
        appInfo.ref.current.getBoundingClientRect().height -
        heroHeaderRef.current.getBoundingClientRect().height / 4 >=
      heroHeaderRef.current.offsetTop
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [heroHeaderRef, appInfo]);
  return (
    <div
      className={`${isVisible && styles.visible} ${styles.container}`}
      ref={heroHeaderRef}
    >
      <img src={picture} alt='picture' className={styles.image} />
      <div className={styles.logo_container}>
        <div className={styles.logo}>
          <h1
            className={`${styles.text} ${
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
