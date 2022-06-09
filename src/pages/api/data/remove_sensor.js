import { createHandler, Get, Request, Post, Body } from "@storyofams/next-api-decorators";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { JwtAuthGuard } from "../../../decorators/auth";

const prisma = new PrismaClient();

@JwtAuthGuard()

class SensorHandler {
  @Post()
  async delSensor(@Body() body) {
    console.log(body);
    try {
      const newSensor = await prisma.sensor.delete({
        where: {
          id: body.dev_id
        },
      });
      return newSensor;
    } catch (e) {
      console.log(e);
    }
  }

}

export default createHandler(SensorHandler);
