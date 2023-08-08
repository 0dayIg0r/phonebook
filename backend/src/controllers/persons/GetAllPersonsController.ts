import { Request, Response } from "express";
import { GetAllPersonsService } from "../../services/persons/GetAllPersonsService";

class GetAllPersonsController {
    async handle(req: Request, res: Response) {
        const getAllPersonsService = new GetAllPersonsService()

        try {
            const persons = await getAllPersonsService.execute()

            return res.json(persons)

        } catch (err) {
            return res.status(500).json({ Error: 'Não foi possível acessar os contatos' })
        }

    }
}

export { GetAllPersonsController }