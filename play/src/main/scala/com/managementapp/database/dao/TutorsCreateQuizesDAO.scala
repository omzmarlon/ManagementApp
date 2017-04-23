package com.managementapp.database.dao

import com.google.inject.Inject
import com.managementapp.database.models.TutorsCreateQuizes
import com.managementapp.services.common.ManagementAppDatabase
import play.api.db.slick.DatabaseConfigProvider
import slick.driver.MySQLDriver.api._

import scala.concurrent.Future

class TutorsCreateQuizesTable(tag: Tag) extends Table[TutorsCreateQuizes](tag, "TUTORS_CREATE_QUIZES") {
  // scalastyle:off public.methods.have.type
  def quizId = column[Long]("QUIZ_ID", O.PrimaryKey)
  def userId = column[Long]("USER_ID")
  def createAt = column[Long]("CREATE_AT")
  def * = (quizId, userId, createAt) <> (TutorsCreateQuizes.tupled, TutorsCreateQuizes.unapply)

  private val quizes = TableQuery[QuizesTable]
  private val tutors = TableQuery[UsersTable]

  def quizFK = foreignKey("QUIZ_FK", quizId, quizes)(_.id, onUpdate=ForeignKeyAction.Restrict, onDelete=ForeignKeyAction.Cascade)
  def tutorFK = foreignKey("TUTOR_FK", userId, tutors)(_.id, onUpdate=ForeignKeyAction.Restrict, onDelete=ForeignKeyAction.Cascade)
}

class TutorsCreateQuizesDAO @Inject()(val configProvider: DatabaseConfigProvider) extends DAO[TutorsCreateQuizes, Long] with ManagementAppDatabase {
  override def add(model: TutorsCreateQuizes): Future[TutorsCreateQuizes] = ???

  override def delete(id: Long): Future[Boolean] = ???

  override def findAll(): Future[Seq[TutorsCreateQuizes]] = ???
}
