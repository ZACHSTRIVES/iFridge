/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EditFood
// ====================================================

export interface EditFood_editFood {
  __typename: "Food";
  id: string;
  fridgeID: string;
  name: string;
  originQTY: number;
  currentQTY: number;
  type: string;
  notes: string;
  expireDate: any;
  modified: any;
  created: any;
}

export interface EditFood {
  editFood: EditFood_editFood;
}

export interface EditFoodVariables {
  foodID: string;
  originQTY: string;
  currentQTY: string;
  notes: string;
  type: string;
  expireDate: any;
}
