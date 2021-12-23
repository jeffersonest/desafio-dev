import { ITransaction } from "./../interfaces/transaction.interface";
import path from "path";
import { Request, Response } from "express";
import Code from "../helpers/codes.helper";
import * as fs from "fs";
class TransactionsController {
  public async index(_req: Request, res: Response): Promise<Response> {
    try {
      const file = fs.readFileSync(
        path.join(__dirname, "../files/" + _req.file?.filename),
        "utf-8"
      );

      const lines = file.split(/\r?\n/);

      lines.forEach((line, i) => {
        this.sanitizeData(line, i);
      });

      return res.status(200).send(Code.S0);
    } catch (error) {
      console.log(error);
      return res.status(200).send(Code.S500);
    }
  }

  private async sanitizeData(_line: string, index: any): Promise<any> {
    try {
      let data: ITransaction = {};
      data.type = _line.substring(0, 1);
      data.date = _line.substring(1, 9);
      data.value = _line.substring(9, 19);
      data.cpf = _line.substring(19, 30);
      data.card = _line.substring(30, 42);
      data.hour = _line.substring(42, 48);
      data.storeOwner = _line.substring(48, 62).trim();
      data.store = _line.substring(62, 81).trim();

      console.log(index + " - ", data);

      return false;
    } catch (error) {
      console.log("ERROR - ", error);
    }
  }
}

export default new TransactionsController();
