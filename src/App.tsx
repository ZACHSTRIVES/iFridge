import './App.css';
import LoginBox from './components/authPages/loginBox';
import { Route, Switch, Redirect } from "react-router";
import { useQuery } from "@apollo/client";
import { SELF } from "./api/queries";
import { Self } from "./api/__generated__/Self";
import ReactLoading from 'react-loading';
import { useEffect,useState} from 'react';
import { useHistory} from "react-router-dom";
import Home from './components/home/home';


function App() {
  const { loading, data,refetch } = useQuery<Self>(SELF);
  const [showLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [showLoading])

  return (
    <div className="App flex">
      <Switch>
     
        <Route exact path="/">
          {(() => {
            if (loading) {
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
          {loading? <ReactLoading type={"cylon"} height={200} width={100}></ReactLoading>:<Home user={data?.self} id={data?.self.id}></Home>}
        </Route>

        </Switch>
    </div>

  );
}

export default App;
