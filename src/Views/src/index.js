import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as Pages from './Pages'
import { PrivateRoute } from './Services'

import {
  Collapse,
  CssBaseline,
  ThemeProvider
} from '@material-ui/core';

import { SnackbarProvider } from 'notistack';

function decideWhatsApp() {
  if (window.screen.width <= 899) {
    return (
      <Pages.WhatsAppMobileScreen />
    );
  } else if (window.screen.height <= 500) {
    return (
      <Pages.WhatsAppMobileScreen />
    );
  } else {
    return (
      <Pages.WhatsAppDeskScreen />
    );
  }
}


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

          <Route path='/' exact={true} component={Pages.HomeScreen} />

          <Route path='/login' exact={true} component={Pages.LoginScreen} />

          <PrivateRoute path="/whatsapp" exact={true} component={decideWhatsApp} />

          <PrivateRoute path="/whatsapp/:idChat" exact={true} component={Pages.ChatScreenMobile} />

          <Route path='/privacy' exact={true} component={Pages.Privacy}/>

          <Route path="*" exact={true}>
            <Pages.NotFoundScreen />
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

