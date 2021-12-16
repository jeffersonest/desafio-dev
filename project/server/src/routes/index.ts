import { Router } from "express";
import MainRoutes from "./main.route";
import TransactionsRoutes from "./transactions.route";

const routes = Router();

routes.use("/", MainRoutes);
routes.use("/transactions", TransactionsRoutes);

export default routes;
