import { Document, Schema, Model, model } from "mongoose";

export interface CategoryDocument extends Document {
  name: string;
}

export interface CategoryModel extends Model<CategoryDocument> {}

const CategorySchema: Schema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 64,
    },
  },
  { timestamps: true }
);

export default model<CategoryDocument, CategoryModel>(
  "Category",
  CategorySchema
);
