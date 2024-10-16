import { Request, Response } from "express";
import { ClientService } from "../services/ClientService";

export class ClientController {
  constructor(private clientService: ClientService) {}

  async create(req: Request, res: Response): Promise<void> {
    const client = await this.clientService.createClient(req.body);
    res.status(201).json(client);
  }

  async getById(req: Request, res: Response): Promise<void> {
    const client = await this.clientService.getClientById(req.params.id);
    if (client) {
      res.json(client);
    } else {
      res.status(404).send("Client not found");
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    const client = await this.clientService.updateClient(
      req.params.id,
      req.body
    );
    if (client) {
      res.json(client);
    } else {
      res.status(404).send("Client not found");
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    await this.clientService.deleteClient(req.params.id);
    res.status(204).send();
  }
}
