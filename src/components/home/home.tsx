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

    return (
        <section className="homeContainer">
            <SideNav user={user}></SideNav>
            <Content></Content>
        </section>
    )
}

export default Home;