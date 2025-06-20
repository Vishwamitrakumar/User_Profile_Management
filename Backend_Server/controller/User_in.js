const User = require('../models/User_Information');
const Create_Data = async (req, res) => {
  try {
    const {
      username,
      currentPassword,
      newPassword,
      profession,
      companyName,
      addressLine1,
      country,
      state,
      city,
      subscriptionPlan,
      newsletter,
    } = req.body;

    const user = new User({
      profilePhoto: req.file?.filename || '',
      username,
      currentPassword,
      newPassword,
      profession,
      companyName,
      addressLine1,
      country,
      state,
      city,
      subscriptionPlan,
      newsletter,
    });

    console.log("Saving user:", user);

    await user.save();
    res.status(201).json({ message: 'User saved successfully', user });
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(500).json({ error: 'Failed to save user' });
  }
};

const Getdata = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: 'Server error' });
  }
};

const Delete_Data = async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ error: 'Delete failed' });
  }
};

module.exports = { Create_Data, Getdata, Delete_Data };
