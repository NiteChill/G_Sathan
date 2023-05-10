import { useEffect, useState, useRef } from 'react';

import { photos } from '../../../datas/photos';

export default function Portfolio({ portfolioRef, appInfo }) {
  const [visible, setVisible] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);

  const sliderRef = useRef(null);
  const photosRef = useRef([]);

  useEffect(() => {
    if (
      appInfo.scroll +
        appInfo.ref.current.getBoundingClientRect().height -
        portfolioRef.current.getBoundingClientRect().height / 4 >=
      portfolioRef.current.offsetTop
    ) {
      setVisible(true);
    } else {
      setVisible(false);
    }
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
      <div
        className='d-flex-column user-select-none'
        style={{
          transform: visible ? 'translateY(0)' : 'translateY(10%)',
          opacity: visible ? '1' : '0',
          transition: 'opacity .5s ease, transform .8s ease',
        }}
      >
        <div
          className={`d-flex-column b-surface-1 ${
            appInfo.size < 800
              ? 'pt-32 pr-24 pb-32 pl-24'
              : appInfo.size < 1050
              ? 'pt-64 pr-48 pb-64 pl-48'
              : 'pt-96 pr-64 pb-96 pl-64'
          }`}
        >
          <p
            className={`ff-title mb-24 ${
              appInfo.size < 800 ? 'fs-18' : appInfo.size < 1050 ? 'fs-32' : 'fs-48'
            }`}
          >
            Portfolio
          </p>
          <p
            className={`ff-text ${
              appInfo.size < 800 ? 'fs-10' : appInfo.size < 1050 ? 'fs-16' : 'fs-20'
            }`}
          >
            Voici un aperçu de mon travail sur quelques clients qui ont accepté
            de se faire photographier
          </p>
        </div>
        <div className='b-surface-1 border-top-1 border-bottom-1'>
          <div
            className='d-flex-row ai-center'
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
              className={`d-flex-row ai-center jc-center border-right-1 height-full ${
                activePhoto !== 0 && 'hover-chevron-left cursor-pointer'
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
                activePhoto !== 0 && setActivePhoto(activePhoto - 1)
              }
            >
              <div
                className='d-flex-row ai-center jc-center p-8'
                style={{ transition: 'all .3s' }}
              >
                <span
                  className={`material-symbols-outlined user-select-none ${
                    activePhoto !== 0 ? 'c-on-surface' : 'c-inactive'
                  } ${
                    appInfo.size < 800 ? 'fs-24' : appInfo.size < 1050 ? 'fs-48' : 'fs-56'
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
              <img
                src={photos[activePhoto].src}
                alt={photos[activePhoto].alt}
                style={{ height: '90%' }}
                className='border-1'
              />
            </div>
            <div
              className={`d-flex-row ai-center jc-center border-left-1 height-full ${
                activePhoto < photos.length - 1 &&
                'hover-chevron-right cursor-pointer'
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
                activePhoto < photos.length - 1 &&
                setActivePhoto(activePhoto + 1)
              }
            >
              <div
                className='d-flex-row ai-center jc-center p-8 cursor-pointer hover-chevron-right'
                style={{ transition: 'all .3s' }}
              >
                <span
                  className={`material-symbols-outlined user-select-none ${
                    activePhoto < photos.length - 1
                      ? 'c-on-surface'
                      : 'c-inactive'
                  } ${
                    appInfo.size < 800 ? 'fs-24' : appInfo.size < 1050 ? 'fs-48' : 'fs-56'
                  }`}
                >
                  chevron_right
                </span>
              </div>
            </div>
          </div>
          <div
            className='d-flex-row border-top-1'
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
              className='border-right-1'
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
                flex: '1',
                gap:
                  appInfo.size < 800
                    ? '.8rem'
                    : appInfo.size < 1050
                    ? '1.6rem'
                    : '2.4rem',
                overflow: 'auto',
              }}
              className={`height-full d-flex-row ai-center scrollbar-styled ${
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
                    className={`border-1 user-select-none ${
                      activePhoto !== photo.id && 'cursor-pointer'
                    }`}
                    key={photo.id}
                    onClick={() => setActivePhoto(photo.id)}
                    ref={(item) => (photosRef.current[photo.id] = item)}
                  />
                );
              })}
            </div>
            <div
              className='border-left-1'
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
    </div>
  );
}
