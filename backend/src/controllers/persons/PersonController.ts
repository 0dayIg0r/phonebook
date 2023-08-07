import { Request, Response } from "express";
import { CreatePersonService } from "../../services/persons/PersonsService";

class CreatePersonController {
    async handle(req: Request, res: Response) {
        const { name, phone } = req.body

        const createPersonService = new CreatePersonService()

        const person = await createPersonService.execute({
            name, phone
        })
        return res.json(person)
    }
}

export { CreatePersonController }