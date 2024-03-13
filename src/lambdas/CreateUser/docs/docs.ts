import { SexOptionsEnum } from "@common/enums/SexOptionsEnum";
import { UFEnum } from "@common/enums/UFEnum";

export type CreateUserRequestDoc = {
    name: string;
    sex: SexOptionsEnum;
    cpf: string;
    cellphone: string;
    email: string;
    street: string;
    number: number;
    neighborhood: string;
    city: string;
    uf: UFEnum;
    zipCode: string;
    complement: string;
};

export type CreateUserResponseDoc = {
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

