package com.managementapp.database.models

import java.sql.Timestamp


case class StuentsWorkOnQuizes (
                                 userId: Long,
                                 quizId: Long,
                                 grade: Int,
                                 stuAnswer: String, // Json string
                                 startAt: Timestamp,
                                 finishAt: Timestamp
                               )
