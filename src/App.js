import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import City from './City';

function App() {

  const key="dfa018053543b8c6b9aadeda3983b127";
  const [city,setCity]=useState();
  const [search,setSearch]=useState("");

  useEffect(()=>{
    async function getApi() {
      try { 
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);  
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  },[search])

return (
  <div className="App">
    <div>
      <input
        onChange={(event) => setSearch(event.target.value)}
        type="text"
        placeholder="City"
        className=" my-5 px-3 w-[250px] py-3 placeholder-blueGray-300 text-blueGray-600   bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring "
      />
      {city && <City city={city} />}
    </div>
  </div>
);
}
export default App;
