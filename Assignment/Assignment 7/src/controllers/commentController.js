// Create a new comment
exports.create = async (req, res) => {
  res.status(201).json({ status: "success", data: "Comment created" });
};

// Read a comment
exports.read = async (req, res) => {
  res.status(200).json({ status: "success", data: "Comment read" });
};

// Delete a comment
exports.delete = async (req, res) => {
  res.status(200).json({ status: "success", message: "Comment deleted" });
};

// Update a comment
exports.update = async (req, res) => {
  res.status(200).json({ status: "success", data: "Comment updated" });
};
