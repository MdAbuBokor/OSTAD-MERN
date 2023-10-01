// Create a new user
exports.create = async (req, res) => {
  res.status(201).json({ status: "success", data: "user created" });
};

// Read a user
exports.read = async (req, res) => {
  res.status(200).json({ status: "success", data: "user read" });
};

// Delete a user
exports.delete = async (req, res) => {
  res.status(200).json({ status: "success", message: "user deleted" });
};

// Update a user
exports.update = async (req, res) => {
  res.status(200).json({ status: "success", data: "user updated" });
};
