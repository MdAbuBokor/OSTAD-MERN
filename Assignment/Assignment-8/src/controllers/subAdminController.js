// Create a new subAdmin
exports.create = async (req, res) => {
  res.status(201).json({ status: "success", data: "subAdmin created" });
};

// Read a subAdmin
exports.read = async (req, res) => {
  res.status(200).json({ status: "success", data: "subAdmin read" });
};

// Delete a subAdmin
exports.delete = async (req, res) => {
  res.status(200).json({ status: "success", subAdmin: "subAdmin deleted" });
};

// Update a subAdmin
exports.update = async (req, res) => {
  res.status(200).json({ status: "success", data: "subAdmin updated" });
};
