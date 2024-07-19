import Sale from "../models/sale.model.js";
import Trips from "../models/trips.model.js";

export const getSales = async (req, res) => {
  try {
    const sales = await Sale.find().populate("trip");
    res.json(sales);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getSale = async (req, res) => {
  try {
    const sale = await Sale.findById(req.params.id).populate("trip");
    if (!sale) return res.status(404).json({ message: "Sale not found" });
    res.json(sale);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const createSale = async (req, res) => {
  try {
    const { quantity, price, customer, tripId } = req.body;
    const trip = await Trips.findById(tripId);
    if (!trip) {
      return res.status(404).json({ message: "Trip not found" });
    }
    const total = quantity * price;
    const newSale = new Sale({
      quantity,
      price,
      total,
      customer,
      trip: tripId,
    });
    const savedSale = await newSale.save();
    res.json(savedSale);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteSale = async (req, res) => {
  try {
    const sale = await Sale.findByIdAndDelete(req.params.id);
    if (!sale) return res.status(404).json({ message: "Sale not found" });
    res.json({ message: "Sale deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateSale = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity, price, customer, tripId } = req.body;
    const sale = await Sale.findById(id);
    if (!sale) {
      return res.status(404).json({ message: "Sale not found" });
    }
    if (tripId) {
      const trip = await Trips.findById(tripId);
      if (!trip) {
        return res.status(404).json({ message: "Trip not found" });
      }
      sale.trip = tripId;
    }
    if (quantity !== undefined) sale.quantity = quantity;
    if (price !== undefined) sale.price = price;
    if (quantity !== undefined && price !== undefined) {
      sale.total = quantity * price;
    }
    const updatedSale = await sale.save();
    res.json(updatedSale);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};
