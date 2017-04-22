package com.managementapp.database.models

import java.sql.Timestamp


case class StudentsWorkOnQuizes(
                                 userId: Long,
                                 quizId: Long,
                                 grade: Int,
                                 stuAnswer: String, // Json string
                                 startAt: Timestamp,
                                 finishAt: Timestamp
                               )
