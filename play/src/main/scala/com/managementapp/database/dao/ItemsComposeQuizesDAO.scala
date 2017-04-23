package com.managementapp.database.dao

import com.google.inject.Inject
import com.managementapp.database.models.ItemsComposeQuizes
import com.managementapp.services.common.ManagementAppDatabase
import play.api.db.slick.DatabaseConfigProvider
import slick.driver.MySQLDriver.api._

import scala.concurrent.Future

class ItemsComposeQuizesTable(tag: Tag) extends Table[ItemsComposeQuizes](tag, "ITEMS_COMPOSE_QUIZES") {
  // scalastyle:off public.methods.have.type
  def quizId = column[Long]("QUIZ_ID")
  def itemId = column[Long]("ITEM_ID")
  def * = (quizId, itemId) <> (ItemsComposeQuizes.tupled, ItemsComposeQuizes.unapply)

  private val quizes = TableQuery[QuizesTable]
  private val quizItems = TableQuery[QuizItemsTable]

  def pk = primaryKey("PK", (quizId, itemId))
  def quizFK = foreignKey("QUIZ_FK", quizId, quizes)(_.id, onUpdate=ForeignKeyAction.Restrict, onDelete=ForeignKeyAction.Cascade)
  def itemFK = foreignKey("ITEM_FK", itemId, quizItems)(_.id, onUpdate=ForeignKeyAction.Restrict, onDelete=ForeignKeyAction.Cascade)
}

class ItemsComposeQuizesDAO @Inject()(val configProvider: DatabaseConfigProvider) extends DAO[ItemsComposeQuizes, Long] with ManagementAppDatabase {

  override def add(model: ItemsComposeQuizes): Future[ItemsComposeQuizes] = ???

  override def delete(id: Long): Future[Boolean] = ???

  override def findAll(): Future[Seq[ItemsComposeQuizes]] = ???
}
