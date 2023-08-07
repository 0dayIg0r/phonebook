import { Response, Request } from 'express'
import { UpdatePhoneService } from '../../services/phone/UpdatePhoneService'

class UpdatePhoneController {
    async handle(req: Request, res: Response) {
        const { number } = req.body
        const { id } = req.params

        console.log(id)



        const updatePhoneService = new UpdatePhoneService()

        const phone = await updatePhoneService.execute({
            id,
            number
        })

        return res.json(phone)
    }
}

export { UpdatePhoneController }