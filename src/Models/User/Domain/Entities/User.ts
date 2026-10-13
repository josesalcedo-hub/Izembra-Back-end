import { v4 } from "uuid";
import { UserProps } from "../Types/UserProps";
import { CreateUserProps } from "../Types/CreateUserProps";
export class User {
  readonly id: string;
  public name: string;
  public lastname: string;
  public email: string;
  public passwordHash: string;
  public phone: string;
  public createdAt: Date;

  constructor(props: UserProps) {
    this.id = props.id;
    this.name = props.name;
    this.lastname = props.lastname;
    this.email = props.email;
    this.passwordHash = props.passwordHash;
    this.phone = props.phone;
    this.createdAt = props.createdAt;
  }

  static create(props: CreateUserProps): User {
    const id: string = v4();
    const createdAt = new Date();
    return new User({ ...props, id, createdAt });
  }

  static reconstitute(props:UserProps):User{
    return new User(props)
  }
}
