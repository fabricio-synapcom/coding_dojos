import { Module } from '@nestjs/common';
import { MesModule } from './mes/mes.module';

@Module({
  imports: [MesModule]
})
export class AppModule {}
