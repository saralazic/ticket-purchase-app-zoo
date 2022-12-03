import { UserCredentials } from "../models/user";
import { UserService } from "./userService";

export class AuthService{
     constructor(){

     }  

     login(credentials: UserCredentials){
       const allUsers = UserService.getAllUsers();
       const currentUser = allUsers.find((usr) => usr.username === credentials.username);

       if (!currentUser) console.log(`LOGIN FAILED`);

       if (credentials.password === currentUser?.password)
        console.log(`LOGIN Succeed`);
     }
}

export const REGISTER_URL = "https/::localhost:4200/api/register"
export const LOGIN_URL = "https/::localhost:4200/api/login"

