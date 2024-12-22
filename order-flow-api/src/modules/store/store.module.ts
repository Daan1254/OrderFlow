import { Module } from '@nestjs/common'
import { StoreController } from './store.controller'
import { StoreRepository } from './store.repository'
import { StoreService } from './store.service'
import { PrismaService } from 'src/database/prisma.service'

@Module({
    controllers: [StoreController],
    providers: [StoreRepository, StoreService, PrismaService],
})
export class StoreModule {
}
