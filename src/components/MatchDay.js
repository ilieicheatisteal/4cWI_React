import React, { useEffect, useState } from 'react'
 
export default function MatchDay() {
    const [Match, setDay] = useState([]);
    useEffect(() => {
        fetch("https://api.openligadb.de/getmatchdata/bl1/2023/1").then(
            (res) =>
                res.json().then((data) => {
                    setDay(data);
 
                })
        );
    }, []);
 
    return (
        <div className='pl-20 pr-20'>
            {Match.map(Match => (
                <div className="border-8 h-20 flex justify-around items-center w-full p-8 border-red-600 rounded-2xl mb-5 text-2xl font-bold" key={""}>
                    <div> {Match.team1.teamName}</div>|<div>{Match.team2.teamName}</div>
                </div>
            ))}
        </div>
    )
}
 