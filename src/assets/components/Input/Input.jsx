import { useRef, useState } from 'react';

import styles from './Input.module.scss';

export default function Input({
  icon = null,
  label,
  supportingText,
  cancel,
}) {
  const inputContainerRef = useRef(null);
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [inputText, setInputText] = useState('');
  return (
    <div className={`${styles.container} M3`}>
      <div
        className={`${styles.input_container} ${
          isFocused ? styles.focused : styles.hover
        }`}
        ref={inputContainerRef}
        onClick={() => inputRef.current.focus()}
        style={{
          padding:
            isFocused && icon !== null
              ? '0 1.2rem'
              : !isFocused && icon !== null
              ? '0 1.6rem 0 1.2rem'
              : isFocused && icon === null
              ? '0 1.6rem'
              : '0 1.6rem',
        }}
      >
        <div
          className={`${styles.label} ${
            isFocused ? styles.focused : inputText !== '' && styles.filled
          }`}
          style={{
            top: isFocused ? '-8px' : inputText !== '' ? '-8px' : `17.5px`,
            left: icon === null ? '1.6rem' : '4.8rem',
          }}
        >
          {label}
        </div>
        <div
          className={`${styles.square} ${
            (isFocused || inputText !== '') && styles.focused
          }`}
        >
          {label}
        </div>
        {icon !== null && (
          <span className={`material-symbols-outlined ${styles.icons}`}>
            {icon}
          </span>
        )}
        <input
          type='text'
          className={styles.input}
          ref={inputRef}
          value={inputText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onInput={(e) => setInputText(e.target.value)}
        />
        {isFocused && cancel && (
          <span
            className={`material-symbols-outlined ${styles.icons} ${styles.cancel}`}
            onMouseDown={(e) => e.preventDefault()}
            onMouseUp={() => {
              setInputText('');
              inputRef.current.blur();
            }}
            onTouchStart={(e) => e.preventDefault()}
            onTouchEnd={() => {
              setInputText('');
              inputRef.current.blur();
            }}
          >
            cancel
          </span>
        )}
      </div>
      {supportingText && (
        <p className={`${styles.supporting_text}`}>{supportingText}</p>
      )}
    </div>
  );
}
