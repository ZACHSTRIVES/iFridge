/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddFood
// ====================================================

export interface AddFood_addFood {
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

export interface AddFood {
  addFood: AddFood_addFood;
}

export interface AddFoodVariables {
  fridgeId: string;
  name: string;
  originQTY: string;
  currentQTY: string;
  type: string;
  notes: string;
  expireDate: any;
}
