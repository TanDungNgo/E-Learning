import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Course from './pages/Course';
import Addcourse from './pages/Addcourse';
import Editcourse from './pages/Editcourse';
function App() {
  return (
      <Router>

            <Route exact path="/" component={Course} />
            <Route path="/add-course" component={Addcourse} />
            <Route path="/edit-course/:id" component={Editcourse} />

      </Router>
  );
}

export default App;
