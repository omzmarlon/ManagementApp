/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.QuizItemDTO = (function() {

    /**
     * Properties of a QuizItemDTO.
     * @typedef QuizItemDTO$Properties
     * @type {Object}
     * @property {number|Long} [id] QuizItemDTO id.
     * @property {string} [body] QuizItemDTO body.
     * @property {string} [choices] QuizItemDTO choices.
     * @property {string} [answers] QuizItemDTO answers.
     */

    /**
     * Constructs a new QuizItemDTO.
     * @exports QuizItemDTO
     * @constructor
     * @param {QuizItemDTO$Properties=} [properties] Properties to set
     */
    function QuizItemDTO(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * QuizItemDTO id.
     * @type {number|Long}
     */
    QuizItemDTO.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * QuizItemDTO body.
     * @type {string}
     */
    QuizItemDTO.prototype.body = "";

    /**
     * QuizItemDTO choices.
     * @type {string}
     */
    QuizItemDTO.prototype.choices = "";

    /**
     * QuizItemDTO answers.
     * @type {string}
     */
    QuizItemDTO.prototype.answers = "";

    /**
     * Creates a new QuizItemDTO instance using the specified properties.
     * @param {QuizItemDTO$Properties=} [properties] Properties to set
     * @returns {QuizItemDTO} QuizItemDTO instance
     */
    QuizItemDTO.create = function create(properties) {
        return new QuizItemDTO(properties);
    };

    /**
     * Encodes the specified QuizItemDTO message. Does not implicitly {@link QuizItemDTO.verify|verify} messages.
     * @param {QuizItemDTO$Properties} message QuizItemDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    QuizItemDTO.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
        if (message.body != null && message.hasOwnProperty("body"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.body);
        if (message.choices != null && message.hasOwnProperty("choices"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.choices);
        if (message.answers != null && message.hasOwnProperty("answers"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.answers);
        return writer;
    };

    /**
     * Encodes the specified QuizItemDTO message, length delimited. Does not implicitly {@link QuizItemDTO.verify|verify} messages.
     * @param {QuizItemDTO$Properties} message QuizItemDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    QuizItemDTO.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a QuizItemDTO message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {QuizItemDTO} QuizItemDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    QuizItemDTO.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.QuizItemDTO();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int64();
                break;
            case 2:
                message.body = reader.string();
                break;
            case 3:
                message.choices = reader.string();
                break;
            case 4:
                message.answers = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a QuizItemDTO message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {QuizItemDTO} QuizItemDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    QuizItemDTO.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a QuizItemDTO message.
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    QuizItemDTO.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                return "id: integer|Long expected";
        if (message.body != null && message.hasOwnProperty("body"))
            if (!$util.isString(message.body))
                return "body: string expected";
        if (message.choices != null && message.hasOwnProperty("choices"))
            if (!$util.isString(message.choices))
                return "choices: string expected";
        if (message.answers != null && message.hasOwnProperty("answers"))
            if (!$util.isString(message.answers))
                return "answers: string expected";
        return null;
    };

    /**
     * Creates a QuizItemDTO message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {QuizItemDTO} QuizItemDTO
     */
    QuizItemDTO.fromObject = function fromObject(object) {
        if (object instanceof $root.QuizItemDTO)
            return object;
        var message = new $root.QuizItemDTO();
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
        if (object.body != null)
            message.body = String(object.body);
        if (object.choices != null)
            message.choices = String(object.choices);
        if (object.answers != null)
            message.answers = String(object.answers);
        return message;
    };

    /**
     * Creates a QuizItemDTO message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link QuizItemDTO.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {QuizItemDTO} QuizItemDTO
     */
    QuizItemDTO.from = QuizItemDTO.fromObject;

    /**
     * Creates a plain object from a QuizItemDTO message. Also converts values to other types if specified.
     * @param {QuizItemDTO} message QuizItemDTO
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    QuizItemDTO.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.id = options.longs === String ? "0" : 0;
            object.body = "";
            object.choices = "";
            object.answers = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
        if (message.body != null && message.hasOwnProperty("body"))
            object.body = message.body;
        if (message.choices != null && message.hasOwnProperty("choices"))
            object.choices = message.choices;
        if (message.answers != null && message.hasOwnProperty("answers"))
            object.answers = message.answers;
        return object;
    };

    /**
     * Creates a plain object from this QuizItemDTO message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    QuizItemDTO.prototype.toObject = function toObject(options) {
        return this.constructor.toObject(this, options);
    };

    /**
     * Converts this QuizItemDTO to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    QuizItemDTO.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return QuizItemDTO;
})();

$root.QuizDTO = (function() {

    /**
     * Properties of a QuizDTO.
     * @typedef QuizDTO$Properties
     * @type {Object}
     * @property {number|Long} [id] QuizDTO id.
     * @property {string} [quizName] QuizDTO quizName.
     * @property {number} [score] QuizDTO score.
     * @property {Array.<QuizItemDTO$Properties>} [items] QuizDTO items.
     * @property {number|Long} [startAt] QuizDTO startAt.
     * @property {number|Long} [endAt] QuizDTO endAt.
     * @property {string} [createdBy] QuizDTO createdBy.
     * @property {number|Long} [createdAt] QuizDTO createdAt.
     * @property {boolean} [quizAvailable] QuizDTO quizAvailable.
     * @property {boolean} [alreadyAnswered] QuizDTO alreadyAnswered.
     */

    /**
     * Constructs a new QuizDTO.
     * @exports QuizDTO
     * @constructor
     * @param {QuizDTO$Properties=} [properties] Properties to set
     */
    function QuizDTO(properties) {
        this.items = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * QuizDTO id.
     * @type {number|Long}
     */
    QuizDTO.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * QuizDTO quizName.
     * @type {string}
     */
    QuizDTO.prototype.quizName = "";

    /**
     * QuizDTO score.
     * @type {number}
     */
    QuizDTO.prototype.score = 0;

    /**
     * QuizDTO items.
     * @type {Array.<QuizItemDTO$Properties>}
     */
    QuizDTO.prototype.items = $util.emptyArray;

    /**
     * QuizDTO startAt.
     * @type {number|Long}
     */
    QuizDTO.prototype.startAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * QuizDTO endAt.
     * @type {number|Long}
     */
    QuizDTO.prototype.endAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * QuizDTO createdBy.
     * @type {string}
     */
    QuizDTO.prototype.createdBy = "";

    /**
     * QuizDTO createdAt.
     * @type {number|Long}
     */
    QuizDTO.prototype.createdAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * QuizDTO quizAvailable.
     * @type {boolean}
     */
    QuizDTO.prototype.quizAvailable = false;

    /**
     * QuizDTO alreadyAnswered.
     * @type {boolean}
     */
    QuizDTO.prototype.alreadyAnswered = false;

    /**
     * Creates a new QuizDTO instance using the specified properties.
     * @param {QuizDTO$Properties=} [properties] Properties to set
     * @returns {QuizDTO} QuizDTO instance
     */
    QuizDTO.create = function create(properties) {
        return new QuizDTO(properties);
    };

    /**
     * Encodes the specified QuizDTO message. Does not implicitly {@link QuizDTO.verify|verify} messages.
     * @param {QuizDTO$Properties} message QuizDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    QuizDTO.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
        if (message.quizName != null && message.hasOwnProperty("quizName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.quizName);
        if (message.score != null && message.hasOwnProperty("score"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.score);
        if (message.items != null && message.items.length)
            for (var i = 0; i < message.items.length; ++i)
                $root.QuizItemDTO.encode(message.items[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.startAt != null && message.hasOwnProperty("startAt"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.startAt);
        if (message.endAt != null && message.hasOwnProperty("endAt"))
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.endAt);
        if (message.createdBy != null && message.hasOwnProperty("createdBy"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.createdBy);
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            writer.uint32(/* id 8, wireType 0 =*/64).int64(message.createdAt);
        if (message.quizAvailable != null && message.hasOwnProperty("quizAvailable"))
            writer.uint32(/* id 9, wireType 0 =*/72).bool(message.quizAvailable);
        if (message.alreadyAnswered != null && message.hasOwnProperty("alreadyAnswered"))
            writer.uint32(/* id 10, wireType 0 =*/80).bool(message.alreadyAnswered);
        return writer;
    };

    /**
     * Encodes the specified QuizDTO message, length delimited. Does not implicitly {@link QuizDTO.verify|verify} messages.
     * @param {QuizDTO$Properties} message QuizDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    QuizDTO.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a QuizDTO message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {QuizDTO} QuizDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    QuizDTO.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.QuizDTO();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int64();
                break;
            case 2:
                message.quizName = reader.string();
                break;
            case 3:
                message.score = reader.int32();
                break;
            case 4:
                if (!(message.items && message.items.length))
                    message.items = [];
                message.items.push($root.QuizItemDTO.decode(reader, reader.uint32()));
                break;
            case 5:
                message.startAt = reader.int64();
                break;
            case 6:
                message.endAt = reader.int64();
                break;
            case 7:
                message.createdBy = reader.string();
                break;
            case 8:
                message.createdAt = reader.int64();
                break;
            case 9:
                message.quizAvailable = reader.bool();
                break;
            case 10:
                message.alreadyAnswered = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a QuizDTO message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {QuizDTO} QuizDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    QuizDTO.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a QuizDTO message.
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    QuizDTO.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                return "id: integer|Long expected";
        if (message.quizName != null && message.hasOwnProperty("quizName"))
            if (!$util.isString(message.quizName))
                return "quizName: string expected";
        if (message.score != null && message.hasOwnProperty("score"))
            if (!$util.isInteger(message.score))
                return "score: integer expected";
        if (message.items != null && message.hasOwnProperty("items")) {
            if (!Array.isArray(message.items))
                return "items: array expected";
            for (var i = 0; i < message.items.length; ++i) {
                var error = $root.QuizItemDTO.verify(message.items[i]);
                if (error)
                    return "items." + error;
            }
        }
        if (message.startAt != null && message.hasOwnProperty("startAt"))
            if (!$util.isInteger(message.startAt) && !(message.startAt && $util.isInteger(message.startAt.low) && $util.isInteger(message.startAt.high)))
                return "startAt: integer|Long expected";
        if (message.endAt != null && message.hasOwnProperty("endAt"))
            if (!$util.isInteger(message.endAt) && !(message.endAt && $util.isInteger(message.endAt.low) && $util.isInteger(message.endAt.high)))
                return "endAt: integer|Long expected";
        if (message.createdBy != null && message.hasOwnProperty("createdBy"))
            if (!$util.isString(message.createdBy))
                return "createdBy: string expected";
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (!$util.isInteger(message.createdAt) && !(message.createdAt && $util.isInteger(message.createdAt.low) && $util.isInteger(message.createdAt.high)))
                return "createdAt: integer|Long expected";
        if (message.quizAvailable != null && message.hasOwnProperty("quizAvailable"))
            if (typeof message.quizAvailable !== "boolean")
                return "quizAvailable: boolean expected";
        if (message.alreadyAnswered != null && message.hasOwnProperty("alreadyAnswered"))
            if (typeof message.alreadyAnswered !== "boolean")
                return "alreadyAnswered: boolean expected";
        return null;
    };

    /**
     * Creates a QuizDTO message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {QuizDTO} QuizDTO
     */
    QuizDTO.fromObject = function fromObject(object) {
        if (object instanceof $root.QuizDTO)
            return object;
        var message = new $root.QuizDTO();
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
        if (object.quizName != null)
            message.quizName = String(object.quizName);
        if (object.score != null)
            message.score = object.score | 0;
        if (object.items) {
            if (!Array.isArray(object.items))
                throw TypeError(".QuizDTO.items: array expected");
            message.items = [];
            for (var i = 0; i < object.items.length; ++i) {
                if (typeof object.items[i] !== "object")
                    throw TypeError(".QuizDTO.items: object expected");
                message.items[i] = $root.QuizItemDTO.fromObject(object.items[i]);
            }
        }
        if (object.startAt != null)
            if ($util.Long)
                (message.startAt = $util.Long.fromValue(object.startAt)).unsigned = false;
            else if (typeof object.startAt === "string")
                message.startAt = parseInt(object.startAt, 10);
            else if (typeof object.startAt === "number")
                message.startAt = object.startAt;
            else if (typeof object.startAt === "object")
                message.startAt = new $util.LongBits(object.startAt.low >>> 0, object.startAt.high >>> 0).toNumber();
        if (object.endAt != null)
            if ($util.Long)
                (message.endAt = $util.Long.fromValue(object.endAt)).unsigned = false;
            else if (typeof object.endAt === "string")
                message.endAt = parseInt(object.endAt, 10);
            else if (typeof object.endAt === "number")
                message.endAt = object.endAt;
            else if (typeof object.endAt === "object")
                message.endAt = new $util.LongBits(object.endAt.low >>> 0, object.endAt.high >>> 0).toNumber();
        if (object.createdBy != null)
            message.createdBy = String(object.createdBy);
        if (object.createdAt != null)
            if ($util.Long)
                (message.createdAt = $util.Long.fromValue(object.createdAt)).unsigned = false;
            else if (typeof object.createdAt === "string")
                message.createdAt = parseInt(object.createdAt, 10);
            else if (typeof object.createdAt === "number")
                message.createdAt = object.createdAt;
            else if (typeof object.createdAt === "object")
                message.createdAt = new $util.LongBits(object.createdAt.low >>> 0, object.createdAt.high >>> 0).toNumber();
        if (object.quizAvailable != null)
            message.quizAvailable = Boolean(object.quizAvailable);
        if (object.alreadyAnswered != null)
            message.alreadyAnswered = Boolean(object.alreadyAnswered);
        return message;
    };

    /**
     * Creates a QuizDTO message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link QuizDTO.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {QuizDTO} QuizDTO
     */
    QuizDTO.from = QuizDTO.fromObject;

    /**
     * Creates a plain object from a QuizDTO message. Also converts values to other types if specified.
     * @param {QuizDTO} message QuizDTO
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    QuizDTO.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.items = [];
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.id = options.longs === String ? "0" : 0;
            object.quizName = "";
            object.score = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.startAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.startAt = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.endAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.endAt = options.longs === String ? "0" : 0;
            object.createdBy = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.createdAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.createdAt = options.longs === String ? "0" : 0;
            object.quizAvailable = false;
            object.alreadyAnswered = false;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
        if (message.quizName != null && message.hasOwnProperty("quizName"))
            object.quizName = message.quizName;
        if (message.score != null && message.hasOwnProperty("score"))
            object.score = message.score;
        if (message.items && message.items.length) {
            object.items = [];
            for (var j = 0; j < message.items.length; ++j)
                object.items[j] = $root.QuizItemDTO.toObject(message.items[j], options);
        }
        if (message.startAt != null && message.hasOwnProperty("startAt"))
            if (typeof message.startAt === "number")
                object.startAt = options.longs === String ? String(message.startAt) : message.startAt;
            else
                object.startAt = options.longs === String ? $util.Long.prototype.toString.call(message.startAt) : options.longs === Number ? new $util.LongBits(message.startAt.low >>> 0, message.startAt.high >>> 0).toNumber() : message.startAt;
        if (message.endAt != null && message.hasOwnProperty("endAt"))
            if (typeof message.endAt === "number")
                object.endAt = options.longs === String ? String(message.endAt) : message.endAt;
            else
                object.endAt = options.longs === String ? $util.Long.prototype.toString.call(message.endAt) : options.longs === Number ? new $util.LongBits(message.endAt.low >>> 0, message.endAt.high >>> 0).toNumber() : message.endAt;
        if (message.createdBy != null && message.hasOwnProperty("createdBy"))
            object.createdBy = message.createdBy;
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (typeof message.createdAt === "number")
                object.createdAt = options.longs === String ? String(message.createdAt) : message.createdAt;
            else
                object.createdAt = options.longs === String ? $util.Long.prototype.toString.call(message.createdAt) : options.longs === Number ? new $util.LongBits(message.createdAt.low >>> 0, message.createdAt.high >>> 0).toNumber() : message.createdAt;
        if (message.quizAvailable != null && message.hasOwnProperty("quizAvailable"))
            object.quizAvailable = message.quizAvailable;
        if (message.alreadyAnswered != null && message.hasOwnProperty("alreadyAnswered"))
            object.alreadyAnswered = message.alreadyAnswered;
        return object;
    };

    /**
     * Creates a plain object from this QuizDTO message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    QuizDTO.prototype.toObject = function toObject(options) {
        return this.constructor.toObject(this, options);
    };

    /**
     * Converts this QuizDTO to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    QuizDTO.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return QuizDTO;
})();

$root.CurrentStudentQuizDTO = (function() {

    /**
     * Properties of a CurrentStudentQuizDTO.
     * @typedef CurrentStudentQuizDTO$Properties
     * @type {Object}
     * @property {boolean} [quizAvailable] CurrentStudentQuizDTO quizAvailable.
     * @property {boolean} [alreadyAnswered] CurrentStudentQuizDTO alreadyAnswered.
     * @property {QuizDTO$Properties} [quiz] CurrentStudentQuizDTO quiz.
     */

    /**
     * Constructs a new CurrentStudentQuizDTO.
     * @exports CurrentStudentQuizDTO
     * @constructor
     * @param {CurrentStudentQuizDTO$Properties=} [properties] Properties to set
     */
    function CurrentStudentQuizDTO(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CurrentStudentQuizDTO quizAvailable.
     * @type {boolean}
     */
    CurrentStudentQuizDTO.prototype.quizAvailable = false;

    /**
     * CurrentStudentQuizDTO alreadyAnswered.
     * @type {boolean}
     */
    CurrentStudentQuizDTO.prototype.alreadyAnswered = false;

    /**
     * CurrentStudentQuizDTO quiz.
     * @type {(QuizDTO$Properties|null)}
     */
    CurrentStudentQuizDTO.prototype.quiz = null;

    /**
     * Creates a new CurrentStudentQuizDTO instance using the specified properties.
     * @param {CurrentStudentQuizDTO$Properties=} [properties] Properties to set
     * @returns {CurrentStudentQuizDTO} CurrentStudentQuizDTO instance
     */
    CurrentStudentQuizDTO.create = function create(properties) {
        return new CurrentStudentQuizDTO(properties);
    };

    /**
     * Encodes the specified CurrentStudentQuizDTO message. Does not implicitly {@link CurrentStudentQuizDTO.verify|verify} messages.
     * @param {CurrentStudentQuizDTO$Properties} message CurrentStudentQuizDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CurrentStudentQuizDTO.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.quizAvailable != null && message.hasOwnProperty("quizAvailable"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.quizAvailable);
        if (message.alreadyAnswered != null && message.hasOwnProperty("alreadyAnswered"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.alreadyAnswered);
        if (message.quiz != null && message.hasOwnProperty("quiz"))
            $root.QuizDTO.encode(message.quiz, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified CurrentStudentQuizDTO message, length delimited. Does not implicitly {@link CurrentStudentQuizDTO.verify|verify} messages.
     * @param {CurrentStudentQuizDTO$Properties} message CurrentStudentQuizDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CurrentStudentQuizDTO.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CurrentStudentQuizDTO message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CurrentStudentQuizDTO} CurrentStudentQuizDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CurrentStudentQuizDTO.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CurrentStudentQuizDTO();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.quizAvailable = reader.bool();
                break;
            case 2:
                message.alreadyAnswered = reader.bool();
                break;
            case 3:
                message.quiz = $root.QuizDTO.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CurrentStudentQuizDTO message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CurrentStudentQuizDTO} CurrentStudentQuizDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CurrentStudentQuizDTO.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CurrentStudentQuizDTO message.
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    CurrentStudentQuizDTO.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.quizAvailable != null && message.hasOwnProperty("quizAvailable"))
            if (typeof message.quizAvailable !== "boolean")
                return "quizAvailable: boolean expected";
        if (message.alreadyAnswered != null && message.hasOwnProperty("alreadyAnswered"))
            if (typeof message.alreadyAnswered !== "boolean")
                return "alreadyAnswered: boolean expected";
        if (message.quiz != null && message.hasOwnProperty("quiz")) {
            var error = $root.QuizDTO.verify(message.quiz);
            if (error)
                return "quiz." + error;
        }
        return null;
    };

    /**
     * Creates a CurrentStudentQuizDTO message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {CurrentStudentQuizDTO} CurrentStudentQuizDTO
     */
    CurrentStudentQuizDTO.fromObject = function fromObject(object) {
        if (object instanceof $root.CurrentStudentQuizDTO)
            return object;
        var message = new $root.CurrentStudentQuizDTO();
        if (object.quizAvailable != null)
            message.quizAvailable = Boolean(object.quizAvailable);
        if (object.alreadyAnswered != null)
            message.alreadyAnswered = Boolean(object.alreadyAnswered);
        if (object.quiz != null) {
            if (typeof object.quiz !== "object")
                throw TypeError(".CurrentStudentQuizDTO.quiz: object expected");
            message.quiz = $root.QuizDTO.fromObject(object.quiz);
        }
        return message;
    };

    /**
     * Creates a CurrentStudentQuizDTO message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link CurrentStudentQuizDTO.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {CurrentStudentQuizDTO} CurrentStudentQuizDTO
     */
    CurrentStudentQuizDTO.from = CurrentStudentQuizDTO.fromObject;

    /**
     * Creates a plain object from a CurrentStudentQuizDTO message. Also converts values to other types if specified.
     * @param {CurrentStudentQuizDTO} message CurrentStudentQuizDTO
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CurrentStudentQuizDTO.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.quizAvailable = false;
            object.alreadyAnswered = false;
            object.quiz = null;
        }
        if (message.quizAvailable != null && message.hasOwnProperty("quizAvailable"))
            object.quizAvailable = message.quizAvailable;
        if (message.alreadyAnswered != null && message.hasOwnProperty("alreadyAnswered"))
            object.alreadyAnswered = message.alreadyAnswered;
        if (message.quiz != null && message.hasOwnProperty("quiz"))
            object.quiz = $root.QuizDTO.toObject(message.quiz, options);
        return object;
    };

    /**
     * Creates a plain object from this CurrentStudentQuizDTO message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CurrentStudentQuizDTO.prototype.toObject = function toObject(options) {
        return this.constructor.toObject(this, options);
    };

    /**
     * Converts this CurrentStudentQuizDTO to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    CurrentStudentQuizDTO.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CurrentStudentQuizDTO;
})();

$root.StudentAnswerDTO = (function() {

    /**
     * Properties of a StudentAnswerDTO.
     * @typedef StudentAnswerDTO$Properties
     * @type {Object}
     * @property {number|Long} [quizId] StudentAnswerDTO quizId.
     * @property {string} [studentAnswer] StudentAnswerDTO studentAnswer.
     */

    /**
     * Constructs a new StudentAnswerDTO.
     * @exports StudentAnswerDTO
     * @constructor
     * @param {StudentAnswerDTO$Properties=} [properties] Properties to set
     */
    function StudentAnswerDTO(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * StudentAnswerDTO quizId.
     * @type {number|Long}
     */
    StudentAnswerDTO.prototype.quizId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * StudentAnswerDTO studentAnswer.
     * @type {string}
     */
    StudentAnswerDTO.prototype.studentAnswer = "";

    /**
     * Creates a new StudentAnswerDTO instance using the specified properties.
     * @param {StudentAnswerDTO$Properties=} [properties] Properties to set
     * @returns {StudentAnswerDTO} StudentAnswerDTO instance
     */
    StudentAnswerDTO.create = function create(properties) {
        return new StudentAnswerDTO(properties);
    };

    /**
     * Encodes the specified StudentAnswerDTO message. Does not implicitly {@link StudentAnswerDTO.verify|verify} messages.
     * @param {StudentAnswerDTO$Properties} message StudentAnswerDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StudentAnswerDTO.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.quizId != null && message.hasOwnProperty("quizId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.quizId);
        if (message.studentAnswer != null && message.hasOwnProperty("studentAnswer"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.studentAnswer);
        return writer;
    };

    /**
     * Encodes the specified StudentAnswerDTO message, length delimited. Does not implicitly {@link StudentAnswerDTO.verify|verify} messages.
     * @param {StudentAnswerDTO$Properties} message StudentAnswerDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StudentAnswerDTO.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a StudentAnswerDTO message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {StudentAnswerDTO} StudentAnswerDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StudentAnswerDTO.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StudentAnswerDTO();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.quizId = reader.int64();
                break;
            case 2:
                message.studentAnswer = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a StudentAnswerDTO message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {StudentAnswerDTO} StudentAnswerDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StudentAnswerDTO.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a StudentAnswerDTO message.
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    StudentAnswerDTO.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.quizId != null && message.hasOwnProperty("quizId"))
            if (!$util.isInteger(message.quizId) && !(message.quizId && $util.isInteger(message.quizId.low) && $util.isInteger(message.quizId.high)))
                return "quizId: integer|Long expected";
        if (message.studentAnswer != null && message.hasOwnProperty("studentAnswer"))
            if (!$util.isString(message.studentAnswer))
                return "studentAnswer: string expected";
        return null;
    };

    /**
     * Creates a StudentAnswerDTO message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {StudentAnswerDTO} StudentAnswerDTO
     */
    StudentAnswerDTO.fromObject = function fromObject(object) {
        if (object instanceof $root.StudentAnswerDTO)
            return object;
        var message = new $root.StudentAnswerDTO();
        if (object.quizId != null)
            if ($util.Long)
                (message.quizId = $util.Long.fromValue(object.quizId)).unsigned = false;
            else if (typeof object.quizId === "string")
                message.quizId = parseInt(object.quizId, 10);
            else if (typeof object.quizId === "number")
                message.quizId = object.quizId;
            else if (typeof object.quizId === "object")
                message.quizId = new $util.LongBits(object.quizId.low >>> 0, object.quizId.high >>> 0).toNumber();
        if (object.studentAnswer != null)
            message.studentAnswer = String(object.studentAnswer);
        return message;
    };

    /**
     * Creates a StudentAnswerDTO message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link StudentAnswerDTO.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {StudentAnswerDTO} StudentAnswerDTO
     */
    StudentAnswerDTO.from = StudentAnswerDTO.fromObject;

    /**
     * Creates a plain object from a StudentAnswerDTO message. Also converts values to other types if specified.
     * @param {StudentAnswerDTO} message StudentAnswerDTO
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    StudentAnswerDTO.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.quizId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.quizId = options.longs === String ? "0" : 0;
            object.studentAnswer = "";
        }
        if (message.quizId != null && message.hasOwnProperty("quizId"))
            if (typeof message.quizId === "number")
                object.quizId = options.longs === String ? String(message.quizId) : message.quizId;
            else
                object.quizId = options.longs === String ? $util.Long.prototype.toString.call(message.quizId) : options.longs === Number ? new $util.LongBits(message.quizId.low >>> 0, message.quizId.high >>> 0).toNumber() : message.quizId;
        if (message.studentAnswer != null && message.hasOwnProperty("studentAnswer"))
            object.studentAnswer = message.studentAnswer;
        return object;
    };

    /**
     * Creates a plain object from this StudentAnswerDTO message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    StudentAnswerDTO.prototype.toObject = function toObject(options) {
        return this.constructor.toObject(this, options);
    };

    /**
     * Converts this StudentAnswerDTO to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    StudentAnswerDTO.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return StudentAnswerDTO;
})();

$root.GroupAssignmentDTO = (function() {

    /**
     * Properties of a GroupAssignmentDTO.
     * @typedef GroupAssignmentDTO$Properties
     * @type {Object}
     * @property {string} [groupName] GroupAssignmentDTO groupName.
     * @property {number|Long} [groupId] GroupAssignmentDTO groupId.
     * @property {number|Long} [startAt] GroupAssignmentDTO startAt.
     * @property {number|Long} [endAt] GroupAssignmentDTO endAt.
     * @property {number|Long} [assignedAt] GroupAssignmentDTO assignedAt.
     */

    /**
     * Constructs a new GroupAssignmentDTO.
     * @exports GroupAssignmentDTO
     * @constructor
     * @param {GroupAssignmentDTO$Properties=} [properties] Properties to set
     */
    function GroupAssignmentDTO(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GroupAssignmentDTO groupName.
     * @type {string}
     */
    GroupAssignmentDTO.prototype.groupName = "";

    /**
     * GroupAssignmentDTO groupId.
     * @type {number|Long}
     */
    GroupAssignmentDTO.prototype.groupId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GroupAssignmentDTO startAt.
     * @type {number|Long}
     */
    GroupAssignmentDTO.prototype.startAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GroupAssignmentDTO endAt.
     * @type {number|Long}
     */
    GroupAssignmentDTO.prototype.endAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GroupAssignmentDTO assignedAt.
     * @type {number|Long}
     */
    GroupAssignmentDTO.prototype.assignedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new GroupAssignmentDTO instance using the specified properties.
     * @param {GroupAssignmentDTO$Properties=} [properties] Properties to set
     * @returns {GroupAssignmentDTO} GroupAssignmentDTO instance
     */
    GroupAssignmentDTO.create = function create(properties) {
        return new GroupAssignmentDTO(properties);
    };

    /**
     * Encodes the specified GroupAssignmentDTO message. Does not implicitly {@link GroupAssignmentDTO.verify|verify} messages.
     * @param {GroupAssignmentDTO$Properties} message GroupAssignmentDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GroupAssignmentDTO.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.groupName != null && message.hasOwnProperty("groupName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupName);
        if (message.groupId != null && message.hasOwnProperty("groupId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.groupId);
        if (message.startAt != null && message.hasOwnProperty("startAt"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.startAt);
        if (message.endAt != null && message.hasOwnProperty("endAt"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.endAt);
        if (message.assignedAt != null && message.hasOwnProperty("assignedAt"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.assignedAt);
        return writer;
    };

    /**
     * Encodes the specified GroupAssignmentDTO message, length delimited. Does not implicitly {@link GroupAssignmentDTO.verify|verify} messages.
     * @param {GroupAssignmentDTO$Properties} message GroupAssignmentDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GroupAssignmentDTO.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GroupAssignmentDTO message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GroupAssignmentDTO} GroupAssignmentDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GroupAssignmentDTO.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GroupAssignmentDTO();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.groupName = reader.string();
                break;
            case 2:
                message.groupId = reader.int64();
                break;
            case 3:
                message.startAt = reader.int64();
                break;
            case 4:
                message.endAt = reader.int64();
                break;
            case 5:
                message.assignedAt = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GroupAssignmentDTO message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GroupAssignmentDTO} GroupAssignmentDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GroupAssignmentDTO.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GroupAssignmentDTO message.
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    GroupAssignmentDTO.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.groupName != null && message.hasOwnProperty("groupName"))
            if (!$util.isString(message.groupName))
                return "groupName: string expected";
        if (message.groupId != null && message.hasOwnProperty("groupId"))
            if (!$util.isInteger(message.groupId) && !(message.groupId && $util.isInteger(message.groupId.low) && $util.isInteger(message.groupId.high)))
                return "groupId: integer|Long expected";
        if (message.startAt != null && message.hasOwnProperty("startAt"))
            if (!$util.isInteger(message.startAt) && !(message.startAt && $util.isInteger(message.startAt.low) && $util.isInteger(message.startAt.high)))
                return "startAt: integer|Long expected";
        if (message.endAt != null && message.hasOwnProperty("endAt"))
            if (!$util.isInteger(message.endAt) && !(message.endAt && $util.isInteger(message.endAt.low) && $util.isInteger(message.endAt.high)))
                return "endAt: integer|Long expected";
        if (message.assignedAt != null && message.hasOwnProperty("assignedAt"))
            if (!$util.isInteger(message.assignedAt) && !(message.assignedAt && $util.isInteger(message.assignedAt.low) && $util.isInteger(message.assignedAt.high)))
                return "assignedAt: integer|Long expected";
        return null;
    };

    /**
     * Creates a GroupAssignmentDTO message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {GroupAssignmentDTO} GroupAssignmentDTO
     */
    GroupAssignmentDTO.fromObject = function fromObject(object) {
        if (object instanceof $root.GroupAssignmentDTO)
            return object;
        var message = new $root.GroupAssignmentDTO();
        if (object.groupName != null)
            message.groupName = String(object.groupName);
        if (object.groupId != null)
            if ($util.Long)
                (message.groupId = $util.Long.fromValue(object.groupId)).unsigned = false;
            else if (typeof object.groupId === "string")
                message.groupId = parseInt(object.groupId, 10);
            else if (typeof object.groupId === "number")
                message.groupId = object.groupId;
            else if (typeof object.groupId === "object")
                message.groupId = new $util.LongBits(object.groupId.low >>> 0, object.groupId.high >>> 0).toNumber();
        if (object.startAt != null)
            if ($util.Long)
                (message.startAt = $util.Long.fromValue(object.startAt)).unsigned = false;
            else if (typeof object.startAt === "string")
                message.startAt = parseInt(object.startAt, 10);
            else if (typeof object.startAt === "number")
                message.startAt = object.startAt;
            else if (typeof object.startAt === "object")
                message.startAt = new $util.LongBits(object.startAt.low >>> 0, object.startAt.high >>> 0).toNumber();
        if (object.endAt != null)
            if ($util.Long)
                (message.endAt = $util.Long.fromValue(object.endAt)).unsigned = false;
            else if (typeof object.endAt === "string")
                message.endAt = parseInt(object.endAt, 10);
            else if (typeof object.endAt === "number")
                message.endAt = object.endAt;
            else if (typeof object.endAt === "object")
                message.endAt = new $util.LongBits(object.endAt.low >>> 0, object.endAt.high >>> 0).toNumber();
        if (object.assignedAt != null)
            if ($util.Long)
                (message.assignedAt = $util.Long.fromValue(object.assignedAt)).unsigned = false;
            else if (typeof object.assignedAt === "string")
                message.assignedAt = parseInt(object.assignedAt, 10);
            else if (typeof object.assignedAt === "number")
                message.assignedAt = object.assignedAt;
            else if (typeof object.assignedAt === "object")
                message.assignedAt = new $util.LongBits(object.assignedAt.low >>> 0, object.assignedAt.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a GroupAssignmentDTO message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link GroupAssignmentDTO.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {GroupAssignmentDTO} GroupAssignmentDTO
     */
    GroupAssignmentDTO.from = GroupAssignmentDTO.fromObject;

    /**
     * Creates a plain object from a GroupAssignmentDTO message. Also converts values to other types if specified.
     * @param {GroupAssignmentDTO} message GroupAssignmentDTO
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GroupAssignmentDTO.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.groupName = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.groupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.groupId = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.startAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.startAt = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.endAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.endAt = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.assignedAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.assignedAt = options.longs === String ? "0" : 0;
        }
        if (message.groupName != null && message.hasOwnProperty("groupName"))
            object.groupName = message.groupName;
        if (message.groupId != null && message.hasOwnProperty("groupId"))
            if (typeof message.groupId === "number")
                object.groupId = options.longs === String ? String(message.groupId) : message.groupId;
            else
                object.groupId = options.longs === String ? $util.Long.prototype.toString.call(message.groupId) : options.longs === Number ? new $util.LongBits(message.groupId.low >>> 0, message.groupId.high >>> 0).toNumber() : message.groupId;
        if (message.startAt != null && message.hasOwnProperty("startAt"))
            if (typeof message.startAt === "number")
                object.startAt = options.longs === String ? String(message.startAt) : message.startAt;
            else
                object.startAt = options.longs === String ? $util.Long.prototype.toString.call(message.startAt) : options.longs === Number ? new $util.LongBits(message.startAt.low >>> 0, message.startAt.high >>> 0).toNumber() : message.startAt;
        if (message.endAt != null && message.hasOwnProperty("endAt"))
            if (typeof message.endAt === "number")
                object.endAt = options.longs === String ? String(message.endAt) : message.endAt;
            else
                object.endAt = options.longs === String ? $util.Long.prototype.toString.call(message.endAt) : options.longs === Number ? new $util.LongBits(message.endAt.low >>> 0, message.endAt.high >>> 0).toNumber() : message.endAt;
        if (message.assignedAt != null && message.hasOwnProperty("assignedAt"))
            if (typeof message.assignedAt === "number")
                object.assignedAt = options.longs === String ? String(message.assignedAt) : message.assignedAt;
            else
                object.assignedAt = options.longs === String ? $util.Long.prototype.toString.call(message.assignedAt) : options.longs === Number ? new $util.LongBits(message.assignedAt.low >>> 0, message.assignedAt.high >>> 0).toNumber() : message.assignedAt;
        return object;
    };

    /**
     * Creates a plain object from this GroupAssignmentDTO message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GroupAssignmentDTO.prototype.toObject = function toObject(options) {
        return this.constructor.toObject(this, options);
    };

    /**
     * Converts this GroupAssignmentDTO to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    GroupAssignmentDTO.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GroupAssignmentDTO;
})();

module.exports = $root;
