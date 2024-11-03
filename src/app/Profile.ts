export interface Project {
    id: number;
    name: string;
    image:string;
    description: string;
    status: 'Pending' | 'In Progress' | 'Completed';
    deadline: Date;
    teamMembers: string[];
    }