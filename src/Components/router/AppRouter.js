import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CalendarioView from "../../views/CalendarioView";
import ClientesView from "../../views/ClientesView";
import DetalleTareaView from "../../views/DetalleTareaView";
import HomeView from "../../views/HomeView";
import LoginView from "../../views/LoginView";
import NuevaTareaView from "../../views/NuevaTareaView";
import TareasView from "../../views/TareasView";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home">
          <HomeView />
        </Route>
        <Route exact path="/">
          <LoginView />
        </Route>
        <Route exact path="/calendario">
          <CalendarioView />
        </Route>
        <Route exact path="/clientes">
          <ClientesView />
        </Route>
        <Route exact path="/tareas">
          <TareasView />
        </Route>
        <Route exact path="/detalletarea">
          <DetalleTareaView />
        </Route>
        <Route exact path="/nuevatarea">
          <NuevaTareaView />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
