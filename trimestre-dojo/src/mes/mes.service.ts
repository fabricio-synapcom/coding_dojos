import { Injectable } from '@nestjs/common';

@Injectable()
export class MesService {

    getTrimestre(mes: string): number {

        mes = mes.toLowerCase().trim();
        mes = (mes === 'marco') ? 'março' : mes;

        const trimestreMeses = {
            janeiro: 1,
            fevereiro: 1,
            março: 1,
            abril: 2,
            maio: 2,
            junho: 2,
            julho: 3,
            agosto: 3,
            setembro: 3,
            outubro: 4,
            novembro: 4,
            dezembro: 4
        };

        const trimestre = trimestreMeses[mes];

        return trimestre;
    
    }

}
