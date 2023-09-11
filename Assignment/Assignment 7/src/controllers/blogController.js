// Create a new blog
exports.create = async (req, res) => {
  res.status(201).json({ status: "success", data: "Blog created" });
};

// Read a blog
exports.read = async (req, res) => {
  res.status(200).json({ status: "success", data: "Blog read" });
};

// Delete a blog
exports.delete = async (req, res) => {
  res.status(200).json({ status: "success", message: "Blog deleted" });
};

// Update a blog
exports.update = async (req, res) => {
  res.status(200).json({ status: "success", data: "Blog updated" });
};
