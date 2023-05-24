import { useEffect, useState, useRef } from 'react';

import { photos } from '../../../datas/photos';

import styles from './Portfolio.module.scss';

export default function Portfolio({ portfolioRef, appInfo }) {
  const [visible, setVisible] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);

  const sliderRef = useRef(null);
  const photosRef = useRef([]);

  useEffect(() => {
    const handleObserver = (entries) => {
      entries.map((entry) => {
        if (
          entry.intersectionRatio >= 0.3 ||
          appInfo.scroll >= portfolioRef.current.offsetTop
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
    portfolioRef.current && observer.observe(portfolioRef.current);
  }, [portfolioRef, appInfo]);

  useEffect(() => {
    let leftAdd = 56;
    appInfo.size < 800
      ? (leftAdd = 56)
      : appInfo.size < 1050
      ? (leftAdd = 88)
      : (leftAdd = 104);
    sliderRef.current.scrollTo({
      top: 0,
      left:
        photosRef.current[activePhoto].offsetLeft +
        photosRef.current[activePhoto].clientWidth / 2 -
        sliderRef.current.clientWidth / 2 -
        leftAdd,
      behavior: 'smooth',
    });
  }, [activePhoto, appInfo]);
  return (
    <div ref={portfolioRef}>
      <div className={`${styles.container} ${visible && styles.visible}`}>
        <div
          className={`portfolio ${styles.title_container} ${
            appInfo.size < 800
              ? 'pt-32 pr-24 pb-32 pl-24'
              : appInfo.size < 1050
              ? 'pt-64 pr-48 pb-64 pl-48'
              : 'pt-96 pr-64 pb-96 pl-64'
          }`}
        >
          <p
            className={`ff-title mb-24 ${styles.title} ${
              visible && styles.visible
            } ${
              appInfo.size < 800
                ? 'fs-18'
                : appInfo.size < 1050
                ? 'fs-32'
                : 'fs-48'
            }`}
          >
            Portfolio
          </p>
          <p
            className={`ff-text ${styles.text} ${visible && styles.visible} ${
              appInfo.size < 800
                ? 'fs-10'
                : appInfo.size < 1050
                ? 'fs-16'
                : 'fs-20'
            }`}
          >
            Voici un aperçu de mon travail sur quelques clients qui ont accepté
            de se faire photographier
          </p>
        </div>
        <div
          className={styles.image_slider_top}
          style={{
            height:
              appInfo.size < 400
                ? '20rem'
                : appInfo.size < 500
                ? '24rem'
                : appInfo.size < 650
                ? '30rem'
                : appInfo.size < 800
                ? '40rem'
                : appInfo.size < 650
                ? '50rem'
                : '60rem',
          }}
        >
          <div
            className={`${styles.left_button} ${
              activePhoto !== 0 && styles.hover
            }`}
            style={{
              width:
                appInfo.size < 800
                  ? '5.6rem'
                  : appInfo.size < 1050
                  ? '8.8rem'
                  : '10.4rem',
            }}
            onClick={() => activePhoto !== 0 && setActivePhoto(activePhoto - 1)}
          >
            <div
              className='d-flex-row ai-center jc-center p-8'
              style={{ transition: 'all .3s' }}
            >
              <span
                className={`material-symbols-outlined user-select-none ${
                  activePhoto !== 0 ? 'c-on-surface' : 'c-inactive'
                } ${
                  appInfo.size < 800
                    ? 'fs-24'
                    : appInfo.size < 1050
                    ? 'fs-48'
                    : 'fs-56'
                }`}
              >
                chevron_left
              </span>
            </div>
          </div>
          <div
            style={{ flex: '1' }}
            className='b-surface height-full d-flex-row ai-center jc-center'
          >
            {activePhoto < photos.length ? (
              <img
                src={photos[activePhoto].src}
                alt={photos[activePhoto].alt}
                style={{ height: '90%' }}
                className={styles.image}
              />
            ) : (
              <div className='d-flex-row width-full height-full ai-center jc-center'>
                <div
                  className='d-flex-column ai-center'
                  style={{ gap: '2.4rem' }}
                >
                  <p
                    className={`ff-title ta-center ${
                      appInfo.size < 800
                        ? 'fs-18'
                        : appInfo.size < 1050
                        ? 'fs-32'
                        : 'fs-48'
                    }`}
                  >
                    Voir plus sur mon Instagram
                  </p>
                  <a
                    href='https://www.instagram.com/gerard_sathan/'
                    target='_blank'
                    className={`ff-text c-on-surface ${
                      appInfo.size < 800
                        ? 'fs-10'
                        : appInfo.size < 1050
                        ? 'fs-16'
                        : 'fs-20'
                    }`}
                  >
                    {appInfo.size > 350
                      ? 'https://www.instagram.com/gerard_sathan'
                      : 'Mon Instagram'}
                  </a>
                </div>
              </div>
            )}
          </div>
          <div
            className={`${styles.right_button} ${
              activePhoto < photos.length && styles.hover
            }`}
            style={{
              width:
                appInfo.size < 800
                  ? '5.6rem'
                  : appInfo.size < 1050
                  ? '8.8rem'
                  : '10.4rem',
            }}
            onClick={() =>
              activePhoto < photos.length && setActivePhoto(activePhoto + 1)
            }
          >
            <div
              className='d-flex-row ai-center jc-center p-8'
              style={{ transition: 'all .3s' }}
            >
              <span
                className={`material-symbols-outlined user-select-none ${
                  activePhoto < photos.length ? 'c-on-surface' : 'c-inactive'
                } ${
                  appInfo.size < 800
                    ? 'fs-24'
                    : appInfo.size < 1050
                    ? 'fs-48'
                    : 'fs-56'
                }`}
              >
                chevron_right
              </span>
            </div>
          </div>
        </div>
        <div
          className={styles.image_slider_bottom}
          style={{
            height:
              appInfo.size < 400
                ? '5.6rem'
                : appInfo.size < 500
                ? '7.2rem'
                : appInfo.size < 650
                ? '9.6rem'
                : appInfo.size < 800
                ? '11.2rem'
                : appInfo.size < 650
                ? '13.6rem'
                : '14.4rem',
          }}
        >
          <div
            className={styles.left_box}
            style={{
              width:
                appInfo.size < 800
                  ? '5.6rem'
                  : appInfo.size < 1050
                  ? '8.8rem'
                  : '10.4rem',
            }}
          ></div>
          <div
            style={{
              gap:
                appInfo.size < 800
                  ? '.8rem'
                  : appInfo.size < 1050
                  ? '1.6rem'
                  : '2.4rem',
            }}
            className={`${styles.image_container} ${
              appInfo.size < 800
                ? 'pr-16 pl-16'
                : appInfo.size < 1050
                ? 'pr-32 pl-32'
                : 'pr-48 pl-48'
            }`}
            ref={sliderRef}
          >
            {photos.map((photo) => {
              return (
                <img
                  src={photo.src}
                  alt={photo.alt}
                  style={{ height: activePhoto === photo.id ? '80%' : '60%' }}
                  className={`${styles.images} ${
                    activePhoto !== photo.id && 'cursor-pointer'
                  }`}
                  key={photo.id}
                  onClick={() => setActivePhoto(photo.id)}
                  ref={(item) => (photosRef.current[photo.id] = item)}
                />
              );
            })}
            <div
              style={{
                height: activePhoto === photos.length ? '80%' : '60%',
              }}
              className={`d-flex-row ai-center jc-center border-1 user-select-none material-symbols-outlined ${
                activePhoto !== photos.length && 'cursor-pointer'
              } ${
                appInfo.size < 800
                  ? 'fs-16 p-8'
                  : appInfo.size < 1050
                  ? 'fs-24 p-16'
                  : 'fs-32 p-24'
              }`}
              onClick={() => setActivePhoto(photos.length)}
              ref={(item) => (photosRef.current[photos.length] = item)}
            >
              add
            </div>
          </div>
          <div
            className={styles.right_box}
            style={{
              width:
                appInfo.size < 800
                  ? '5.6rem'
                  : appInfo.size < 1050
                  ? '8.8rem'
                  : '10.4rem',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
