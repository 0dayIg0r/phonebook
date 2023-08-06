import { Router } from 'express'
import { CreateUserController } from './controllers/user/UserController'
import { AuthUserController } from './controllers/user/AuthUserController'



const router = Router()

router.post('/register', new CreateUserController().handle)
router.post('/login', new AuthUserController().handle)

export { router }