import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getSales,
  getSale,
  createSale,
  updateSale,
  deleteSale,
} from "../controllers/sale.controllers.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createSaleSchema, updateSaleSchema } from "../schemas/sale.schema.js";

const router = Router();

router.get("/sale", authRequired, getSales);
router.get("/sale/:id", authRequired, getSale);
router.post(
  "/sale",
  authRequired,
  validateSchema(createSaleSchema),
  createSale
);
router.delete("/sale/:id", authRequired, deleteSale);
router.put(
  "/sale/:id",
  authRequired,
  validateSchema(updateSaleSchema),
  updateSale
);

export default router;
