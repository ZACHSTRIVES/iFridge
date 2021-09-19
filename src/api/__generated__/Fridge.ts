/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Fridge
// ====================================================

export interface Fridge_fridge_foods {
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

export interface Fridge_fridge_userFridges_user {
  __typename: "User";
  id: string;
  name: string;
  gitHub: string;
  imageURI: string;
}

export interface Fridge_fridge_userFridges {
  __typename: "UserFridge";
  userId: string;
  fridgeId: string;
  user: Fridge_fridge_userFridges_user;
}

export interface Fridge_fridge {
  __typename: "Fridge";
  id: string;
  name: string;
  ownerId: string;
  modified: any;
  created: any;
  foods: Fridge_fridge_foods[];
  userFridges: Fridge_fridge_userFridges[];
}

export interface Fridge {
  fridge: Fridge_fridge;
}

export interface FridgeVariables {
  fridgeId: string;
}
