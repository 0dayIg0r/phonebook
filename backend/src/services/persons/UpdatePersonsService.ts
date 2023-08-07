import prismaClient from "../../prisma/prisma";


interface PersonRequest {
    id: string,
    name: string
}

class UpdatePersonsService {
    async execute({ id, name }: PersonRequest) {

        // Verify person
        const personExists = await prismaClient.persons.findFirst({
            where: {
                id: id
            }
        })

        if (!personExists) {
            throw new Error('Pessoa inexistente')
        }

        const updatedPerson = await prismaClient.persons.update({
            where: {
                id: id
            },
            data: {
                name: name
            }
        })

        return updatedPerson
    }
}

export { UpdatePersonsService }