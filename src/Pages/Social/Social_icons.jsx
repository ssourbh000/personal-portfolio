import './Social_icons.scss'

const Social_icons = ({logo, title}) => {
  return (
    <div className='social-media-links'>
        <a href="#">
          <img src={logo} alt="logo" />
          
        </a> <h1>{title}</h1>
    </div>
  )
}

export default Social_icons