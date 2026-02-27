export class User {
  constructor(
    private readonly id: number,
    private name: string,
    private lastname: string,
    private email: string,
    private password: string,
    private phone: string,
    private createdAt: Date
  ) {}

  getEmail():string{
    return this.email
  }

  getId():number{
    return this.id
  }
}