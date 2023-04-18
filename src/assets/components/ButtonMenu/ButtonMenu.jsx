export default function ButtonMenu({
  appSize,
  iconType = 'font',
  icon,
  name,
  onClick,
  title
}) {
  return (
    <div
      className='d-flex-row ai-center pr-8 pl-16 hover hover-icons cursor-pointer user-select-none'
      style={{ borderRadius: '0 10rem 10rem 0', height: '4rem' }}
      data-title={appSize >= 600 ? title : null}
      onClick={onClick}
    >
      {iconType === 'font' ? (
        <span className='material-symbols-outlined user-select-none c-on-surface-variant'>
          {icon}
        </span>
      ) : (
        <div
          className='d-flex-row ai-center jc-center'
          style={{ height: '2.4rem', width: '2.4rem' }}
        >
          <svg
            width='22'
            height='22'
            viewBox='0 0 22 22'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d={icon} className='f-on-surface-variant' />
          </svg>
        </div>
      )}
      <p className='ff-text c-on-surface ml-16 mr-16'>{name}</p>
    </div>
  );
}
