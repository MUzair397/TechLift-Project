import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "./style/Header.css";

function Header() {
  const [sessionData,setSessionData] = useState(null);
  const getSession = () => {
    setSessionData(sessionStorage.getItem("userId"));
    setSessionData(sessionStorage.getItem("userEmail"));
  };

  const logout = () => {
    sessionStorage.clear();
    setSessionData(null);
  };
  
  useEffect(() => {
    getSession();
  }, []);
  return (
    <div className="header fixed-top">
      <nav class="navbar p-3 navbar-expand-lg dark-nav not-visible-nav bg-dark navbar-light">
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
          <Link className="navbar-brand text-white list" to="/">
            Home
          </Link>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link text-white" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link text-white" to="/services">
                Services
              </Link>
            </li>
          </ul>
        </div>
        <form className="form-inline my-2 my-lg-0">
        { sessionData===null?(
          <Link to="/login"
            className="btn btn-outline-success px-4 my-2 my-sm-0 border-0 text-white"
            type="submit"
          >
            LogIn
          </Link>
        ):
        (
          <Link to='/create'
            className="btn btn-outline-success px-4 my-2 my-sm-0 border-0 text-white"
            type="submit"
            onClick={logout}
          >
            LogOut
          </Link>
        )}
          <Link to='/register'
            className="btn btn-outline-success px-4 my-2 my-sm-0 ml-2 border-0 text-white"
            type="submit" 
          >
            SignUp
          </Link>
        </form>
      </nav>
    </div>
  );
}

export default Header;
