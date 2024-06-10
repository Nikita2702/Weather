import React, { useEffect, useState } from 'react'
import "./css/style.css"
const Weather = () => {
  let [city,setCity]=useState();
  let[search,setSearch]=useState();

  useEffect(()=>{

    const fetchApi=async()=>{
      let url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5feace29a6a10ce813285e0d3728d77e`
      const response=await fetch(url);
      const jsonres= await response.json();
      // console.log(jsonres);
      setCity(jsonres.main)
    }

    fetchApi();
  },[search])


  let inputEvent=(e)=>{
    setSearch(e.target.value);
  }
  return (
    <>
        <div className='box'>
            <div className="inputData">
              <input type="search" className='inputField' value={search} onChange={inputEvent}/>
            </div>

            {!city?(
                  <p id='para'>No Data Found</p>
                ):
                (
                  <>
                    <div className="info">
                      <h2 className='location'><i className="fa-solid fa-street-view"></i>{search}</h2>
                      <h1 className='temp'>{city.temp}</h1>
                      <h3 className='minmax'>Min : {city.temp_min}&#8451;el | Max : {city.temp_max}&#8451;el</h3>
                    </div>

                    <div className="wave -one"></div>
                    <div className="wave -two"></div> 
                    <div className="wave -three"></div>
                  </>
                )
            }
        </div>
    </>
  )
}

export default Weather
