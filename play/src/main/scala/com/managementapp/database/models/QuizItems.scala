package com.managementapp.database.models

case class QuizItems (id: Long, body: String, choices: String, answer: String) // choices and answer will be Json string
/*
* choices example:
* [
*   {
*     index: 0,
 *    choice: choice0,
*   },
*   {
*     index: 1,
*     choice: choice1,
*   },
*   {
*     index: 2,
*     choice: choice2,
*   },
* ]
*
* answer example:
* [1,2,3]
*
* */