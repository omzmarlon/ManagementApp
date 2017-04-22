package com.managementapp.database.dao

import java.sql.Timestamp

import com.managementapp.database.models.TutorsCreateQuizes
import slick.driver.MySQLDriver.api._

class TutorsCreateQuizesTable(tag: Tag) extends Table[TutorsCreateQuizes](tag, "TUTORS_CREATE_QUIZES") {
  // scalastyle:off public.methods.have.type
  def quizId = column[Long]("QUIZ_ID", O.PrimaryKey)
  def userId = column[Long]("USER_ID")
  def createAt = column[Timestamp]("CREATE_AT")
  def * = (quizId, userId, createAt) <> (TutorsCreateQuizes.tupled, TutorsCreateQuizes.unapply)

  private val quizes = TableQuery[QuizesTable]
  private val tutors = TableQuery[UsersTable]

  def quizFK = foreignKey("QUIZ_FK", quizId, quizes)(_.id, onUpdate=ForeignKeyAction.Restrict, onDelete=ForeignKeyAction.Cascade)
  def tutorFK = foreignKey("TUTOR_FK", userId, tutors)(_.id, onUpdate=ForeignKeyAction.Restrict, onDelete=ForeignKeyAction.Cascade)
}

class TutorsCreateQuizesDAO {

}
