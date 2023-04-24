import chip from '../../images/chip.svg';

export default function ListText({ appSize, text }) {
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
          transform: `rotate(${Math.random() * 90}deg)`,
          height: appSize < 800 ? '.8rem' : '1.6rem',
          width: appSize < 800 ? '.8rem' : '1.6rem',
          marginRight: '.6rem',
        }}
      />
      {text}
    </div>
  );
}
