/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddUserFridge
// ====================================================

export interface AddUserFridge_addUserFridge_user {
  __typename: "User";
  id: string;
  name: string;
  gitHub: string;
  imageURI: string;
}

export interface AddUserFridge_addUserFridge {
  __typename: "UserFridge";
  userId: string;
  fridgeId: string;
  user: AddUserFridge_addUserFridge_user;
}

export interface AddUserFridge {
  addUserFridge: AddUserFridge_addUserFridge;
}

export interface AddUserFridgeVariables {
  userId: string;
  fridgeId: string;
}
