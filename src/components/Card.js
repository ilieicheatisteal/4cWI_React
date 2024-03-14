import React from "react";

export default function Card({
  name,
  points,
  icon,
  won,
  lost,
  goalDiff,
  draw,
  matches,
}) {
  return (
    <div className="">
      <div className="grid grid-cols-[50px_auto_40px_40px_40px_40px_40px_40px_40px] gap-4  w-full">
        <img src={icon} alt="" className="h-10 w-10" />
        <h2 className="font-bold text-xl">{name}</h2>

        <div className="invisible md:visible ml-20">{matches}</div>
        <div className="invisible md:visible ml-20">{won}</div>
        <div className="invisible md:visible ml-20">{lost}</div>
        <div className="invisible md:visible ml-20">{draw}</div>
        <div className="invisible md:visible ml-20">{goalDiff}</div>
        <div className="ml-20 flex gap-2">
          <div>{points}</div>
          <div>P</div>
        </div>
       
      </div>
    </div>
  );
}
