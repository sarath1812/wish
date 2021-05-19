
import Select from './Select'

import Display from './Display';


import {Route,BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
      
      <Route path="/" exact component={Select}/>
      <Route path ="/apple" exact component={Display}/>
      </Router>
     
    </div>
  );
}

export default App;
