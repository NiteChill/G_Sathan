import { useEffect, useState } from 'react';
import styles from './Button.module.scss';

export default function Button({
  icon = null,
  text,
  className,
  onClick,
  type = 'button',
}) {
  const [state, setState] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (/Android|iPhone/i.test(navigator.userAgent)) {
      setIsMobile(true);
    }
  }, []);

  return (
    <button
      type={type}
      className={`${className} ${styles.button_container} ${
        state === 'clicked' && styles.clicked
      } ${!isMobile && styles.hovered}`}
      style={{
        padding: icon !== null ? '1rem 2.4rem 1rem 1.6rem' : '1rem 2.4rem',
      }}
      tabIndex={!isMobile ? 0 : ''}
      onClick={onClick}
      onMouseDown={(e) => {
        e.target.blur();
        setState('clicked');
      }}
      onMouseUp={() => setState('hovered')}
      onMouseLeave={(e) => {
        e.target.blur();
        setState(null);
      }}
      onTouchStart={(e) => {
        e.target.blur();
        setState('clicked');
      }}
      onTouchEnd={() => setState(null)}
      onTouchCancel={(e) => {
        e.target.blur();
        setState(null);
      }}
    >
      {icon !== null && (
        <span className={`material-symbols-outlined ${styles.icon}`}>
          {icon}
        </span>
      )}
      <p className={styles.text}>{text}</p>
    </button>
  );
}
