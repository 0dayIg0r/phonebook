import { Request, Response } from "express";
import { GetAllPhonesService } from "../../services/phone/GetAllPhoneService";

class GetAllPhonesController {
    async handle(req: Request, res: Response) {

        const getAllPhonesServices = new GetAllPhonesService()

        try {
            const phones = await getAllPhonesServices.execute()

            if (phones.length <= 0) {
                throw new Error('Não existem telefones cadastrados')
            }

            return res.json(phones)
        } catch (err) {
            res.status(500).json({ Message: 'Não foi possível renderizar os números' })
        }
    }
}

export { GetAllPhonesController }