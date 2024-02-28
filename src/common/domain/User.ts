import { SexOptionsEnum } from '@common/enums/SexOptionsEnum';
import { UFEnum } from '@common/enums/UFEnum';
import { Entity } from '../interfaces/Entity';

export type UserProps = {
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
    createdAt: Date;
    updatedAt?: Date;
    deletedAt?: Date;
};

export class User extends Entity<UserProps> {
    constructor(props: UserProps, id?: string) {
        super(props, id);

        Object.freeze(this);
    }

    public get id() {
        return this._id;
    }

    public get name() {
        return this.props.name;
    }

    public get sex() {
        return this.props.sex;
    }

    public get cpf() {
        return this.props.cpf;
    }

    public get cellphone() {
        return this.props.cellphone;
    }

    public get email() {
        return this.props.email;
    }

    public get street() {
        return this.props.street;
    }

    public get number() {
        return this.props.number;
    }

    public get neighborhood() {
        return this.props.neighborhood;
    }

    public get city() {
        return this.props.city;
    }

    public get uf() {
        return this.props.uf;
    }

    public get zipCode() {
        return this.props.zipCode;
    }

    public get complement() {
        return this.props.complement;
    }

    public get createdAt() {
        return this.props.createdAt;
    }

    public get updatedAt() {
        return this.props.updatedAt;
    }

    public get deletedAt() {
        return this.props.deletedAt;
    }

    public static create(props: UserProps, id?: string) {
        return new User(props, id);
    }
}