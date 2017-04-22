package com.managementapp.database.models

import java.sql.Date

case class StudentsJoinGroups (userId: Long, groupId: Long, joinAt: Date)
