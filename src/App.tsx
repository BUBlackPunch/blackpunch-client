import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Index from './routes/index';

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>blackpunch</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Switch>
        <Route exact path="/" component={Index} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
