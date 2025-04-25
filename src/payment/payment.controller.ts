import { Controller, Get, Query } from '@nestjs/common';
import { PaymentsService } from './payment.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Get('create-payment-link')
  createPaymentLink(
    @Query('cardNumber') cardNumber: string,
    @Query('amount') amount?: number,
  ): string {
    return this.paymentsService.generatePaymentLink(cardNumber, amount);
  }

  @Get('create-qr-code')
  async createQRCode(
    @Query('cardNumber') cardNumber: string,
    @Query('amount') amount?: number,
  ): Promise<string> {
    const link = this.paymentsService.generatePaymentLink(cardNumber, amount);
    return await this.paymentsService.generateQRCode(link);
  }
}
