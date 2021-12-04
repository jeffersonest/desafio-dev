import { Router } from "express";
import TransactionsController from "../controllers/Transactions.controller";

const TransactionsRoutes = Router();

TransactionsRoutes.get(
  "/",
  TransactionsController.index.bind(TransactionsController)
);

export default TransactionsRoutes;
