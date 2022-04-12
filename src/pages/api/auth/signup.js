import { createHandler, Post, Body } from "@storyofams/next-api-decorators";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

class SignupHandler {
  @Post()
  async signup(@Body() body) {
    console.log(body.password)
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const newUser = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: hashedPassword,
      },
    });

    return newUser;
  }
}

export default createHandler(SignupHandler);
