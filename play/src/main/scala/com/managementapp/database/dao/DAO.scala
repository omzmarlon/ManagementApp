package com.managementapp.database.dao

import scala.concurrent.Future

/**
  * The least set of methods that all DAO should implement
  * @tparam T data model type
  * @tparam K data type for the identifier field
  */
trait DAO[T, K] {
  /**
    * Add a new entity into table
    * @param model
    * @return the entity if added successfully; Exception otherwise
    */
  def add(model: T): Future[T]

  /**
    * Delete an entity from table
    * @param id
    * @return true if success; false if the id doesn't exist
    */
  def delete(id: K): Future[Boolean]

  /**
    * Find all entities in the table
    * @return a collection of all the entities; empty Sequence if the table is empty
    */
  def findAll(): Future[Seq[T]]
}
