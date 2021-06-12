import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { PrivateRoute } from './Services'
import { decideVersion } from './Functions'

import {
  Collapse,
  CssBaseline,
  ThemeProvider
} from '@material-ui/core';

import { SnackbarProvider } from 'notistack';

function Routes() {
  return (
    <BrowserRouter>

      <SnackbarProvider
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        TransitionComponent={Collapse}
        maxSnack={3}
      >
        <Switch>

          <Route path="*" exact={true}>
            <>
              <h2>
                404
              </h2>
            </>
          </Route>

        </Switch>

      </SnackbarProvider>

    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>

    <ThemeProvider>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

