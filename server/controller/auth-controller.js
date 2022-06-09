const Login = (req, res, next) => {
  const { email, password } = req.body();

  res.json({ message: "" });
  next();
};

const Register = (req, res, next) => {
  const { namaDepan, namaBelakang, email, password } = req.body();

  res.json({ message: "" });
  next();
};

const Logout = (req, res, next) => {
  res.json({ message: "" });
  next();
};

module.exports = { Login, Register, Logout };
