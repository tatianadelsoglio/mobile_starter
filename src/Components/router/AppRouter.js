import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Calendario from '../Utils/calendario/Calendario';
import Clientes from '../Utils/clientes/Clientes';
import Home from "../Utils/home/Home";
import Login from '../Utils/login/Login';
import Tareas from '../Utils/tareas/Tareas';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/" component={Login}/>
                <Route path="/home/tareas" component={Tareas}/>
                <Route path="/home/calendario" component={Calendario}/>
                <Route path="/home/clientes" component={Clientes}/>
            </Switch>
        </Router>
    );
};

export default AppRouter;