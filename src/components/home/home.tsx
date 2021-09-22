import './home.css'
import React from "react"
import { Self_self } from "../../api/__generated__/Self";
import SideNav from "./sideNav";
import Content from "./content";
import { Redirect } from 'react-router-dom';



export interface HomeProps {
    user?: Self_self;
    id?: any;

}



const Home: React.FC<HomeProps> = ({ user, id }) => {


    const [currentFridge, setCurrentFridge] = React.useState<any>(user?.userFridges.length === 0 ? null : user?.userFridges[0].fridge);
    const [userFridges, setUserFridges] = React.useState<any>(user?.userFridges);
    




    function changeFridge(fridge: any) {
        console.log(fridge)
        setCurrentFridge(fridge)
    }

    return (
        <section className="homeContainer">
            {user?"":<Redirect to="/"></Redirect>}

            <SideNav user={user} changeFridge={changeFridge} userFridges={userFridges} currentFridgeId={currentFridge?.id}></SideNav>
            {currentFridge ? <Content fridge={currentFridge} fridgeId={currentFridge.id} userId={user?.id}></Content> : <p>You don't have one yet, build one!</p>}


        </section>
    )
}

export default Home;