import express from "express";
import { addData } from "../controllers/Add.js";
import { deleData } from "../controllers/Remove.user.js";
import { uptoDate } from "../controllers/Update.js";

export const router = express.Router();

router.use("/add", addData);
router.use("/del", deleData);
router.use("/updt", uptoDate)
