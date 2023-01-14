
import { Statistic } from "semantic-ui-react";

interface props{
    temp_c : number ;
    feelslike_c : number ;
    last_updated : string ;
    humidity : number ;
}

 export default function BasicWeatherInfo({temp_c,feelslike_c,last_updated,humidity}:props) {

  return (
    <Statistic.Group>
      <Statistic label="temp (celsius)" value={temp_c} />
      <Statistic label="temp feelslike (celsius)" value={feelslike_c} />
      <Statistic label="humidity" value={humidity} />
      <Statistic label="date" value={last_updated} text />

    </Statistic.Group>
  );
}
