import './home.css'
import React from "react"
import { Self_self } from "../../api/__generated__/Self";
import SideNav from "./sideNav";
import Content from "./content";
import { useQuery } from '@apollo/client';
import { USERFRIDGE } from '../../api/queries'; 
import { UserFridges } from '../../api/__generated__/UserFridges';


export interface HomeProps {
    user?: Self_self;
    id?: any;
    
}



const Home: React.FC<HomeProps> = ({ user, id }) => {


    const [currentFridge, setCurrentFridge] = React.useState<any>(user?.userFridges.length === 0 ? null : user?.userFridges[0].fridge);
    const [userFridges, setUserFridges] = React.useState<any>(user?.userFridges);



    function changeFridge(fridge: any) {
        setCurrentFridge(fridge)
    }

    return (
        <section className="homeContainer">
            <SideNav user={user} changeFridge={changeFridge} userFridges={userFridges} currentFridgeId={currentFridge?.id}></SideNav>
            {currentFridge ? <Content fridge={currentFridge} fridgeId={currentFridge.id}></Content> : <p>You don't have one yet, build one!</p>}

        </section>
    )
}

export default Home;