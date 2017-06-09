export class MAError {
    constructor(
        public exceptionCode: string,
        public status: number,
        public code: string,
        public message: string
    ) {}
}
