import { Router } from "express";
import MainController from "../controllers/main.controller";
import authMiddleware from "../middlewares/auth.middleware";

const MainRoutes = Router();

MainRoutes.get("/", MainController.index.bind(MainController));
MainRoutes.get(
  "/check_token",
  authMiddleware.checkToken,
  MainController.checkToken
);

export default MainRoutes;
