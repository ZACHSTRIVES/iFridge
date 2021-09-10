/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteFridge
// ====================================================

export interface DeleteFridge_deleteFridge {
  __typename: "Fridge";
  id: string;
  name: string;
  ownerId: string;
  modified: any;
  created: any;
}

export interface DeleteFridge {
  deleteFridge: DeleteFridge_deleteFridge;
}

export interface DeleteFridgeVariables {
  fridgeId: string;
}
