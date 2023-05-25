import { useState } from 'react';

import styles from './Form.module.scss';

import Input from '../Input/Input';

export default function Form() {
  const [formData, setFormData] = useState();
  return (
    <div className={styles.container}>
      <div className={styles.modale_container}>
        <div className={styles.header}>
          <div className={styles.icon_container}>
            <span className={`material-symbols-outlined ${styles.icon}`}>
              close
            </span>
          </div>
          <p className={styles.text}>Formulaire</p>
        </div>
        <p className={styles.title}>Vos informations</p>
        <div className={styles.double_input}>
          <Input icon='person' label='Nom' />
          <Input icon='person' label='Prénom' />
        </div>
        <Input
          icon='person_pin_circle'
          label="D'ou venez vous?"
          cancel={true}
        />
        <Input icon='alternate_email' label='Email' cancel={true} />
        <p className={styles.title}>Le tatouage</p>
        <div className={styles.double_input}>
          <Input icon='straighten' label='Taille' />
          <Input icon='push_pin' label='Emplacement' />
        </div>
        <Input icon='description' label='Descriptif du projet' cancel={true} />
        <Input
          icon='add_comment'
          label='Remarques additionelles'
          cancel={true}
        />
        {/* <Input
          icon='category'
          label='Label'
          supportingText='Supporting text'
          cancel={true}
        /> */}
      </div>
    </div>
  );
}
