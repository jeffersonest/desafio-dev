import { Dispatch, SetStateAction } from "react";
import { IUser } from "./user.interface";

export interface IAuth {
  user: IUser;
  setUser?: Dispatch<SetStateAction<IUser>>;
  auth: Function;
  logout: Function;
  getLocalUser: Function;
}
