import { Response, Request } from 'express'
import { UpdatePersonsService } from '../../services/persons/UpdatePersonsService'


class UpdatePersonController {
    async handle(req: Request, res: Response) {

        const { id } = req.params
        const { name } = req.body

        const updatePersonsService = new UpdatePersonsService()

        const updated = await updatePersonsService.execute({
            id,
            name
        })

        return res.json(updated)
    }
}

export { UpdatePersonController }