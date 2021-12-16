import { IPayload } from "./../interfaces/payload.interface";
import { Request, Response } from "express";
import Code from "../helpers/codes.helper";

class MainController {
  public async index(_req: Request, res: Response): Promise<Response> {
    return res.send("Api - Online");
  }

  public async checkToken(_req: Request, res: Response): Promise<Response> {
    const response: IPayload = Code.S0;
    response.content = {};
    return res.status(200).send(response);
  }
}
export default new MainController();
