/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FridgeMates
// ====================================================

export interface FridgeMates_fridgeMates_user {
  __typename: "User";
  id: string;
  name: string;
  gitHub: string;
  imageURI: string;
}

export interface FridgeMates_fridgeMates {
  __typename: "UserFridge";
  userId: string;
  fridgeId: string;
  user: FridgeMates_fridgeMates_user;
}

export interface FridgeMates {
  fridgeMates: FridgeMates_fridgeMates[];
}

export interface FridgeMatesVariables {
  id: string;
}
