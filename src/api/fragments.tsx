import { gql } from "@apollo/client";

export const USER = gql`
    fragment userFields on User {
        id
        name
        gitHub
        imageURI
    }
`;

export const FRIDGE = gql`
    fragment fridgeFields on Fridge {
        id
        name
        ownerId
        modified
        created
    }
`;

export const FOOD = gql`
    fragment foodFields on Food {
        id
        fridgeID
        name
        originQTY
        currentQTY
        type
        notes
        expireDate
        modified
        created
    }
`;

export const USERFRIDGE = gql`
    fragment userFridgeFields on UserFridge {
        userId
        fridgeId
    }
`;


