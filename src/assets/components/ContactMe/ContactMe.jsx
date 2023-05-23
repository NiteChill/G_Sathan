import { useRef, useEffect, useState } from 'react';

import styles from './ContactMe.module.scss';

export default function ContactMe({ appInfo }) {
  const [visible, setVisible] = useState(false);
  const contactMeRef = useRef(null);
  const handleObserver = (entries) => {
    entries.map((entry) => {
      if (entry.intersectionRatio >= 0.3) {
        setVisible(true);
      }
    });
  };
  const observer = new IntersectionObserver(handleObserver, {
    threshold: [0.3],
  });
  contactMeRef.current && observer.observe(contactMeRef.current);
  return (
    <div className={`${styles.main_container}`} ref={contactMeRef}>
      <div
        className={styles.container}
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
          <>
            <div className={styles.fill}></div>
            <div className={styles.supporting_text}>
              <p
                className={`${styles.title} ${
                  appInfo.size < 800
                    ? 'fs-18'
                    : appInfo.size < 1050
                    ? 'fs-32'
                    : 'fs-48'
                } ${visible && styles.visible}`}
              >
                Me contacter
              </p>
              <p
                className={`${styles.text} ${
                  appInfo.size < 800
                    ? 'fs-10'
                    : appInfo.size < 1050
                    ? 'fs-16'
                    : 'fs-20'
                } ${visible && styles.visible}`}
              >
                Contactez moi via ce simple formulaire
              </p>
            </div>
          </>
        )}
        <div
          className={`${styles.button} ${
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
