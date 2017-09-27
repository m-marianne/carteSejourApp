import React, {Component} from 'react';
import Login from './Login/Login';
import Register from './Register/Register';
import UserBoard from './UserBoard/UserBoard';
import ViewMapContainer from '../containers/ViewMapContainer';
import NewMapContainer from '../containers/NewMapContainer';
import CreateEventContainer from '../containers//CreateEventContainer';


import { BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {

    render(){
        return(
            <Router>
                <div>
                    <Route path="/login" component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/userboard' component={UserBoard}/>
                    <Route path="/newmap" component={NewMapContainer}/>
                    <Route  path="/createevent" component={CreateEventContainer}/>
                    <Route path="/viewmap" component={ViewMapContainer}/>
                </div>
            </Router>
        )
    }
}
export default App;



