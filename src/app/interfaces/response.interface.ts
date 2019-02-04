export interface IResponse {
    error?: { message: string };
    success?: { results?: [{id?: number, name?: string, amount?: number, limit?: number}], message?: string};
    status?: number;
}
