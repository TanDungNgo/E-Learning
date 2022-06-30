import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Course from './pages/Course';
import Addcourse from './pages/Addcourse';
import Editcourse from './pages/Editcourse';
import Showcourse from './pages/Showcourse';
import Addlesson from './pages/Addlesson';
import Editlesson from './pages/Editlesson';
import Editvideo from './pages/Editvideo';
import Login from "./pages/Login";
import Becometeacher from './pages/User/Becometeacher';
import RecordView from './pages/Course/RecordView';

import Register from "./pages/Register";

function App() {
  return (
      <Router>

            <Route path="/course" component={Course} />
            <Route path="/add-course" component={Addcourse} />
            <Route path="/edit-course/:id" component={Editcourse} />
            <Route path="/show-course/:id" component={Showcourse} />
            <Route path="/add-lesson/:id" component={Addlesson} />
            <Route path="/edit-lesson/:id" component={Editlesson} />
            <Route path="/edit-video/:id" component={Editvideo} />
            <Route exact path="/" component={Login} />

            <Route path="/become-teacher" component={Becometeacher} />
            <Route path="/record" component={RecordView} />

            <Route path="/register" component={Register} />

      </Router>
  );
}

export default App;
