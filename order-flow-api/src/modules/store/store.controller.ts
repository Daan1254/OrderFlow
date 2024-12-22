import { Body, Controller, Get, NotFoundException, Param, Post } from "@nestjs/common";
import {StoreService} from "./store.service";
import { ApiResponse } from "@nestjs/swagger";
import { FullStoreDto } from "./Dto/FullStoreDto";

@Controller('store')
export class StoreController {


    constructor(private readonly storeService: StoreService) {
        
    }

    @Get(':uuid')
    @ApiResponse({ type: FullStoreDto })
    async getStore(@Param('uuid') uuid: string) {
        
        const store =  await this.storeService.getStore(uuid);
        
        if (!store) {
            throw new NotFoundException('Store not found')
        }

        return store;
    }

    @Post()
    @ApiResponse({ type: FullStoreDto })
    createStore(@Body() store: FullStoreDto) {
        return this.storeService.createStore(store)
    }
}   