import { Request, Response } from "express";
import { VehicleService } from "../services/VehicleService";

export class VehicleController {
  constructor(private vehicleService: VehicleService) {}

  async create(req: Request, res: Response): Promise<void> {
    const vehicle = await this.vehicleService.createVehicle(req.body);
    res.status(201).json(vehicle);
  }

  async getById(req: Request, res: Response): Promise<void> {
    const vehicle = await this.vehicleService.getVehicleById(req.params.id);
    if (vehicle) {
      res.json(vehicle);
    } else {
      res.status(404).send("Vehicle not found");
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    const vehicle = await this.vehicleService.updateVehicle(
      req.params.id,
      req.body
    );
    if (vehicle) {
      res.json(vehicle);
    } else {
      res.status(404).send("Vehicle not found");
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    await this.vehicleService.deleteVehicle(req.params.id);
    res.status(204).send();
  }

  async applyDiscount(req: Request, res: Response): Promise<void> {
    const vehicle = await this.vehicleService.applyDiscount(
      req.params.id,
      req.body.discount
    );
    if (vehicle) {
      res.json(vehicle);
    } else {
      res.status(404).send("Vehicle not found");
    }
  }
}
