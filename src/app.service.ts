import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! My name is dreamm and this is the testing the auto deploy of docker';
  }

  test():string{
    return "this is test the docker recreate"
  }
}
