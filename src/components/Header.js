import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-red-500 h-20 w-full text-2xl items-center flex font-extrabold justify-center text-white outline-black outline-1">
      <Link to="Matchday">
        {" "}
        <img src="bundesliga.jpg" className="h-20 w-30" />{" "}
      </Link>
      <Link to="/"> Bundesliga 2024 </Link>{" "}
    </div>
  );
}
