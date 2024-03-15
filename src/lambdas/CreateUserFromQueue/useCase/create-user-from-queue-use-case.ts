import { User } from "@common/domain/User";
import { CreateUserResponseDto, CreateUserRequestDto } from "@common/dtos/create-user.dto";
import { UseCase } from "@common/interfaces";
import { UserRepository } from "@common/interfaces/repositories/UserRepository";
import { UserMapper } from "@common/mappers/UserMapper";

export class CreateUserFromQueueUseCase implements UseCase<CreateUserRequestDto, CreateUserResponseDto> {
    constructor(private readonly _userRepository: UserRepository) { }

    async exec(userRequest: CreateUserRequestDto) {
        const user = User.create({
            name: userRequest.name,
            sex: userRequest.sex,
            cpf: userRequest.cpf,
            cellphone: userRequest.cellphone,
            email: userRequest.email,
            street: userRequest.street,
            number: userRequest.number,
            neighborhood: userRequest.neighborhood,
            city: userRequest.city,
            uf: userRequest.uf,
            zipCode: userRequest.zipCode,
            complement: userRequest.complement,
            createdAt: new Date(),
        });

        const userCreated = await this._userRepository.create(user);

        console.log('[CreateNewUserUseCase] Create New User Successfull!');

        return UserMapper.toViewModel(userCreated);
    }
}