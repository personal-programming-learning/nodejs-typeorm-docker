import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../config/base.dto";

export class UserDTO extends BaseDTO {

  @IsNotEmpty()
  name!:string;

  @IsNotEmpty()
  lastname!:string;

  @IsNotEmpty()
  username!: string;

  @IsNotEmpty()
  email!:string;

  @IsNotEmpty()
  password!:string;

  city?:string;

  @IsNotEmpty()
  province!:string;

}