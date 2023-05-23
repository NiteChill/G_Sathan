import { useRef, useEffect, useState } from 'react';

import styles from './Footer.module.scss';

export default function Footer({ appInfo }) {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleObserver = (entries) => {
      entries.map((entry) => {
        if (
          entry.intersectionRatio >= 0.6 ||
          appInfo.scroll >= footerRef.current.offsetTop
        ) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      });
    };
    const observer = new IntersectionObserver(handleObserver, {
      threshold: [0.6],
    });
    footerRef.current && observer.observe(footerRef.current);
  }, [footerRef, appInfo]);

  return (
    <div
      className={`d-flex-column gap-64 b-surface-1 ${
        appInfo.size < 800
          ? 'pt-48 pr-32 pb-48 pl-32'
          : appInfo.size < 1050
          ? 'pt-64 pr-48 pb-64 pl-48'
          : 'pt-96 pr-64 pb-64 pl-64'
      }`}
      role='contentinfo'
      ref={footerRef}
      style={{ position: 'relative' }}
    >
      <div
        className={`${
          appInfo.size < 550
            ? 'd-flex-column gap-40'
            : 'd-flex-row jc-space-between'
        }`}
      >
        <div className='d-flex-column gap-24'>
          <p
            className={`ff-title ${styles.warning_title} ${
              visible && styles.visible
            } ${appInfo.size < 900 ? 'fs-18' : 'fs-24'}`}
          >
            Attention
          </p>
          <p
            className={`ff-text ${styles.warning_text} ${
              visible && styles.visible
            } ${appInfo.size < 900 ? 'fs-10' : 'fs-16'}`}
          >
            Le tatouage est un acte relativement intime car{' '}
            {appInfo.size >= 550 && <br />}
            il s'agit d'une altération définitive de l'intégrité{' '}
            {appInfo.size >= 550 && <br />}
            physique. Il est important de le comprendre{' '}
            {appInfo.size >= 550 && <br />}
            avant d'envisager quoi que ce soit.
          </p>
        </div>
        <div className='d-flex-column gap-24 height-full'>
          <p
            className={`ff-title ${styles.additional_title} ${
              visible && styles.visible
            } ${appInfo.size < 900 ? 'fs-18' : 'fs-24'}`}
            style={{ whiteSpace: 'nowrap' }}
          >
            Travail additionel
          </p>
          <p
            className={`ff-text ${styles.additional_text} ${
              visible && styles.visible
            } ${appInfo.size < 900 ? 'fs-10' : 'fs-16'}`}
          >
            Additionnellement au tatouage, {appInfo.size >= 550 && <br />}
            je travaille sur des commandes {appInfo.size >= 550 && <br />}
            d'illustration et produits dérivés.
          </p>
        </div>
        <div className='d-flex-column gap-24'>
          <p
            className={`ff-title ${styles.contact_title} ${
              visible && styles.visible
            } ${appInfo.size < 900 ? 'fs-18' : 'fs-24'}`}
          >
            Contact
          </p>
          <div
            className={`height-full ${styles.contact_text} ${
              visible && styles.visible
            } ${
              appInfo.size < 550
                ? 'd-flex-row jc-space-between'
                : 'd-flex-column gap-16'
            } c-on-surface ff-text ${appInfo.size < 900 ? 'fs-10' : 'fs-16'}`}
          >
            <a
              href='mailto:g.sathantattoo@gmail.com'
              target='_blank'
              className='c-on-surface'
            >
              Email
            </a>
            <p className='td-underline cursor-pointer'>Formulaire</p>
            <a href='' target='_blank' className='c-on-surface'>
              Adresse
            </a>
            <a
              href='https://www.instagram.com/gerard_sathan/'
              target='_blank'
              className='c-on-surface'
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className='d-flex-row jc-center ai-center w-full ff-title c-on-surface-variant fs-16'>
        <p>G.Sathan</p>
        <div
          className='b-on-surface-variant bora-full mr-8 ml-8'
          style={{ width: '.5rem', height: '.5rem' }}
        ></div>
        <p>Tous droits réservés</p>
      </div>
    </div>
  );
}
