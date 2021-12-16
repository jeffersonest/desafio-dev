import { Router } from "express";
import TransactionsController from "../controllers/transactions.controller";
import authMiddleware from "../middlewares/auth.middleware";

const TransactionsRoutes = Router();

TransactionsRoutes.post(
  "/",
  authMiddleware.checkToken,
  TransactionsController.index.bind(TransactionsController)
);

export default TransactionsRoutes;
