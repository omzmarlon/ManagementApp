package com.managementapp.database.dao

import com.managementapp.database.models.TutorsCreateGroups
import slick.driver.MySQLDriver.api._

class TutorsCreateGroupsTable(tag: Tag) extends Table[TutorsCreateGroups](tag, "TUTORS_CREATE_GROUPS") {
  // scalastyle:off public.methods.have.type
  def groupId = column[Long]("GROUP_ID", O.PrimaryKey)
  def userId = column[Long]("USER_ID")
  def createAt = column[Long]("CREATE_AT")
  def * = (groupId, userId, createAt) <> (TutorsCreateGroups.tupled, TutorsCreateGroups.unapply)

  private val groups = TableQuery[GroupsTable]
  private val tutors = TableQuery[UsersTable]

  def groupFK = foreignKey("GROUP_FK", groupId, groups)(_.id, onUpdate=ForeignKeyAction.Restrict, onDelete=ForeignKeyAction.Cascade)
  def tutorFK = foreignKey("TUTOR_FK", userId, tutors)(_.id, onUpdate=ForeignKeyAction.Restrict, onDelete=ForeignKeyAction.Cascade)
}

class TutorsCreateGroupsDAO {

}
