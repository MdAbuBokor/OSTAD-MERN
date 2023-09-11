// Create a new product
exports.create = async (req, res) => {
  res.status(201).json({ status: "success", data: "Product created" });
};

// Read a product
exports.read = async (req, res) => {
  res.status(200).json({ status: "success", data: "Product read" });
};

// Delete a product
exports.delete = async (req, res) => {
  res.status(200).json({ status: "success", message: "Product deleted" });
};

// Update a product
exports.update = async (req, res) => {
  res.status(200).json({ status: "success", data: "Product updated" });
};
