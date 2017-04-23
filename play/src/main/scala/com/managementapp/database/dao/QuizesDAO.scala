package com.managementapp.database.dao

import com.google.inject.Inject
import com.managementapp.database.models.Quizes
import com.managementapp.services.common.ManagementAppDatabase
import play.api.db.slick.DatabaseConfigProvider
import slick.driver.MySQLDriver.api._

import scala.concurrent.Future

class QuizesTable(tag: Tag) extends Table[Quizes](tag, "QUIZES") {
  // scalastyle:off public.methods.have.type
  def id = column[Long]("ID", O.PrimaryKey, O.AutoInc)
  def quizName = column[String]("QUIZE_NAME")
  def score = column[Int]("SCORE")
  def startAt = column[Long]("START_AT")
  def endAt = column[Long]("END_AT")
  def * = (id, quizName, score, startAt, endAt) <> (Quizes.tupled, Quizes.unapply)
}

class QuizesDAO @Inject()(val configProvider: DatabaseConfigProvider) extends DAO[Quizes, Long] with ManagementAppDatabase{

  override def add(model: Quizes): Future[Quizes] = ???

  override def delete(id: Long): Future[Boolean] = ???

  override def findAll(): Future[Seq[Quizes]] = ???
}
