import React from 'react'

function PositionFilter(props) {
    
    const dropDownHandler = e => {
        props.onChangeFilter(e.target.value);
    }

    return (
        <div className='flex justify-center lg:justify-evenly my-1 items-start w-full lg:w-1/3'>
            <label className='text-sm lg:text-lg font-bold py-2 mx-2'>Filter By Position</label>
            <select value={props.selected} onChange={dropDownHandler} className='rounded-md h-10 shadow-lg text-sm md:text-base lg:text-lg font-medium'>
                <option value='All'>All</option>
                <option value='F'>Forward</option>
                <option value='M'>Midfielder</option>
                <option value='D'>Defender</option>
                <option value='G'>Goalkeeper</option>
            </select>
        </div>
    )
}

export default PositionFilter