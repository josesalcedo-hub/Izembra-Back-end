export class User{
    id: number;
    name: string;
    lastName: string;
    email:string;
    password:string;
    phone: string;

    constructor(id:number, name:string, lastName: string, email:string, password:string, phone:string){
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password
        this.phone = phone
    }
}