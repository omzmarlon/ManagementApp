/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ErrorMessageDTO = (function() {

    /**
     * Properties of an ErrorMessageDTO.
     * @typedef ErrorMessageDTO$Properties
     * @type {Object}
     * @property {string} [exceptionCode] ErrorMessageDTO exceptionCode.
     * @property {number} [status] ErrorMessageDTO status.
     * @property {string} [code] ErrorMessageDTO code.
     * @property {string} [message] ErrorMessageDTO message.
     */

    /**
     * Constructs a new ErrorMessageDTO.
     * @exports ErrorMessageDTO
     * @constructor
     * @param {ErrorMessageDTO$Properties=} [properties] Properties to set
     */
    function ErrorMessageDTO(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ErrorMessageDTO exceptionCode.
     * @type {string}
     */
    ErrorMessageDTO.prototype.exceptionCode = "";

    /**
     * ErrorMessageDTO status.
     * @type {number}
     */
    ErrorMessageDTO.prototype.status = 0;

    /**
     * ErrorMessageDTO code.
     * @type {string}
     */
    ErrorMessageDTO.prototype.code = "";

    /**
     * ErrorMessageDTO message.
     * @type {string}
     */
    ErrorMessageDTO.prototype.message = "";

    /**
     * Creates a new ErrorMessageDTO instance using the specified properties.
     * @param {ErrorMessageDTO$Properties=} [properties] Properties to set
     * @returns {ErrorMessageDTO} ErrorMessageDTO instance
     */
    ErrorMessageDTO.create = function create(properties) {
        return new ErrorMessageDTO(properties);
    };

    /**
     * Encodes the specified ErrorMessageDTO message. Does not implicitly {@link ErrorMessageDTO.verify|verify} messages.
     * @param {ErrorMessageDTO$Properties} message ErrorMessageDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ErrorMessageDTO.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.exceptionCode != null && message.hasOwnProperty("exceptionCode"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.exceptionCode);
        if (message.status != null && message.hasOwnProperty("status"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
        if (message.code != null && message.hasOwnProperty("code"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.code);
        if (message.message != null && message.hasOwnProperty("message"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.message);
        return writer;
    };

    /**
     * Encodes the specified ErrorMessageDTO message, length delimited. Does not implicitly {@link ErrorMessageDTO.verify|verify} messages.
     * @param {ErrorMessageDTO$Properties} message ErrorMessageDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ErrorMessageDTO.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ErrorMessageDTO message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ErrorMessageDTO} ErrorMessageDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ErrorMessageDTO.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ErrorMessageDTO();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.exceptionCode = reader.string();
                break;
            case 2:
                message.status = reader.int32();
                break;
            case 3:
                message.code = reader.string();
                break;
            case 4:
                message.message = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ErrorMessageDTO message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ErrorMessageDTO} ErrorMessageDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ErrorMessageDTO.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ErrorMessageDTO message.
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    ErrorMessageDTO.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.exceptionCode != null && message.hasOwnProperty("exceptionCode"))
            if (!$util.isString(message.exceptionCode))
                return "exceptionCode: string expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        if (message.code != null && message.hasOwnProperty("code"))
            if (!$util.isString(message.code))
                return "code: string expected";
        if (message.message != null && message.hasOwnProperty("message"))
            if (!$util.isString(message.message))
                return "message: string expected";
        return null;
    };

    /**
     * Creates an ErrorMessageDTO message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {ErrorMessageDTO} ErrorMessageDTO
     */
    ErrorMessageDTO.fromObject = function fromObject(object) {
        if (object instanceof $root.ErrorMessageDTO)
            return object;
        var message = new $root.ErrorMessageDTO();
        if (object.exceptionCode != null)
            message.exceptionCode = String(object.exceptionCode);
        if (object.status != null)
            message.status = object.status | 0;
        if (object.code != null)
            message.code = String(object.code);
        if (object.message != null)
            message.message = String(object.message);
        return message;
    };

    /**
     * Creates an ErrorMessageDTO message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link ErrorMessageDTO.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {ErrorMessageDTO} ErrorMessageDTO
     */
    ErrorMessageDTO.from = ErrorMessageDTO.fromObject;

    /**
     * Creates a plain object from an ErrorMessageDTO message. Also converts values to other types if specified.
     * @param {ErrorMessageDTO} message ErrorMessageDTO
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ErrorMessageDTO.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.exceptionCode = "";
            object.status = 0;
            object.code = "";
            object.message = "";
        }
        if (message.exceptionCode != null && message.hasOwnProperty("exceptionCode"))
            object.exceptionCode = message.exceptionCode;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = message.code;
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = message.message;
        return object;
    };

    /**
     * Creates a plain object from this ErrorMessageDTO message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ErrorMessageDTO.prototype.toObject = function toObject(options) {
        return this.constructor.toObject(this, options);
    };

    /**
     * Converts this ErrorMessageDTO to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    ErrorMessageDTO.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ErrorMessageDTO;
})();

module.exports = $root;
