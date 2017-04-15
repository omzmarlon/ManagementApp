package com.managementapp.common.util

import play.api.db.slick.DatabaseConfigProvider
import slick.dbio.DBIO
import slick.driver.JdbcProfile
import scala.concurrent.Future


/**
  * Created by omzmarlon on 2017-04-10.
  */
trait ManagementAppDatabase {
  val configProvider: DatabaseConfigProvider

  def execute[T](dBIO: DBIO[T]): Future[T] = configProvider.get[JdbcProfile].db.run(dBIO)
}
