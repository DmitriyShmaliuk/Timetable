import React from 'react';
import Home from './components/Home/index'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MainTimetable from './components/MainTimetable';
import TodayTimetable from './components/TodayTimetable';
import TomorrowTimetable from './components/TomorrowTimetable';
import AutorizationForm from './components/AutorizationForm/index';

function App() {
  return (
    <div className="App">
        <Router>
            <Home>
                <Switch>
                    <Route exact path="/" component={MainTimetable}/>
                    <Route path="/today" component={TodayTimetable}/>
                    <Route path="/tomorrow" component={TomorrowTimetable}/>
                    <Route path="/autorization" component={AutorizationForm}/>
                </Switch>
            </Home>
        </Router>
    </div>
  );
}

export default App;
