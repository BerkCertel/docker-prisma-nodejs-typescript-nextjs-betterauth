import { Router } from "express";

const healthcheckRouter = Router();

healthcheckRouter.get("/ping", (req, res) => {
  res.status(200).json({
    message: "Pong! Sunucu çalışıyor. 🏓",
  });
});

export default healthcheckRouter;
