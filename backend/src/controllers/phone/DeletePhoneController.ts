import { Response, Request } from 'express'
import { DeletePhoneService } from '../../services/phone/DeletePhoneService'


class DeletePhoneController {
    async hadle(req: Request, res: Response) {
        const { id } = req.params
        


        const deletePhoneService = new DeletePhoneService()

        const deleted = await deletePhoneService.execute({
            id
        })

        return res.json({ Message: 'Número apagado' })
    }
}

export { DeletePhoneController }