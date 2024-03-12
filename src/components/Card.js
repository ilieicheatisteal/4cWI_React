import React from "react";

export default function Card({ name, points, icon, won, lost, goalDiff, draw,matches}) {
  return (
    <div className="border-8 h-20 flex justify-around items-center w-full p-8 border-red-600 rounded-2xl mb-5">
      <div className="w-full grid grid-cols-[50px_90%] justify-around">
        <img src={icon} alt="" className="h-10 w-10" />
        <h2 className="font-bold text-xl">{name}</h2>
      </div>
      <div className="font-semibold text-xl ">
        <div className="flex">
        <div className="ml-20">{matches}</div>
        <div className="ml-20">{won}</div>
        <div className="ml-20">{lost}</div>
          <div className="ml-20">{draw}</div>
          <div className="ml-20">{goalDiff}</div>
          <div className="ml-20">{points}</div>
          <div className="ml-1">P</div>
        </div>
      </div>
    </div>
  );
}
