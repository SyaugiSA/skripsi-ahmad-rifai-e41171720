const { model, Schema } = require("mongoose");

const User = model(
  "User",
  new Schema(
    {
      namaDepan: { type: String, require: true },
      namaBelakang: { type: String, require: true },
      email: { type: String, require: true, unique: true },
      role: { type: Number, required: true, default: 4 },
      password: { type: String, required: true },
    },
    { timestamps: true }
  )
);

module.exports = User;
