import { Module } from "@nestjs/common";
import { TypeGraphQLModule } from "typegraphql-nestjs";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    TypeGraphQLModule.forRoot({
      emitSchemaFile: true,
      validate: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
