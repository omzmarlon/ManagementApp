package com.managementapp.database.dao

import com.google.inject.Inject
import com.managementapp.database.models.Gender.Gender
import com.managementapp.database.models.{Gender, Users}
import com.managementapp.services.common.ManagementAppDatabase
import play.api.db.slick.DatabaseConfigProvider
import slick.driver.MySQLDriver.api._
import scala.concurrent.ExecutionContext.Implicits.global

import scala.concurrent.Future

class UsersTable(tag: Tag) extends Table[Users](tag, "USERS") {
  // scalastyle:off public.methods.have.type
  def id = column[Long]("ID", O.PrimaryKey, O.AutoInc)
  def username = column[String]("USERNAME")
  def password = column[String]("PASSWORD")
  def email = column[String]("EMAIL")
  def phone = column[Long]("PHONE")
  def gender = column[Gender]("GENDER")
  def avatar = column[Long]("AVATAR")
  def registerAt = column[Long]("REGISTER_AT")
  def lastUpdateAt = column[Long]("LAST_UPDATE_AT")
  def isTutor = column[Boolean]("IS_TUTOR")
  def * = (username, password, email, id, phone.?, gender?, avatar.?, registerAt, lastUpdateAt, isTutor) <> (Users.tupled, Users.unapply)

  implicit val genderMapper = MappedColumnType.base[Gender, String](
    gender => gender.toString,
    str => Gender.withName(str)
  )

  private val images = TableQuery[ImagesTable]

  def imageFK = foreignKey("IMAGE_FK", avatar, images)(_.id, onUpdate=ForeignKeyAction.Restrict, onDelete=ForeignKeyAction.Cascade))
}

class UsersDAO @Inject()(val configProvider: DatabaseConfigProvider) extends DAO[Users, Long] with ManagementAppDatabase {

  private val users = TableQuery[UsersTable]

  @throws(classOf[Exception])
  override def add(user: Users): Future[Users] = {
    execute(users += user).map(_ => user).recover {
      case ex: Exception => throw new Exception(ex.getCause.getMessage)
    }
  }

  override def delete(id: Long): Future[Boolean] = ???

  override def findAll(): Future[Seq[Users]] = ???

  def findUserByEmail(email: String): Future[Option[Users]] = {
    execute(users.filter(_.email === email).result.headOption)
  }
}
