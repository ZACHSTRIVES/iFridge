/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EditUser
// ====================================================

export interface EditUser_editUser {
  __typename: "User";
  id: string;
  name: string;
  gitHub: string;
  imageURI: string;
}

export interface EditUser {
  editUser: EditUser_editUser;
}

export interface EditUserVariables {
  userId: string;
  name?: string | null;
  gitHub?: string | null;
  imageURI?: string | null;
}
