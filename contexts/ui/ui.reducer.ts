import { IStateValues } from "./ui.provider";

export enum types {
  TOGGLE_SIDE_BAR = "TOGGLE_SIDE_BAR",
}

type ActionTypes = {
  type: string;
  payload: boolean;
};

export const uiReducer = (state: IStateValues, action: ActionTypes) => {
  switch (action.type) {
    case types.TOGGLE_SIDE_BAR:
      return {
        ...state,
        openSideBar: action.payload,
      };
    default:
      return state;
  }
};
