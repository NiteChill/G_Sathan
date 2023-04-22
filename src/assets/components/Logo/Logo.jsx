import logo from '../../images/logo_gsathan.svg';

export default function Logo() {
  return (
    <div className='d-flex-row ai-center jc-center mt-8 mr-24 mb-8 ml-24'>
      <img src={logo} alt="logo" className={'mr-16'} />
      <p className={`ff-title c-on-surface fs-24`}>Gerard Sathan</p>
    </div>
  )
}