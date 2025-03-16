import { createContext } from "react";
interface AppContextProp {
  children: React.ReactNode;
}
export const UserContext = createContext();
export const AppContextProvider = ({ children }: AppContextProp) => {
  const currency = "₦";
  const value = { currency };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
