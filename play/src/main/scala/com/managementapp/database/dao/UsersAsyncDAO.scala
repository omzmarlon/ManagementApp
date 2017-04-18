package com.managementapp.database.dao

import com.google.inject.Inject
import com.managementapp.database.models.{User, UserTable}
import com.managementapp.services.common.ManagementAppDatabase
import play.api.db.slick.DatabaseConfigProvider
import slick.driver.MySQLDriver.api._

import scala.concurrent.Future


class UsersAsyncDAO @Inject()(val configProvider: DatabaseConfigProvider) extends ManagementAppDatabase {

  private val users = TableQuery[UserTable]

  def findUserByEmail(email: String): Future[Option[User]] = {
    execute(users.filter(_.email === email).result.headOption)
  }

  def persistNewUser(user: User): Unit = {
    execute(users += user)
  }
}
