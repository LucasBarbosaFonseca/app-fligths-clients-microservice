import { Schema } from 'dynamoose';

export const UserSchema = new Schema({
    id: {
        type: String,
        hashKey: true,
    },
    name: {
        type: String,
        required: true,
    },
    sex: {
        type: String,
        required: true,
    },
    cpf: {
        type: String,
        required: true,
        index: {
            name: 'CpfIndex',
            type: 'global',
        },
    },
    email: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    neighborhood: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    uf: {
        type: String,
        required: true,
    },
    zipCode: {
        type: String,
        required: true,
    },
    complement: {
        type: String,
    },
    createdAt: {
        type: {
            value: Date,
            settings: {
                storage: 'iso',
            }
        }
    },
    updatedAt: {
        type: {
            value: Date,
            settings: {
                storage: 'iso',
            }
        }
    },
    deletedAtAt: {
        type: {
            value: Date,
            settings: {
                storage: 'iso',
            }
        }
    }
});
