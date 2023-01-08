
import { Statistic } from "semantic-ui-react";

interface props{
    wind_kph : number ;
    wind_degree : number ;
    wind_dir : string ;
    pressure_mb : number ;

}

 export default function WindConditions({wind_kph,wind_degree,wind_dir,pressure_mb}:props) {

  return (
    <Statistic.Group>
      <Statistic label="wind speed(kph)" value={wind_kph} />
      <Statistic label="wind degree" value={wind_degree} />
      <Statistic label="wind dir" value={wind_dir} />
      <Statistic label="pressure bar" value={pressure_mb} />

    </Statistic.Group>
  );
}
