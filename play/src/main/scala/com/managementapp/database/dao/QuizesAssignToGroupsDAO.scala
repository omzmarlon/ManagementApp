package com.managementapp.database.dao

import com.google.inject.Inject
import com.managementapp.database.models.QuizesAssignToGroups
import com.managementapp.services.common.ManagementAppDatabase
import play.api.db.slick.DatabaseConfigProvider
import slick.driver.MySQLDriver.api._

import scala.concurrent.Future

class QuizesAssignToGroupsTable(tag: Tag) extends Table[QuizesAssignToGroups](tag, "QUIZES_ASSIGN_TO_GROUPS") {
  // scalastyle:off public.methods.have.type
  def groupId = column[Long]("GROUP_ID")
  def quizId = column[Long]("QUIZ_ID")
  def assignAt = column[Long]("ASSIGN_AT")
  def * = (groupId, quizId, assignAt) <> (QuizesAssignToGroups.tupled, QuizesAssignToGroups.unapply)

  private val groups = TableQuery[GroupsTable]
  private val quizes = TableQuery[QuizesTable]

  def pk = primaryKey("PK", (groupId, quizId))
  def groupFK = foreignKey("GROUP_FK", groupId, groups)(_.id, onUpdate=ForeignKeyAction.Restrict, onDelete=ForeignKeyAction.Cascade)
  def quizFK = foreignKey("QUIZ_FK", quizId, quizes)(_.id, onUpdate=ForeignKeyAction.Restrict, onDelete=ForeignKeyAction.Cascade)
}

class QuizesAssignToGroupsDAO @Inject()(val configProvider: DatabaseConfigProvider) extends DAO[QuizesAssignToGroups, Long] with ManagementAppDatabase{

  override def add(model: QuizesAssignToGroups): Future[QuizesAssignToGroups] = ???

  override def delete(id: Long): Future[Boolean] = ???

  override def findAll(): Future[Seq[QuizesAssignToGroups]] = ???
}
