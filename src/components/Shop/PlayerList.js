import React from 'react';

import ShopCard from '../UI/ShopCard';

function PlayerList({players, addPlayer}) {
    return (
        <div className='flex flex-row flex-wrap justify-center w-full'>
            {players.map((player) => (
                <ShopCard key={player.name} player={{
                name: player.name, position: player.position, price: player.price, nationality: player.nationality, image: player.image
                }} addPlayer={addPlayer} />
            ))}
        </div>
    )
}

export default PlayerList;