import { createHandler, Post, Body } from "@storyofams/next-api-decorators";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class SensorHandlerPost {
  @Post()
  async addSensor(@Body() body) {

    const newSensor = await prisma.sensor.create({
      data:{
        dev_id: body.dev_id,
        ownerId: body.ownerId,
      },
    });

    return newSensor;
  }
}

export default createHandler(SensorHandlerPost);
