    export interface UserId {
        email: string;
        superapp: string;
    }

    export interface User {
        userId: UserId;
        role: string;
        username: string;
        avatar: string;
    }

export interface UserFormValues {
    email?: string;
    role?: string;
    avatar?: string;
    username?: string;
}