import picture from '../../images/gsathan_picture.webp';
import logo from '../../images/logo_gsathan_big.svg';

import styles from './HeroHeader.module.scss';

export default function HeroHeader({ appInfo }) {
  return (
    <div className={`${styles.container}`}>
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
