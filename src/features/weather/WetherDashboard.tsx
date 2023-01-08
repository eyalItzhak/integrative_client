import { Grid, Image } from "semantic-ui-react";
import { Weather } from "../../api/Interfaces/command";
import BasicWeatherInfo from "./BasicWeatherInfo";
import WindConditions from "./WindConditions";

interface props {
  weather: Weather;
}

export default function WetherDashboard({ weather }: props) {
  return (
    <Grid celled="internally">
      <Grid.Row>
        <Grid.Column width={3}>
          <h2>{weather.current.condition.text}</h2>
          <Image src={weather.current.condition.icon} size="small" />
        </Grid.Column>

        <Grid.Column width={10}>
          <Grid.Row style={{ display: "flex", alignItems: "center", justifyContent: "center",}}>
            <BasicWeatherInfo temp_c={weather.current.temp_c} feelslike_c={weather.current.feelslike_c} last_updated={weather.current.last_updated} humidity={weather.current.humidity}/>
          </Grid.Row>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={3}>
          <h2>Wind Conditions</h2>
          <Image src="https://d29fhpw069ctt2.cloudfront.net/icon/image/83111/preview.svg" />
        </Grid.Column>
        <Grid.Column width={10}>
          <WindConditions wind_kph={weather.current.wind_kph} pressure_mb={weather.current.pressure_mb} wind_degree={weather.current.wind_degree} wind_dir={weather.current.wind_dir } />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
