/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteUserFridge
// ====================================================

export interface DeleteUserFridge_editFridge {
  __typename: "Fridge";
  id: string;
  name: string;
  ownerId: string;
  modified: any;
  created: any;
}

export interface DeleteUserFridge {
  editFridge: DeleteUserFridge_editFridge;
}

export interface DeleteUserFridgeVariables {
  fridgeId: string;
}
