import { gql } from "@apollo/client";
import * as fragments from "./fragments";




export const USER = gql`
    query User($id: ID) {
        user(id: $id){
            ...userFields
        }
    }
    ${fragments.USER}
`

export const SELF = gql`
    query Self {
        self {
            ...userFields
            userFridges{
                ...userFridgeFields
                fridge{
                    ...fridgeFields
                    foods{
                        ...foodFields
                    }
                    userFridges{
                        ...userFridgeFields
                        user{
                            ...userFields
                        }
                    }
    
                }
            }
           
        }
    }
    ${fragments.USERFRIDGE}
    ${fragments.FRIDGE}
    ${fragments.FOOD}
    ${fragments.USER}

`


export const FRIDGEMATES = gql`
    query FridgeMates($id: String!) {
        fridgeMates(
            input:{
                fridgeId:$id
            }) {
            ...userFridgeFields
            user{
                ...userFields
            }
        }
    }
    ${fragments.USERFRIDGE}
    ${fragments.USER}
`

export const USERFRIDGE = gql`
    query UserFridges($id: String!) {
        userFridges(
            input:{
                userId:$id
            }) {
            ...userFridgeFields
            fridge{
                ...fridgeFields
                foods{
                    ...foodFields
                }
                userFridges{
                    ...userFridgeFields
                    user{
                        ...userFields
                    }
                }

            }
        }
    }
    ${fragments.USERFRIDGE}
    ${fragments.FRIDGE}
    ${fragments.FOOD}
    ${fragments.USER}
`

export const FRIDGE = gql`
    query Fridge($fridgeId: String!) {
        fridge(
            input:{
                fridgeId:$fridgeId
            }) {
                ...fridgeFields
                foods{
                    ...foodFields
                }
                userFridges{
                    ...userFridgeFields
                    user{
                        ...userFields
                    }
                }   
        }
    }
   
    ${fragments.FRIDGE}
    ${fragments.FOOD}
    ${fragments.USERFRIDGE}
    ${fragments.USER}
`




export const FOOD = gql`
    query Food($foodId: String!) {
        food(input:{foodId:$foodId}){
            ...foodFields
        }
    }
    ${fragments.FOOD}
`