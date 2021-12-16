import Code from "./../helpers/codes.helper";
import { NextFunction, Request, Response } from "express";
import FirebaseProvider from "../providers/firebase.provider";

class AuthMiddleware {
  async checkToken(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const { authorization } = _req.headers;
    try {
      if (authorization && authorization !== "") {
        let token = authorization.replace("Bearer", "").replace(" ", "");
        const tokenStatus = await FirebaseProvider.checkTokenId(token);
        if (tokenStatus) return next();
        return res.status(403).json(Code.S1);
      } else {
        return res.status(403).json(Code.S1);
      }
    } catch (error) {
      return res.status(403).json(Code.S1);
    }
  }
}

export default new AuthMiddleware();
