import prismaClient from "../../prisma/prisma";

interface PersonRequest{
    name: string,
    phone: string
}

class CreatePersonService {
    async execute({name, phone}:PersonRequest){

        if(!name || !phone){
            throw new Error('Digite o nome e o número do telefone.')
        }

        // Verify number
        const numberExists = await prismaClient.phone.findFirst({
            where:{
                number: phone
            }
        })

        if(numberExists){
            throw new Error('Esse número já está na agenda')
        }


        // Insert data on DB
        const person = await prismaClient.persons.create({
            data:{
                name: name,
                phone: phone
            }
        })

        return person
    }
}

export { CreatePersonService}