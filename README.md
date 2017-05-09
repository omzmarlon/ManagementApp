# ManagementApp

Angular2  +  Scala Play

To build front-end: cd web; npm run build; 

To run server from scratch: In root folder: sbt clean protocGenerate run

To generate typescript protobuf manually: 

$> pbjs -t static-module -w commonjs -o compiled.js file1.proto file2.proto

$> pbts -o compiled.d.ts compiled.js
