import React, { useEffect, useState } from 'react';
import Cartdetails from '../Cartdetails/Cartdetails';
import Displaydata from '../Header/Displaydata/Displaydata';
import './Dataload.css'

const Dataload = ({inputValue}) => {
   
    const [alldata, setAlldata] = useState([])
    const [cartfood, setCartfood] = useState([]);
    // const {strMeal} = cartfood
    // console.log()
    
    useEffect(()=>{
        
           
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
        .then(response => response.json())
        .then(data => setAlldata(data.meals))
       
      
    },[inputValue])
    // console.log(alldata)
    const cartContent = (food) =>{
        setCartfood([...cartfood, food])
    }
    // console.log(cartfood)
    return (
        <div className="main-container">
        <div className="food-container">
           
            {
                alldata.map(data => <Displaydata data={data}
                cartHandler={cartContent}
                ></Displaydata>)
            }
        </div>
        <div className='card-container'>
            <h2>Food Summary
              
            </h2>
           
             {
                  cartfood.map(food => <Cartdetails food ={food}></Cartdetails>)
              }
           

        </div>
        </div>
    );
};

export default Dataload;