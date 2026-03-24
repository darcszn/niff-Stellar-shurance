import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TerminusModule } from '@nestjs/terminus';
import { validationSchema } from './config/env.validation';
import { HealthModule } from './health/health.module';
// Stub imports - will be created
// import { RpcModule } from './rpc/rpc.module';
// import { IndexerModule } from './indexer/indexer.module';
// import { IpfsModule } from './ipfs/ipfs.module';
// import { AuthModule } from './auth/auth.module';
// import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validationSchema,
      validationOptions: {
        abortEarly: true,
      },
    }),
    TerminusModule,
    HealthModule,
    // RpcModule,
    // IndexerModule,
    // IpfsModule,
    // AuthModule,
    // AdminModule,
  ],
})
export class AppModule {}

