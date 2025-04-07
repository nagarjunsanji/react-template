export interface User {
    id: number;
    name: string;
    email: string;
}
 
export interface UserState {
    data: User | null;
    loading: boolean;
}