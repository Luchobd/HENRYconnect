import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { educationStatus } from '../../../types/schema';

export class LocalSignUpDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
  })
  firstname: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
  })
  lastname: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
  })
  username: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
  })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
  })
  password: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
  })
  country: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
  })
  city: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
  })
  state: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
  })
  educationStatus: educationStatus;
}
