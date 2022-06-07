import {
  createHandler,
  Post,
  BadRequestException,
  Body,
} from "@storyofams/next-api-decorators";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';

const secret = process.env.JWT_SECRET;

const prisma = new PrismaClient();

class LoginHandler {
  @Post()
  async login(@Body() body) {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    const match = await bcrypt.compare(body.password, user.password);

    if (!match) {
      throw new BadRequestException();
    }

    const token = jwt.sign(
      {
        email: user.email,
      },
      secret,
      { subject: user.id },
      { expiresIn: '365d'}
    );

    return { token };
  }
}

export default createHandler(LoginHandler);
