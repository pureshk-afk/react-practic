import React from "react";
import "../News/news.css";

const post_info = [
  {
    id: 1,
    title: "SWEAT KITTY",
    img: "",
    date: "12-12-2002"
  },
  {
    id: 2,
    title: "NEW KITTY",
    img: "",
    date: "16-12-2002"
  },
  {
    id: 3,
    title: "NEW SWEAT KITTY",
    img: "",
    date: "16-12-2002"
  }
];

function Card() {
  return (
    <>
      <div className="card">
        {post_info
          .filter((element) => element.title === "SWEAT KITTY")
          .map((element) => (
            <div className="card__content" key={element.id}>
              <h1> {element.title}</h1>
              <img src={element.img} />
              <p>{element.date}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default Card;
