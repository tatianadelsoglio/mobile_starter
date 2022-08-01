import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Calendario from '../ui/calendario/Calendario';
import Clientes from '../ui/clientes/Clientes';
import DetalleTarea from '../ui/detalleTarea/DetalleTarea';
import Home from '../ui/home/Home';
import Login from '../ui/login/Login';
import Tareas from '../ui/tareas/Tareas';

const AppRouter = () => {
    return (

        <BrowserRouter>
                <Route path="/home">
                    <Home/>
                </Route>
                <Route path="/">
                    <Login/>
                </Route>
                <Route path="/tareas">
                    <Tareas/>
                </Route>
                <Route path="/calendario">
                    <Calendario/>
                </Route>
                <Route path="/clientes">
                    <Clientes/>
                </Route>
                <Route path="/detalletarea">
                    <DetalleTarea/>
                </Route>
        </BrowserRouter>
    );
};

export default AppRouter;