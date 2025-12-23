import mongoose from "mongoose";

const { Schema, model } = mongoose;

const countrySchema = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
    createdBy: { type: String, required: true },
    createdDate: { type: String, required: true },
  },
  { collection: "country" }
);

const stateSchema = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
    countryName: { type: String, required: true },
    createdBy: { type: String, required: true },
    createdDate: { type: String, required: true },
  },
  { collection: "state" }
);

const citySchema = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
    stateName: { type: String, required: true },
    countryName: { type: String, required: true },
    countryId: { type: String, required: true },
    createdBy: { type: String, required: true },
    createdDate: { type: String, required: true },
  },
  { collection: "city" }
);

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

const Country = model("Country", countrySchema);
const State = model("State", stateSchema);
const City = model("City", citySchema);
const User = model("User", userSchema);


export { Country, State, City, User };