export class User{
    id?: number;
    name: string;
    lastname: string;
    email:string;
    phone: string;
    password:string;
    createdAt?: Date;

    constructor(id:number, name:string, lastName: string, email:string, password:string, phone:string, createdAt: Date){
        this.id = id;
        this.name = name;
        this.lastname = lastName;
        this.email = email;
        this.password = password
        this.phone = phone
        this.createdAt = createdAt;
    }
}