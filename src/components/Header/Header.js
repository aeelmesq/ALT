import "../../StyleComponents/Header.css";
import DbButton from "./DbButton.js";
import Menu from "./Menu.js";
import logo from "../../img/logo512.png";
import { useState } from "react";

function Header() {
  const [windonwScrollY, setWindonwScrollY] = useState(0);

  const [windonwScrollYTpr, setWindonwScrollYTpr] = useState(0);

  window.addEventListener("scroll", () => {
    setWindonwScrollYTpr(windonwScrollY);
    setWindonwScrollY(window.scrollY);
  });

  return (
    <header
      id="webHeader"
      className={
        windonwScrollY > 0
          ? windonwScrollY < windonwScrollYTpr
            ? "FixedHeader"
            : "upSideHeader"
          : "none"
      }
    >
      <section id="left">
        <img src={logo} alt="Logo" width="60px" />
        <h1>ALT</h1>
      </section>
      <section id="right">
        <Menu />
        <DbButton
          link1={"?menu=SingIn&page=2"}
          output1={"Sing In"}
          link2={"?menu=Register&page=2"}
          output2={"Reister"}
        />
      </section>
    </header>
  );
}

export default Header;
