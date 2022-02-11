import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { MesService } from './mes.service';

@Controller('mes')
export class MesController {

  constructor(
    private readonly mesService: MesService
  ) {}

  @Get(':mes')
  getTrimestre(@Param() params, @Res() response: Response) {

    const mes = params.mes;
    const numeroMes = this.mesService.getTrimestre(mes);
    let retorno: string;
    let status: number;
    
    if (numeroMes < 1 || isNaN(numeroMes)) {
      retorno = 'Por favor aprenda a escrever o nome do mês.';
      status = 400;
    }
    else {
      retorno = `${numeroMes}° trimestre`;
      status = 200;
    }

    response
      .status(status)
      .send({
        message: retorno
      });

  }

}
