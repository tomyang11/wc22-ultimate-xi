import React from 'react'

function Sort(props) {
    
    const dropDownHandler = e => {
        props.onChangeSort(e.target.value);
    }
    
    return (
        <div className='flex justify-center lg:justify-evenly my-1 items-start w-full lg:w-1/3'>
            <label className='text-sm lg:text-lg font-bold py-2 mx-2'>Sort By</label>
            <select value={props.selected} onChange={dropDownHandler} className='rounded-md h-10 shadow-lg text-sm md:text-base lg:text-lg font-medium'>
                <option value='HL'>Price (High to Low)</option>
                <option value='LH'>Price (Low to High)</option>
            </select>
        </div>
    )
}

export default Sort