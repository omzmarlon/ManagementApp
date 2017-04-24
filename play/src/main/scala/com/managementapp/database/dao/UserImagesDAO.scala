package com.managementapp.database.dao

import com.google.inject.Inject
import com.managementapp.database.models.Category.Category
import com.managementapp.database.models.{Category, UserImages}
import com.managementapp.services.common.ManagementAppDatabase
import play.api.db.slick.DatabaseConfigProvider
import slick.driver.MySQLDriver.api._

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

class UserImagesTable(tag: Tag) extends Table[UserImages](tag, "USER_IMAGES") {
  // scalastyle:off public.methods.have.type
  def userId = column[Long]("USER_ID")
  def imageId = column[Long]("IMAGE_ID",O.PrimaryKey)
  def category = column[Category]("CATEGORY")
  def * = (userId, imageId, category) <> (UserImages.tupled, UserImages.unapply)

  private val users = TableQuery[UsersTable]
  private val images = TableQuery[ImagesTable]

  def userFK = foreignKey("USER_FK", userId, users)(_.id, onUpdate=ForeignKeyAction.Restrict, onDelete=ForeignKeyAction.Cascade)
  def imageFK = foreignKey("IMAGE_FK", imageId, images)(_.id, onUpdate=ForeignKeyAction.Restrict, onDelete=ForeignKeyAction.Cascade)

  implicit val categoryMapper = MappedColumnType.base[Category, String](
    cat => cat.toString,
    str => Category.withName(str)
  )
}

class UserImagesDAO @Inject()(val configProvider: DatabaseConfigProvider) extends DAO[UserImages, Long] with ManagementAppDatabase {

  override def add(model: UserImages): Future[UserImages] = ???

  override def delete(id: Long): Future[Boolean] = ???

  override def findAll(): Future[Seq[UserImages]] = ???
}
