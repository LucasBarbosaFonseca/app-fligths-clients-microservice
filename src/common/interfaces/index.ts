export interface Response {
    statusCode: number;
    body: string;
    headers?: Record<string, unknown>;
}

export interface UseCase<Input, Output> {
    exec: (param: Input) => Promise<Output>;
}

export interface Controller<Input, Output> {
    exec: (event: Input) => Promise<Output>;
}