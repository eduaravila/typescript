import { Router, Request, Response, NextFunction } from "express";

const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("dummy");
});

export default router;
