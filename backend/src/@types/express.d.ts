declare namespace Express {
  export interface Request {
    profile: {
      name: string;
      email: string;
      hashed_password: string;
      about: string;
      salt: string;
      role: number;
      hisytory: Array<string>;
    };
    auth: string;
    userId: string;
  }
}
