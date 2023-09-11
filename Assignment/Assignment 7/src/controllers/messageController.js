// Create a new message
exports.create = async (req, res) => {
  res.status(201).json({ status: "success", data: "Message created" });
};

// Read a message
exports.read = async (req, res) => {
  res.status(200).json({ status: "success", data: "Message read" });
};

// Delete a message
exports.delete = async (req, res) => {
  res.status(200).json({ status: "success", message: "Message deleted" });
};

// Update a message
exports.update = async (req, res) => {
  res.status(200).json({ status: "success", data: "Message updated" });
};
