/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EditFood
// ====================================================

export interface EditFood_editFridge {
  __typename: "Fridge";
  id: string;
  name: string;
  ownerId: string;
  modified: any;
  created: any;
}

export interface EditFood {
  editFridge: EditFood_editFridge;
}

export interface EditFoodVariables {
  FoodId: string;
  OriginQTY: number;
  CurrentQTY: number;
  Notes: string;
  Type: string;
  ExpireDate?: any | null;
}
