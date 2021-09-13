import React from "react"
import { Switch, Route,  BrowserRouter,  } from "react-router-dom"
import Login from "./pages/Login"
import Inicio from "./pages/Inicio"
import Seguidores from "./pages/Seguidores"
import Seguindo from "./pages/Seguindo"
import Repositorios from "./pages/Repositorios"

function Router() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" exact component={Login} />
        <Route path="/inicio" exact component={Inicio} />
        <Route path="/seguidores" exact component={Seguidores} />
        <Route path="/seguindo" exact component={Seguindo} />
        <Route path="/repositorios" exact component={Repositorios} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router