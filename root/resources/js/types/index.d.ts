export interface User {
    id: number;
    name: string;
    lastName: string;
    email: string;
    is_admin: string;
    skills: Skill[];
    about: About;
    email_verified_at?: string;
}

export interface Skill {
    id: number;
    name: string;
    level: string; // მაგალითად: 'beginner', 'intermediate', 'advanced'
}

interface Project {
    id: number;
    title: string;
    description: string;
    start_date: string;
    end_date: string;
    technologies: string;
    image: string;
    project_url: string;
    created_at: string;
    updated_at: string;
    user: {
        id: number;
        name: string;
        lastName: string;
        email: string;
        email_verified_at: string;
    };
    user_id: number;
}

export interface Testimonial {
    user: User;
    author_name: string;
    content: string;
    position: string;
    author_image: string;
}

export interface About {
    user: User;
    phone: string;
    about: string;
    created_at: string;
    updated_at: string;
}

export interface Experience {
    id: number;
    user_id: number;
    company_name: string;
    title: string;
    sphere: string;
    start_date: string;
    end_date: string;
    created_at: string;
    updated_at: string;
    user: User;
}

export interface Testimonial {
    id: number;
    author_name: string;
    author_image: string;
    content: string;
    position: string;
    created_at: string;
    updated_at: string;
    user_id: number | null;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
    myData?: User;
    projects?: Project[];
    project?: Project;
    about?: About;
    experiences?: Experience[];
    testimonials?: Testimonial[];
};
