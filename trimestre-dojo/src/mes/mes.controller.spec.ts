// import { Test, TestingModule } from '@nestjs/testing';
// import { MesController } from './mes.controller';
// import { MesService } from './mes.service';

// describe('MesController', () => {
//   let mesService: MesService;
//   let mesController: MesController;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [MesController],
//       providers: [MesService],
//     }).compile();

//     mesService = module.get<MesService>(MesService);
//     mesController = module.get<MesController>(MesController);
//   });

//   describe('getTrimestre', () => {
//     it('should return the trimester of the month', async () => {
      
//       const serviceResult: number = 1;
//       jest.spyOn(mesService, 'getTrimestre').mockImplementation(() => serviceResult);

//       const month: string = 'Janeiro';
//       const controllerResult: string = '1° trimestre';
//       let res: Response;
//       expect(mesController.getTrimestre(month, res)).toBe(controllerResult);

//     })
//   });

// });
