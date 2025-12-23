import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: {type: String,required: true},
    email: {type: String,required: true,unique: true},
    role: {type: String, required: true},
    dateAdded: {type: String,required: true},
    password: {type: String,required: true},
  },
  { collection: "user" }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export { User };