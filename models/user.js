import { exportPathMap } from "@next.config";
import { Schema, model, models } from "mongoose";
import { DEFAULT_SERIF_FONT } from "next/dist/shared/lib/constants";

const UserSchema = new Schema({
    email: {
    type: String,
    unique: [true, "Email already Exists!"],
    required: [true, "Email already Exists!"]
    },
    username: {
    type: String,
    required: [true, "Username is required!"],
    match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image: {
    type: String
    }
});

const User = models.User || model("User", UserSchema);
export default User;