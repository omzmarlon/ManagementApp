package com.managementapp.authentication.services

import java.util.Calendar

import io.jsonwebtoken.Jwts
import io.jsonwebtoken.SignatureAlgorithm
import com.google.inject.{Inject, Singleton}
import com.managementapp.authentication.models.User

import scala.util.{Failure, Success, Try}

@Singleton
class TokenService @Inject() (private val securityProvider: SecurityConfigProvider) {
  private val jwtBuilder = Jwts.builder
  private val jwtParser = Jwts.parser

  def generateToken(user: User): String = {
    jwtBuilder
      .setSubject(user.email)
      .setExpiration(securityProvider.getExpiryTime)
      .signWith(SignatureAlgorithm.HS512, securityProvider.getSecurityKey)
      .compact()
  }

  /**
    * @return jwt subject
    * */
  def getTokenSubject(token: String): Option[String] = {
    //TODO: provide more detailed info on why parsing failed. the parseClaimsJws method has a number of exceptions can be thrown
    Try(jwtParser.setSigningKey(securityProvider.getSecurityKey).parseClaimsJws(token)) match {
      case Success(jws) => Option(jws.getBody.getSubject)
      case Failure(_) => None
    }
  }


}
