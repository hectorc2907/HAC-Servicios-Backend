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

export const createClient = async (req, res) => {
  try {
    const { firtName, lastName, phoneNumber, address } = req.body;
    const newClient = new Client({
      firtName,
      lastName,
      phoneNumber,
      address,
      user: req.user.id,
    });
    const savedClient = await newClient.save();
    res.json(savedClient);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteClient = async (req, res) => {
  try {
    const client = await Client.findByIdAndDelete(req.params.id);
    if (!client) return res.status(404).json({ message: "Client not found" });
    return res.sendStauts(204);
  } catch (error) {
    return res.status(404).json({ message: "Client not found" });
  }
};

export const updateClient = async (req, res) => {
  try {
    const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!client) return res.status(404).json({ message: "Client not found" });
    res.json(client);
  } catch (error) {
    return res.status(404).json({ message: "Client not found" });
  }
};
