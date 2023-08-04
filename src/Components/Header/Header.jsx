import "./Header.scss";
import { links } from "../../Data";

const handleClick = (e) => {
  e.preventDefault();
  const target = e.target.getAttribute("href");
  const location = document.querySelector(target).offsetTop;

  window.scrollTo({
    left: 0,
    top: location - 120,
    behavior: "smooth",
  });
};

const Header = () => {
  return (
    <section>
      <div className="conatiner">
        <div className="row" id="head">
          <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div class="container">
              <a class="navbar-brand" href="#">
                SOURABH
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  
                {links?.map((link) => {
                            return (

                              <li key={link.id} class="nav-item">
                                <a class="nav-link active" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" href={link.url} onClick={handleClick}>
                                  {link.text}
                                </a>
                              </li>
                            );
                          })}
                 
                     
                     
                    
                  
                  
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
    // <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light" id="navBar">
    //   <div class="container-fluid">
    //     <a class="navbar-brand" href="#" id="nameLogo">
    //       Sourabh
    //     </a>
    //     <button
    //       class="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"

    //     >
    //       <span class="navbar-toggler-icon" id="linebtn"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarNav">
    //       <ul class="navbar-nav">
    //         {links?.map((link) => {
    //           return (
    //             <li key={link.id} class="nav-item">
    //               <a href={link.url} onClick={handleClick}>
    //                 {link.text}
    //               </a>
    //             </li>
    //           );
    //         })}

    //         {/* <li class="nav-item">
    //       <a class="nav-link active" aria-current="page" href="#">Home</a>
    //     </li>
    //     <li class="nav-item">
    //       <a class="nav-link" href="#">About</a>
    //     </li>
    //     <li class="nav-item">
    //       <a class="nav-link" href="#">Skills</a>
    //     </li>
    //     <li class="nav-item">
    //       <a class="nav-link" href="#">Tools</a>
    //     </li>
    //     <li class="nav-item">
    //       <a class="nav-link" href="#">Project</a>
    //     </li>
    //     <li class="nav-item">
    //       <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    //     </li> */}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    // <header>
    //   <div className="container">
    //   <div className="row ">
    //   <div className="logo col-lg-4 mt-2">
    //         <h3>Sourabh</h3>
    //     </div>

    //     <div className="nav col-lg-8 mt-2">

    //           <ul >
    //             {links?.map((link) => {
    //               return (
    //                 <li key={link.id}>
    //                   <a
    //                   className="nav-item"
    //                     href={link.url}
    //                     onClick={handleClick}

    //                   >
    //                     {link.text}
    //                   </a>
    //                 </li>
    //               )
    //             })}

    //           </ul>

    //     </div>

    //   </div>

    //   </div>

    // </header>
  );
};

export default Header;
