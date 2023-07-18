import './Header.scss'
import {links} from '../../Data'

const handleClick = (e) => {
  e.preventDefault();
  const target = e.target.getAttribute("href");
  const location = document.querySelector(target);

  window.scrollTo({
    left: 0,
    top: location - 120,
    behavior: 'smooth'
  });
};

const Header = () => {
  return (
    <header>
        <div className="logo">
            <h3>Sourabh</h3>
        </div>
        <div className="nav">
        
              <ul >
                {links?.map((link) => {
                  return (
                    <li key={link.id}>
                      <a
                        href={link.url}
                        onClick={handleClick}
                        data-toggle="collapse"
                        data-target="#navigation"
                      >
                        {link.text}
                      </a>
                    </li>
                  );
                })}
              </ul>
              
        </div>
    </header>
  )
}

export default Header