export interface User {
    msrl: number;
    uid: string;
    name: string;
    provider: string;
    roles: string[];
    createdAt: Date;
    modifiedAt: Date;
}