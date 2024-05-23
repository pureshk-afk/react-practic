import { useEffect } from "react";
import image from "../assets/Group21.svg";
import "../header/header.css";
import { Button } from "../snippets/button";

const MENU = [
  {
    name: "News",
    link: "/"
  },
  {
    name: "About us",
    link: "/"
  },
  {
    name: "Home",
    link: "/"
  }
];

export function Header() {
  useEffect(() => {
    return;
  }, []);

  return (
    <>
      <header>
        <div className="container-header">
          <img src={image}></img>
          <div className="container-header__menu">
            <Button />
            <div className="__links">
              {MENU.map((item) => (
                <a href="#" key={item.link}>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
