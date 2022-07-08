import { createBrowserHistory } from "history";
import { Route, Switch } from "react-router-dom";
import { Lesson } from "./pages/Lesson/Lesson";
import Addtimedata from "./pages/Lesson/Addtimedata";
import Edittimedata from "./pages/Lesson/Edittimedata";

export const history = createBrowserHistory();
function App() {
  return (
    <Switch>
      <Route path="/" exact component={Lesson} />
      <Route path="/addtimedata/:id"  component={Addtimedata}/>
      <Route path="/edittimedata/:id"  component={Edittimedata}/>
    </Switch>
  );
}

export default App;
