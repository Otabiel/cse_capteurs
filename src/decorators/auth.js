import jwt from "jsonwebtoken";
import {
  UnauthorizedException,
  createMiddlewareDecorator,
} from "@storyofams/next-api-decorators";

const secret = process.env.JWT_SECRET;

export const JwtAuthGuard = createMiddlewareDecorator(
  (req, res, next) => {
    try {
      const [_, token] = req.headers["authorization"].split(" ");
      const decoded = jwt.verify(token, secret);
      req.user = decoded;
      next();
    } catch (e) {
      console.log(e)
      throw new UnauthorizedException();
    }
  }
);
