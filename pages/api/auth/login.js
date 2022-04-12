import { createHandler, Post } from "@storyofams/next-api-decorators";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class LoginHandler {
  @Post()
  async login(@Body() body) {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    return "Our users";
  }
}

export default createHandler(LoginHandler);
