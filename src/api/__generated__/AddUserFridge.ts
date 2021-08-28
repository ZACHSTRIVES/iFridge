/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddUserFridge
// ====================================================

export interface AddUserFridge_addUserFridge {
  __typename: "UserFridge";
  userId: string;
  fridgeId: string;
}

export interface AddUserFridge {
  addUserFridge: AddUserFridge_addUserFridge;
}

export interface AddUserFridgeVariables {
  UserId: number;
  FridgeId: number;
}
