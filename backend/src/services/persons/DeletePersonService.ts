import prismaClient from "../../prisma/prisma";

interface PersonRequest {
    personId: string
}

class DeletePersonService {
    async execute({ personId }: PersonRequest) {

        const deletedPerson = await prismaClient.persons.delete({
            where: {
                id: personId
            }
        })

        return deletedPerson
    }
}

export { DeletePersonService }