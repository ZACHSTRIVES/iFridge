/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddFood
// ====================================================

export interface AddFood_addFood {
  __typename: "Food";
}

export interface AddFood {
  addFood: AddFood_addFood;
}

export interface AddFoodVariables {
  FridgeId: number;
  OriginQTY: number;
  CurrentQTY: number;
  Type: string;
  Notes: string;
  ExpireDate?: any | null;
}
