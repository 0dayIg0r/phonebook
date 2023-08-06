import { Request, Response } from 'express'
import { CreateUserService } from '../../services/user/UserService'

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body

        const createuserService = new CreateUserService()

        const user = await createuserService.execute({
            email, password
        })

        return res.json(user)
    }
}

export { CreateUserController }