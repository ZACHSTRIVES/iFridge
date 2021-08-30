import './home.css'
import React from "react"
import { Self_self } from "../../api/__generated__/Self";
import SideNav  from "./sideNav";

export interface HomeProps {
    user?: Self_self;
}

const Home: React.FC<HomeProps> = ({ user }) => {
    console.log("Home:",user)
    return (
        <section className="homeContainer">
            <SideNav user={user}></SideNav>
           
        </section>
    )
}

export default Home;