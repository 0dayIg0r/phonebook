import prismaClient from "../../prisma/prisma";


interface PhoneRequest {
    personId: string,
    number: string
}


class CreatePhoneRequest {
    async execute({ personId, number }: PhoneRequest) {

        if (!personId) {
            throw new Error('Escolha a pessoa para adicionar o novo número')
        }

        if (!number) {
            throw new Error('Digite o número de telefone')
        }

        // Check if person exists
        const personExists = await prismaClient.persons.findFirst({
            where: {
                id: personId
            }
        })

        if (!personExists) {
            throw new Error('Pessoa não encontrada')
        }


        const phone = await prismaClient.phone.create({
            data: {
                personId: personId,
                number: number,
            }
        })

        return phone
    }
}

export { CreatePhoneRequest }
