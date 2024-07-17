import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getClient,
  getClients,
  createClient,
  updateClient,
  deleteClient,
} from "../controllers/client.controllers.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createClientSchema } from "../schemas/client.schema.js";

const router = Router();

router.get("/client", authRequired, getClients);
router.get("/client/:id", authRequired, getClient);
router.post(
  "/client",
  authRequired,
  validateSchema(createClientSchema),
  createClient
);
router.delete("/client/:id", authRequired, deleteClient);
router.put("/client/:id", authRequired, updateClient);

export default router;
