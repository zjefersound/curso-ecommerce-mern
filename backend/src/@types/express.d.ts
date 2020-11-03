declare namespace Express {
  export interface Request {
    userId: string;

    profile: {
      _id: string;
      name: string;
      email: string;
      hashed_password?: string;
      about: string;
      salt?: string;
      role: number;
      history: Array<string>;
    };

    product: {
      _id: string;
      name: string;
      description: string;
      price: number;
      category: string;
      quantity: number;
      photo: Buffer | any;
      shipping: boolean;
    };

    category: {
      _id: string;
      name: string;
    };
  }
}
