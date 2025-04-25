import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PaymentsService } from './payment.service';
import { PaymentsController } from './payment.controller';

@Module({
  imports: [ConfigModule], // Імпорт ConfigModule для доступу до конфігураційних змінних
  controllers: [PaymentsController], // Додаємо контролер
  providers: [PaymentsService], // Додаємо сервіс
  exports: [PaymentsService], // Експортуємо сервіс, щоб його можна було використовувати в інших модулях
})
export class PaymentsModule {}
