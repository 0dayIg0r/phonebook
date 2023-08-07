import { Request, Response } from 'express'
import { DeletePersonService } from '../../services/persons/DeletePersonService'
import { DeletePhoneService } from '../../services/phone/DeletePhoneService'
import { GetAllPersonsService } from '../../services/persons/GetAllPersonsService'





class DeletePersonController {
    async handle(req: Request, res: Response) {

        const { id } = req.params
        console.log(id, 'req')

        const deletePersonService = new DeletePersonService()

        const deletePhoneService = new DeletePhoneService()

        const getAllPersons = new GetAllPersonsService()

        const getPersons = await getAllPersons.execute()

        const pickPersonId = getPersons.forEach((person) => {
            return person.id
        })



        const deletePhones = await deletePhoneService.execute({
            personId: pickPersonId,
                id: id
        })

        const deleted = await deletePersonService.execute({
            id
        })

        res.json({ Message: 'Contato apagado' })

    }
}

export { DeletePersonController }