package com.managementapp.database.dao

import java.sql.Timestamp

import com.managementapp.database.models.StudentsJoinGroups
import slick.driver.MySQLDriver.api._

class StudentsJoinGroupsTable(tag: Tag) extends Table[StudentsJoinGroups](tag, "STUDENTS_JOIN_GROUPS") {
  // scalastyle:off public.methods.have.type
  def groupId = column[Long]("GROUP_ID")
  def userId = column[Long]("USER_ID")
  def joinAt = column[Timestamp]("JOIN_AT")
  def * = (userId, groupId, joinAt) <> (StudentsJoinGroups.tupled, StudentsJoinGroups.unapply)

  private val groups = TableQuery[GroupsTable]
  private val students = TableQuery[StudentsTable]

  def pk = primaryKey("PK", (groupId, userId))
  def groupFK = foreignKey("GROUP_FK", groupId, groups)(_.id, onUpdate=ForeignKeyAction.Restrict, onDelete=ForeignKeyAction.Cascade)
  def userFK = foreignKey("USER_FK", userId, students)(_.userId, onUpdate=ForeignKeyAction.Restrict, onDelete=ForeignKeyAction.Cascade)
}

class StudentsJoinGroupsDAO {

}
