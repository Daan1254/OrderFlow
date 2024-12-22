import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { FullStoreDto } from "./Dto/FullStoreDto";

@Injectable()
export class StoreRepository {
  


    constructor(private readonly prismaService: PrismaService) {

    }

    getCategories() {
        return this.prismaService.category.findMany()
    }

    async getStore(uuid: string) {
        return await this.prismaService.store.findUnique({
            where: {
                id: uuid
            }
        })
    }

    createStore(store: FullStoreDto) {
        return this.prismaService.store.create({
            data: store
        })
    }
}