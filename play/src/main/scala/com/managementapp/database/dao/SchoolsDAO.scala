package com.managementapp.database.dao

import com.google.inject.Inject
import com.managementapp.database.models.Schools
import com.managementapp.services.common.ManagementAppDatabase
import play.api.db.slick.DatabaseConfigProvider
import slick.driver.MySQLDriver.api._

import scala.concurrent.Future

class SchoolsTable (tag: Tag) extends Table[Schools](tag, "SCHOOLS") {
  // scalastyle:off public.methods.have.type
  def id: Rep[Long] = column[Long]("ID", O.PrimaryKey, O.AutoInc)
  def schoolName: Rep[String] = column[String]("SCHOOL_NAME")
  def * = (id, schoolName) <> (Schools.tupled, Schools.unapply)
}

class SchoolsDAO @Inject()(val configProvider: DatabaseConfigProvider) extends DAO[Schools, Long
  ] with ManagementAppDatabase {

  private val schools = TableQuery[SchoolsTable]

  //TODO: queries
  override def add(model: Schools): Future[Schools] = ???

  override def delete(id: Long): Future[Boolean] = ???

  override def findAll(): Future[Seq[Schools]] = ???
}
