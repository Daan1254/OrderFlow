import { ApiProperty } from "@nestjs/swagger";

export class FullStoreDto {
    @ApiProperty()
    id: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    address: string;
    @ApiProperty()
    city: string;
    @ApiProperty()
    state: string;
    @ApiProperty()
    zip: string;
    @ApiProperty()
    phone: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    website: string;
    @ApiProperty()
    createdAt: Date;
    @ApiProperty()
    updatedAt: Date;
}