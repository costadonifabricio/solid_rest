import { IClientRepository } from "../interfaces/IClientRepository";
import { IClient } from "../interfaces/IClient";

export class ClientService {
  constructor(private clientRepository: IClientRepository) {}

  async createClient(client: IClient): Promise<IClient> {
    return this.clientRepository.create(client);
  }

  async getClientById(id: string): Promise<IClient | null> {
    return this.clientRepository.findById(id);
  }

  async updateClient(id: string, client: IClient): Promise<IClient | null> {
    return this.clientRepository.update(id, client);
  }

  async deleteClient(id: string): Promise<void> {
    return this.clientRepository.delete(id);
  }
}
