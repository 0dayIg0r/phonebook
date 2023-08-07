import { Router } from 'express'
import { CreateUserController } from './controllers/user/UserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { CreatePersonController } from './controllers/persons/PersonController'
import { isAuthenticated } from './middlewares/isAuthenticated'
import { CreatePhoneController } from './controllers/phone/PhoneController'



const router = Router()

router.post('/register', new CreateUserController().handle)
router.post('/login', new AuthUserController().handle)



router.post('/register/person', isAuthenticated, new CreatePersonController().handle)
router.post('/register/phone', isAuthenticated, new CreatePhoneController().handle)
export { router }