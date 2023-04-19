import logo from '../../images/logo_gsathan.svg';

export default function Starting({ appSize, startingRef }) {
  return (
    <div className='d-flex-row w-full border-bottom-1' ref={startingRef}>
      <div
        className={`d-flex-column b-surface-1 starting ${
          appSize < 800
            ? 'pt-32 pr-24 pb-32 pl-24'
            : appSize < 1050
            ? 'pt-64 pr-48 pb-64 pl-48'
            : 'pt-96 pr-64 pb-96 pl-64'
        }`}
      >
        <p
          className={`ff-title ${
            appSize < 800 ? 'fs-18' : appSize < 1050 ? 'fs-32' : 'fs-48'
          }`}
        >
          Mes débuts
        </p>
        <div
          className={`ff-text mt-24 ${
            appSize < 800 ? 'fs-10' : appSize < 1050 ? 'fs-16' : 'fs-20'
          }`}
        >
          <p className='mb-16'>
            J'ai débuté mon activité de tatouage en 2018. C'est instantanément
            que j'ai compris que ce métier était fait pour moi...
          </p>
          <p>Dès les premiers traits...</p>
        </div>
      </div>
      {appSize >= 450 && (
        <div
          className='d-flex-row jc-center ai-center border-left-1'
          style={{ minWidth: '45%', flex: '1' }}
        >
          <img src={logo} alt='logo' style={{ height: '70%' }} />
        </div>
      )}
    </div>
  );
}
