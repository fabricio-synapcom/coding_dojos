import { Module } from '@nestjs/common';
import { MesService } from './mes.service';
import { MesController } from './mes.controller';

@Module({
  controllers: [MesController],
  providers: [MesService]
})
export class MesModule {}
