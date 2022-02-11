import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { DadosDto } from './dto/dados.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getNumber(@Body() dados: DadosDto): number | string {
    
    const number = dados.number;

    return number.toString(2).replace(/0/g, '').length;

    // return this.appService.getNumber(number);
  }
}
