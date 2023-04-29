import { useRef, useEffect, useState } from 'react';

export default function Footer({ appSize }) {
  const warningRef = useRef(null);
  const additionalWorkRef = useRef(null);
  const contactRef = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.map((entry) => {
          entry.isIntersecting &&
            (setVisible(entry.isIntersecting),
            observer.unobserve(entry.target));
        });
      },
      { threshold: .8 }
    );
    warningRef.current && observer.observe(warningRef.current);
    additionalWorkRef.current && observer.observe(additionalWorkRef.current);
    contactRef.current && observer.observe(contactRef.current);
  }, [warningRef, additionalWorkRef, contactRef]);
  return (
    <div
      className={`d-flex-column gap-64 b-surface-1 ${
        appSize < 800
          ? 'pt-48 pr-32 pb-48 pl-32'
          : appSize < 1050
          ? 'pt-64 pr-48 pb-64 pl-48'
          : 'pt-96 pr-64 pb-64 pl-64'
      }`}
    >
      <div
        className={`${
          appSize < 550 ? 'd-flex-column gap-40' : 'd-flex-row jc-space-between'
        }`}
      >
        <div className='d-flex-column gap-24'>
          <p className={`ff-title ${appSize < 900 ? 'fs-18' : 'fs-24'}`}>
            Attention
          </p>
          <p
            className={`ff-text ${appSize < 900 ? 'fs-10' : 'fs-16'}`}
            style={{
              marginBottom: visible ? '0' : '-15%',
              marginTop: visible ? '0' : '15%',
              opacity: visible ? '1' : '0',
              transition: 'all 1s ease',
            }}
            ref={warningRef}
          >
            Le tatouage est un acte relativement intime car
            {appSize >= 550 && <br />}
            il s'agit d'une altération définitive de l'intégrité
            {appSize >= 550 && <br />}
            physique. Il est important de le comprendre
            {appSize >= 550 && <br />}
            avant d'envisager quoi que ce soit.
          </p>
        </div>
        <div className='d-flex-column gap-24'>
          <p
            className={`ff-title ${appSize < 900 ? 'fs-18' : 'fs-24'}`}
            style={{ whiteSpace: 'nowrap' }}
          >
            Travail additionel
          </p>
          <p
            className={`ff-text ${appSize < 900 ? 'fs-10' : 'fs-16'}`}
            style={{
              marginBottom: visible ? '0' : '-15%',
              marginTop: visible ? '0' : '15%',
              opacity: visible ? '1' : '0',
              transition: 'all 1s ease .2s',
            }}
            ref={additionalWorkRef}
          >
            Additionnellement au tatouage,
            {appSize >= 550 && <br />}
            je travaille sur des commandes
            {appSize >= 550 && <br />}
            d'illustration et produits dérivés.
          </p>
        </div>
        <div className='d-flex-column gap-24'>
          <p className={`ff-title ${appSize < 900 ? 'fs-18' : 'fs-24'}`}>
            Contact
          </p>
          <div
            className={`${
              appSize < 550
                ? 'd-flex-row jc-space-between'
                : 'd-flex-column gap-16'
            } c-on-surface ff-text ${appSize < 900 ? 'fs-10' : 'fs-16'}`}
            style={{
              marginBottom: visible ? '0' : '-15%',
              marginTop: visible ? '0' : '15%',
              opacity: visible ? '1' : '0',
              transition: 'all 1s ease .4s',
            }}
            ref={contactRef}
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
        <p>Tout droits réservé</p>
      </div>
    </div>
  );
}
