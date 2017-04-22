package com.managementapp.database.models

import java.sql.Timestamp

case class QuizesAssignToGroups (groupId: Long, quizId: Long, assignAt: Timestamp)
