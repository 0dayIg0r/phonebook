import { Request, Response } from "express";
import { CreatePersonService } from "../../services/persons/PersonsService";

class CreatePersonController {
    async handle(req: Request, res: Response) {
        const { name } = req.body

        const createPersonService = new CreatePersonService()

        try {
            const person = await createPersonService.execute({
                name
            })
            return res.json(person)
        } catch (err) {
            return res.status(500).json({ Messaage: 'Não foi possível cadastrar o contato' })
        }
    }
}

export { CreatePersonController }