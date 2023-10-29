import { useEffect } from "react";
import { useState } from "react";
import Countrie from "../countrie/Countrie";


const Countries = () => {
    const [countries,setCountries]=useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])

    return (
        <div className="container mx-auto grid grid-cols-4 gap-5 my-20">
            {
                countries.map((countrie,id)=><Countrie countrie={countrie} key={id}></Countrie>)
            }
            
        </div> 
    );
};

export default Countries;