import { Request, Response } from "express";

class TransactionsController {
  public async index(_req: Request, res: Response): Promise<Response> {
    return res.send("Transaction OK");
  }
}

export default new TransactionsController();
