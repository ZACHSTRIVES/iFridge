/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddUser
// ====================================================

export interface AddUser_addUser {
  __typename: "User";
  id: string;
  name: string;
  gitHub: string;
  imageURI: string;
}

export interface AddUser {
  addUser: AddUser_addUser;
}

export interface AddUserVariables {
  name: string;
  gitHub: string;
  imageURI: string;
}
