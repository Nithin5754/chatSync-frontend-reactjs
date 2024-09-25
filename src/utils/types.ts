



export interface RegisterDataType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}



export interface LoginType {
  email: string;
  password: string;
}


export interface ResponseUserDataType {
  user: {
    id:string,
    email: string,
    firstName:string,
    profileSetup:string,
  },
}