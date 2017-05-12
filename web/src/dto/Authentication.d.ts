import * as $protobuf from "protobufjs";

type TokenDTO$Properties = {
    token?: string;
};

/**
 * Constructs a new TokenDTO.
 * @exports TokenDTO
 * @constructor
 * @param {TokenDTO$Properties=} [properties] Properties to set
 */
export class TokenDTO {

    /**
     * Constructs a new TokenDTO.
     * @exports TokenDTO
     * @constructor
     * @param {TokenDTO$Properties=} [properties] Properties to set
     */
    constructor(properties?: TokenDTO$Properties);

    /**
     * TokenDTO token.
     * @type {string}
     */
    public token: string;

    /**
     * Creates a new TokenDTO instance using the specified properties.
     * @param {TokenDTO$Properties=} [properties] Properties to set
     * @returns {TokenDTO} TokenDTO instance
     */
    public static create(properties?: TokenDTO$Properties): TokenDTO;

    /**
     * Encodes the specified TokenDTO message. Does not implicitly {@link TokenDTO.verify|verify} messages.
     * @param {TokenDTO$Properties} message TokenDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    public static encode(message: TokenDTO$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TokenDTO message, length delimited. Does not implicitly {@link TokenDTO.verify|verify} messages.
     * @param {TokenDTO$Properties} message TokenDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    public static encodeDelimited(message: TokenDTO$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TokenDTO message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TokenDTO} TokenDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TokenDTO;

    /**
     * Decodes a TokenDTO message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TokenDTO} TokenDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TokenDTO;

    /**
     * Verifies a TokenDTO message.
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string;

    /**
     * Creates a TokenDTO message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {TokenDTO} TokenDTO
     */
    public static fromObject(object: { [k: string]: any }): TokenDTO;

    /**
     * Creates a TokenDTO message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link TokenDTO.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {TokenDTO} TokenDTO
     */
    public static from(object: { [k: string]: any }): TokenDTO;

    /**
     * Creates a plain object from a TokenDTO message. Also converts values to other types if specified.
     * @param {TokenDTO} message TokenDTO
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    public static toObject(message: TokenDTO, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this TokenDTO message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this TokenDTO to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    public toJSON(): { [k: string]: any };
}
