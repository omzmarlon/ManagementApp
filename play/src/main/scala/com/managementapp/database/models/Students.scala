package com.managementapp.database.models

import java.sql.Date

case class Students (
                    userId: Long,
                    credits: Int,
                    birthday: Option[Date],
                    schoolId: Option[Long]
                    )
