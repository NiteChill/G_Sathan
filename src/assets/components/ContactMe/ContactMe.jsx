import { useRef, useEffect, useState } from 'react';

export default function ContactMe({ appInfo }) {
  const [visible, setVisible] = useState(false);
  const contactMeRef = useRef(null);
  useEffect(() => {
    if (
      appInfo.scroll +
        appInfo.ref.current.getBoundingClientRect().height -
        contactMeRef.current.getBoundingClientRect().height / 5 >=
      contactMeRef.current.offsetTop
    ) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [contactMeRef, appInfo]);
  return (
    <div
      style={{
        transform: visible ? 'translateY(0)' : 'translateY(50%)',
        opacity: visible ? '1' : '0',
        transition: 'opacity .5s ease, transform .8s ease',
      }}
      ref={contactMeRef}
    >
      <div
        className='d-flex-row ai-center jc-end width-full b-surface-1 c-on-surface ff-text border-bottom-1'
        style={{
          height:
            appInfo.size < 800
              ? '8.5rem'
              : appInfo.size < 1050
              ? '10rem'
              : '14rem',
        }}
      >
        {appInfo.size >= 351 && (
          <div
            className={`d-flex-column jc-center height-full pr-24 pl-24 ${
              appInfo.size > 450 && 'border-left-1'
            }`}
          >
            <p
              className={`ff-title ${
                appInfo.size < 800
                  ? 'fs-18'
                  : appInfo.size < 1050
                  ? 'fs-32'
                  : 'fs-48'
              }`}
            >
              Me contacter
            </p>
            <p
              className={`pt-8 ${
                appInfo.size < 800
                  ? 'fs-10'
                  : appInfo.size < 1050
                  ? 'fs-16'
                  : 'fs-20'
              }`}
            >
              Contactez moi via ce simple formulaire
            </p>
          </div>
        )}
        <div
          className={`d-flex-row ai-center jc-center height-full b-primary cursor-pointer user-select-none hover-red ${
            appInfo.size < 800
              ? 'pr-24 pl-24'
              : appInfo.size < 1050
              ? 'pr-32 pl-32'
              : 'pr-48 pl-48'
          } ${appInfo.size <= 351 && 'width-full'}`}
          onClick={() => {}}
        >
          <p
            className={`mr-8 ${
              appInfo.size < 800
                ? 'fs-10'
                : appInfo.size < 1050
                ? 'fs-16'
                : 'fs-20'
            }`}
            style={{ whiteSpace: 'nowrap' }}
          >
            Formulaire de contact
          </p>
          <span
            className={`material-symbols-outlined cursor-pointer user-select-none c-on-surface ${
              appInfo.size < 1050 ? 'fs-16' : 'fs-24'
            }`}
          >
            arrow_outward
          </span>
        </div>
      </div>
    </div>
  );
}
