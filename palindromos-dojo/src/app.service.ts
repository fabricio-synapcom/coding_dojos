import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getPalindromo(palavra : string): string {
    palavra = palavra.replace(/\s/g, '');
    
    let letras = palavra.split("").reverse().join("");
    let palindromo = (palavra === letras) ? "É palindromo" : "Não é palindromo";

    return palindromo;
  }
}
