import express from "express";
import { VehicleController } from "../controllers/VehicleController";
import { ClientController } from "../controllers/ClientController";
import { MongoVehicleRepository } from "../repositories/MongoVehicleRepository";
import { ClientRepository } from "../repositories/ClientRepository";
import { VehicleService } from "../services/VehicleService";
import { ClientService } from "../services/ClientService";

export class Server {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.configureMiddlewares();
    this.configureRoutes();
  }

  private configureMiddlewares(): void {
    this.app.use(express.json());
  }

  private configureRoutes(): void {
    const vehicleRepo = new MongoVehicleRepository();
    const clientRepo = new ClientRepository();

    const vehicleService = new VehicleService(vehicleRepo);
    const clientService = new ClientService(clientRepo);

    const vehicleController = new VehicleController(vehicleService);
    const clientController = new ClientController(clientService);

    this.app.post(
      "/vehicles",
      vehicleController.create.bind(vehicleController)
    );
    this.app.get(
      "/vehicles/:id",
      vehicleController.getById.bind(vehicleController)
    );
    this.app.put(
      "/vehicles/:id",
      vehicleController.update.bind(vehicleController)
    );
    this.app.delete(
      "/vehicles/:id",
      vehicleController.delete.bind(vehicleController)
    );
    this.app.post(
      "/vehicles/:id/discount",
      vehicleController.applyDiscount.bind(vehicleController)
    );

    this.app.post("/clients", clientController.create.bind(clientController));
    this.app.get(
      "/clients/:id",
      clientController.getById.bind(clientController)
    );
    this.app.put(
      "/clients/:id",
      clientController.update.bind(clientController)
    );
    this.app.delete(
      "/clients/:id",
      clientController.delete.bind(clientController)
    );
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
}
