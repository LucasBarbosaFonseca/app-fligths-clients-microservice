import { SexOptionsEnum } from "@common/enums/SexOptionsEnum";
import { UFEnum } from "@common/enums/UFEnum";

export type CreateUserRequestDoc = {
    name: string;
    sex: SexOptionsEnum;
    cpf: string;
    contact: {
        cellphone: string;
        email: string;
    };
    address: {
        street: string;
        number: number;
        neighborhood: string;
        city: string;
        uf: UFEnum;
        zipCode: string;
        complement: string;
    };
};

export type CreateUserResponseDoc = {
    id: string;
    name: string;
    sex: SexOptionsEnum;
    cpf: string;
    contact: {
        cellphone: string;
        email: string;
    };
    address: {
        street: string;
        number: number;
        neighborhood: string;
        city: string;
        uf: UFEnum;
        zipCode: string;
        complement: string;
    };
};

