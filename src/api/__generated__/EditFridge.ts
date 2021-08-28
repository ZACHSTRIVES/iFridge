/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EditFridge
// ====================================================

export interface EditFridge_editFridge {
  __typename: "Fridge";
  id: string;
  name: string;
  ownerId: string;
  modified: any;
  created: any;
}

export interface EditFridge {
  editFridge: EditFridge_editFridge;
}

export interface EditFridgeVariables {
  fridgeId: string;
  name?: string | null;
  ownerId?: number | null;
}
