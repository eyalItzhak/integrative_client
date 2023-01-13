import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import { observer } from 'mobx-react-lite';
import ModalContainer from '../common/modals/ModalContainer';
import ServicesDashboard from '../../features/services/ServicesDashboard';
import NavBar from './NavBar';
import { Container } from 'semantic-ui-react';
import OracleGptDashboard from '../../features/oracleGpt/OracleGptDashboard';
import Weather from '../../features/weather/Weather';
function App() {

  return (
    <>
      <Route exact path='/' component={HomePage} />
      <ModalContainer />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar /> 
            <Container style={{ marginTop: '7em' }}>
              <Switch>
                <Route exact path='/Services' component={ServicesDashboard} />
                <Route exact path='/Services/Tlv Oracle' component={OracleGptDashboard} />
                <Route exact path='/Services/weather' component={Weather} />
              </Switch>
            </Container>
          </>
        )} />
    </>
  );
}

export default observer(App);
