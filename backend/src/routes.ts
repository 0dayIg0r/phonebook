import { Router } from 'express'
import { CreateUserController } from './controllers/user/UserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { CreatePersonController } from './controllers/persons/PersonController'
import { isAuthenticated } from './middlewares/isAuthenticated'
import { CreatePhoneController } from './controllers/phone/PhoneController'
import { UpdatePhoneController } from './controllers/phone/UpdatePhoneController'
import { DeletePhoneController } from './controllers/phone/DeletePhoneController'



const router = Router()

// User 
router.post('/register', new CreateUserController().handle)
router.post('/login', new AuthUserController().handle)


//Person 
router.post('/register/person', isAuthenticated, new CreatePersonController().handle)

//Phone
router.post('/register/phone', isAuthenticated, new CreatePhoneController().handle)
router.put('/settins/phone/:id', isAuthenticated, new UpdatePhoneController().handle)
router.delete('/delete/:id', isAuthenticated, new DeletePhoneController().hadle)
export { router }