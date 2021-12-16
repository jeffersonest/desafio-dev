import React, { createContext, useCallback, useContext, useState } from "react";
import { IAuth } from "../interfaces/auth.interface";
import { IUser } from "../interfaces/user.interface";
import authService from "../services/auth.service";
import { useRouter } from "next/router";

const defaultUser: IUser = {
  uid: "",
  displayName: "",
  email: "",
  idToken: "",
  photoURL: "",
};

const defaultAuthContext: IAuth = {
  user: {
    uid: "",
    displayName: "",
    email: "",
    idToken: "",
    photoURL: "",
  },
  auth: (): void => {},
  logout: (): void => {},
  getLocalUser: (): void => {},
};

const AuthContext = createContext<IAuth>(defaultAuthContext);

export function useAuth(): Partial<IAuth> {
  return useContext(AuthContext);
}

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser>(defaultUser);
  const router = useRouter();

  const auth = useCallback(async () => {
    const user: IUser = await authService.auth();
    setUser(user);
    router.push("/home");
  }, [router]);

  const logout = useCallback(() => {
    authService.logout();
    setUser(defaultUser);
    router.push("/");
  }, [router]);

  const getLocalUser = async (): Promise<any> => {
    const userData = await authService.getLocalUser();
    if (userData === false) {
      router.push("/");
    }
    setUser(userData);
    return userData;
  };

  return (
    <AuthContext.Provider value={{ user, setUser, auth, logout, getLocalUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
