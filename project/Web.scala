import play.sbt.PlayImport.PlayKeys
import PlayKeys.playMonitoredFiles
import play.twirl.sbt.Import.TwirlKeys
import sbt.Keys.{sourceDirectories, sourceDirectory, unmanagedSourceDirectories}
import sbt._
import sbtprotoc.ProtocPlugin.autoImport.PB

object Web {
  val settings : Seq[Def.Setting[_]] = Seq(
    //makes play to find source files in /src folder instead of /app folder
    //refer to https://www.playframework.com/documentation/2.5.x/Anatomy
    //how you can change dir structure
    playMonitoredFiles ++= (sourceDirectories in (Compile, TwirlKeys.compileTemplates)).value,
    playMonitoredFiles ++= Seq(file("./web")), //include directory for static files

    //proto-sbt doc:
    // https://github.com/thesamet/sbt-protoc
    //for usage in typescript:
    //http://stackoverflow.com/questions/40561548/protocol-buffers-in-angular-2-project
    //http://dcode.io/protobuf.js/
    PB.targets in Compile := Seq(
      PB.gens.java -> ((sourceDirectory in Compile).value / "protobuf_generated")
    ),
    unmanagedSourceDirectories in Compile += ((sourceDirectory in Compile).value / "protobuf_generated")
  )

}