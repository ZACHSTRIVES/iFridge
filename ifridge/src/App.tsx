import './App.css';
import LoginBox from './components/authPages/loginBox';
import { Route} from "react-router";

function App() {
  return (
    <div className="App flex">
 
        <Route exact path="/">
        <LoginBox></LoginBox>
        </Route>
     </div>
    
  );
}

export default App;
