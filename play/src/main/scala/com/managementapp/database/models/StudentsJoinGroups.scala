package com.managementapp.database.models

import java.sql.Timestamp

case class StudentsJoinGroups (userId: Long, groupId: Long, joinAt: Timestamp)