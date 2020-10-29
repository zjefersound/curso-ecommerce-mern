import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface TokenPayload {
  _id: string;
  iat: number;
  exp: number;
}

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.sendStatus(401);
  }

  const token = authorization.replace("Bearer", "").trim();

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET || "");
    const { _id } = data as TokenPayload;
    
    req.userId = _id;
    return next();
  } catch {
    return res.sendStatus(401);
  }
}

export function isAuth(req: Request, res: Response, next: NextFunction) {
  let user = req.profile && req.userId && String(req.profile._id) === String(req.userId);
  
  if (!user) {
    return res.status(402).json({ 
      error: "Access denied" 
    });
  }
  next();
}

export function isAdmin(req: Request, res: Response, next: NextFunction) {
  if (req.profile.role === 0) {
    return res.status(403).json({ 
      error: "Admin resource! Access denied." 
    });
  }
  next();
}
