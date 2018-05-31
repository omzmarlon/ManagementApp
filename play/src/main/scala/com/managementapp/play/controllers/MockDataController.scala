package com.managementapp.play.controllers

import com.managementapp.play.actions.AuthenticatedAction
import com.managementapp.services.authentication.AuthenticationService
import com.managementapp.services.common.{CookieConstants, ProtobufUtil}
import play.api.mvc.{Action, AnyContent, Controller, Cookie}
import com.google.inject.Inject
import play.mvc.Http.MimeTypes
import com.managementapp.transfers.Quiz._
import scala.collection.JavaConversions._

/**
  * Created by omzmarlon on 2017-06-16.
  */
class MockDataController @Inject() (authService: AuthenticationService) extends Controller with ProtobufUtil {
  def mockRefreshStudentGroup: Action[AnyContent] = AuthenticatedAction(authService) {
    request =>
      mockDelay()
      Ok.withCookies(
        Cookie(name=CookieConstants.CURRENT_GROUP_ID_COOKIE, value="123", httpOnly=false)
      ).as(MimeTypes.JSON)
  }

  def mockStudentGetCurrentQuiz(id: Long): Action[AnyContent] = AuthenticatedAction(authService) {
    request =>
      mockDelay()
      val nonAvailable = QuizDTO.newBuilder.setQuizAvailable(true).setAlreadyAnswered(true).build

      val quizItem1 = QuizItemDTO
        .newBuilder
        .setBody("This is Quiz body1. This is Quiz body1. This is Quiz body1. This is Quiz body1. This is Quiz body1." +
          "This is Quiz body1. This is Quiz body1. This is Quiz body1. This is Quiz body1. This is Quiz body1" +
          "This is Quiz body1. This is Quiz body1. This is Quiz body1. This is Quiz body1. This is Quiz body1")
        .setChoices("[{\"index\":0,\"choice\":\"abc\"},{\"index\":1,\"choice\":\"item1\"},{\"index\":2,\"choice\":\"item2\"},{\"index\":3,\"choice\":\"item3\"}]")
        .setAnswers("[]")
        .setId(1L).build
      val quizItem2 = QuizItemDTO
        .newBuilder
        .setBody("This is Quiz body1. This is Quiz body1. This is Quiz body1. This is Quiz body1. This is Quiz body1." +
          "This is Quiz body1. This is Quiz body1. This is Quiz body1. This is Quiz body1. This is Quiz body1" +
          "Thkajsdfkjaksdjfk  aksdjfkasjdfka aksdfkjsad askdfksdjfakjfkajfk akdsfjjwieirmxmdfomsdnvm. This is Quiz body1")
        .setChoices("[{\"index\":0,\"choice\":\"choice a\"},{\"index\":1,\"choice\":\"item1 choiceb\"},{\"index\":2,\"choice\":\"item2\"},{\"index\":3,\"choice\":\"item3\"}]")
        .setAnswers("[]")
        .setId(1L).build
      val quizItem3 = QuizItemDTO
        .newBuilder
        .setBody("This is Quiz body1. This is Quiz body1. This is Quiz body1. This is Quiz body1. This is Quiz body1." +
          "This is Qululu kasjdf wepapapapapa pia piap pia is Quiz body1. This is Quiz body1" +
          "This is Quiz body1. This is Quiz body1. This is Quiz body1. This is Quiz body1. This is Quiz body1")
        .setChoices("[{\"index\":0,\"choice\":\"abc\"},{\"index\":1,\"choice\":\"item1\"},{\"index\":2,\"choice\":\"item2\"},{\"index\":3,\"choice\":\"item3\"}]")
        .setAnswers("[]")
        .setId(1L).build
      val quizItem4 = QuizItemDTO
        .newBuilder
        .setBody("This is Quioasdkfjakdjfak askdfjpxcknbofiweijwue skjfskwocs skdajkfdjThis is Quiz body1" +
          "This is Quiz body1. This is Quiz body1. This is Quiz body1. This is Quiz body1. This is Quiz body1")
        .setChoices("[{\"index\":0,\"choice\":\"abc\"},{\"index\":1,\"choice\":\"item4\"},{\"index\":2,\"choice\":\"item4 choice x\"},{\"index\":3,\"choice\":\"item3\"}]")
        .setAnswers("[]")
        .setId(1L).build
      val quiz = QuizDTO
        .newBuilder
        .addAllItems(List(quizItem1, quizItem2, quizItem3, quizItem4))
        .setQuizAvailable(true)
        .setAlreadyAnswered(false)
        .setId(100L)
        .setScore(100)
        .setQuizName("This is a mock quiz")
        .build

      val dto = protobufToJSON[QuizDTO](quiz)
      Ok(dto).as(MimeTypes.JSON)
  }

  def mockDelay(time: Long = 2001): Unit = {
    Thread.sleep(time)
  }
}
