import { createContext, useState } from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";
interface AppContextProp {
  children: React.ReactNode;
}
interface UserContextProp {
  currency: string;
  backendUrl: string;
  token: string;
  setToken: (token: string) => void;
  navigate: NavigateFunction;
  handleLogOut: () => void;
  userDetails: object[];
  setUserDetails: (userDetails: object[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const UserContext = createContext<UserContextProp | undefined>(
  undefined
);
export const AppContextProvider = ({ children }: AppContextProp) => {
  const [token, setToken] = useState("");
  const [userDetails, setUserDetails] = useState<object[]>([]);
  const navigate: NavigateFunction = useNavigate();
  const [loading, setLoading] = useState(false);

  // HandleLogOut
  const handleLogOut = () => {
    sessionStorage.removeItem("token");
    setToken("");
    navigate("/login");
  };

  const currency = "₦";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const value: UserContextProp = {
    currency,
    backendUrl,
    token,
    setToken,
    navigate,
    handleLogOut,
    userDetails,
    setUserDetails,
    loading,
    setLoading,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
