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
    
    $root.AccountDTO = (function() {
    
        /**
         * Properties of an AccountDTO.
         * @typedef AccountDTO$Properties
         * @type {Object}
         * @property {number|Long} [id] AccountDTO id.
         * @property {string} [username] AccountDTO username.
         * @property {string} [email] AccountDTO email.
         * @property {string} [password] AccountDTO password.
         * @property {number|Long} [phone] AccountDTO phone.
         * @property {AccountDTO.Gender} [gender] AccountDTO gender.
         * @property {number|Long} [registerAt] AccountDTO registerAt.
         * @property {number|Long} [lastUpdateAt] AccountDTO lastUpdateAt.
         * @property {boolean} [isTutor] AccountDTO isTutor.
         */
    
        /**
         * Constructs a new AccountDTO.
         * @exports AccountDTO
         * @constructor
         * @param {AccountDTO$Properties=} [properties] Properties to set
         */
        function AccountDTO(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * AccountDTO id.
         * @type {number|Long}
         */
        AccountDTO.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * AccountDTO username.
         * @type {string}
         */
        AccountDTO.prototype.username = "";
    
        /**
         * AccountDTO email.
         * @type {string}
         */
        AccountDTO.prototype.email = "";
    
        /**
         * AccountDTO password.
         * @type {string}
         */
        AccountDTO.prototype.password = "";
    
        /**
         * AccountDTO phone.
         * @type {number|Long}
         */
        AccountDTO.prototype.phone = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * AccountDTO gender.
         * @type {AccountDTO.Gender}
         */
        AccountDTO.prototype.gender = 0;
    
        /**
         * AccountDTO registerAt.
         * @type {number|Long}
         */
        AccountDTO.prototype.registerAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * AccountDTO lastUpdateAt.
         * @type {number|Long}
         */
        AccountDTO.prototype.lastUpdateAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * AccountDTO isTutor.
         * @type {boolean}
         */
        AccountDTO.prototype.isTutor = false;
    
        /**
         * Creates a new AccountDTO instance using the specified properties.
         * @param {AccountDTO$Properties=} [properties] Properties to set
         * @returns {AccountDTO} AccountDTO instance
         */
        AccountDTO.create = function create(properties) {
            return new AccountDTO(properties);
        };
    
        /**
         * Encodes the specified AccountDTO message. Does not implicitly {@link AccountDTO.verify|verify} messages.
         * @param {AccountDTO$Properties} message AccountDTO message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountDTO.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.username != null && message.hasOwnProperty("username"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
            if (message.email != null && message.hasOwnProperty("email"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
            if (message.password != null && message.hasOwnProperty("password"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.password);
            if (message.phone != null && message.hasOwnProperty("phone"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.phone);
            if (message.gender != null && message.hasOwnProperty("gender"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.gender);
            if (message.registerAt != null && message.hasOwnProperty("registerAt"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.registerAt);
            if (message.lastUpdateAt != null && message.hasOwnProperty("lastUpdateAt"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.lastUpdateAt);
            if (message.isTutor != null && message.hasOwnProperty("isTutor"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.isTutor);
            return writer;
        };
    
        /**
         * Encodes the specified AccountDTO message, length delimited. Does not implicitly {@link AccountDTO.verify|verify} messages.
         * @param {AccountDTO$Properties} message AccountDTO message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountDTO.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an AccountDTO message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AccountDTO} AccountDTO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountDTO.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AccountDTO();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int64();
                    break;
                case 2:
                    message.username = reader.string();
                    break;
                case 3:
                    message.email = reader.string();
                    break;
                case 4:
                    message.password = reader.string();
                    break;
                case 5:
                    message.phone = reader.int64();
                    break;
                case 6:
                    message.gender = reader.uint32();
                    break;
                case 8:
                    message.registerAt = reader.int64();
                    break;
                case 9:
                    message.lastUpdateAt = reader.int64();
                    break;
                case 10:
                    message.isTutor = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an AccountDTO message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AccountDTO} AccountDTO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountDTO.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an AccountDTO message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        AccountDTO.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.phone != null && message.hasOwnProperty("phone"))
                if (!$util.isInteger(message.phone) && !(message.phone && $util.isInteger(message.phone.low) && $util.isInteger(message.phone.high)))
                    return "phone: integer|Long expected";
            if (message.gender != null && message.hasOwnProperty("gender"))
                switch (message.gender) {
                default:
                    return "gender: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.registerAt != null && message.hasOwnProperty("registerAt"))
                if (!$util.isInteger(message.registerAt) && !(message.registerAt && $util.isInteger(message.registerAt.low) && $util.isInteger(message.registerAt.high)))
                    return "registerAt: integer|Long expected";
            if (message.lastUpdateAt != null && message.hasOwnProperty("lastUpdateAt"))
                if (!$util.isInteger(message.lastUpdateAt) && !(message.lastUpdateAt && $util.isInteger(message.lastUpdateAt.low) && $util.isInteger(message.lastUpdateAt.high)))
                    return "lastUpdateAt: integer|Long expected";
            if (message.isTutor != null && message.hasOwnProperty("isTutor"))
                if (typeof message.isTutor !== "boolean")
                    return "isTutor: boolean expected";
            return null;
        };
    
        /**
         * Creates an AccountDTO message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {AccountDTO} AccountDTO
         */
        AccountDTO.fromObject = function fromObject(object) {
            if (object instanceof $root.AccountDTO)
                return object;
            var message = new $root.AccountDTO();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            if (object.username != null)
                message.username = String(object.username);
            if (object.email != null)
                message.email = String(object.email);
            if (object.password != null)
                message.password = String(object.password);
            if (object.phone != null)
                if ($util.Long)
                    (message.phone = $util.Long.fromValue(object.phone)).unsigned = false;
                else if (typeof object.phone === "string")
                    message.phone = parseInt(object.phone, 10);
                else if (typeof object.phone === "number")
                    message.phone = object.phone;
                else if (typeof object.phone === "object")
                    message.phone = new $util.LongBits(object.phone.low >>> 0, object.phone.high >>> 0).toNumber();
            switch (object.gender) {
            case "Male":
            case 0:
                message.gender = 0;
                break;
            case "Female":
            case 1:
                message.gender = 1;
                break;
            }
            if (object.registerAt != null)
                if ($util.Long)
                    (message.registerAt = $util.Long.fromValue(object.registerAt)).unsigned = false;
                else if (typeof object.registerAt === "string")
                    message.registerAt = parseInt(object.registerAt, 10);
                else if (typeof object.registerAt === "number")
                    message.registerAt = object.registerAt;
                else if (typeof object.registerAt === "object")
                    message.registerAt = new $util.LongBits(object.registerAt.low >>> 0, object.registerAt.high >>> 0).toNumber();
            if (object.lastUpdateAt != null)
                if ($util.Long)
                    (message.lastUpdateAt = $util.Long.fromValue(object.lastUpdateAt)).unsigned = false;
                else if (typeof object.lastUpdateAt === "string")
                    message.lastUpdateAt = parseInt(object.lastUpdateAt, 10);
                else if (typeof object.lastUpdateAt === "number")
                    message.lastUpdateAt = object.lastUpdateAt;
                else if (typeof object.lastUpdateAt === "object")
                    message.lastUpdateAt = new $util.LongBits(object.lastUpdateAt.low >>> 0, object.lastUpdateAt.high >>> 0).toNumber();
            if (object.isTutor != null)
                message.isTutor = Boolean(object.isTutor);
            return message;
        };
    
        /**
         * Creates an AccountDTO message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link AccountDTO.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {AccountDTO} AccountDTO
         */
        AccountDTO.from = AccountDTO.fromObject;
    
        /**
         * Creates a plain object from an AccountDTO message. Also converts values to other types if specified.
         * @param {AccountDTO} message AccountDTO
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountDTO.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.username = "";
                object.email = "";
                object.password = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.phone = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.phone = options.longs === String ? "0" : 0;
                object.gender = options.enums === String ? "Male" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.registerAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.registerAt = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.lastUpdateAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lastUpdateAt = options.longs === String ? "0" : 0;
                object.isTutor = false;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.phone != null && message.hasOwnProperty("phone"))
                if (typeof message.phone === "number")
                    object.phone = options.longs === String ? String(message.phone) : message.phone;
                else
                    object.phone = options.longs === String ? $util.Long.prototype.toString.call(message.phone) : options.longs === Number ? new $util.LongBits(message.phone.low >>> 0, message.phone.high >>> 0).toNumber() : message.phone;
            if (message.gender != null && message.hasOwnProperty("gender"))
                object.gender = options.enums === String ? $root.AccountDTO.Gender[message.gender] : message.gender;
            if (message.registerAt != null && message.hasOwnProperty("registerAt"))
                if (typeof message.registerAt === "number")
                    object.registerAt = options.longs === String ? String(message.registerAt) : message.registerAt;
                else
                    object.registerAt = options.longs === String ? $util.Long.prototype.toString.call(message.registerAt) : options.longs === Number ? new $util.LongBits(message.registerAt.low >>> 0, message.registerAt.high >>> 0).toNumber() : message.registerAt;
            if (message.lastUpdateAt != null && message.hasOwnProperty("lastUpdateAt"))
                if (typeof message.lastUpdateAt === "number")
                    object.lastUpdateAt = options.longs === String ? String(message.lastUpdateAt) : message.lastUpdateAt;
                else
                    object.lastUpdateAt = options.longs === String ? $util.Long.prototype.toString.call(message.lastUpdateAt) : options.longs === Number ? new $util.LongBits(message.lastUpdateAt.low >>> 0, message.lastUpdateAt.high >>> 0).toNumber() : message.lastUpdateAt;
            if (message.isTutor != null && message.hasOwnProperty("isTutor"))
                object.isTutor = message.isTutor;
            return object;
        };
    
        /**
         * Creates a plain object from this AccountDTO message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountDTO.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };
    
        /**
         * Converts this AccountDTO to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        AccountDTO.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gender enum.
         * @name Gender
         * @memberof AccountDTO
         * @enum {number}
         * @property {number} Male=0 Male value
         * @property {number} Female=1 Female value
         */
        AccountDTO.Gender = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Male"] = 0;
            values[valuesById[1] = "Female"] = 1;
            return values;
        })();
    
        return AccountDTO;
    })();

    return $root;
});
