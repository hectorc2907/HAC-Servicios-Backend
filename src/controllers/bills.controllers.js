import Bills from "../models/bills.model.js";
import Trips from "../models/trips.model.js";

export const getBills = async (req, res) => {
  try {
    const bills = await Bills.find().populate("trip");
    res.json(bills);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getBill = async (req, res) => {
  try {
    const bill = await Bills.findById(req.params.id).populate("trip");
    if (!bill) return res.status(404).json({ message: "Bill not found" });
    res.json(bill);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const createBill = async (req, res) => {
  try {
    const { types, value, description, tripId } = req.body;
    const trip = await Trips.findById(tripId);
    if (!trip) {
      return res.status(404).json({ message: "Trip not found" });
    }
    const newBill = new Bills({
      types,
      value,
      description,
      trip: tripId,
    });
    console.log(newBill);
    const savedBill = await newBill.save();
    res.json(savedBill);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteBill = async (req, res) => {
  try {
    const bill = await Bills.findByIdAndDelete(req.params.id);
    if (!bill) return res.status(404).json({ message: "Bill not found" });
    res.json({ message: "Bill deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateBill = async (req, res) => {
  try {
    const { id } = req.params;
    const { types, value, description, tripId } = req.body;
    const bill = await Bills.findById(id);
    if (!bill) {
      return res.status(404).json({ message: "Bill not found" });
    }
    if (tripId) {
      const trip = await Trips.findById(tripId);
      if (!trip) {
        return res.status(404).json({ message: "Trip not found" });
      }
      bill.trip = tripId;
    }
    if (types !== undefined) bill.types = types;
    if (value !== undefined) bill.value = value;
    if (description !== undefined) bill.description = description;
    const updatedBill = await bill.save();
    res.json(updatedBill);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};
