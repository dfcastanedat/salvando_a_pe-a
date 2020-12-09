import React from 'react'
import { Redirect, Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Mapa from '../components/Home/Mapa';
import Login from '../components/Login/Login';
import Splash from '../components/Splash/Splash';

function RouterIndex() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path={ `/` } component={ Splash } />
                    <Route exact path={ `/login` } component={ Login } />
                    <Route exact path={ `/mapa` } component={ Mapa } />
                    <Route path={ `/*` }>
                        <Redirect to={ `/` } /> {/* Si se va a otra ruta vuelve a Login, así de paso se comprueba que esté logueado*/ }
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default RouterIndex;