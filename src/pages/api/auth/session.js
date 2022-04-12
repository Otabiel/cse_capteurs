import { createHandler, Get, Request } from "@storyofams/next-api-decorators";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { JwtAuthGuard } from "../../../decorators/auth";

const prisma = new PrismaClient();

@JwtAuthGuard()
class SessionHandler {
  @Get()
  async getSession(@Request() req) {
    const user = await prisma.user.findUnique({
      where: {
        email: req.user.email,
      },
      select: {
        email: true,
        name: true
      }

    });

    return user;
  }
}

export default createHandler(SessionHandler);
