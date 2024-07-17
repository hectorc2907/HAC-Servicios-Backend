import Client from "../models/client.model.js";

export const getClients = async (req, res) => {
  try {
    const clients = await Client.find({ user: req.user.id }).populate("user");
    res.json(clients);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};
