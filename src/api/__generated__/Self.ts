/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Self
// ====================================================

export interface Self_self_userFridges_fridge_foods {
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

export interface Self_self_userFridges_fridge_userFridges_user {
  __typename: "User";
  id: string;
  name: string;
  gitHub: string;
  imageURI: string;
}

export interface Self_self_userFridges_fridge_userFridges {
  __typename: "UserFridge";
  userId: string;
  fridgeId: string;
  user: Self_self_userFridges_fridge_userFridges_user;
}

export interface Self_self_userFridges_fridge {
  __typename: "Fridge";
  id: string;
  name: string;
  ownerId: string;
  modified: any;
  created: any;
  foods: Self_self_userFridges_fridge_foods[];
  userFridges: Self_self_userFridges_fridge_userFridges[];
}

export interface Self_self_userFridges {
  __typename: "UserFridge";
  userId: string;
  fridgeId: string;
  fridge: Self_self_userFridges_fridge;
}

export interface Self_self {
  __typename: "User";
  id: string;
  name: string;
  gitHub: string;
  imageURI: string;
  userFridges: Self_self_userFridges[];
}

export interface Self {
  self: Self_self;
}
