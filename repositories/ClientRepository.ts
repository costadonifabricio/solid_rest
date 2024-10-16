import { IClientRepository } from "../interfaces/IClientRepository";
import { IClient } from "../interfaces/IClient";

export class ClientRepository implements IClientRepository {
  private clients: IClient[] = [];

  async create(client: IClient): Promise<IClient> {
    this.clients.push(client);
    return client;
  }

  async findById(id: string): Promise<IClient | null> {
    return this.clients.find((c) => c.id === id) || null;
  }

  async update(id: string, updatedClient: IClient): Promise<IClient | null> {
    const index = this.clients.findIndex((c) => c.id === id);
    if (index === -1) return null;
    this.clients[index] = updatedClient;
    return updatedClient;
  }

  async delete(id: string): Promise<void> {
    this.clients = this.clients.filter((c) => c.id !== id);
  }
}
