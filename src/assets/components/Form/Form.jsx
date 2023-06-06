import { useEffect, useRef, useState } from 'react';

import styles from './Form.module.scss';

import Input from '../Input/Input';
import Button from '../Button/Button';

export default function Form({ appInfo, isOpen, setIsOpen }) {
  const modaleRef = useRef(null),
    [formData, setFormData] = useState(),
    [height, setHeight] = useState(2000),
    handleSubmit = (e) => {
      e.preventDefault();
      console.log('hello');
    };
  useEffect(
    () => setHeight(appInfo.ref.current.getBoundingClientRect().height),
    []
  );
  return (
    <div
      className={styles.container}
      style={{
        marginTop: isOpen ? '0' : height,
      }}
      onClick={() => setIsOpen(false)}
    >
      <div
        className={styles.modale_container}
        style={{
          marginTop: isOpen ? '0' : height,
        }}
        ref={modaleRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <div
            className={styles.icon_container}
            onClick={() => setIsOpen(false)}
          >
            <span className={`material-symbols-outlined ${styles.icon}`}>
              close
            </span>
          </div>
          <p className={styles.text}>Formulaire</p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <p className={styles.title}>Vos informations</p>
          <div className={styles.double_input}>
            <Input icon='person' label='Nom' />
            <Input icon='person' label='Prénom' />
          </div>
          <Input
            icon='person_pin_circle'
            label="D'ou venez vous?"
            cancel={appInfo.size > 350 && true}
          />
          <Input
            icon='alternate_email'
            label='Email'
            cancel={appInfo.size > 350 && true}
          />
          <p className={styles.title}>Le tatouage</p>
          <div
            className={`${styles.double_input} ${styles.second_double_input}`}
          >
            <Input icon='straighten' label='Taille' sufix='cm' />
            <Input
              icon='push_pin'
              label='Emplacement'
              cancel={appInfo.size > 350 && appInfo.size < 415 && true}
            />
          </div>
          <Input
            icon='description'
            label='Descriptif du projet'
            cancel={appInfo.size > 350 && true}
          />
          <Input
            icon='add_comment'
            label='Remarques additionelles'
            cancel={appInfo.size > 350 && true}
          />
          <Button text='Envoyer' icon='done' type='submit' />
        </form>
      </div>
    </div>
  );
}
