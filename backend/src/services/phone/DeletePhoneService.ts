import prismaClient from "../../prisma/prisma";

interface PhoneRequest {
    id: string
}

class DeletePhoneService {
    async execute({ id }: PhoneRequest) {

        if (!id) {
            throw new Error('Acesso negado')
        }
        // Check if Id exists
        const checkId = await prismaClient.phone.findFirst({
            where: {
                id: id
            }
        })

        if (!checkId) {
            throw new Error('Ocorreu um erro')
        }


        const deleted = await prismaClient.phone.delete({
            where: {
                id: id
            }
        })

        return deleted

    }
}

export { DeletePhoneService }