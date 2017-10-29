package com.managementapp.database.models

case class StudentsWorkOnQuizes(
                                 userId: Long,
                                 quizId: Long,
                                 grade: Int,
                                 stuAnswer: String, // Json string
                                 startAt: Long,
                                 finishAt: Long
                               )
/*
* stuAnswer example:
* [
*   {
*     itemId: 123,
*     choice: 2
*   },
*   ...
* ]
*
* */