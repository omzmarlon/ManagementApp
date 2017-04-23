package com.managementapp.database.dao

import com.google.inject.Inject
import com.managementapp.database.models.StudentsWorkOnQuizes
import com.managementapp.services.common.ManagementAppDatabase
import play.api.db.slick.DatabaseConfigProvider
import slick.driver.MySQLDriver.api._

import scala.concurrent.Future

class StudentsWorkOnQuizesTable(tag: Tag) extends Table[StudentsWorkOnQuizes](tag, "STUDENTS_WORK_ON_QUIZES") {
  // scalastyle:off public.methods.have.type
  def userId = column[Long]("USER_ID")
  def quizId = column[Long]("QUIZ_ID")
  def grade = column[Int]("GRADE")
  def stuAnswer = column[String]("STUDENT_ANSWER")
  def startAt = column[Long]("START_AT")
  def endAt = column[Long]("END_AT")
  def * = (userId, quizId, grade, stuAnswer, startAt, endAt) <> (StudentsWorkOnQuizes.tupled, StudentsWorkOnQuizes.unapply)

  private val quizes = TableQuery[QuizesTable]
  private val students = TableQuery[StudentsTable]

  def pk = primaryKey("PK", (quizId, userId))
  def quizFK = foreignKey("QUIZ_FK", quizId, quizes)(_.id, onUpdate=ForeignKeyAction.Restrict, onDelete=ForeignKeyAction.Cascade)
  def userFK = foreignKey("USER_FK", userId, students)(_.userId, onUpdate=ForeignKeyAction.Restrict, onDelete=ForeignKeyAction.Cascade)
}

class StudentsWorkOnQuizesDAO @Inject()(val configProvider: DatabaseConfigProvider) extends DAO[StudentsWorkOnQuizes, Long] with ManagementAppDatabase {

  override def add(model: StudentsWorkOnQuizes): Future[StudentsWorkOnQuizes] = ???

  override def delete(id: Long): Future[Boolean] = ???

  override def findAll(): Future[Seq[StudentsWorkOnQuizes]] = ???
}
