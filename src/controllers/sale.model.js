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
