package com.managementapp.database.models

import java.sql.Timestamp

case class Groups (id: Long, groupName: String, startAt: Timestamp, endAt: Timestamp)
