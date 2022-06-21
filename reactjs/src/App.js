import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Course from './pages/Course';
import Addcourse from './pages/Addcourse';
import Editcourse from './pages/Editcourse';
import Showcourse from './pages/Showcourse';
import Addlesson from './pages/Addlesson';
function App() {
  return (
      <Router>

            <Route exact path="/" component={Course} />
            <Route path="/add-course" component={Addcourse} />
            <Route path="/edit-course/:id" component={Editcourse} />
            <Route path="/show-course/:id" component={Showcourse} />
            <Route path="/add-lesson/:id" component={Addlesson} />
      </Router>
  );
}

export default App;
