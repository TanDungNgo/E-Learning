// import RecordView from "./components/RecordView";
import { createBrowserHistory } from "history";
import { Route, Switch } from "react-router-dom";
import { CourseDetails } from "./pages/Details/CourseDetails/CourseDetails";
import { Home } from "./pages/Home/Home";
import { Lesson } from "./pages/Lesson/Lesson";
import { Login } from "./pages/Login/Login";
import { StudentProfile } from "./pages/Profile/Student/StudentProfile";
import Register from "./pages/Register/Register";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";

export const history = createBrowserHistory();
function App() {
  return (
    <Switch history={history}>
      <Route path="/lesson" exact component={Lesson} />
      <Route path="/profile" exact component={StudentProfile} />
      <HomeTemplate path="/" exact Component={Home} />
      <HomeTemplate path="/course/:id" exact Component={CourseDetails} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </Switch>
  );
}

export default App;
