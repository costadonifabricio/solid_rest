import { IVehicleRepository } from "../interfaces/IVehicleRepository";
import { IVehicle } from "../interfaces/IVehicle";

export class VehicleService {
  constructor(private vehicleRepository: IVehicleRepository) {}

  async createVehicle(vehicle: IVehicle): Promise<IVehicle> {
    return this.vehicleRepository.create(vehicle);
  }

  async getVehicleById(id: string): Promise<IVehicle | null> {
    return this.vehicleRepository.findById(id);
  }

  async updateVehicle(id: string, vehicle: IVehicle): Promise<IVehicle | null> {
    return this.vehicleRepository.update(id, vehicle);
  }

  async deleteVehicle(id: string): Promise<void> {
    return this.vehicleRepository.delete(id);
  }

  // Extendemos la funcionalidad: (OCP)
  async applyDiscount(
    id: string,
    discountPercentage: number
  ): Promise<IVehicle | null> {
    const vehicle = await this.vehicleRepository.findById(id);
    if (!vehicle) return null;

    vehicle.price = vehicle.price - (vehicle.price * discountPercentage) / 100;
    return this.vehicleRepository.update(id, vehicle);
  }
}
