package com.managementapp.database.dao

import com.google.inject.Inject
import com.managementapp.database.models.Groups
import com.managementapp.services.common.ManagementAppDatabase
import play.api.db.slick.DatabaseConfigProvider
import slick.driver.MySQLDriver.api._

import scala.concurrent.Future

class GroupsTable(tag: Tag) extends Table[Groups](tag, "GROUPS") {
  // scalastyle:off public.methods.have.type
  def id = column[Long]("ID", O.PrimaryKey, O.AutoInc)
  def groupName = column[String]("GROUP_NAME")
  def startAt = column[Long]("START_AT")
  def endAt = column[Long]("END_AT")
  def * = (id, groupName, startAt, endAt) <> (Groups.tupled, Groups.unapply)
}

class GroupsDAO @Inject()(val configProvider: DatabaseConfigProvider) extends DAO[Groups, Long] with ManagementAppDatabase {

  override def add(model: Groups): Future[Groups] = ???

  override def delete(id: Long): Future[Boolean] = ???

  override def findAll(): Future[Seq[Groups]] = ???
}
