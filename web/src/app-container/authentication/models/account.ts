import {Maybe, None} from "monet";

export class Account {
    constructor(
        public email: Maybe<string> = None<string>(),
        public password: Maybe<string> = None<string>(),
        public username: Maybe<string> = None<string>()
    ) {}

    public hasProperLoginDetails(): boolean {
        return this.email.isSome() && this.password.isSome();
    }

    public hasProperRegistrationDetails(): boolean {
        return this.email.isSome() && this.password.isSome() && this.username.isSome();
    }
}
