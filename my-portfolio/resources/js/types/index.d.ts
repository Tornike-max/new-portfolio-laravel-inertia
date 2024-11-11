export interface User {
    id: number;
    name: string;
    lastName: string;
    email: string;
    is_admin: string;
    skills: Skill[];
    email_verified_at?: string;
}

export interface Skill {
    id: number;
    name: string;
    level: string; // მაგალითად: 'beginner', 'intermediate', 'advanced'
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
    myData: User;
};
