import logo from '../../images/logo_gsathan.svg';
import logoSmall from '../../images/logo_gsathan_small.svg';

export default function Logo({size = large}) {
  return (
    <div className='d-flex-row ai-center jc-center mt-8 mr-24 mb-8 ml-24'>
      <img src={size === 'small' ? logoSmall : logo} alt="logo" className={ size === 'small' ? 'mr-16' : 'mr-24' } />
      <p className={`ff-title c-on-surface ${size === 'small' ? 'fs-24' : 'fs-40' }`}>G.Sathan</p>
    </div>
  )
}