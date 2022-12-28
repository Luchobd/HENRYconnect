import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { educationStatus } from 'src/types/schema';

export class LocalSignUpDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
  })
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
  })
  lastName: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
  })
  userName: string;

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
  educationStatus: educationStatus;
}
