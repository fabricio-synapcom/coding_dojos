import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("palindromo/:palavra")
  getPalindromo(@Param('palavra') palavra : string ): string {
    return this.appService.getPalindromo(palavra);
  }
}
