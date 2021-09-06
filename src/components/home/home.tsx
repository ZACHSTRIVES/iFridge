import './home.css'
import React from "react"
import { Self_self } from "../../api/__generated__/Self";
import SideNav from "./sideNav";
import Content from "./content";
import { gql, useQuery } from '@apollo/client';
import { USERFRIDGE } from '../../api/queries';



export interface HomeProps {
    user?: Self_self;
}



const Home: React.FC<HomeProps> = ({ user }) => {
   console.log(user)

   
    
    return (
        <section className="homeContainer">
            <SideNav user={user}></SideNav>
            <Content></Content>
        </section>
    )
}

export default Home;