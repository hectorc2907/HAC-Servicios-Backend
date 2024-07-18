import Trips from "../models/trips.model.js";

export const getTrips = async (req, res) => {
  try {
    const trips = await Trips.find({ user: req.user.id }).populate("user");
    res.json(trips);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};
