import { useRef, useEffect, useState } from 'react';

export default function ContactMe({ appSize }) {
  const contactMeRef = useRef(null);
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
      { threshold: 0.1 }
    );
    contactMeRef.current && observer.observe(contactMeRef.current);
  }, [contactMeRef]);
  return (
    <div
      style={{
        paddingTop: visible ? '0' : '30%',
        opacity: visible ? '1' : '0',
        transition: 'all .8s',
      }}
      ref={contactMeRef}
    >
      <div
        className='d-flex-row ai-center jc-end width-full b-surface-1 c-on-surface ff-text border-bottom-1'
        style={{
          height: appSize < 800 ? '8.5rem' : appSize < 1050 ? '10rem' : '14rem',
        }}
      >
        {appSize >= 351 && (
          <div
            className={`d-flex-column jc-center height-full pr-24 pl-24 ${
              appSize > 450 && 'border-left-1'
            }`}
          >
            <p
              className={`ff-title ${
                appSize < 800 ? 'fs-18' : appSize < 1050 ? 'fs-32' : 'fs-48'
              }`}
            >
              Me contacter
            </p>
            <p
              className={`pt-8 ${
                appSize < 800 ? 'fs-10' : appSize < 1050 ? 'fs-16' : 'fs-20'
              }`}
            >
              Contactez moi via ce simple formulaire
            </p>
          </div>
        )}
        <div
          className={`d-flex-row ai-center jc-center height-full b-primary cursor-pointer user-select-none hover-red ${
            appSize < 800
              ? 'pr-24 pl-24'
              : appSize < 1050
              ? 'pr-32 pl-32'
              : 'pr-48 pl-48'
          } ${appSize <= 351 && 'width-full'}`}
          onClick={() => {}}
        >
          <p
            className={`mr-8 ${
              appSize < 800 ? 'fs-10' : appSize < 1050 ? 'fs-16' : 'fs-20'
            }`}
            style={{ whiteSpace: 'nowrap' }}
          >
            Formulaire de contact
          </p>
          <span
            className={`material-symbols-outlined cursor-pointer user-select-none c-on-surface ${
              appSize < 1050 ? 'fs-16' : 'fs-24'
            }`}
          >
            arrow_outward
          </span>
        </div>
      </div>
    </div>
  );
}
