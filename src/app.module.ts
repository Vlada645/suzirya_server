import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FundsModule } from './funds/funds.module';
import { ConfigModule } from '@nestjs/config';
import { PaymentsModule } from './payment/payment.module';
import { DepartureModule } from './departure/departure.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [FundsModule,PaymentsModule, ConfigModule.forRoot({
    isGlobal:true
  }), DepartureModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
