import { Accestype, Category } from '../models/category.model';
import {
  IsUrl,
  Length,
  IsNotEmpty,
  IsEnum,
  validateOrReject,
} from 'class-validator';

export interface CreateCategoryDto
  extends Omit<Category, 'id' | 'updatedAt' | 'creationAt'> {}
export class CreateCategoryDto implements CreateCategoryDto {
  @IsNotEmpty()
  @Length(4, 140)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsNotEmpty()
  @IsEnum(Accestype)
  access?: Accestype | undefined;
}

(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'ad';
    await validateOrReject(dto);
  } catch (error) {
    console.error(error);
  }
})();
