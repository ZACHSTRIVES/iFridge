/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddUserFridge
// ====================================================

export interface AddUserFridge_addUserFridge_fridge_foods {
  __typename: "Food";
  id: string;
  fridgeID: string;
  originQTY: number;
  currentQTY: number;
  type: string;
  notes: string;
  expireDate: any;
  modified: any;
  created: any;
}

export interface AddUserFridge_addUserFridge_fridge_userFridges_user {
  __typename: "User";
  id: string;
  name: string;
  gitHub: string;
  imageURI: string;
}

export interface AddUserFridge_addUserFridge_fridge_userFridges {
  __typename: "UserFridge";
  userId: string;
  fridgeId: string;
  user: AddUserFridge_addUserFridge_fridge_userFridges_user;
}

export interface AddUserFridge_addUserFridge_fridge {
  __typename: "Fridge";
  id: string;
  name: string;
  ownerId: string;
  modified: any;
  created: any;
  foods: AddUserFridge_addUserFridge_fridge_foods[];
  userFridges: AddUserFridge_addUserFridge_fridge_userFridges[];
}

export interface AddUserFridge_addUserFridge {
  __typename: "UserFridge";
  userId: string;
  fridgeId: string;
  fridge: AddUserFridge_addUserFridge_fridge;
}

export interface AddUserFridge {
  addUserFridge: AddUserFridge_addUserFridge;
}

export interface AddUserFridgeVariables {
  userId: string;
  fridgeId: string;
}
