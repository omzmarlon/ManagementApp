/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobuf"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.TokenDTO = (function() {
    
        /**
         * Properties of a TokenDTO.
         * @typedef TokenDTO$Properties
         * @type {Object}
         * @property {string} [token] TokenDTO token.
         */
    
        /**
         * Constructs a new TokenDTO.
         * @exports TokenDTO
         * @constructor
         * @param {TokenDTO$Properties=} [properties] Properties to set
         */
        function TokenDTO(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * TokenDTO token.
         * @type {string}
         */
        TokenDTO.prototype.token = "";
    
        /**
         * Creates a new TokenDTO instance using the specified properties.
         * @param {TokenDTO$Properties=} [properties] Properties to set
         * @returns {TokenDTO} TokenDTO instance
         */
        TokenDTO.create = function create(properties) {
            return new TokenDTO(properties);
        };
    
        /**
         * Encodes the specified TokenDTO message. Does not implicitly {@link TokenDTO.verify|verify} messages.
         * @param {TokenDTO$Properties} message TokenDTO message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenDTO.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && message.hasOwnProperty("token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            return writer;
        };
    
        /**
         * Encodes the specified TokenDTO message, length delimited. Does not implicitly {@link TokenDTO.verify|verify} messages.
         * @param {TokenDTO$Properties} message TokenDTO message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenDTO.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a TokenDTO message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TokenDTO} TokenDTO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenDTO.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TokenDTO();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a TokenDTO message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TokenDTO} TokenDTO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenDTO.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a TokenDTO message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        TokenDTO.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };
    
        /**
         * Creates a TokenDTO message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {TokenDTO} TokenDTO
         */
        TokenDTO.fromObject = function fromObject(object) {
            if (object instanceof $root.TokenDTO)
                return object;
            var message = new $root.TokenDTO();
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };
    
        /**
         * Creates a TokenDTO message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link TokenDTO.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {TokenDTO} TokenDTO
         */
        TokenDTO.from = TokenDTO.fromObject;
    
        /**
         * Creates a plain object from a TokenDTO message. Also converts values to other types if specified.
         * @param {TokenDTO} message TokenDTO
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TokenDTO.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.token = "";
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };
    
        /**
         * Creates a plain object from this TokenDTO message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TokenDTO.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this TokenDTO to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        TokenDTO.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return TokenDTO;
    })();

    return $root;
});
