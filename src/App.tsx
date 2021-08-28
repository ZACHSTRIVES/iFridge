import './App.css';
import LoginBox from './components/authPages/loginBox';
import { Route, Switch, Redirect } from "react-router";
import { useQuery } from "@apollo/client";
import { SELF } from "./api/queries";
import { Self } from "./api/__generated__/Self";
import ReactLoading from 'react-loading';
import { useEffect,useState} from 'react';
import { useHistory} from "react-router-dom";

function App() {
  const { loading, error, data } = useQuery<Self>(SELF);
  const [showLoading, setLoading] = useState(true);
  const history=useHistory();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [showLoading])


  console.log(loading, error, data);
  return (
    <div className="App flex">
      <Switch>
     
        <Route exact path="/">
          {(() => {
            if (showLoading) {
              return(
                <ReactLoading type={"cylon"} height={200} width={100}></ReactLoading>
              );
            }else{
              return(
                data?<Redirect to="/home"></Redirect>:<LoginBox></LoginBox>
              );
            }
             
          })}

        </Route>
        <Route exact path="/home">
          {showLoading?<a></a>:<a>{data?.self.gitHub}</a>}
        </Route>

        </Switch>
    </div>

  );
}

export default App;
