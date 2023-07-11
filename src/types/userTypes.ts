export interface IUser {
    name: string;
    email: string;
    password: string
}

export type IUserWithoutPasswor = Omit<IUser, 'password'>;
export interface IUserResponse {
    user: IUserWithoutPasswor;
    token: string;
}