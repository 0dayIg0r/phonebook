import { Router } from 'express'
import { CreateUserController } from './controllers/user/UserController'



const router = Router()

router.post('/register', new CreateUserController().handle)


export { router }