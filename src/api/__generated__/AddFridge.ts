/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddFridge
// ====================================================

export interface AddFridge_addFridge {
  __typename: "Fridge";
  id: string;
  name: string;
  ownerId: string;
  modified: any;
  created: any;
}

export interface AddFridge {
  addFridge: AddFridge_addFridge;
}

export interface AddFridgeVariables {
  name: string;
  ownerId: any;
}
