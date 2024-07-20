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
    if (client.user._id.toString() !== req.user.id)
      return res.status(401).json({ message: "Unauthorized" });
    res.json(client);
  } catch (error) {
    return res.status(404).json({ message: "Client not found" });
  }
};

export const createClient = async (req, res) => {
  try {
    const { firstName, nickName, phoneNumber, address } = req.body;

    const existingClient = await Client.findOne({ nickName });
    if (existingClient) {
      return res.status(400).json({ message: "Nickname already in use" });
    }

    const newClient = new Client({
      firstName,
      nickName,
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
    const client = await Client.findById(req.params.id);
    if (!client) return res.status(404).json({ message: "Client not found" });
    if (client.user._id.toString() !== req.user.id)
      return res.status(401).json({ message: "Unauthorized" });
    await client.deleteOne();
    return res.sendStatus(200);
  } catch (error) {
    return res.status(404).json({ message: "Client not found" });
  }
};

export const updateClient = async (req, res) => {
  try {
    const { nickName } = req.body;
    const client = await Client.findById(req.params.id);
    if (!client) return res.status(404).json({ message: "Client not found" });
    if (client.user._id.toString() !== req.user.id)
      return res.status(401).json({ message: "Unauthorized" });
    if (nickName && nickName !== client.nickName) {
      const existingClient = await Client.findOne({ nickName });
      if (existingClient) {
        return res.status(400).json({ message: "Nickname already in use" });
      }
    }
    Object.assign(client, req.body);
    const updateClient = await client.save();
    res.json(updateClient);
  } catch (error) {
    return res.status(404).json({ message: "Client not found" });
  }
};
