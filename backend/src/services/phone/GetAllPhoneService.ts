import prismaClient from "../../prisma/prisma";

class GetAllPhonesService {
    async execute() {
        const phones = await prismaClient.phone.findMany({
            select:{
                id: true,
                created_at: true,
                updated_at: true,
                personId: true,
                person: true,
                number: true,

            }
        })
        return phones
    }
}

export { GetAllPhonesService }