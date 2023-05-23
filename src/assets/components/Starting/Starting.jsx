import { useEffect, useState } from 'react';
import studio from '../../images/studio_image.png';
import styles from './Starting.module.scss';

export default function Starting({ appInfo, startingRef }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleObserver = (entries) => {
      entries.map((entry) => {
        if (
          entry.intersectionRatio >= 0.3 ||
          appInfo.scroll >= startingRef.current.offsetTop
        ) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      });
    };
    const observer = new IntersectionObserver(handleObserver, {
      threshold: [0.3],
    });
    startingRef.current && observer.observe(startingRef.current);
  }, [startingRef, appInfo]);
  return (
    <div ref={startingRef}>
      <div className={`${styles.container} ${visible && styles.visible}`}>
        <div
          className={`${styles.text_container} ${
            appInfo.size < 800
              ? 'pt-32 pr-24 pb-32 pl-24'
              : appInfo.size < 1050
              ? 'pt-64 pr-48 pb-64 pl-48'
              : 'pt-96 pr-64 pb-96 pl-64'
          }`}
        >
          <p
            className={`ff-title ${styles.title} ${visible && styles.visible} ${
              appInfo.size < 800
                ? 'fs-18'
                : appInfo.size < 1050
                ? 'fs-32'
                : 'fs-48'
            }`}
          >
            Mes débuts
          </p>
          <div
            className={`ff-text mt-24 ${
              appInfo.size < 800
                ? 'fs-10'
                : appInfo.size < 1050
                ? 'fs-16'
                : 'fs-20'
            }`}
          >
            <p
              className={`mb-16 ${styles.text_1} ${visible && styles.visible}`}
            >
              J'ai débuté mon activité de tatouage en 2018. C'est instantanément
              que j'ai compris que ce métier était fait pour moi...
            </p>
            <p className={`${styles.text_2} ${visible && styles.visible}`}>
              Dès les premiers traits...
            </p>
          </div>
        </div>
        {appInfo.size >= 450 && (
          <div className={styles.photo_container}>
            <img src={studio} alt='logo' className={styles.image} />
          </div>
        )}
      </div>
    </div>
  );
}
