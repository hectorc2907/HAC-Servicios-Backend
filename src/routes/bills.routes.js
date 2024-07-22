import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getBills,
  getBill,
  createBill,
  updateBill,
  deleteBill,
} from "../controllers/bills.controllers.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import {
  createBillsSchema,
  updateBillsSchema,
} from "../schemas/bills.schema.js";

const router = Router();

router.get("/bills", authRequired, getBills);
router.get("/bills/:id", authRequired, getBill);
router.post(
  "/bills",
  authRequired,
  validateSchema(createBillsSchema),
  createBill
);
router.delete("/bills/:id", authRequired, deleteBill);
router.put(
  "/bills/:id",
  authRequired,
  validateSchema(updateBillsSchema),
  updateBill
);

export default router;
