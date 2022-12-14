import './util/module-alias';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { PrintersController } from './controllers/printers';
import { Application } from 'express';

export class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
  }
  // Responsavel por inicializar o Servidor
  public init(): void {
    this.setupExpress();
    this.setupControllers();
  }
  // Resposavel por fazer o Setup do Express da Aplicação
  private setupExpress(): void {
    this.app.use(bodyParser.json());
  }
  private setupControllers(): void {
    const printersController = new PrintersController();
    this.addControllers([printersController]);
  }

  public getApp(): Application {
    return this.app;
  }
}
