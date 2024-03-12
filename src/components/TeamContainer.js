import React, { useEffect, useState, } from "react";
import Card from "./Card";

export default function TeamContainer() {
  const [team, setteam] = useState([]);
  const [filteredTeam, setFilteredTeam] = useState([]);


  useEffect(() => {
    fetch("https://api.openligadb.de/getbltable/bl1/2023").then((res) =>
      res.json().then((data) => {
        setteam(data);
        setFilteredTeam(data);

      })
    );
  }, []);
  const filterTeam = (filter) => {
    let filtered = team.filter((team) => team.name.includes(filter));
    setFilteredTeam(filtered);
  };

  return (
    <div>
   <div className="headerr">
       
    <div className="trendyol"></div>
    </div>
    <div className="bg-red-500 h-20 w-full text-2xl items-center flex font-extrabold justify-center text-white outline-black outline-1">
    <img src="bundesliga.jpg" className="h-20 w-30"/>
      Bundesliga 2024</div>
    <div className="flex justify-end mr-10 text-xl font-bold ">
    <div className="ml-2">M</div>
    <div className="ml-20">W</div>
    <div className="ml-20">L</div>
    <div className="ml-20">D</div>
    <div className="ml-20">GD</div>
    <div className="ml-20">PT</div>
    <div className="ml-10"></div>
    </div>
      <div className=" gap-4 p-8 pt-30">
        {team.map((person) => {
          return (
            <Card
              name={person.teamName}
              icon={person.teamIconUrl}
              points={person.points}
              matches={person.matches}
              won={person.won}
              lost={person.lost}
              goalDiff={person.goalDiff}
              draw={person.draw}
            />
          );
        })}
      </div>
    </div>
  );
}
