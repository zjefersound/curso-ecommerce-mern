import { UserDocument } from "../app/models/UserModel";

declare namespace Express {
  export interface Request {
    profile: UserDocument;
  }
}
