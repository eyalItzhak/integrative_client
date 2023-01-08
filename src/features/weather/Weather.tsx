import React ,{useEffect,useState} from "react";
import { GetWetherCommand } from "../../api/Interfaces/mokupCommands";
import WetherDashboard from "./WetherDashboard";
// import { Form, TextArea, Card } from "semantic-ui-react";
// import mockupCommand from "../../api/Interfaces/mokupCommands";

export default function Weather() {

    const [weather, setWeather] = useState<any>(false);


    useEffect(() => {
        const fetchData = async () => {
                const weatherData =  await GetWetherCommand();
                console.log(weatherData);
                setWeather(weatherData);
        }
        fetchData().catch(console.error);
    },[setWeather])

    
    

    return (<>
    
    {!weather&&<h1>loading</h1>}
    {weather&&<WetherDashboard weather={weather}/>}
    </>)
  

}
