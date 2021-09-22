/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Food
// ====================================================

export interface Food_food {
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

export interface Food {
  food: Food_food;
}

export interface FoodVariables {
  foodId: string;
}
