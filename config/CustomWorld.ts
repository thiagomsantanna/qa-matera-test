import { IWorldOptions, World, setWorldConstructor } from '@cucumber/cucumber';
import { Response } from 'supertest';

export class CustomWorld extends World {
  response!: Response;

  constructor(options: IWorldOptions<any>) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);
