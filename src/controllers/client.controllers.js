import Client from "../models/client.model.js";

export const getClients = async (req, res) => {
  try {
    const clients = await Client.find({ user: req.user.id }).populate("user");
    res.json(clients);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getClient = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id).populate("user");
    if (!client) return res.status(404).json({ message: "Client not found" });
    res.json(client);
  } catch (error) {
    return res.status(404).json({ message: "Client not found" });
  }
};
