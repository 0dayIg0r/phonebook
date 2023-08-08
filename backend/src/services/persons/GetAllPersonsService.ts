import prismaClient from "../../prisma/prisma";

class GetAllPersonsService {
    async execute() {
        const persons = await prismaClient.persons.findMany({
            select:{
                id: true,
                name: true,
                phones: true,
                created_at: true,
                updated_at: true
            }
        })

        if (persons.length <= 0) {
            throw new Error('Nenhum contato na agenda.')
        }

        return persons
    }
}

export { GetAllPersonsService}