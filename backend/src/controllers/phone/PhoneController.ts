import { Request, Response } from "express";
import { CreatePhoneRequest } from "../../services/phone/PhoneService";


class CreatePhoneController {
    async handle(req: Request, res: Response) {
        const {number, personId} = req.body

        const createPhoneRequest = new CreatePhoneRequest()

        const phone = await createPhoneRequest.execute({
            personId,
            number
        })

        return res.json(phone)
    }
}

export {
    CreatePhoneController
}