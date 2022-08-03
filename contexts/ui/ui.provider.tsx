import { FC, useReducer } from "react";
import { UIContext } from "./ui.context";
import { uiReducer } from "./ui.reducer";

import { types } from "./ui.reducer";

export interface IStateValues {
  openSideBar: boolean;
}

const INITIAL_VALUE: IStateValues = {
  openSideBar: false,
};

interface Props {
  children: React.ReactNode;
}

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, INITIAL_VALUE);

  const toggleSideBar = (isOpen: boolean) => {
    dispatch({ type: types.TOGGLE_SIDE_BAR, payload: isOpen });
  };

  return (
    <UIContext.Provider value={{ ...state, toggleSideBar }}>
      {children}
    </UIContext.Provider>
  );
};
