import { Injectable } from "@nestjs/common";
import { StoreRepository } from "./store.repository";
import { FullStoreDto } from "./Dto/FullStoreDto";

@Injectable()
export class StoreService {

    constructor(private readonly storeRepository: StoreRepository) {

    }

    async getStore(uuid: string) {
        return await this.storeRepository.getStore(uuid)
    }


    createStore(store: FullStoreDto) {
        return this.storeRepository.createStore(store)
    }

}