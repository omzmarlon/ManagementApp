package com.managementapp.database.dao

import com.google.inject.Inject
import com.managementapp.database.models.QuizItems
import com.managementapp.services.common.ManagementAppDatabase
import play.api.db.slick.DatabaseConfigProvider
import slick.driver.MySQLDriver.api._

import scala.concurrent.Future

class QuizItemsTable(tag: Tag) extends Table[QuizItems](tag, "QUIZ_ITEMS") {
  // scalastyle:off public.methods.have.type
  def id = column[Long]("ID", O.PrimaryKey, O.AutoInc)
  def body = column[String]("BODY")
  def choices = column[String]("CHOICES")
  def answer = column[String]("ANSWER")
  def * = (id, body, choices, answer) <> (QuizItems.tupled, QuizItems.unapply)
}

class QuizItemsDAO @Inject()(val configProvider: DatabaseConfigProvider) extends DAO[QuizItems, Long] with ManagementAppDatabase {

  override def add(model: QuizItems): Future[QuizItems] = ???

  override def delete(id: Long): Future[Boolean] = ???

  override def findAll(): Future[Seq[QuizItems]] = ???
}
