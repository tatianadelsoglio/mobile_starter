import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import CalendarioView from '../../views/CalendarioView';
import ClientesView from '../../views/ClientesView';
import DetalleTareaView from '../../views/DetalleTareaView';
import HomeView from '../../views/HomeView';
import LoginView from '../../views/LoginView';
import Tareas from '../ui/tareas/Tareas';


const AppRouter = () => {
    return (

        <BrowserRouter>
                <Route path="/home">
                    <HomeView/>
                </Route>
                <Route path="/">
                    <LoginView/>
                </Route>
                <Route path="/tareas">
                    <Tareas/>
                </Route>
                <Route path="/calendario">
                    <CalendarioView/>
                </Route>
                <Route path="/clientes">
                    <ClientesView/>
                </Route>
                <Route path="/detalletarea">
                    <DetalleTareaView/>
                </Route>
        </BrowserRouter>
    );
};

export default AppRouter;