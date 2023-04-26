import { useRef, useEffect, useState } from 'react';
import ListText from '../ListText/ListText';

export default function TattooProcessus({ tattooProcessusRef, appSize }) {
  const tattooAnimationRef = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.map((entry) => {
        entry.isIntersecting &&
          (setVisible(entry.isIntersecting), observer.unobserve(entry.target));
      });
    });
    tattooAnimationRef.current && observer.observe(tattooAnimationRef.current);
  }, [tattooAnimationRef]);
  return (
    <div
      style={{
        paddingTop: visible ? '0' : '30%',
        opacity: visible ? '1' : '0',
        transition: 'all .8s',
      }}
      ref={tattooAnimationRef}
    >
      <div
        className='d-flex-row width-full border-bottom-1 b-surface-1'
        style={{
          height:
            appSize < 550
              ? '4rem'
              : appSize < 800
              ? '6rem'
              : appSize < 1050
              ? '8rem'
              : '10rem',
        }}
      >
        <div
          className='height-full border-right-1'
          style={{ width: '10%' }}
        ></div>
        <div className='height-full' style={{ flex: '1' }}></div>
        <div
          className='height-full border-left-1'
          style={{ width: '10%' }}
        ></div>
      </div>
      <div className='d-flex-row b-surface-1 border-bottom-1'>
        <div className='border-right-1' style={{ width: '10%' }}></div>
        <div
          className={
            appSize < 800
              ? 'pt-32 pr-24 pb-32 pl-24'
              : appSize < 1050
              ? 'pt-64 pr-48 pb-64 pl-48'
              : 'pt-96 pr-64 pb-96 pl-64'
          }
          style={{ flex: '1', maxWidth: '80%' }}
          ref={tattooProcessusRef}
        >
          <p
            className={`ff-title mb-24 ${
              appSize < 800 ? 'fs-18' : appSize < 1050 ? 'fs-32' : 'fs-48'
            }`}
          >
            Processus de tatouage
          </p>
          <div
            className='d-flex-column'
            style={{
              gap: appSize < 800 ? '.8rem' : appSize < 1050 ? '1.6rem' : '3rem',
            }}
          >
            <ListText
              appSize={appSize}
              text={
                <div>
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
            />
            <ListText
              appSize={appSize}
              text={
                <div>
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
            />
            <ListText
              appSize={appSize}
              text={
                <div>
                  Suivez les conseils qui vous seront donnés afin que le
                  tatouage cicatrise correctement
                </div>
              }
            />
          </div>
        </div>
        <div className='border-left-1' style={{ width: '10%' }}></div>
      </div>
    </div>
  );
}
