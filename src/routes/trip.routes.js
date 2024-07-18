import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getTrips,
  getTrip,
  createTrip,
  updateTrip,
  deleteTrip,
} from "../controllers/trips.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTripSchema, updateTripSchema } from "../schemas/trip.schema.js";

const router = Router();

router.get("/trips", authRequired, getTrips);
router.get("/trips/:id", authRequired, getTrip);
router.post(
  "/trips",
  authRequired,
  validateSchema(createTripSchema),
  createTrip
);
router.delete("/trips/:id", authRequired, deleteTrip);
router.put(
  "/trips/:id",
  authRequired,
  validateSchema(updateTripSchema),
  updateTrip
);

export default router;
