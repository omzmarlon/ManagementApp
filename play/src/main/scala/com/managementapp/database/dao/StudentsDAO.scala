package com.managementapp.database.dao

import java.sql.Date

import com.google.inject.Inject
import com.managementapp.database.models.Students
import com.managementapp.services.common.ManagementAppDatabase
import play.api.db.slick.DatabaseConfigProvider
import slick.driver.MySQLDriver.api._

import scala.concurrent.Future

class StudentsTable(tag: Tag) extends Table[Students](tag, "STUDENTS") {
  // scalastyle:off public.methods.have.type
  def userId = column[Long]("USER_ID", O.PrimaryKey)
  def credits = column[Int]("CREDITS")
  def birthday = column[Date]("BIRTHDAY")
  def schoolId = column[Long]("SCHOOL_ID")
  def * = (userId, credits, birthday.?, schoolId.?) <> (Students.tupled, Students.unapply)

  private val users = TableQuery[UsersTable]
  private val schools = TableQuery[SchoolsTable]

  def userFK = foreignKey("USER_FK", userId, users)(_.id, onUpdate=ForeignKeyAction.Restrict, onDelete=ForeignKeyAction.Cascade)
  def schoolFK = foreignKey("SCHOOL_FK", schoolId, schools)(_.id, onUpdate=ForeignKeyAction.Restrict, onDelete=ForeignKeyAction.SetNull)
}

class StudentsDAO @Inject()(val configProvider: DatabaseConfigProvider) extends DAO[Students, Long] with ManagementAppDatabase {

  private val students = TableQuery[StudentsTable]

  //TODO: queries
  override def add(model: Students): Future[Students] = ???

  override def delete(id: Long): Future[Boolean] = ???

  override def findAll(): Future[Seq[Students]] = ???
}
