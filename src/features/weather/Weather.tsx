import { observer } from "mobx-react-lite";
import React ,{useEffect,useState} from "react";
import { GetWetherCommand } from "../../api/Interfaces/mokupCommands";
import { useStore } from "../../app/stores/store";
import WetherDashboard from "./WetherDashboard";
// import { Form, TextArea, Card } from "semantic-ui-react";
// import mockupCommand from "../../api/Interfaces/mokupCommands";

export default observer( function Weather() {

    const {userStore} = useStore();
    const [weather, setWeather] = useState<any>(false);


    useEffect(() => {
        const fetchData = async () => {
                const weatherData =  await GetWetherCommand(userStore.user!);
                console.log(weatherData);
                setWeather(weatherData);
        }
        fetchData().catch(console.error);
    },[setWeather,userStore])

    
    

    return (<>
    
    {!weather&&<h1>loading</h1>}
    {weather&&<WetherDashboard weather={weather}/>}
    </>)
  

})
