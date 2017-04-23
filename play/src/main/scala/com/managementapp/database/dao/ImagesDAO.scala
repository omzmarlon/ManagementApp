package com.managementapp.database.dao

import com.google.inject.Inject
import com.managementapp.database.models.Images
import com.managementapp.services.common.ManagementAppDatabase
import play.api.db.slick.DatabaseConfigProvider
import slick.driver.MySQLDriver.api._

import scala.concurrent.Future

class ImagesTable(tag: Tag) extends Table[Images](tag, "IMAGES") {
  // scalastyle:off public.methods.have.type
  def id = column[Long]("ID", O.PrimaryKey, O.AutoInc)
  def fileName = column[String]("FILE_NAME")
  def filePath = column[String]("FILE_PATH")
  def fileType = column[String]("FILE_TYPE")
  def fileSize = column[Long]("FILE_SIZE")
  def uploader = column[Long]("UPLOADER")
  def uploadAt = column[Long]("UPLOAD_AT")
  def * = (id, fileName, filePath, fileType.?, fileSize.?, uploader.?, uploadAt) <> (Images.tupled, Images.unapply)

  private val users = TableQuery[UsersTable]

  def userFK = foreignKey("USER_FK", uploader, users)(_.id, onUpdate=ForeignKeyAction.Restrict, onDelete=ForeignKeyAction.Cascade)
}

class ImagesDAO @Inject()(val configProvider: DatabaseConfigProvider) extends DAO[Images, Long] with ManagementAppDatabase {

  override def add(model: Images): Future[Images] = ???

  override def delete(id: Long): Future[Boolean] = ???

  override def findAll(): Future[Seq[Images]] = ???
}
