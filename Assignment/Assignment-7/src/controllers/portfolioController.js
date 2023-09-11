// Create a new portfolio item
exports.create = async (req, res) => {
  res.status(201).json({ status: "success", data: "Portfolio item created" });
};

// Read a portfolio item
exports.read = async (req, res) => {
  res.status(200).json({ status: "success", data: "Portfolio item read" });
};

// Delete a portfolio item
exports.delete = async (req, res) => {
  res
    .status(200)
    .json({ status: "success", message: "Portfolio item deleted" });
};

// Update a portfolio item
exports.update = async (req, res) => {
  res.status(200).json({ status: "success", data: "Portfolio item updated" });
};
