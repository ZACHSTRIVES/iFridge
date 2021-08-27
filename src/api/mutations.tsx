import { gql } from "@apollo/client";
import * as fragments from "./fragments";

// export const LOGIN = gql`
//   mutation Login($code: String!) {
//     login(input: { code: $code }) {
//       user {
//         ...userFields
//       }
//       jwt
//     }
//   }
//   ${fragments.USER}
// `;

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
    $ownerId: int!
  ) {
    addFridge(input: { name: $name, ownerId: $ownerId }) {
      ...fridgeFields
    }
  }
  ${fragments.FRIDGE}
`;

// export const EDIT_FRIDGE = gql`
//   mutation EditFridge(
//     $fridgeId: ID!
//     $name: String
//     $ownerId: int
//   ) {
//     editFridge(
//       input: {
//         fridgeId: $fridgeId,
//         name: $name,
//         ownerId: $ownerId
//       }
//     ) {
//       ...fridgeFields
//     }
//   }
//   ${fragments.FRIDGE}
// `;

