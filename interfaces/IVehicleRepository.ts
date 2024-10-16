import { IVehicle } from "./IVehicle";

export interface IVehicleRepository {
  create(vehicle: IVehicle): Promise<IVehicle>;
  findById(id: string): Promise<IVehicle | null>;
  update(id: string, vehicle: IVehicle): Promise<IVehicle | null>;
  delete(id: string): Promise<void>;
}
