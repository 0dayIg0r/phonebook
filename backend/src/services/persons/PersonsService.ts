import prismaClient from "../../prisma/prisma";

interface PersonRequest{
    name: string,
}

class CreatePersonService {
    async execute({name}:PersonRequest){

        if(!name ){
            throw new Error('Digite o nome do contato')
        }

        // Verify number
        const personExists = await prismaClient.persons.findFirst({
            where:{
                name: name
            }
        })

        if(personExists){
            throw new Error('Essa pessoa já está na agenda')
        }


        // Insert data on DB
        const person = await prismaClient.persons.create({
            data:{
                name: name,
            }
        })

        return person
    }
}

export { CreatePersonService}