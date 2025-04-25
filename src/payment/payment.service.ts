import { Injectable } from '@nestjs/common';
import * as QRCode from 'qrcode';

@Injectable()
export class PaymentsService {
  private bankBaseUrl = 'https://www.privat24.ua/send/d88mv'; // Замініть на URL банку, що підтримує перекази

  generatePaymentLink(cardNumber: string, amount?: number): string {
    let link = `${this.bankBaseUrl}?to=${cardNumber}`;
    if (amount) {
      link += `&amount=${amount}`;
    }
    return link;
  }

  async generateQRCode(link: string): Promise<string> {
    return await QRCode.toDataURL(link);
  }
}
