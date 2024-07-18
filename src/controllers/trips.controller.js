import Trips from "../models/trips.model.js";

export const getTrips = async (req, res) => {
  try {
    const trips = await Trips.find({ user: req.user.id }).populate("user");
    res.json(trips);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getTrip = async (req, res) => {
  try {
    const trip = await Trips.findById(req.params.id).populate("user");
    if (!trip) return res.status(404).json({ message: "Trip not found" });
    if (trip.user._id.toString() !== req.user.id)
      return res.status(401).json({ message: "Unauthorized" });
    res.json(trip);
  } catch (error) {
    return res.status(404).json({ message: "Trip not found" });
  }
};

export const createTrip = async (req, res) => {
  try {
    const newTrip = new Trips({
      income: 0,
      expenses: 0,
      balance: 0,
      user: req.user.id,
    });
    const savedTrip = await newTrip.save();
    res.json(savedTrip);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteTrip = async (req, res) => {
  try {
    const trip = await Trips.findById(req.params.id);
    if (!trip) return res.status(404).json({ message: "Trip not found" });
    if (trip.user._id.toString() !== req.user.id)
      return res.status(401).json({ message: "Unauthorized" });
    await trip.deleteOne();
    return res.sendStatus(200);
  } catch (error) {
    return res.status(404).json({ message: "Trip not found" });
  }
};

export const updateTrip = async (req, res) => {
  try {
    const trip = await Trips.findById(req.params.id);
    if (!trip) return res.status(404).json({ message: "Trip not found" });
    if (trip.user._id.toString() !== req.user.id)
      return res.status(401).json({ message: "Unauthorized" });
    Object.assign(trip, req.body);
    if (req.body.income !== undefined || req.body.expenses !== undefined) {
      trip.balance = trip.income - trip.expenses;
    }
    const updateTrip = await trip.save();
    res.json(updateTrip);
  } catch (error) {
    return res.status(404).json({ message: "Trip not found" });
  }
};
