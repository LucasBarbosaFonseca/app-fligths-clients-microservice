import { v4 } from 'uuid';

export abstract class Entity<T> {
    protected readonly _id: string;
    protected readonly props: T;

    constructor(props: T, id?: string) {
        this._id = id ? id : v4();
        this.props = props;
    }
}