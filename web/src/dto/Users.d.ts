import * as $protobuf from "protobufjs";

type AccountDTO$Properties = {
    id?: (number|Long);
    username?: string;
    email?: string;
    password?: string;
    phone?: (number|Long);
    gender?: AccountDTO.Gender;
    registerAt?: (number|Long);
    lastUpdateAt?: (number|Long);
    isTutor?: boolean;
};

/**
 * Constructs a new AccountDTO.
 * @exports AccountDTO
 * @constructor
 * @param {AccountDTO$Properties=} [properties] Properties to set
 */
export class AccountDTO {

    /**
     * Constructs a new AccountDTO.
     * @exports AccountDTO
     * @constructor
     * @param {AccountDTO$Properties=} [properties] Properties to set
     */
    constructor(properties?: AccountDTO$Properties);

    /**
     * AccountDTO id.
     * @type {number|Long}
     */
    public id: (number|Long);

    /**
     * AccountDTO username.
     * @type {string}
     */
    public username: string;

    /**
     * AccountDTO email.
     * @type {string}
     */
    public email: string;

    /**
     * AccountDTO password.
     * @type {string}
     */
    public password: string;

    /**
     * AccountDTO phone.
     * @type {number|Long}
     */
    public phone: (number|Long);

    /**
     * AccountDTO gender.
     * @type {AccountDTO.Gender}
     */
    public gender: AccountDTO.Gender;

    /**
     * AccountDTO registerAt.
     * @type {number|Long}
     */
    public registerAt: (number|Long);

    /**
     * AccountDTO lastUpdateAt.
     * @type {number|Long}
     */
    public lastUpdateAt: (number|Long);

    /**
     * AccountDTO isTutor.
     * @type {boolean}
     */
    public isTutor: boolean;

    /**
     * Creates a new AccountDTO instance using the specified properties.
     * @param {AccountDTO$Properties=} [properties] Properties to set
     * @returns {AccountDTO} AccountDTO instance
     */
    public static create(properties?: AccountDTO$Properties): AccountDTO;

    /**
     * Encodes the specified AccountDTO message. Does not implicitly {@link AccountDTO.verify|verify} messages.
     * @param {AccountDTO$Properties} message AccountDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    public static encode(message: AccountDTO$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AccountDTO message, length delimited. Does not implicitly {@link AccountDTO.verify|verify} messages.
     * @param {AccountDTO$Properties} message AccountDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    public static encodeDelimited(message: AccountDTO$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AccountDTO message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AccountDTO} AccountDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AccountDTO;

    /**
     * Decodes an AccountDTO message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AccountDTO} AccountDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AccountDTO;

    /**
     * Verifies an AccountDTO message.
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string;

    /**
     * Creates an AccountDTO message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {AccountDTO} AccountDTO
     */
    public static fromObject(object: { [k: string]: any }): AccountDTO;

    /**
     * Creates an AccountDTO message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link AccountDTO.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {AccountDTO} AccountDTO
     */
    public static from(object: { [k: string]: any }): AccountDTO;

    /**
     * Creates a plain object from an AccountDTO message. Also converts values to other types if specified.
     * @param {AccountDTO} message AccountDTO
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    public static toObject(message: AccountDTO, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this AccountDTO message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this AccountDTO to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace AccountDTO {

    /**
     * Gender enum.
     * @name Gender
     * @memberof AccountDTO
     * @enum {number}
     * @property {number} Male=0 Male value
     * @property {number} Female=1 Female value
     */
    enum Gender {
        Male = 0,
        Female = 1
    }
}
