import './Social_icons.scss'

const Social_icons = ({logo, title, url}) => {

  const handleClick = () => {
    window.open(url); // Opens the link in a new tab/window
  }

  return (
    <div className='social-media-links' onClick={handleClick}>
        <a href='#'>
          <img src={logo} alt="logo" />
          
        </a> <h1>{title}</h1>
    </div>
  )
}

export default Social_icons