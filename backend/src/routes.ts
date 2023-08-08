import { Router } from 'express'
import { CreateUserController } from './controllers/user/UserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { CreatePersonController } from './controllers/persons/PersonController'
import { isAuthenticated } from './middlewares/isAuthenticated'
import { CreatePhoneController } from './controllers/phone/PhoneController'
import { UpdatePhoneController } from './controllers/phone/UpdatePhoneController'
import { DeletePhoneController } from './controllers/phone/DeletePhoneController'
import { UpdatePersonController } from './controllers/persons/UpdatePersonController'
import { DeletePersonController } from './controllers/persons/DeletePersonController'
import { GetAllPersonsController } from './controllers/persons/GetAllPersonsController'
import { GetAllPhonesController } from './controllers/phone/GetAllPhonesController'



const router = Router()

// POSTS
router.post('/register', new CreateUserController().handle)
router.post('/login', new AuthUserController().handle)

// PERSONS
router.get('/persons', isAuthenticated, new GetAllPersonsController().handle)
router.post('/register/person', isAuthenticated, new CreatePersonController().handle)
router.put('/update/person/:id', isAuthenticated, new UpdatePersonController().handle)
router.delete('/person/delete/:personId', isAuthenticated, new DeletePersonController().handle)

// PHONES
router.get('/phones', isAuthenticated, new GetAllPhonesController().handle)
router.post('/register/phone', isAuthenticated, new CreatePhoneController().handle)
router.put('/update/phone/:id', isAuthenticated, new UpdatePhoneController().handle)
router.delete('/phone/delete/:id', isAuthenticated, new DeletePhoneController().hadle)





export { router }