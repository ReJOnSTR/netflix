// App.js
import { Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import "./App.css";
import Users from "./pages/users";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
