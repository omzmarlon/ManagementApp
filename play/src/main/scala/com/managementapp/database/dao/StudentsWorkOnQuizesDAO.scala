package com.managementapp.database.dao

import com.managementapp.database.models.StudentsWorkOnQuizes
import slick.driver.MySQLDriver.api._

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

class StudentsWorkOnQuizesDAO {

}
