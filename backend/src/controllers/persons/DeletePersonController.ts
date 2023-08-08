import { Request, Response } from 'express'
import { DeletePersonService } from '../../services/persons/DeletePersonService';



class DeletePersonController {
    async handle(req: Request, res: Response) {
        const { personId } = req.params;

        const deletePersonService = new DeletePersonService();

        try {
            await deletePersonService.execute({
                personId
            });

            return res.json({ Message: 'Pessoa deletada com sucesso' })
        } catch (err) {
            return res.status(500).json({ Error: 'Ocorreu um erro ao deletar a pessoa' })
        }
    }
    
}

export { DeletePersonController }


