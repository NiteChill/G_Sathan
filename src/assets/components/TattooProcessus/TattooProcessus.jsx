import { useState, useEffect } from 'react';
import ListText from '../ListText/ListText';

import styles from './TattooProcessus.module.scss';

export default function TattooProcessus({ tattooProcessusRef, appInfo }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleObserver = (entries) => {
      entries.map((entry) => {
        if (
          entry.intersectionRatio >= 0.5 ||
          appInfo.scroll >= tattooProcessusRef.current.offsetTop
        ) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      });
    };
    const observer = new IntersectionObserver(handleObserver, {
      threshold: [0.5],
    });
    tattooProcessusRef.current && observer.observe(tattooProcessusRef.current);
  }, [tattooProcessusRef, appInfo]);
  return (
    <div ref={tattooProcessusRef}>
      <div className={`${styles.container}`}>
        <div
          className={styles.box_container}
          style={{
            height:
              appInfo.size < 550
                ? '4rem'
                : appInfo.size < 800
                ? '6rem'
                : appInfo.size < 1050
                ? '8rem'
                : '10rem',
          }}
        >
          <div className={styles.side_box}></div>
          <div className={styles.middle_box}></div>
          <div className={styles.side_box}></div>
        </div>
        <div className={styles.main_container}>
          <div className={styles.side_box}></div>
          <div
            className={`${
              appInfo.size < 800
                ? 'pt-32 pr-24 pb-32 pl-24'
                : appInfo.size < 1050
                ? 'pt-64 pr-48 pb-64 pl-48'
                : 'pt-96 pr-64 pb-96 pl-64'
            } ${styles.content}`}
          >
            <p
              className={`ff-title mb-24 ${styles.title} ${
                visible && styles.visible
              } ${visible && styles.visible} ${
                appInfo.size < 800
                  ? 'fs-18'
                  : appInfo.size < 1050
                  ? 'fs-32'
                  : 'fs-48'
              }`}
            >
              Processus de tatouage
            </p>
            <div
              className='d-flex-column'
              style={{
                gap:
                  appInfo.size < 800
                    ? '.8rem'
                    : appInfo.size < 1050
                    ? '1.6rem'
                    : '3rem',
              }}
            >
              <ListText
                appInfo={appInfo}
                text={
                  <div
                    className={`${styles.list_1} ${visible && styles.visible}`}
                  >
                    Prenez contact par{' '}
                    <a
                      href='mailto:g.sathantattoo@gmail.com'
                      target='_blank'
                      className='c-on-surface'
                    >
                      mail
                    </a>{' '}
                    , via le{' '}
                    <span
                      style={{ textDecoration: 'underline', cursor: 'pointer' }}
                    >
                      formulaire
                    </span>{' '}
                    ou avec{' '}
                    <a
                      href='https://www.instagram.com/gerard_sathan/'
                      target='_blank'
                      className='c-on-surface'
                    >
                      Instagram
                    </a>
                  </div>
                }
                delay='0.3s'
              />
              <ListText
                appInfo={appInfo}
                text={
                  <div
                    className={`${styles.list_2} ${visible && styles.visible}`}
                  >
                    Venez vous faire tatouer dans mon salon ou dans d'autres qui
                    m'accueillent.{' '}
                    <a
                      href=''
                      target='_blank'
                      className='c-on-surface'
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      Agenda des destinations
                    </a>
                  </div>
                }
                delay='0.6s'
              />
              <ListText
                appInfo={appInfo}
                text={
                  <div
                    className={`${styles.list_3} ${visible && styles.visible}`}
                  >
                    Suivez les conseils qui vous seront donnés afin que le
                    tatouage cicatrise correctement
                  </div>
                }
                delay='0.9s'
              />
            </div>
          </div>
          <div className={styles.side_box}></div>
        </div>
      </div>
    </div>
  );
}
