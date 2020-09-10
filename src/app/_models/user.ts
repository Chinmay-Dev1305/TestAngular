export class User {
    id: number;
    username: string;
    password: string;
    role: string;
}

export class Post {
    id: number;
    title: string;
    description: string;
    image: string;
    userId: number;
    isAccept: boolean;
    isReject: boolean;
    rejectionReason: string;
}