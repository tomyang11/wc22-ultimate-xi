import React from 'react'

function TeamCard(props) {
  
    const { name, price, nationality } = props.player;

    const onClickHandler = () => {
      props.removePlayer(props.player);
    }

    const getLastName = (fullName) => {
      let tokens = fullName.split(" ");
      let lastName = "";
      if (tokens.length === 1) {
        lastName = tokens[0];
      } else if (tokens.length === 2 && tokens[1] === "Jr") {
        lastName = tokens[0] + " " + tokens[1];
      } else if (tokens.length > 1) {
        lastName = tokens.slice(1).join(" ");
      }
      return lastName;
    }

    const flagPath = "flags4836/" + nationality.replace(" ", "-").toLowerCase() + ".png";
  
    return (
    <div className='flex flex-col justify-center items-center bg-white p-1 md:p-2 mx-2 md:mx-5 rounded-md shadow-lg shadow-slate-700 md:w-30 lg:w-40'>
      <div className='flex flex-row justify-center items-center w-full'>
        <img src={flagPath} alt={`${nationality} Flag`} className='hidden md:flex h-4 mx-1' />
        <p className='font-bold text-xs md:text-sm lg:text-base mx-1'>{getLastName(name)}</p>
      </div>
      <div className='flex justify-between items-center w-full my-1'>
        <p className='font-bold text-sm lg:text-base'>${price}</p>
        <button onClick={onClickHandler} className='rounded-md text-white px-2 py-1 text-sm font-bold bg-[#891638] hover:bg-[#b3687e]'><span className='inline lg:hidden'>x</span><span className='hidden lg:inline'>Remove</span></button>
      </div>
    </div>
  )
}

export default TeamCard;