import './App.css';
import Main from '../main/main'
import Kitten from '../component/kitten';
import Behavior from '../component/behavior';
import Health from '../component/health';
import Food from '../component/food';
import Vat from '../component/vat';
import More from '../component/more';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import NewKitten from '../text//kittens/new kitten';
import Feed from '../text/kittens/feed my kitten';
import Mother from '../text//kittens/kittens and their mother';

import Scratching from '../text/behavior/scratching';
import Other from '../text/behavior/other';
import Hug from '../text/behavior/hug'

import Children from '../text/health/children';
import Flu from '../text/health/flu';
import Teeth from '../text/health/teeth';

import Should from '../text/food/Should';
import Recipes from '../text/food/recipes';
import NewHome from '../text/more/newHome';
import NewCat from '../text/more/newCat'


function App() {
  return (
      <Router>
        <Switch>
        <Route path="/feed-kitten">
                <Feed />
                </Route>
                <Route path="/Mother">
                <Mother />
                </Route>
        <Route path="/kitten">
                <Kitten />
          </Route>
        <Route path="/New-kitten">
                <NewKitten />
          </Route>


         
          <Route path="/Scratching">
            <Scratching />
          </Route><Route path="/towards-other-cat">
            <Other />
          </Route>
          <Route path="/hug">
            <Hug />
          </Route>
          <Route path="/behavior">
                <Behavior />
          </Route>



          <Route path="/Children">
            <Children />
          </Route>
          <Route path="/Flu">
            <Flu />
          </Route>
          <Route path="/Teeth">
            <Teeth />
          </Route>
          <Route path="/health">
                <Health />
          </Route>



          <Route path="/Should">
            <Should />
          </Route>
          <Route path="/Recipes">
            <Recipes />
          </Route>
          <Route path="/food">
                <Food />
          </Route>




         
          <Route path="/Veterinary Clinic">
                <Vat />
          </Route>

          <Route path="/newCat">
                <NewCat />
          </Route>
          <Route path="/newHome">
                <NewHome />
          </Route>
          <Route path="/more">
                <More />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    );
  
  
}

export default App;




 