import './home.css'
import React from "react"
import { Self_self } from "../../api/__generated__/Self";
import SideNav from "./sideNav";
import Content from "./content";



export interface HomeProps {
    user?: Self_self;
    id?:any
}



const Home: React.FC<HomeProps> = ({ user,id }) => {

    const [currentFridge,setCurrentFridge] = React.useState<any>(user?.userFridges.length==0?null:user?.userFridges[0].fridge)
    function changeFridge(fridge:any){
        setCurrentFridge(fridge)
        console.log(fridge)
    }

    

    return (
        <section className="homeContainer">
            <SideNav user={user} changeFridge={changeFridge}></SideNav>
            <Content fridge={currentFridge}></Content>
        </section>
    )
}

export default Home;