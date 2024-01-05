import React from "react";

export default function Card({name, title, image}) {
  return (
    <div className="border">
      <div>
        <h2>{name}</h2>
        <h4>{title}</h4>
      </div>
      <div>
        <img src={image} alt="" />{" "}
      </div>
    </div>
  );
}
