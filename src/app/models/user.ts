
export interface UserCredentials{
    username: string;
    password: string;
}

export interface UserData extends UserCredentials{
     email: string;     
     address: string;
     first_name: string;
     last_name: string; 
     phone: string,
}