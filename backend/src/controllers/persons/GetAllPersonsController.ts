import { Request, Response } from "express";
import { GetAllPersonsService } from "../../services/persons/GetAllPersonsService";

class GetAllPersonsController {
    async handle(req: Request, res: Response) {
        const getAllPersonsService = new GetAllPersonsService()

        const persons = await getAllPersonsService.execute()

        return res.json(persons)

    }
}

export { GetAllPersonsController }