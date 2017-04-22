package com.managementapp.database.dao

import java.sql.{Blob, Timestamp}

import com.google.inject.Inject
import com.managementapp.database.models.Gender.Gender
import com.managementapp.database.models.Users
import com.managementapp.services.common.ManagementAppDatabase
import play.api.db.slick.DatabaseConfigProvider
import slick.driver.MySQLDriver.api._

import scala.concurrent.Future

class UsersTable(tag: Tag) extends Table[Users](tag, "USER") {
  // scalastyle:off public.methods.have.type
  def id = column[Long]("ID", O.PrimaryKey, O.AutoInc)
  def username = column[String]("USERNAME")
  def password = column[String]("PASSWORD")
  def email = column[String]("EMAIL")
  def phone = column[Long]("PHONE")
  def gender = column[Option[Gender]]("GENDER")
  def avatar = column[Blob]("AVATAR")
  def registerAt = column[Timestamp]("REGISTER_AT")
  def lastUpdateAt = column[Timestamp]("LAST_UPDATE_AT")
  def isTutor = column[Boolean]("IS_TUTOR")
  def * = (id, username, password, email, phone.?, gender, avatar.?, registerAt, lastUpdateAt, isTutor) <> (Users.tupled, Users.unapply)
}

class UsersDAO @Inject()(val configProvider: DatabaseConfigProvider) extends DAO[Users, Long] with ManagementAppDatabase {

  private val users = TableQuery[UsersTable]

  override def add(model: Users): Future[Users] = ???

  override def delete(id: Long): Future[Boolean] = ???

  override def findAll(): Future[Seq[Users]] = ???

  def findUserByEmail(email: String): Future[Option[Users]] = {
    execute(users.filter(_.email === email).result.headOption)
  }

  def persistNewUser(user: Users): Unit = {
    execute(users += user)
  }
}
