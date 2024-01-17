import { Controller, Get } from '@nestjs/common';

type Message = {
  message: string;
};

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(): Message {
    return { message: `${process.env}` };
  }
}
