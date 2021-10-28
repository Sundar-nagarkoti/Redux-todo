import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Task from "./Task";

function App() {

  return (
    <>
     <Router>
       <Switch>
         <Route exact path="/">
           <Task/>
           </Route>
         </Switch>
       </Router>
    </>
  );
}

export default App;
