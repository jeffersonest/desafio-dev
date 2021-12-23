import { Router } from "express";
import TransactionsController from "../controllers/transactions.controller";
import authMiddleware from "../middlewares/auth.middleware";
import uploadMiddleware from "../middlewares/multer.middleware";

const TransactionsRoutes = Router();

TransactionsRoutes.post(
  "/",
  authMiddleware.checkToken,
  TransactionsController.index.bind(TransactionsController)
);

TransactionsRoutes.post(
  "/upload",
  authMiddleware.checkToken,
  uploadMiddleware.single("file"),
  TransactionsController.index.bind(TransactionsController)
);

export default TransactionsRoutes;
