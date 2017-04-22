package com.managementapp.database.models

import java.sql.{Blob, Timestamp}

import com.managementapp.database.models.Gender.Gender

object Gender extends Enumeration {
  type Gender = Value
  val Male, Female = Value
}

case class Users(
                 id: Long,
                 username: String,
                 password: String,
                 email: String,
                 phone: Option[Long],
                 gender: Option[Gender],
                 avatar: Option[Blob],
                 registerAt: Timestamp,
                 lastUpdateAt: Timestamp,
                 isTutor: Boolean
               )
