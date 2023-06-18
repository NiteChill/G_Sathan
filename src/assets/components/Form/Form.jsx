import { useEffect, useRef, useState } from 'react';

import styles from './Form.module.scss';

import Input from '../Input/Input';
import Button from '../Button/Button';

export default function Form({ appInfo, isOpen, setIsOpen }) {
  const modaleRef = useRef(null),
    [formData, setFormData] = useState({
      name: '',
      lastname: '',
      address: '',
      mail: '',
      size: '',
      position: '',
      description: '',
      more: '',
    }),
    [height, setHeight] = useState(2000),
    mailBody = `Nom%20:%20${formData.name}%0APrénom%20:%20${formData.lastname}%0AAdresse%20:%20${formData.address}%0AAdresse mail%20:%20${formData.mail}%0A%0ALe tatouage%0ATaille%20:%20${formData.size}%20cm%0AEmplacement%20:%20${formData.position}%0ADescriptif du projet%20:%20${formData.description}%0ARemarques addionelles%20:%20${formData.more}`,
    mailSubject = `Demande%20de%20tatouage%20envoyée%20depuis%20le%20Formulaire%20par%20${formData.name}%20${formData.lastname}`,
    sendTo = 'puissantachille@gmail.com',
    handleSubmit = (e) => {
      e.preventDefault();
      window.open(
        `mailto:${sendTo}?subject=${mailSubject}&body=${mailBody}`,
        '_blank'
      );
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
            <Input
              icon='person'
              label='Nom'
              name='name'
              setFormData={setFormData}
              formData={formData}
            />
            <Input
              icon='person'
              label='Prénom'
              name='lastname'
              setFormData={setFormData}
              formData={formData}
            />
          </div>
          <Input
            icon='person_pin_circle'
            label="D'ou venez vous?"
            cancel={appInfo.size > 350 && true}
            name='address'
            setFormData={setFormData}
            formData={formData}
          />
          <Input
            icon='alternate_email'
            label='Email'
            cancel={appInfo.size > 350 && true}
            type='email'
            name='mail'
            setFormData={setFormData}
            formData={formData}
          />
          <p className={styles.title}>Le tatouage</p>
          <div
            className={`${styles.double_input} ${styles.second_double_input}`}
          >
            <Input
              icon='straighten'
              label='Taille'
              sufix='cm'
              type='number'
              name='size'
              setFormData={setFormData}
              formData={formData}
            />
            <Input
              icon='push_pin'
              label='Emplacement'
              cancel={appInfo.size > 350 && appInfo.size < 415 && true}
              name='position'
              setFormData={setFormData}
              formData={formData}
            />
          </div>
          <Input
            icon='description'
            label='Descriptif du projet'
            cancel={appInfo.size > 350 && true}
            name='description'
            setFormData={setFormData}
            formData={formData}
          />
          <Input
            icon='add_comment'
            label='Remarques additionelles'
            cancel={appInfo.size > 350 && true}
            name='more'
            setFormData={setFormData}
            formData={formData}
          />
          <Button text='Envoyer' icon='done' type='submit' />
        </form>
      </div>
    </div>
  );
}
