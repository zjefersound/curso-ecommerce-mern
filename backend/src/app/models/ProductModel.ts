import { Document, Schema, Model, model } from "mongoose";

export interface ProductDocument extends Document {
  name: string;
  description: string;
  price: number;
  category: string;
  quantity: number;
  photo: Buffer | any;
  shipping: boolean;
}

export interface ProductModel extends Model<ProductDocument> {}

const { ObjectId } = Schema.Types;

const ProductSchema: Schema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 64,
    },
    description: {
      type: String,
      required: true,
      maxlength: 2000,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
    },
    category: {
      type: ObjectId,
      ref: "Category",
      required: true,
    },
    quantity: {
      type: Number,
    },
    sold: {
      type: Number,
      default: 0
    },
    photo: {
      data: Buffer,
      contentType: String
    },
    shipping: {
      required: false,
      type: Boolean,

    }
  },
  { timestamps: true }
);

export default model<ProductDocument, ProductModel>("Product", ProductSchema);
