import { UserCredentials, UserData } from "../models/user";

export class UserService{
    // ovo ide u zasebnu klasu sutra 
    private username: string;
    private password: string;
    private email: string;
    private firstName: string; 
    private lastName: string; 
    private phone: string;
    private address: string;
    private type : UserType = UserType.visitor;

     constructor(data: UserData){
        this.username = data.username;
        this.password = data.password;
        this.email = data.email;
        this.firstName = data.first_name;
        this.lastName = data.last_name;
        this.phone = data.phone;
        this.address = data.address;
        this.setType();
     }  

    
    public setType(){
        this.type = UserService.checkIfUserIsEmployee(this.username) ? UserType.employee : UserType.visitor; 
    }

    public getType(): UserType{
        return this.type;
    }
      
    public static checkIfUserIsEmployee(username: string): boolean{
        const employees = UserService.getEmployees();
        return employees.find(e => e === username) ? true : false;
    }

    public static getAllUsers(): UserData[]{
        const usersFromStorage = localStorage.getItem('users_full_data');
        return usersFromStorage ? JSON.parse(usersFromStorage) : [];
    }

    public static getEmployees(): string[]{
        const employeesFromStorage = localStorage.getItem('employees');
        return employeesFromStorage ? JSON.parse(employeesFromStorage) : [];
    }

   
}

export const REGISTER_URL = "https/::localhost:4200/api/register"
export const LOGIN_URL = "https/::localhost:4200/api/login"

export enum UserType{
    "employee", 
    "visitor"
}

