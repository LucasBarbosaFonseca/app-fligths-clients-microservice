import { User } from "@common/domain/User";
import { CreateUserResponseDoc } from '../../lambdas/CreateUser/docs/docs';

export class UserMapper {
    public static toDomain(raw: any): User {
        return User.create(
            {
                name: raw.name,
                sex: raw.sex,
                cpf: raw.cpf,
                cellphone: raw.cellphone,
                email: raw.email,
                street: raw.street,
                number: raw.number,
                neighborhood: raw.neighborhood,
                city: raw.city,
                uf: raw.uf,
                zipCode: raw.zipCode,
                complement: raw.complement,
                createdAt: raw.createdAt,
                updatedAt: raw?.updatedAt,
                deletedAt: raw?.deletedAt,
            },
            raw.id,
        )
    }

    public static toPersistence(user: User) {
        return {
            id: user.id,
            name: user.name,
            sex: user.sex,
            cpf: user.cpf,
            cellphone: user.cellphone,
            email: user.email,
            street: user.street,
            number: user.number,
            neighborhood: user.neighborhood,
            city: user.city,
            uf: user.uf,
            zipCode: user.zipCode,
            complement: user.complement,
            createdAt: user.createdAt,
            updatedAt: user?.updatedAt,
            deletedAt: user?.deletedAt,
        };
    }

    public static toViewModel(user: User): CreateUserResponseDoc {
        return {
            id: user.id,
            name: user.name,
            sex: user.sex,
            cpf: user.cpf,
            cellphone: user.cellphone,
            email: user.email,
            street: user.street,
            number: user.number,
            neighborhood: user.neighborhood,
            city: user.city,
            uf: user.uf,
            zipCode: user.zipCode,
            complement: user.complement,
        };
    }
}