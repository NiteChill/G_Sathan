export default function MobileMenu({ open = false, onClick }) {
  return (
    <>
      <div
        className='pos-fixed'
        style={{
          zIndex: '30',
          width: '100vw',
          height: '100vh',
          left: open === false ? '-100vw' : '0',
          background: '#000000',
          opacity: '.16'
        }}
        onClick={onClick}
      ></div>
      <div
        className='b-surface-1 pos-fixed'
        style={{
          zIndex: '30',
          left: open === false ? '-30rem' : '0',
          width: '30rem',
          height: '100vh',
          transition: 'all .2s'
        }}
      >
        hello
      </div>
    </>
  );
}
