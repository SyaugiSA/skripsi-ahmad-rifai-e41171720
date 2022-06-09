const User = require("./../models/user-model");
const bcrypt = require("bcrypt");

const Get = async (req, res, next) => {
  res.json({ dokter: await User.find({ role: 3 }, { password: 0 }) });
  next();
};

const Add = (req, res, next) => {
  const { namaDepan, namaBelakang, email, password } = req.body;
  const encrypt = bcrypt.hashSync(password, 10);

  let newDokter = new User({
    namaDepan,
    namaBelakang,
    email,
    role: 3,
    password: encrypt,
  });
  newDokter.save();

  res.json({ message: "succes", dokter: { ...password, newDokter } });
  next();
};

const Update = async (req, res, next) => {
  const { emailin } = req.params;
  const { namaDepan, namaBelakang, email, password } = req.body;

  namaDepan ? await User.updateOne({ email: emailin }, { namaDepan }) : "";
  namaBelakang
    ? await User.updateOne({ email: emailin }, { namaBelakang })
    : "";
  email ? await User.updateOne({ email: emailin }, { email }) : "";

  if (password) {
    const encrypt = bcrypt.hashSync(password, 10);
    return await User.updateOne({ email: emailin }, { password: encrypt });
  }

  res.json({ message: "success" });
};

const Delete = async (req, res, next) => {
  const { emailin } = req.params;
  await User.deleteOne({ email });

  res.json({ message: "succes" });
  next();
};

module.exports = { Get, Add, Update, Delete };
