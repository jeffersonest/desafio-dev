import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../config/firebase";
import Cookies from "js-cookie";
import { IUser } from "../interfaces/user.interface";
import { Api } from "../config/api";
import { AxiosResponse } from "axios";

class AuthService {
  public async checkAuth(): Promise<any> {
    return {};
  }
  public async getLocalUser(): Promise<any> {
    try {
      const { userData, credential } = JSON.parse(Cookies.get("Auth"));

      const user: IUser = {
        displayName: userData.displayName,
        email: userData.email,
        uid: userData.uid,
        photoURL: userData.photoURL,
        idToken: credential.idToken,
      };

      const tokenIsValid = await this.checkToken(user.idToken);

      if (tokenIsValid) {
        return user;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }
  public async auth(): Promise<IUser> {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const userData = result.user;
      const token = credential.accessToken;
      Cookies.set("Auth", JSON.stringify({ token, userData, credential }), {
        expires: 1,
      });

      const user: IUser = {
        displayName: userData.displayName,
        email: userData.email,
        uid: userData.uid,
        photoURL: userData.photoURL,
        idToken: credential.idToken,
      };

      return user;
    } catch (error) {
      console.log(error);
    }
  }
  public logout(): void {
    signOut(auth)
      .then(() => {
        Cookies.remove("Auth");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  public async checkToken(idToken: string): Promise<Boolean> {
    const tokenIsValid = await Api.get("/check_token", {
      headers: {
        Authorization: "Bearer " + idToken,
      },
    });
    if (tokenIsValid.data.code === 0) {
      return true;
    } else {
      return false;
    }
  }
}

export default new AuthService();
