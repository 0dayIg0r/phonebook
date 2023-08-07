import prismaClient from "../../prisma/prisma";


interface PhoneRequest {
    id: string,
    number: string
}

class UpdatePhoneService {
    async execute({ id, number }: PhoneRequest) {

        if (!id) {
            throw new Error('Escolha a pessoa para adicionar o novo número')
        }

        if (!number) {
            throw new Error('Digite o número de telefone')
        }

        // Check if person exists
        const numberExists = await prismaClient.phone.findFirst({
            where: {
                id: id
            }
        })

        if (!numberExists) {
            throw new Error('Pessoa não encontrada')
        }


        const phone = await prismaClient.phone.update({
            where: {
                id: id
            },
            data: {
                number: number
            }
        })

        return phone
    }
}

export { UpdatePhoneService }