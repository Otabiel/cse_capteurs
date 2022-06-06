import { createHandler, Get, Request, Post, Body } from "@storyofams/next-api-decorators";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { JwtAuthGuard } from "../../../decorators/auth";

const prisma = new PrismaClient();

@JwtAuthGuard()
class SensorHandler {
  @Get()
  async getSensor(@Request() req) {
    const sensors = await prisma.sensor.findMany({
      where: {
        ownerId: req.user.sub,
      },
    });
    console.log(sensors);
    return sensors;
  }

  @Post()
  async signup(@Body() body) {
    const newSensor = await prisma.sensor.create({
      data:{
        dev_id: body.dev_id,
        ownerId: body.ownerId,
      },
    });
    return newSensor;
  }

}

export default createHandler(SensorHandler);
