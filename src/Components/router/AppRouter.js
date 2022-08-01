import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from '../Utils/home/Home';
import Login from '../Utils/login/Login';

const AppRouter = () => {
    return (

        <BrowserRouter>
                <Route path="/home">
                    <Home/>
                </Route>
                <Route path="/">
                    <Login/>
                </Route>
                {/* <Route path="/home/tareas" component={Tareas}/>
                <Route path="/home/calendario" component={Calendario}/>
                <Route path="/home/clientes" component={Clientes}/> */}
        </BrowserRouter>
    );
};

export default AppRouter;