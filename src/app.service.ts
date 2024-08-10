import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getQuizApp(): string {
    return 'Welcome to Quiz App';
  }
}
