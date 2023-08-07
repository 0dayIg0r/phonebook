import prismaClient from "../../prisma/prisma";

interface PersonRequest {
    id: string
}

class DeletePersonService {
    async execute({ id }: PersonRequest) {

        const personExists = await prismaClient.persons.findFirst({
            where: {
                id: id
            }
        })

        if (!personExists) {
            throw new Error('Pessoa inexistente')
        }

        const deletedPerson = await prismaClient.persons.delete({
            where: {
                id: id
            }
        })

        return deletedPerson
    }
}

export { DeletePersonService }