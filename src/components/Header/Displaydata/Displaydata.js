import React from 'react';
import './Displaydata.css'

const Displaydata = ({data,cartHandler}) => {
    // console.log(data)
    const {strMealThumb,strMeal,strInstructions} = data;
    return (
        <div className="food">
            <img src={strMealThumb} alt="" />
            <div className="info">
                <h3>{strMeal}</h3>
                <p>{strInstructions.slice(0,100)}</p>
            </div>
            <button onClick={()=>{cartHandler(data)}} className="button"><p>Add Cart</p></button>
        </div>
    );
};

export default Displaydata;