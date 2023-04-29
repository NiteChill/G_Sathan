import { useEffect, useState } from 'react';
import chip from '../../images/chip.svg';

export default function ListText({ appSize, text, delay }) {
  const [rotation, setRotation] = useState(Math.random() * 90);
  useEffect(() => {
    let interval;

    interval = setInterval(() => setRotation(rotation + 145), 3000);
    return () => clearInterval(interval);
  }, [rotation]);
  return (
    <div
      className={`ff-text d-flex-row ai-center ${
        appSize < 800 ? 'fs-10' : appSize < 1050 ? 'fs-16' : 'fs-20'
      }`}
      style={{ whiteSpace: 'normal' }}
    >
      <img
        src={chip}
        alt='chip'
        style={{
          transform: `rotate(${rotation}deg)`,
          height: appSize < 800 ? '.8rem' : '1.6rem',
          width: appSize < 800 ? '.8rem' : '1.6rem',
          marginRight: '.6rem',
          transition: `transform 1s ease ${delay}`,
        }}
      />
      {text}
    </div>
  );
}
