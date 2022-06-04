import { createHandler, Post, Get, HttpCode } from "@storyofams/next-api-decorators";
import { PrismaClient } from "@prisma/client";
import { JwtAuthGuard } from "../../../decorators/auth";

const prisma = new PrismaClient();

@JwtAuthGuard()
class SensorHandler {
  @Get()
  async listSensors() {
    const sensors = await prisma.sensor.findMany();
    return sensors;
  }

  @Post()
  @HttpCode(201)
  async createSensor(@Body() body) {
    const result = await prisma.sensor.create({
      data: {
        id: body.id,
        user: {
          connect: {
            id: body.userId
          }
        }
      }
    })

    return result;
  }
}

export default createHandler(SensorHandler);
