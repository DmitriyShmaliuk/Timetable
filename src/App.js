import React from 'react';
import Home from './components/Home/index'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MainTimetable from './components/MainTimetable';

function App() {
  return (
    <div className="App">
        <Router>
            <Home>
                <Switch>
                    <Route exact path = "/" component = {MainTimetable}/>
                </Switch>
            </Home>
        </Router>
    </div>
  );
}

export default App;
