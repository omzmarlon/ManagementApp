import * as $protobuf from "protobufjs";

type QuizItemDTO$Properties = {
    id?: (number|Long);
    body?: string;
    choices?: string;
    answers?: string;
};

/**
 * Constructs a new QuizItemDTO.
 * @exports QuizItemDTO
 * @constructor
 * @param {QuizItemDTO$Properties=} [properties] Properties to set
 */
export class QuizItemDTO {

    /**
     * Constructs a new QuizItemDTO.
     * @exports QuizItemDTO
     * @constructor
     * @param {QuizItemDTO$Properties=} [properties] Properties to set
     */
    constructor(properties?: QuizItemDTO$Properties);

    /**
     * QuizItemDTO id.
     * @type {number|Long}
     */
    public id: (number|Long);

    /**
     * QuizItemDTO body.
     * @type {string}
     */
    public body: string;

    /**
     * QuizItemDTO choices.
     * @type {string}
     */
    public choices: string;

    /**
     * QuizItemDTO answers.
     * @type {string}
     */
    public answers: string;

    /**
     * Creates a new QuizItemDTO instance using the specified properties.
     * @param {QuizItemDTO$Properties=} [properties] Properties to set
     * @returns {QuizItemDTO} QuizItemDTO instance
     */
    public static create(properties?: QuizItemDTO$Properties): QuizItemDTO;

    /**
     * Encodes the specified QuizItemDTO message. Does not implicitly {@link QuizItemDTO.verify|verify} messages.
     * @param {QuizItemDTO$Properties} message QuizItemDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    public static encode(message: QuizItemDTO$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified QuizItemDTO message, length delimited. Does not implicitly {@link QuizItemDTO.verify|verify} messages.
     * @param {QuizItemDTO$Properties} message QuizItemDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    public static encodeDelimited(message: QuizItemDTO$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a QuizItemDTO message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {QuizItemDTO} QuizItemDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): QuizItemDTO;

    /**
     * Decodes a QuizItemDTO message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {QuizItemDTO} QuizItemDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): QuizItemDTO;

    /**
     * Verifies a QuizItemDTO message.
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string;

    /**
     * Creates a QuizItemDTO message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {QuizItemDTO} QuizItemDTO
     */
    public static fromObject(object: { [k: string]: any }): QuizItemDTO;

    /**
     * Creates a QuizItemDTO message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link QuizItemDTO.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {QuizItemDTO} QuizItemDTO
     */
    public static from(object: { [k: string]: any }): QuizItemDTO;

    /**
     * Creates a plain object from a QuizItemDTO message. Also converts values to other types if specified.
     * @param {QuizItemDTO} message QuizItemDTO
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    public static toObject(message: QuizItemDTO, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this QuizItemDTO message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this QuizItemDTO to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    public toJSON(): { [k: string]: any };
}

type QuizDTO$Properties = {
    id?: (number|Long);
    quizName?: string;
    score?: number;
    items?: QuizItemDTO$Properties[];
    startAt?: (number|Long);
    endAt?: (number|Long);
    createdBy?: string;
    createdAt?: (number|Long);
    quizAvailable?: boolean;
    alreadyAnswered?: boolean;
};

/**
 * Constructs a new QuizDTO.
 * @exports QuizDTO
 * @constructor
 * @param {QuizDTO$Properties=} [properties] Properties to set
 */
export class QuizDTO {

    /**
     * Constructs a new QuizDTO.
     * @exports QuizDTO
     * @constructor
     * @param {QuizDTO$Properties=} [properties] Properties to set
     */
    constructor(properties?: QuizDTO$Properties);

    /**
     * QuizDTO id.
     * @type {number|Long}
     */
    public id: (number|Long);

    /**
     * QuizDTO quizName.
     * @type {string}
     */
    public quizName: string;

    /**
     * QuizDTO score.
     * @type {number}
     */
    public score: number;

    /**
     * QuizDTO items.
     * @type {Array.<QuizItemDTO$Properties>}
     */
    public items: QuizItemDTO$Properties[];

    /**
     * QuizDTO startAt.
     * @type {number|Long}
     */
    public startAt: (number|Long);

    /**
     * QuizDTO endAt.
     * @type {number|Long}
     */
    public endAt: (number|Long);

    /**
     * QuizDTO createdBy.
     * @type {string}
     */
    public createdBy: string;

    /**
     * QuizDTO createdAt.
     * @type {number|Long}
     */
    public createdAt: (number|Long);

    /**
     * QuizDTO quizAvailable.
     * @type {boolean}
     */
    public quizAvailable: boolean;

    /**
     * QuizDTO alreadyAnswered.
     * @type {boolean}
     */
    public alreadyAnswered: boolean;

    /**
     * Creates a new QuizDTO instance using the specified properties.
     * @param {QuizDTO$Properties=} [properties] Properties to set
     * @returns {QuizDTO} QuizDTO instance
     */
    public static create(properties?: QuizDTO$Properties): QuizDTO;

    /**
     * Encodes the specified QuizDTO message. Does not implicitly {@link QuizDTO.verify|verify} messages.
     * @param {QuizDTO$Properties} message QuizDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    public static encode(message: QuizDTO$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified QuizDTO message, length delimited. Does not implicitly {@link QuizDTO.verify|verify} messages.
     * @param {QuizDTO$Properties} message QuizDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    public static encodeDelimited(message: QuizDTO$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a QuizDTO message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {QuizDTO} QuizDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): QuizDTO;

    /**
     * Decodes a QuizDTO message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {QuizDTO} QuizDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): QuizDTO;

    /**
     * Verifies a QuizDTO message.
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string;

    /**
     * Creates a QuizDTO message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {QuizDTO} QuizDTO
     */
    public static fromObject(object: { [k: string]: any }): QuizDTO;

    /**
     * Creates a QuizDTO message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link QuizDTO.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {QuizDTO} QuizDTO
     */
    public static from(object: { [k: string]: any }): QuizDTO;

    /**
     * Creates a plain object from a QuizDTO message. Also converts values to other types if specified.
     * @param {QuizDTO} message QuizDTO
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    public static toObject(message: QuizDTO, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this QuizDTO message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this QuizDTO to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    public toJSON(): { [k: string]: any };
}

type CurrentStudentQuizDTO$Properties = {
    quizAvailable?: boolean;
    alreadyAnswered?: boolean;
    quiz?: QuizDTO$Properties;
};

/**
 * Constructs a new CurrentStudentQuizDTO.
 * @exports CurrentStudentQuizDTO
 * @constructor
 * @param {CurrentStudentQuizDTO$Properties=} [properties] Properties to set
 */
export class CurrentStudentQuizDTO {

    /**
     * Constructs a new CurrentStudentQuizDTO.
     * @exports CurrentStudentQuizDTO
     * @constructor
     * @param {CurrentStudentQuizDTO$Properties=} [properties] Properties to set
     */
    constructor(properties?: CurrentStudentQuizDTO$Properties);

    /**
     * CurrentStudentQuizDTO quizAvailable.
     * @type {boolean}
     */
    public quizAvailable: boolean;

    /**
     * CurrentStudentQuizDTO alreadyAnswered.
     * @type {boolean}
     */
    public alreadyAnswered: boolean;

    /**
     * CurrentStudentQuizDTO quiz.
     * @type {(QuizDTO$Properties|null)}
     */
    public quiz: (QuizDTO$Properties|null);

    /**
     * Creates a new CurrentStudentQuizDTO instance using the specified properties.
     * @param {CurrentStudentQuizDTO$Properties=} [properties] Properties to set
     * @returns {CurrentStudentQuizDTO} CurrentStudentQuizDTO instance
     */
    public static create(properties?: CurrentStudentQuizDTO$Properties): CurrentStudentQuizDTO;

    /**
     * Encodes the specified CurrentStudentQuizDTO message. Does not implicitly {@link CurrentStudentQuizDTO.verify|verify} messages.
     * @param {CurrentStudentQuizDTO$Properties} message CurrentStudentQuizDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    public static encode(message: CurrentStudentQuizDTO$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CurrentStudentQuizDTO message, length delimited. Does not implicitly {@link CurrentStudentQuizDTO.verify|verify} messages.
     * @param {CurrentStudentQuizDTO$Properties} message CurrentStudentQuizDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    public static encodeDelimited(message: CurrentStudentQuizDTO$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CurrentStudentQuizDTO message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CurrentStudentQuizDTO} CurrentStudentQuizDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CurrentStudentQuizDTO;

    /**
     * Decodes a CurrentStudentQuizDTO message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CurrentStudentQuizDTO} CurrentStudentQuizDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CurrentStudentQuizDTO;

    /**
     * Verifies a CurrentStudentQuizDTO message.
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string;

    /**
     * Creates a CurrentStudentQuizDTO message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {CurrentStudentQuizDTO} CurrentStudentQuizDTO
     */
    public static fromObject(object: { [k: string]: any }): CurrentStudentQuizDTO;

    /**
     * Creates a CurrentStudentQuizDTO message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link CurrentStudentQuizDTO.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {CurrentStudentQuizDTO} CurrentStudentQuizDTO
     */
    public static from(object: { [k: string]: any }): CurrentStudentQuizDTO;

    /**
     * Creates a plain object from a CurrentStudentQuizDTO message. Also converts values to other types if specified.
     * @param {CurrentStudentQuizDTO} message CurrentStudentQuizDTO
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    public static toObject(message: CurrentStudentQuizDTO, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this CurrentStudentQuizDTO message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this CurrentStudentQuizDTO to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    public toJSON(): { [k: string]: any };
}

type StudentAnswerDTO$Properties = {
    quizId?: (number|Long);
    studentAnswer?: string;
};

/**
 * Constructs a new StudentAnswerDTO.
 * @exports StudentAnswerDTO
 * @constructor
 * @param {StudentAnswerDTO$Properties=} [properties] Properties to set
 */
export class StudentAnswerDTO {

    /**
     * Constructs a new StudentAnswerDTO.
     * @exports StudentAnswerDTO
     * @constructor
     * @param {StudentAnswerDTO$Properties=} [properties] Properties to set
     */
    constructor(properties?: StudentAnswerDTO$Properties);

    /**
     * StudentAnswerDTO quizId.
     * @type {number|Long}
     */
    public quizId: (number|Long);

    /**
     * StudentAnswerDTO studentAnswer.
     * @type {string}
     */
    public studentAnswer: string;

    /**
     * Creates a new StudentAnswerDTO instance using the specified properties.
     * @param {StudentAnswerDTO$Properties=} [properties] Properties to set
     * @returns {StudentAnswerDTO} StudentAnswerDTO instance
     */
    public static create(properties?: StudentAnswerDTO$Properties): StudentAnswerDTO;

    /**
     * Encodes the specified StudentAnswerDTO message. Does not implicitly {@link StudentAnswerDTO.verify|verify} messages.
     * @param {StudentAnswerDTO$Properties} message StudentAnswerDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    public static encode(message: StudentAnswerDTO$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified StudentAnswerDTO message, length delimited. Does not implicitly {@link StudentAnswerDTO.verify|verify} messages.
     * @param {StudentAnswerDTO$Properties} message StudentAnswerDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    public static encodeDelimited(message: StudentAnswerDTO$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StudentAnswerDTO message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {StudentAnswerDTO} StudentAnswerDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StudentAnswerDTO;

    /**
     * Decodes a StudentAnswerDTO message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {StudentAnswerDTO} StudentAnswerDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StudentAnswerDTO;

    /**
     * Verifies a StudentAnswerDTO message.
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string;

    /**
     * Creates a StudentAnswerDTO message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {StudentAnswerDTO} StudentAnswerDTO
     */
    public static fromObject(object: { [k: string]: any }): StudentAnswerDTO;

    /**
     * Creates a StudentAnswerDTO message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link StudentAnswerDTO.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {StudentAnswerDTO} StudentAnswerDTO
     */
    public static from(object: { [k: string]: any }): StudentAnswerDTO;

    /**
     * Creates a plain object from a StudentAnswerDTO message. Also converts values to other types if specified.
     * @param {StudentAnswerDTO} message StudentAnswerDTO
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    public static toObject(message: StudentAnswerDTO, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this StudentAnswerDTO message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this StudentAnswerDTO to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    public toJSON(): { [k: string]: any };
}

type GroupAssignmentDTO$Properties = {
    groupName?: string;
    groupId?: (number|Long);
    startAt?: (number|Long);
    endAt?: (number|Long);
    assignedAt?: (number|Long);
};

/**
 * Constructs a new GroupAssignmentDTO.
 * @exports GroupAssignmentDTO
 * @constructor
 * @param {GroupAssignmentDTO$Properties=} [properties] Properties to set
 */
export class GroupAssignmentDTO {

    /**
     * Constructs a new GroupAssignmentDTO.
     * @exports GroupAssignmentDTO
     * @constructor
     * @param {GroupAssignmentDTO$Properties=} [properties] Properties to set
     */
    constructor(properties?: GroupAssignmentDTO$Properties);

    /**
     * GroupAssignmentDTO groupName.
     * @type {string}
     */
    public groupName: string;

    /**
     * GroupAssignmentDTO groupId.
     * @type {number|Long}
     */
    public groupId: (number|Long);

    /**
     * GroupAssignmentDTO startAt.
     * @type {number|Long}
     */
    public startAt: (number|Long);

    /**
     * GroupAssignmentDTO endAt.
     * @type {number|Long}
     */
    public endAt: (number|Long);

    /**
     * GroupAssignmentDTO assignedAt.
     * @type {number|Long}
     */
    public assignedAt: (number|Long);

    /**
     * Creates a new GroupAssignmentDTO instance using the specified properties.
     * @param {GroupAssignmentDTO$Properties=} [properties] Properties to set
     * @returns {GroupAssignmentDTO} GroupAssignmentDTO instance
     */
    public static create(properties?: GroupAssignmentDTO$Properties): GroupAssignmentDTO;

    /**
     * Encodes the specified GroupAssignmentDTO message. Does not implicitly {@link GroupAssignmentDTO.verify|verify} messages.
     * @param {GroupAssignmentDTO$Properties} message GroupAssignmentDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    public static encode(message: GroupAssignmentDTO$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GroupAssignmentDTO message, length delimited. Does not implicitly {@link GroupAssignmentDTO.verify|verify} messages.
     * @param {GroupAssignmentDTO$Properties} message GroupAssignmentDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    public static encodeDelimited(message: GroupAssignmentDTO$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GroupAssignmentDTO message from the specified reader or buffer.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GroupAssignmentDTO} GroupAssignmentDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GroupAssignmentDTO;

    /**
     * Decodes a GroupAssignmentDTO message from the specified reader or buffer, length delimited.
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GroupAssignmentDTO} GroupAssignmentDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GroupAssignmentDTO;

    /**
     * Verifies a GroupAssignmentDTO message.
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string;

    /**
     * Creates a GroupAssignmentDTO message from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {GroupAssignmentDTO} GroupAssignmentDTO
     */
    public static fromObject(object: { [k: string]: any }): GroupAssignmentDTO;

    /**
     * Creates a GroupAssignmentDTO message from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link GroupAssignmentDTO.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {GroupAssignmentDTO} GroupAssignmentDTO
     */
    public static from(object: { [k: string]: any }): GroupAssignmentDTO;

    /**
     * Creates a plain object from a GroupAssignmentDTO message. Also converts values to other types if specified.
     * @param {GroupAssignmentDTO} message GroupAssignmentDTO
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    public static toObject(message: GroupAssignmentDTO, options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this GroupAssignmentDTO message. Also converts values to other types if specified.
     * @param {$protobuf.ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

    /**
     * Converts this GroupAssignmentDTO to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    public toJSON(): { [k: string]: any };
}
