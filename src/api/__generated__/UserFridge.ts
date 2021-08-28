/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserFridge
// ====================================================

export interface UserFridge_userFridge_fridge_foods {
  __typename: "Food";
  id: number;
  fridgeID: number;
  originQTY: number;
  currentQTY: number;
  type: string;
  notes: string;
  expireDate: any;
  modified: any;
  created: any;
}

export interface UserFridge_userFridge_fridge_userFridges_user {
  __typename: "User";
  id: string;
  name: string;
  gitHub: string;
  imageURI: string;
}

export interface UserFridge_userFridge_fridge_userFridges {
  __typename: "UserFridge";
  userId: string;
  fridgeId: string;
  user: UserFridge_userFridge_fridge_userFridges_user;
}

export interface UserFridge_userFridge_fridge {
  __typename: "Fridge";
  id: string;
  name: string;
  ownerId: string;
  modified: any;
  created: any;
  foods: UserFridge_userFridge_fridge_foods[];
  userFridges: UserFridge_userFridge_fridge_userFridges[];
}

export interface UserFridge_userFridge {
  __typename: "UserFridge";
  userId: string;
  fridgeId: string;
  fridge: UserFridge_userFridge_fridge;
}

export interface UserFridge {
  userFridge: UserFridge_userFridge;
}
