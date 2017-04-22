package com.managementapp.database.models

import java.sql.Timestamp


case class Quizes (id: Long, quizName: String, score: Int, startAt: Timestamp, endAt: Timestamp)
