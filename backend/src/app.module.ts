import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ItemsController } from './controllers/items.controller';
import { UsersController } from './controllers/users.controller';
import { AppService } from './app.service';
import { ItemsService } from './services/items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Payment } from './entities/Payment';
import { User } from './entities/User';
import { PaymentMethod } from './entities/PaymentMethod';
import { Item } from './entities/Item';
import { ItemsModule } from './modules/Items.module';
import { UsersService } from './services/users.service';
import { UsersModule } from './modules/Users.module';
const entities = [User, Payment, PaymentMethod, Item];

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User, Payment, PaymentMethod, Item],
      synchronize: true,
      logging: ['query', 'error'],
    }),
    TypeOrmModule.forFeature(entities),
    ItemsModule,
    UsersModule,
  ],
  controllers: [AppController, ItemsController, UsersController],
  providers: [AppService, ItemsService, UsersService],
})
export class AppModule {}
