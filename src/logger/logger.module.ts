import { Global, Module } from '@nestjs/common';

@Module({})
@Global()
export class LoggerModule {
    static forRoot(options) {}
}
