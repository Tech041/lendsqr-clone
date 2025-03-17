import { createContext } from "react";
interface AppContextProp {
  children: React.ReactNode;
}
interface UserContextProp {
  currency: string;
}

export const UserContext = createContext<UserContextProp | undefined>(
  undefined
);
export const AppContextProvider = ({ children }: AppContextProp) => {
  const currency = "₦";
  const value: UserContextProp = { currency };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
