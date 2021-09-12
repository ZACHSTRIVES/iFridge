/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RemoveFridgemate
// ====================================================

export interface RemoveFridgemate_removeFridgemate {
  __typename: "UserFridge";
  userId: string;
  fridgeId: string;
}

export interface RemoveFridgemate {
  removeFridgemate: RemoveFridgemate_removeFridgemate[];
}

export interface RemoveFridgemateVariables {
  fridgeId: string;
  userId: string;
}
