import {
  faBars,
  faMagnifyingGlass,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./NavBar.css";

const NavBar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    "Women",
    "Men",
    "Baby",
    "Kids",
    "H&M HOME",
    "Sport",
    "Sale",
    "지속가능성",
  ];

  const navigate = useNavigate();
  const search = (e) => {
    if (e.key === "Enter") {
      // 입력한 검색어를 읽어와서 url을 바꿔준다.
      let keyword = e.target.value;
      navigate(`/?q=${keyword}`);
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    isOpen
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <header>
      <div className="header-inner">
        <div className="lnb">
          <div className="search">
            <i>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </i>
            <input
              type="text"
              placeholder="Search..."
              onKeyPress={(e) => search(e)}
            />
          </div>
          {authenticate ? (
            <button className="sign" onClick={() => setAuthenticate(false)}>
              <FontAwesomeIcon icon={faUser} />
              LOGOUT
            </button>
          ) : (
            <button className="sign" onClick={() => navigate("/login")}>
              <FontAwesomeIcon icon={faUser} />
              LOGIN
            </button>
          )}
        </div>
        <h1 className="logo">
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </h1>
        <button className="btn-hamburger" onClick={() => toggleMenu()}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <nav className={isOpen ? "open" : ""}>
          <div className="menu-wrapper">
            <button className="btn-menu-close" onClick={() => toggleMenu()}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <ul className="menu">
              {menuList.map((menu, index) => {
                return (
                  <li key={index}>
                    <a href="#n">{menu}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
