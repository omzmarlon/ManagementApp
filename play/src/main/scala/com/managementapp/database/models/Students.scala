package com.managementapp.database.models

import java.sql.{Blob, Date}

case class Students (
                    userId: Long,
                    credits: Int,
                    birthday: Option[Date],
                    passport: Option[Blob],
                    insurance: Option[Blob],
                    schoolId: Option[Long]
                    )
