import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateBorrowerDto {
    @ApiProperty({
        description: 'This field represents the borrower_UUID',
      })
      @IsString()
      public borrower_UUID: string;
    
      @ApiProperty({
        description: 'This field represents the humanInformation_UUID',
      })
      @IsString()
      public humanInformation_UUID: string;
}
