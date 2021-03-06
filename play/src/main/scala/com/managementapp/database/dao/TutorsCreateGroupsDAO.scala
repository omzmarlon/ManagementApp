package com.managementapp.database.dao

import com.google.inject.Inject
import com.managementapp.database.models.TutorsCreateGroups
import com.managementapp.services.common.ManagementAppDatabase
import play.api.db.slick.DatabaseConfigProvider
import slick.driver.MySQLDriver.api._

import scala.concurrent.Future

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

class TutorsCreateGroupsDAO @Inject()(val configProvider: DatabaseConfigProvider) extends DAO[TutorsCreateGroups, Long] with ManagementAppDatabase {
  override def add(model: TutorsCreateGroups): Future[TutorsCreateGroups] = ???

  override def delete(id: Long): Future[Boolean] = ???

  override def findAll(): Future[Seq[TutorsCreateGroups]] = ???
}
