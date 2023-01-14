import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Weather=()=> {
    const [apiData, setApiData] = useState()
    const [search, setSearch] = useState("")

    useEffect(()=>{
       axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c9ef1584f15e3701d8d94b7474048ada&units=metric`)
      .then(res => {
        console.log(res.data)
        setApiData(res.data)})
     } )
    return (
        <div className='box'>
            <h1>Weather <span>App</span></h1>
            <input type="text" name="search" placeholder='search city in english' onChange={(e)=>setSearch(e.target.value)} value={search} />
            {apiData && search ? <div className='element'>
                <img src={"http://openweathermap.org/img/w/" + apiData.weather[0].icon + ".png"} alt="weather"/>
                <p><span>Temperature : </span>{apiData.main.temp}</p>
                <p><span>Name : </span>{apiData.name}</p>
                <p><span>Country : </span>{apiData.sys.country}</p>
                <p><span>Humidity : </span>{apiData.main.humidity}</p>
                </div> : <h1>No data Found</h1>}
        </div>
    );
}

export default Weather;





        