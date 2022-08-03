import { createContext } from "react";

export interface ContextProps {
  openSideBar: boolean;
  toggleSideBar: (isOpen: boolean) => void;
}

export const UIContext = createContext({} as ContextProps);
