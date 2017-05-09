import play.sbt.PlayImport.PlayKeys
import PlayKeys.playMonitoredFiles
import play.twirl.sbt.Import.TwirlKeys
import sbt.Keys.{sourceDirectories, sourceDirectory, unmanagedSourceDirectories, sourceGenerators, baseDirectory}
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
    //Found a protoc plugin for typescript
    //brew install protobuf (this may have some symlink issue)
    //npm install ts-protoc-gen --save
    //npm install google-protobuf --save
    //https://github.com/improbable-eng/ts-protoc-gen
    PB.targets in Compile := Seq(
      PB.gens.java -> ((sourceDirectory in Compile).value / "protobuf_generated")
    ),
    PB.protocOptions in Compile := Seq(
      "--plugin=protoc-gen-ts=" + "./web/node_modules/.bin/protoc-gen-ts",
      "--ts_out=service=true:" + "./web/src/dto"
    ),
    sourceGenerators in Compile -= (PB.generate in Compile).taskValue,
    unmanagedSourceDirectories in Compile += ((sourceDirectory in Compile).value / "protobuf_generated")
  )

}