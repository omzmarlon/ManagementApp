import * as $protobuf from "protobufjs";

type ErrorMessageDTO$Properties = {
    exceptionCode?: string;
    status?: number;
    code?: string;
    message?: string;
};

/**
 * Constructs a new ErrorMessageDTO.
 * @exports ErrorMessageDTO
 * @constructor
 * @param {ErrorMessageDTO$Properties=} [properties] Properties to set
 */
export class ErrorMessageDTO {

    /**
     * Constructs a new ErrorMessageDTO.
     * @exports ErrorMessageDTO
     * @constructor
     * @param {ErrorMessageDTO$Properties=} [properties] Properties to set
     */
    constructor(properties?: ErrorMessageDTO$Properties);

    /**
     * ErrorMessageDTO exceptionCode.
     * @type {string}
     */
    public exceptionCode: string;

    /**
     * ErrorMessageDTO status.
     * @type {number}
     */
    public status: number;

    /**
     * ErrorMessageDTO code.
     * @type {string}
     */
    public code: string;

    /**
     * ErrorMessageDTO message.
     * @type {string}
     */
    public message: string;

    /**
     * Creates a new ErrorMessageDTO instance using the specified properties.
     * @param {ErrorMessageDTO$Properties=} [properties] Properties to set
     * @returns {ErrorMessageDTO} ErrorMessageDTO instance
     */
    public static create(properties?: ErrorMessageDTO$Properties): ErrorMessageDTO;

    /**
     * Encodes the specified ErrorMessageDTO message. Does not implicitly {@link ErrorMessageDTO.verify|verify} messages.
     * @param {ErrorMessageDTO$Properties} message ErrorMessageDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    public static encode(message: ErrorMessageDTO$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ErrorMessageDTO message, length delimited. Does not implicitly {@link ErrorMessageDTO.verify|verify} messages.
     * @param {ErrorMessageDTO$Properties} message ErrorMessageDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    public static encodeDelimited(message: ErrorMessageDTO$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ErrorMessageDTO message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ErrorMessageDTO} ErrorMessageDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ErrorMessageDTO;

    /**
     * Decodes an ErrorMessageDTO message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ErrorMessageDTO} ErrorMessageDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ErrorMessageDTO;

    /**
     * Verifies an ErrorMessageDTO message.
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string;

    /**
     * Creates an ErrorMessageDTO message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {ErrorMessageDTO} ErrorMessageDTO
     */
    public static fromObject(object: { [k: string]: any }): ErrorMessageDTO;

    /**
     * Creates an ErrorMessageDTO message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link ErrorMessageDTO.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {ErrorMessageDTO} ErrorMessageDTO
     */
    public static from(object: { [k: string]: any }): ErrorMessageDTO;

    /**
     * Creates a plain object from an ErrorMessageDTO message. Also converts values to other types if specified.
     * @param {ErrorMessageDTO} message ErrorMessageDTO
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    public static toObject(message: ErrorMessageDTO, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this ErrorMessageDTO message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this ErrorMessageDTO to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    public toJSON(): { [k: string]: any };
}
