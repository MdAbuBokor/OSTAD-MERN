// Create a new Admin
exports.create = async (req, res) => {
  res.status(201).json({ status: "success", data: "Admin created" });
};

// Read a Admin
exports.read = async (req, res) => {
  res.status(200).json({ status: "success", data: "Admin read" });
};

// Delete a Admin
exports.delete = async (req, res) => {
  res.status(200).json({ status: "success", message: "Admin deleted" });
};

// Update a Admin
exports.update = async (req, res) => {
  res.status(200).json({ status: "success", data: "Admin updated" });
};
