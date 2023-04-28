import { useEffect, useState, useRef } from 'react';

import { photos } from '../../../datas/photos';

export default function Portfolio({ portfolioRef, appSize }) {
  const PortfolioAnimationRef = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.map((entry) => {
        entry.isIntersecting &&
          (setVisible(entry.isIntersecting), observer.unobserve(entry.target));
      });
    }, {threshold: 0.1});
    PortfolioAnimationRef.current &&
      observer.observe(PortfolioAnimationRef.current);
  }, [PortfolioAnimationRef]);

  const [activePhoto, setActivePhoto] = useState(0);
  return (
    <div
      className='d-flex-column'
      ref={PortfolioAnimationRef}
      style={{
        paddingTop: visible ? '0' : '30%',
        opacity: visible ? '1' : '0',
        transition: 'all .8s',
      }}
    >
      <div
        className={`d-flex-column b-surface-1 ${
          appSize < 800
            ? 'pt-32 pr-24 pb-32 pl-24'
            : appSize < 1050
            ? 'pt-64 pr-48 pb-64 pl-48'
            : 'pt-96 pr-64 pb-96 pl-64'
        }`}
      >
        <p
          className={`ff-title mb-24 ${
            appSize < 800 ? 'fs-18' : appSize < 1050 ? 'fs-32' : 'fs-48'
          }`}
        >
          Portfolio
        </p>
        <p
          className={`ff-text ${
            appSize < 800 ? 'fs-10' : appSize < 1050 ? 'fs-16' : 'fs-20'
          }`}
        >
          Voici un aperçu de mon travail sur quelques clients qui ont accepté de
          se faire photographier
        </p>
      </div>
      <div
        className='b-surface-1 border-top-1 border-bottom-1'
        ref={portfolioRef}
      >
        <div
          className='d-flex-row ai-center'
          style={{
            height:
              appSize < 400
                ? '20rem'
                : appSize < 500
                ? '24rem'
                : appSize < 650
                ? '30rem'
                : appSize < 800
                ? '40rem'
                : appSize < 650
                ? '50rem'
                : '60rem',
          }}
        >
          <div
            className='d-flex-row ai-center jc-center border-right-1 height-full'
            style={{
              width:
                appSize < 800
                  ? '5.6rem'
                  : appSize < 1050
                  ? '8.8rem'
                  : '10.4rem',
            }}
          >
            <div
              className={`d-flex-row ai-center jc-center p-8 ${
                activePhoto !== 0 && 'hover-chevron-left cursor-pointer'
              }`}
              style={{ transition: 'all .3s' }}
              onClick={() =>
                activePhoto !== 0 && setActivePhoto(activePhoto - 1)
              }
            >
              <span
                className={`material-symbols-outlined user-select-none ${
                  activePhoto !== 0 ? 'c-on-surface' : 'c-inactive'
                } ${
                  appSize < 800 ? 'fs-24' : appSize < 1050 ? 'fs-48' : 'fs-56'
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
            className='d-flex-row ai-center jc-center border-left-1 height-full'
            style={{
              width:
                appSize < 800
                  ? '5.6rem'
                  : appSize < 1050
                  ? '8.8rem'
                  : '10.4rem',
            }}
          >
            <div
              className={`d-flex-row ai-center jc-center p-8 cursor-pointer hover-chevron-right ${
                activePhoto < photos.length - 1 &&
                'hover-chevron-right cursor-pointer'
              }`}
              style={{ transition: 'all .3s' }}
              onClick={() =>
                activePhoto < photos.length - 1 &&
                setActivePhoto(activePhoto + 1)
              }
            >
              <span
                className={`material-symbols-outlined user-select-none ${
                  activePhoto < photos.length - 1
                    ? 'c-on-surface'
                    : 'c-inactive'
                } ${
                  appSize < 800 ? 'fs-24' : appSize < 1050 ? 'fs-48' : 'fs-56'
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
              appSize < 400
                ? '5.6rem'
                : appSize < 500
                ? '7.2rem'
                : appSize < 650
                ? '9.6rem'
                : appSize < 800
                ? '11.2rem'
                : appSize < 650
                ? '13.6rem'
                : '14.4rem',
          }}
        >
          <div
            className='border-right-1'
            style={{
              width:
                appSize < 800
                  ? '5.6rem'
                  : appSize < 1050
                  ? '8.8rem'
                  : '10.4rem',
            }}
          ></div>
          <div
            style={{
              flex: '1',
              gap:
                appSize < 800 ? '.8rem' : appSize < 1050 ? '1.6rem' : '2.4rem',
              overflow: 'auto',
            }}
            className={`height-full d-flex-row ai-center scrollbar-styled ${
              appSize < 800
                ? 'pr-16 pl-16'
                : appSize < 1050
                ? 'pr-32 pl-32'
                : 'pr-48 pl-48'
            }`}
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
                />
              );
            })}
          </div>
          <div
            className='border-left-1'
            style={{
              width:
                appSize < 800
                  ? '5.6rem'
                  : appSize < 1050
                  ? '8.8rem'
                  : '10.4rem',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
