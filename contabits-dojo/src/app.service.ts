import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getNumber(number: number): number | string{
    
    if (number > 0) {
      
      let bits = number.toString(2);
      
      let i = bits.length;

      for(i; i > 0; i--){
        bits = bits.replace('0', '');
      }

      return bits.length;
    }

    return 'Número deve ser maior que -1 imbecil!!!';
  }
}
