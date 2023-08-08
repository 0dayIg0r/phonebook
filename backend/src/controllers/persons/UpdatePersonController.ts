import { Response, Request } from 'express'
import { UpdatePersonsService } from '../../services/persons/UpdatePersonsService'


class UpdatePersonController {
    async handle(req: Request, res: Response) {

        const { id } = req.params
        const { name } = req.body

        const updatePersonsService = new UpdatePersonsService()

        try {
            const updated = await updatePersonsService.execute({
                id,
                name
            })

            return res.json(updated)
        } catch (err) {
            return res.status(500).json({ Message: 'Não foi possível atualizar o contato' })
        }
    }
}

export { UpdatePersonController }