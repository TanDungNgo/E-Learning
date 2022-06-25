// import RecordView from "./components/RecordView";
import { createBrowserHistory } from "history";
import { Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Lesson } from "./pages/Lesson/Lesson";
import { Login } from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";

export const history = createBrowserHistory();
function App() {
  return (
    <Switch>
      <Route path="/lesson" exact component={Lesson} />
      <HomeTemplate path="/" exact Component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </Switch>
  );
}

export default App;
