import React from 'react';

function TeamFilter(props) {

    const dropDownHandler = e => {
        props.onChangeFilter(e.target.value);
    }

    return (
        <div className='flex justify-center lg:justify-evenly my-1 items-start w-full lg:w-1/3'>
            <label className='text-sm lg:text-lg font-bold py-2 mx-2'>Filter By Team</label>
            <select value={props.selected} onChange={dropDownHandler} className='rounded-md h-10 shadow-lg text-sm md:text-base lg:text-lg font-medium'>
                <option value='All'>All</option>
                <option value='Argentina'>Argentina</option>
                <option value='Australia'>Australia</option>
                <option value='Belgium'>Belgium</option>
                <option value='Brazil'>Brazil</option>
                <option value='Cameroon'>Cameroon</option>
                <option value='Canada'>Canada</option>
                <option value='Costa Rica'>Costa Rica</option>
                <option value='Croatia'>Croatia</option>
                <option value='Denmark'>Denmark</option>
                <option value='Ecuador'>Ecuador</option>
                <option value='England'>England</option>
                <option value='France'>France</option>
                <option value='Germany'>Germany</option>
                <option value='Ghana'>Ghana</option>
                <option value='Iran'>Iran</option>
                <option value='Japan'>Japan</option>
                <option value='Mexico'>Mexico</option>
                <option value='Morocco'>Morocco</option>
                <option value='Netherlands'>Netherlands</option>
                <option value='Poland'>Poland</option>
                <option value='Portugal'>Portugal</option>
                <option value='Qatar'>Qatar</option>
                <option value='Saudi Arabia'>Saudi Arabia</option>
                <option value='Senegal'>Senegal</option>
                <option value='Serbia'>Serbia</option>
                <option value='South Korea'>South Korea</option>
                <option value='Spain'>Spain</option>
                <option value='Switzerland'>Switzerland</option>
                <option value='Tunisia'>Tunisia</option>
                <option value='Uruguay'>Uruguay</option>
                <option value='USA'>USA</option>
                <option value='Wales'>Wales</option>
            </select>
        </div>
    )
}

export default TeamFilter;