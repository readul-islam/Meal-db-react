import React, { useState } from 'react';
import './Header.css'
import logo from '../../image/logo-small.png'
import Dataload from '../Dataload/Dataload';

const Header = () => {
    const [value, setValue] = useState('')
    const handler = () =>{
        const inputField = document.getElementById('inputfiled');
        let inputValue = inputField.value;
        // console.log(inputValue)
        inputField.value = '';
       if(inputValue){
        setValue(inputValue);
       }
        
    }
    // console.log(value)
    return (
        <div>
           <div className="header">
            <img src={logo} alt="" />
           
           <div className="manu-container">
               <input id="inputfiled" type="text"  placeholder="search your foods" />
               <button onClick={handler} id= 'button'>Search</button>
               <a href="/Home"> Menu</a>
               <a href="/Home">Online Ordering</a>
               <a href="/Home"> Upcoming Events</a>
               <a href="/Home">About</a>
           </div>
           
        </div>
         <Dataload inputValue={value}></Dataload>
        </div>
        
    );
};

export default Header;