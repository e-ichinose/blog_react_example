import React from 'react';
import { Top } from './components/pages';
import { URLPath } from './common/constants';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

const AppDiv = styled.div`
  background-color: #faf8f5;
`;

const App: React.FC = () => {
  return (
    <AppDiv>
      <Router>
        <Switch>
          <Route exact path={URLPath.HOME} component={Top} />
        </Switch>
      </Router>
    </AppDiv>
  );
};

export default App;
