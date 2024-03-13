import { SexOptionsEnum } from "@common/enums/SexOptionsEnum";
import { UFEnum } from "@common/enums/UFEnum";

export type CreateUserRequestDto = {
    name: string;
    sex: keyof typeof SexOptionsEnum;
    cpf: string;
    cellphone: string;
    email: string;
    street: string;
    number: number;
    neighborhood: string;
    city: string;
    uf: keyof typeof UFEnum;
    zipCode: string;
    complement: string;
};

export type CreateUserRResponseDto = {
    id: string;
    name: string;
    sex: keyof typeof SexOptionsEnum;
    cpf: string;
    cellphone: string;
    email: string;
    street: string;
    number: number;
    neighborhood: string;
    city: string;
    uf: keyof typeof UFEnum;
    zipCode: string;
    complement: string;
};