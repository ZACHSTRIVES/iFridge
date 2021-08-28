import './App.css';
import LoginBox from './components/authPages/loginBox';
import { Route} from "react-router";
import { useQuery} from "@apollo/client";
import { SELF } from "./api/queries";
import { Self } from "./api/__generated__/Self";


function App() {
  // const { loading, error, data } = useQuery<Self>(SELF);
  
  // console.log(loading, error, data);

  return (
    <div className="App flex">
 
        <Route exact path="/">
        <LoginBox></LoginBox>
        </Route>
        <Route exact path="/home">
          登陆成功！
        </Route>
     </div>
    
  );
}

export default App;
