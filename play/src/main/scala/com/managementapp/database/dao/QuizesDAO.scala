package com.managementapp.database.dao

import com.managementapp.database.models.Quizes
import slick.driver.MySQLDriver.api._

class QuizesTable(tag: Tag) extends Table[Quizes](tag, "QUIZES") {
  // scalastyle:off public.methods.have.type
  def id = column[Long]("ID", O.PrimaryKey, O.AutoInc)
  def quizName = column[String]("QUIZE_NAME")
  def score = column[Int]("SCORE")
  def startAt = column[Long]("START_AT")
  def endAt = column[Long]("END_AT")
  def * = (id, quizName, score, startAt, endAt) <> (Quizes.tupled, Quizes.unapply)
}

class QuizesDAO {

}
