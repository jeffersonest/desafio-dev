import { Router } from "express";
import TransactionsRoutes from "./transactions.route";

const routes = Router();

routes.use("/transactions", TransactionsRoutes);

export default routes;
