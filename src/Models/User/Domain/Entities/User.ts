export class User {
  constructor(
    public readonly id: number,
    public name: string,
    public lastname: string,
    public email: string,
    public password: string,
    public phone: string,
    public createdAt: Date
  ) {}


}