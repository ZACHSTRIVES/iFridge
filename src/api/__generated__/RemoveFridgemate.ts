/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RemoveFridgemate
// ====================================================

export interface RemoveFridgemate_removeFridgemate_user {
  __typename: "User";
  id: string;
  name: string;
  gitHub: string;
  imageURI: string;
}

export interface RemoveFridgemate_removeFridgemate {
  __typename: "UserFridge";
  userId: string;
  fridgeId: string;
  user: RemoveFridgemate_removeFridgemate_user;
}

export interface RemoveFridgemate {
  removeFridgemate: RemoveFridgemate_removeFridgemate[];
}

export interface RemoveFridgemateVariables {
  fridgeId: string;
  userId: string;
}
