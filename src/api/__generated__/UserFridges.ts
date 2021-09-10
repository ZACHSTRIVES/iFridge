/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserFridges
// ====================================================

export interface UserFridges_userFridges_fridge_foods {
  __typename: "UserFridge";
}

export interface UserFridges_userFridges_fridge_userFridges_user {
  __typename: "User";
  id: string;
  name: string;
  gitHub: string;
  imageURI: string;
}

export interface UserFridges_userFridges_fridge_userFridges {
  __typename: "UserFridge";
  userId: string;
  fridgeId: string;
  user: UserFridges_userFridges_fridge_userFridges_user;
}

export interface UserFridges_userFridges_fridge {
  __typename: "Fridge";
  id: string;
  name: string;
  ownerId: string;
  modified: any;
  created: any;
  foods: UserFridges_userFridges_fridge_foods[];
  userFridges: UserFridges_userFridges_fridge_userFridges[];
}

export interface UserFridges_userFridges {
  __typename: "UserFridge";
  userId: string;
  fridgeId: string;
  fridge: UserFridges_userFridges_fridge;
}

export interface UserFridges {
  userFridges: UserFridges_userFridges[];
}

export interface UserFridgesVariables {
  id?: number | null;
}
