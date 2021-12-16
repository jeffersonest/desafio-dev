import express from "express";
import routes from "./routes";
import cors from "cors";
import morgan from "morgan";
import Code from "./helpers/codes.helper";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.express.use(cors());
    this.express.use(morgan("combined"));
    this.express.use(routes);
    console.log(`Locale ${process.env.LOCALE} \n`, Code.S0);
  }
}

export default new App().express;
