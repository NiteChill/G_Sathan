export default function ContactMe({appSize}) {
  return (
    <div className='d-flex-row ai-center jc-end width-full b-surface-1 c-on-surface ff-text border-bottom-1'>
      {appSize > 325 && (
        <div
          className={`d-flex-column jc-center pr-24 pl-24 ${
            appSize > 450 && 'border-left-1'
          }`}
          style={{
            height:
              appSize < 800 ? '6.4rem' : appSize < 1050 ? '10.333rem' : '14.067rem',
          }}
        >
          <p
            className={`ff-title ${
              appSize < 800 ? 'fs-18' : appSize < 1050 ? 'fs-32' : 'fs-48'
            }`}
          >
            Me contacter
          </p>
          <p
            className={`pt-8 ${
              appSize < 800 ? 'fs-10' : appSize < 1050 ? 'fs-16' : 'fs-20'
            }`}
          >
            Contactez moi avec ce simple formulaire
          </p>
        </div>
      )}
      <div
        className={`d-flex-row ai-center jc-center height-full b-primary cursor-pointer user-select-none hover-red ${
          appSize < 800 ? 'p-24' : appSize < 1050 ? 'pt-40 pr-32 pb-40 pl-32' : 'pt-56 pr-48 pb-56 pl-48'
          } ${appSize <= 325 && 'width-full'}`}
        onClick={() => {}}
      >
        <p
          className={`mr-8 ${
            appSize < 800 ? 'fs-10' : appSize < 1050 ? 'fs-16' : 'fs-20'
          }`}
        >
          Formulaire de contact
        </p>
        <span className={`material-symbols-outlined cursor-pointer user-select-none c-on-surface ${ appSize < 1050 ? 'fs-16' : 'fs-24'}`}>
          arrow_outward
        </span>
      </div>
    </div>
  );
}
