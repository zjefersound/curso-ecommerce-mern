import { Document, Schema, Model, model } from "mongoose";
import { uuid } from "uuidv4";
import bcrypt from 'bcrypt';

export interface UserDocument extends Document {
  name: string;
  email: string;
  hashed_password: string;
  about: string;
  salt: string;
  role: number;
  hisytory: Array<string>;
}

export interface UserModel extends Model<UserDocument> {}

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 64,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: 32,
    },
    hashed_password: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      trim: true,
    },
    salt: String,
    role: {
      type: Number,
      default: 0,
    },
    hisytory: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

// virtual field

UserSchema.methods = {

};

UserSchema.virtual("password")
  .set(function (this: any, password: string) {
    this.salt = uuid();
    this.hashed_password = bcrypt.hashSync(password, 8)
  })
  .get(function (this: any) {
    return this._password;
  });

export default model<UserDocument, UserModel>("User", UserSchema);
