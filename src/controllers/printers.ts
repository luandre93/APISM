import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('printers')
export class PrintersController {
  @Get('')
  public getPrinters(_: Request, res: Response) {
    res.send({ teste: 'teste' });
  }
}
