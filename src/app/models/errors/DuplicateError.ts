export class DuplicateError extends Error {
    constructor(message: string) {
        super(`Duplicate error: ${message}`);
    }
}