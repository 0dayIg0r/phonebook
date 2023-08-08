import prismaClient from "../../prisma/prisma";

export interface PhoneRequest {
    id: string,
}

class DeletePhoneService {
    async execute({ id }: PhoneRequest) {
        const del = await prismaClient.phone.delete({
            where: {
                id: id
            }

        })
        return del
    }
}

export { DeletePhoneService }