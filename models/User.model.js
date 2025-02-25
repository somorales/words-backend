const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    name: {
      type: String,
      required: [true, "Name is required."],
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    basket: {
      products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
      kits: [{ type: Schema.Types.ObjectId, ref: "Kit" }],
    },

    favorites: {
      products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
      kits: [{ type: Schema.Types.ObjectId, ref: "Kit" }],
    }
  },
  {
   
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
