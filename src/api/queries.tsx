import { gql } from "@apollo/client";
import * as fragments from "./fragments";


export const USERFRIDGE = gql`
    query UserFridges($id: Int) {
        userFridges(id: $id) {
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