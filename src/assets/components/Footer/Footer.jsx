export default function Footer({ appSize }) {
  return (
    <div
      className={`d-flex-column gap-64 b-surface-1 ${
        appSize < 800
          ? 'pt-48 pr-32 pb-48 pl-32'
          : appSize < 1050
          ? 'pt-64 pr-48 pb-64 pl-48'
          : 'pt-96 pr-64 pb-64 pl-64'
      }`}
    >
      <div
        className={`${
          appSize < 550 ? 'd-flex-column gap-40' : 'd-flex-row jc-space-between'
        }`}
      >
        <div className='d-flex-column gap-24'>
          <p className={`ff-title ${appSize < 900 ? 'fs-18' : 'fs-24'}`}>
            Attention
          </p>
          <p
            className={`ff-text ${appSize < 900 ? 'fs-10' : 'fs-16'}`}
            // style={{ whiteSpace: 'nowrap' }}
          >
            Le tatouage est un acte relativement intime car
            {appSize >= 550 && <br />}
            il s'agit d'une altération définitive de l'intégrité
            {appSize >= 550 && <br />}
            physique. Il est important de le comprendre
            {appSize >= 550 && <br />}
            avant d'envisager quoi que ce soit.
          </p>
        </div>
        <div className='d-flex-column gap-24'>
          <p
            className={`ff-title ${appSize < 900 ? 'fs-18' : 'fs-24'}`}
            style={{ whiteSpace: 'nowrap' }}
          >
            Travail additionel
          </p>
          <p
            className={`ff-text ${appSize < 900 ? 'fs-10' : 'fs-16'}`}
            // style={{ whiteSpace: 'nowrap' }}
          >
            Additionnellement au tatouage,
            {appSize >= 550 && <br />}
            je travaille sur des commandes
            {appSize >= 550 && <br />}
            d'illustration et produits dérivés.
          </p>
        </div>
        <div className='d-flex-column gap-24'>
          <p className={`ff-title ${appSize < 900 ? 'fs-18' : 'fs-24'}`}>
            Contact
          </p>
          <div
            className={`${
              appSize < 550
                ? 'd-flex-row jc-space-between'
                : 'd-flex-column gap-16'
            } c-on-surface ff-text ${appSize < 900 ? 'fs-10' : 'fs-16'}`}
          >
            <a
              href='mailto:g.sathantattoo@gmail.com'
              target='_blank'
              className='c-on-surface'
            >
              Email
            </a>
            <p className='td-underline cursor-pointer'>Formulaire</p>
            <a href='' target='_blank' className='c-on-surface'>
              Adresse
            </a>
            <a
              href='https://www.instagram.com/gerard_sathan/'
              target='_blank'
              className='c-on-surface'
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className='d-flex-row jc-center ai-center w-full ff-title c-on-surface-variant fs-16'>
        <p>G.Sathan</p>
        <div
          className='b-on-surface-variant bora-full mr-8 ml-8'
          style={{ width: '.5rem', height: '.5rem' }}
        ></div>
        <p>Tout droits réservé</p>
      </div>
    </div>
  );
}
