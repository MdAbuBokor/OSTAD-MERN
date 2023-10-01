// Create a new Post item
exports.create = async (req, res) => {
  res.status(201).json({ status: "success", data: "Post item created" });
};

// Read a Post item
exports.read = async (req, res) => {
  res.status(200).json({ status: "success", data: "Post item read" });
};

// Delete a Post item
exports.delete = async (req, res) => {
  res.status(200).json({ status: "success", message: "Post item deleted" });
};

// Update a Post item
exports.update = async (req, res) => {
  res.status(200).json({ status: "success", data: "Post item updated" });
};
