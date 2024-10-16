import express from 'express';

export class Server {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.configureMiddlewares();
  }

  private configureMiddlewares(): void {
    this.app.use(express.json());
  }


  public start(port: number): void {
    this.app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
}
