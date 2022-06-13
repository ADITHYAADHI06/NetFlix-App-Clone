import React,{useState,useEffect} from 'react'
import "./Nav.css"

function Nav() {


  const [show, handleShow] = useState(false);

  // ! i have copied the code from stackoverflow for scroll down navabr
  useEffect(() => {
      window.addEventListener("scroll", () =>{
          if(window.scrollY > 100){
              handleShow(true);
          }else handleShow(false);
      });
      return () => {
          window.removeEventListener("scroll",null);
      }    
  }, [])


  
  return (
        <div className={`navbar ${show && "nav__black"}`}>
            <img
            className="nav__logo"
             src="http://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="NETFLIX" />
            <img
            className="nav__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="AVATAR"
            />
    </div>
  )
}

export default Nav