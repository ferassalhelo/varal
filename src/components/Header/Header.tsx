import Img from "../Img/Img";
import style from "./Header.module.css";
import logo from "../../assets/images/Group 114.png";
import Button from "../Button/Button";
import { useState } from "react";

const headerPathes = [
  { name: "Home", path: "#home" },
  { name: "Services", path: "#serv" },
  { name: "Pricing", path: "#pric" },
  { name: "About Us", path: "#about" },
];

function Header() {
  const [show, setShow] = useState(false);
  return (
    <header
      className={
        show ? `${style.header} ${show ? style.show : null}` : style.header
      }
    >
      <div className={style.xl_box}>
        <a href="#home">
          <img className={style.logo} alt="logo" src={logo} />
        </a>
        <ul className={style.list}>
          {headerPathes.map((item) => (
            <li key={item.path} className={style.itemList}>
              <a onClick={() => setShow(!show)} href={item.path}>
                {item.name}
              </a>
            </li>
          ))}
          <li className={style.itemList}>
            <Button p="15px 10px" fs="1.3rem">
              Start a Company
            </Button>
          </li>
        </ul>
      </div>
      <button onClick={() => setShow(!show)} className={style.btn}>
        <i className="fa-solid fa-bars"></i>
      </button>
    </header>
  );
}

export default Header;
