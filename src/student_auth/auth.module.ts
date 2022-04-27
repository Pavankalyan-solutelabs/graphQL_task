import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { localStrategy } from './strategies/local.strategy';
import { jwtStrategy } from './strategies/jwt.strategy';
import { StudentModule } from 'src/student/student.module';

@Module({
  imports:[PassportModule,StudentModule,JwtModule.register({
    signOptions:{expiresIn:"120s"},
    secret:"solutelabs_key"
  })],
  providers: [AuthService, AuthResolver,localStrategy,jwtStrategy],
 // exports:[AuthService,localStrategy,jwtStrategy]
})
export class AuthModule {}
