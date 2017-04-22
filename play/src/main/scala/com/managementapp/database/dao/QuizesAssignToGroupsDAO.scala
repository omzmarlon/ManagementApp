package com.managementapp.database.dao

import java.sql.Timestamp

import com.managementapp.database.models.QuizesAssignToGroups
import slick.driver.MySQLDriver.api._

class QuizesAssignToGroupsTable(tag: Tag) extends Table[QuizesAssignToGroups](tag, "QUIZES_ASSIGN_TO_GROUPS") {
  // scalastyle:off public.methods.have.type
  def groupId = column[Long]("GROUP_ID")
  def quizId = column[Long]("QUIZ_ID")
  def assignAt = column[Timestamp]("ASSIGN_AT")
  def * = (groupId, quizId, assignAt) <> (QuizesAssignToGroups.tupled, QuizesAssignToGroups.unapply)

  private val groups = TableQuery[GroupsTable]
  private val quizes = TableQuery[QuizesTable]

  def pk = primaryKey("PK", (groupId, quizId))
  def groupFK = foreignKey("GROUP_FK", groupId, groups)(_.id, onUpdate=ForeignKeyAction.Restrict, onDelete=ForeignKeyAction.Cascade)
  def quizFK = foreignKey("QUIZ_FK", quizId, quizes)(_.id, onUpdate=ForeignKeyAction.Restrict, onDelete=ForeignKeyAction.Cascade)
}

class QuizesAssignToGroupsDAO {

}
