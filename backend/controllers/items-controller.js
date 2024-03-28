const Item = require("../model/Item");

const getAllItems = async (req, res, next) => {
  let items;
  try {
    items = await Item.find();
  } catch (err) {
    console.log(err);
  }

  if (!items) {
    return res.status(404).json({ message: "No service found" });
  }
  return res.status(200).json({ items });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let item;
  try {
    item = await Item.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!item) {
    return res.status(404).json({ message: "No Item found" });
  }
  return res.status(200).json({ item });
};

const addItem = async (req, res, next) => {
  const { name, category, description, price, available, image } = req.body;
  let item;
  try {
    item = new Item({
      name,
      category,
      description,
      price,
      available,
      image,
    });
    await item.save();
  } catch (err) {
    console.log(err);
  }

  if (!item) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ item });
};

const updateItem = async (req, res, next) => {
  const id = req.params.id;
  const { name, category, description, price, available, image } = req.body;
  let item;
  try {
    item = await Item.findByIdAndUpdate(id, {
      name,
      category,
      description,
      price,
      available,
      image,
    });
    item = await item.save();
  } catch (err) {
    console.log(err);
  }
  if (!item) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({ item });
};

const deleteItem = async (req, res, next) => {
  const id = req.params.id;
  let item;
  try {
    item = await Item.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!item) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Product Successfully Deleted" });
};

exports.getAllItems = getAllItems;
exports.addItem = addItem;
exports.getById = getById;
exports.updateItem = updateItem;
exports.deleteItem = deleteItem;
