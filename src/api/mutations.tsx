import { gql } from "@apollo/client";
import * as fragments from "./fragments";

export const LOGIN = gql`
  mutation Login($code: String!) {
    login(input: { code: $code }) {
      user {
        ...userFields
      }
      jwt
    }
  }
  ${fragments.USER}
`;

export const ADD_USER = gql`
  mutation AddUser(
    $name: String!
    $gitHub: String!
    $imageURI: String!
  ) {
    addUser(input: { name: $name, gitHub: $gitHub, imageURI: $imageURI }) {
      ...userFields
    }
  }
  ${fragments.USER}
`;

export const EDIT_USER = gql`
  mutation EditUser(
    $userId: ID!
    $name: String
    $gitHub: String
    $imageURI: String
  ) {
    editUser(
      input: {
        userId: $userId,
        name: $name,
        gitHub: $gitHub,
        imageURI: $imageURI
      }
    ) {
      ...userFields
    }
  }
  ${fragments.USER}
`;

export const ADD_FRIDGE = gql`
  mutation AddFridge(
    $name: String!
    $ownerId: String!
  ) {
    addFridge(input: { name: $name, ownerId: $ownerId }) {
      ...fridgeFields
      
    }
  }
  ${fragments.FRIDGE}
`;

export const EDIT_FRIDGE = gql`
  mutation EditFridge(
    $fridgeId: ID!
    $name: String
    $ownerId: Int
  ) {
    editFridge(
      input: {
        fridgeId: $fridgeId,
        name: $name,
        ownerId: $ownerId
      }
    ) {
      ...fridgeFields
    }
  }
  ${fragments.FRIDGE}
`;


export const ADD_USERFRIDGE = gql`
  mutation AddUserFridge(
    $userId: String!
    $fridgeId: String!
  ) {
    addUserFridge(input: { userId: $userId, fridgeId: $fridgeId }) {
      ...userFridgeFields
      user{
        ...userFields
      }
      fridge{
        ...fridgeFields
      }
      
    }
  }
  ${fragments.USERFRIDGE}
  ${fragments.USER}
  ${fragments.FRIDGE}
  
`;


export const ADD_FOOD = gql`
  mutation AddFood(
    $fridgeId: String!
    $name: String!
    $originQTY: String!
    $currentQTY: String!
    $type:String!
    $notes: String!
    $expireDate:DateTime!
  ) {
    addFood(input: { fridgeID: $fridgeId, name:$name, originQTY: $originQTY, currentQTY: $currentQTY, type:$type, expireDate:$expireDate,notes:$notes}) {
      ...foodFields
    }
  }
  ${fragments.FOOD}
`;

export const EDIT_FOOD = gql`
  mutation EditFood(
    $foodID: String!
    $originQTY: String!
    $currentQTY: String!
    $notes: String!
    $type: String!
    $expireDate: DateTime!
  ) {
    editFood(
      input: {
        foodID:$foodID,
        originQTY: $originQTY, 
        currentQTY: $currentQTY, 
        type: $type, 
        notes: $notes,
        expireDate: $expireDate
      }
    ) {
      ...foodFields
    }
  }
  ${fragments.FOOD}
`;

export const DELETE_FRIDGE = gql`
  mutation DeleteFridge(
    $fridgeId: String!
  ) {
    deleteFridge(
      input: {
        fridgeId:$fridgeId,
      }
    ) {
      ...fridgeFields
    }
  }
  ${fragments.FRIDGE}
`;

export const DELETE_USERFRIDGE = gql`
  mutation DeleteUserFridge(
    $fridgeId: String!
  ) {
    editFridge(
      input: {
        fridgeId:$fridgeId,
      }
    ) {
      ...fridgeFields
    }
  }
  ${fragments.FRIDGE}
`;


export const REMOVE_FRIDGEMATE = gql`
  mutation RemoveFridgemate(
    $fridgeId: String!
    $userId: String!
  ) {
    removeFridgemate(
      input: {
        fridgeId:$fridgeId,
        userId:$userId
      }
    ) {
      ...userFridgeFields
      user{
        ...userFields
      }
    }
  }
  ${fragments.USERFRIDGE}
  ${fragments.USER}
`;


export const DELETE_FOOD = gql`
  mutation DeleteFood(
    $foodId: String!
  ) {
    deleteFood(
      input: {
        foodId:$foodId,
      }
    ) {
      ...foodFields
    }
  }
  ${fragments.FOOD}
`;
