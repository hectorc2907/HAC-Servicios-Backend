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
