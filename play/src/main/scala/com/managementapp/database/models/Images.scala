package com.managementapp.database.models

case class Images (
                  id: Long,
                  fileName: String,
                  filePath: String,
                  fileType: Option[String],
                  fileSize: Option[Long],
                  uploadAt: Long
                  )