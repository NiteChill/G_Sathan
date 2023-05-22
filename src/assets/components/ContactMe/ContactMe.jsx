import { useRef, useEffect, useState } from 'react';

import styles from './ContactMe.module.scss';

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
      className={`${styles.main_container} ${visible && styles.visible}`}
      ref={contactMeRef}
    >
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
            <div
              className={styles.supporting_text}
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
