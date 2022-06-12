import { createHandler, Get, Request, Post, Body } from "@storyofams/next-api-decorators";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { JwtAuthGuard } from "../../../decorators/auth";

const prisma = new PrismaClient();

@JwtAuthGuard()
class NotifsHandler {
  @Get()
  async getNotifs(@Request() req) {

    const sensors = await prisma.user.findMany({
      where: {
        id: req.user.sub,
      },
    });
    console.log(sensors);
    return sensors;
  }

  @Post()
  async updateNotifs(@Body() body) {

    const newSensor = await prisma.user.update({
      where: {
        id: body.ownerId
      },
      data:{
        notifs: body.notif,
      },
    });
    return newSensor;
  }

}

export default createHandler(NotifsHandler);
