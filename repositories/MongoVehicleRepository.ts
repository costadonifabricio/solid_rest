import { IVehicleRepository } from "../interfaces/IVehicleRepository";
import { IVehicle } from "../interfaces/IVehicle";

export class MongoVehicleRepository implements IVehicleRepository {
  private vehicles: IVehicle[] = [];

  async create(vehicle: IVehicle): Promise<IVehicle> {
    this.vehicles.push(vehicle);
    return vehicle;
  }

  async findById(id: string): Promise<IVehicle | null> {
    return this.vehicles.find((v) => v.id === id) || null;
  }

  async update(id: string, updatedVehicle: IVehicle): Promise<IVehicle | null> {
    const index = this.vehicles.findIndex((v) => v.id === id);
    if (index === -1) return null;
    this.vehicles[index] = updatedVehicle;
    return updatedVehicle;
  }

  async delete(id: string): Promise<void> {
    this.vehicles = this.vehicles.filter((v) => v.id !== id);
  }
}
