import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import AddQuestion from './Addquestion';
import Main from './Main';
import Choice from './Choice';


function App() {
  return(

<BrowserRouter>
<Switch>
  <Route exact path ="/">
<Main />
  </Route>
  <Route exact path = "/add-question">
    <AddQuestion/> 
  </Route>
  <Route exact path = "/choice">
    <Choice/> 
  </Route>
</Switch>
</BrowserRouter>
  );
}
  export default App;
