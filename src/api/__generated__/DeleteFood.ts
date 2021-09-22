/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteFood
// ====================================================

export interface DeleteFood_deleteFood {
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

export interface DeleteFood {
  deleteFood: DeleteFood_deleteFood;
}

export interface DeleteFoodVariables {
  foodId: string;
}
