import React from 'react';

import TeamCard from '../UI/TeamCard';

import "./Team.css"

function Team({ forwards, midfielders, defenders, keepers, removePlayer }) {
    return (
        <div className="backgroundImg h-96 md:h-120 bg-center flex flex-col justify-evenly items-center px-5 rounded-xl">
            <div className='flex flex-row'>
                {keepers.map((player) => (
                    <TeamCard key={player.name} player={{
                    name: player.name, position: player.position, price: player.price, nationality: player.nationality}} removePlayer={removePlayer} />
                ))}
            </div>
            <div className='flex flex-row'>
                {defenders.map((player) => (
                    <TeamCard key={player.name} player={{
                    name: player.name, position: player.position, price: player.price, nationality: player.nationality}} removePlayer={removePlayer} />
                ))}
            </div>
            <div className='flex flex-row'>
                {midfielders.map((player) => (
                    <TeamCard key={player.name} player={{
                    name: player.name, position: player.position, price: player.price, nationality: player.nationality}} removePlayer={removePlayer} />
                ))}
            </div>
            <div className='flex flex-row'>
                {forwards.map((player) => (
                    <TeamCard key={player.name} player={{
                    name: player.name, position: player.position, price: player.price, nationality: player.nationality}} removePlayer={removePlayer} />
                ))}
            </div>
        </div>
    )
}

export default Team;