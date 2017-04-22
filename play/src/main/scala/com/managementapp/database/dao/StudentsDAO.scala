package com.managementapp.database.dao

import java.sql.{Blob, Date}

import com.google.inject.Inject
import com.managementapp.database.models.Students
import com.managementapp.services.common.ManagementAppDatabase
import play.api.db.slick.DatabaseConfigProvider
import slick.driver.MySQLDriver.api._

class StudentsTable(tag: Tag) extends Table[Students](tag, "STUDENTS") {
  // scalastyle:off public.methods.have.type
  def userId = column[Long]("USER_ID", O.PrimaryKey)
  def credits = column[Int]("CREDITS")
  def birthday = column[Date]("BIRTHDAY")
  def passport = column[Blob]("PASSPORT")
  def insurance = column[Blob]("INSURANCE")
  def schoolId = column[Long]("SCHOOL_ID")
  def * = (userId, credits, birthday.?, passport.?, insurance.?, schoolId.?) <> (Students.tupled, Students.unapply)

  private val users = TableQuery[UsersTable]
  private val schools = TableQuery[SchoolsTable]

  def userFK = foreignKey("USER_FK", userId, users)(_.id, onUpdate=ForeignKeyAction.Restrict, onDelete=ForeignKeyAction.Cascade)
  def schoolFK = foreignKey("SCHOOL_FK", schoolId, schools)(_.id, onUpdate=ForeignKeyAction.Restrict, onDelete=ForeignKeyAction.Cascade)
}

class StudentsDAO @Inject()(val configProvider: DatabaseConfigProvider) extends ManagementAppDatabase {

  private val students = TableQuery[StudentsTable]

  //TODO: queries
}
