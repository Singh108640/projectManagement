import { Injectable } from '@angular/core';
import { Project } from '../Profile';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  constructor() { }
   PROJECTS: Project[] = [
    {
        id: 1,
        name: 'Employee Management System',
        image: 'Employee-Management-System.jpg',
        description: 'Create a system to manage employee records, including personal details, job roles, leave requests, and performance reviews.',
        status: 'In Progress',
        deadline: new Date('2024-12-20'),
        teamMembers: ['Rahul Sharma', 'Anjali Gupta', 'Vikram Singh']
    },
    {
        id: 2,
        name: 'Customer Relationship Management',
        image: 'CRM.jpg',
        description: 'A CRM tool to handle customer data, manage sales leads, and generate reports.',
        status: 'Pending',
        deadline: new Date('2024-11-10'),
        teamMembers: ['Priya Verma', 'Ravi Patel', 'Sneha Rao']
    },
    {
        id: 3,
        name: 'Inventory Management System',
        image: 'inventryManagementystem.jpg',
        description: 'A system for managing product inventory in warehouses or stores, tracking stock levels, and managing orders.',
        status: 'Completed',
        deadline: new Date('2024-06-30'),
        teamMembers: ['Nisha Kapoor', 'Amit Joshi', 'Suresh Mehta']
    },
    {
        id: 4,
        name: 'Project Management Dashboard',
        image: 'Project Management Dashboard.jpg',
        description: 'A tool for managing projects, assigning tasks to team members, and tracking progress.',
        status: 'In Progress',
        deadline: new Date('2025-01-19'),
        teamMembers: ['Kavita Reddy', 'Ajay Kumar', 'Deepika Nair']
    },
    {
        id: 5,
        name: 'E-commerce Platform',
        image: 'E-commerce Platform.jpg',
        description: 'A full-fledged e-commerce web app with product listings, a shopping cart, and a payment gateway.',
        status: 'Completed',
        deadline: new Date('2024-12-01'),
        teamMembers: ['Rohan Bhatia', 'Maya Choudhary', 'Sahil Yadav']
    },
    {
        id: 6,
        name: 'Help Desk Ticketing System',
        image: 'Help Desk Ticketing System.png',
        description: 'A system to manage IT support tickets raised by employees or customers, with features for prioritization and tracking.',
        status: 'Pending',
        deadline: new Date('2025-02-08'),
        teamMembers: ['Kiran Desai', 'Vikas Chawla', 'Simran Mehta']
    },
    {
        id: 7,
        name: 'Online Booking System',
        image: 'Online Booking System.jpg',
        description: 'A booking system for services like salons, car rentals, or event spaces, where users can schedule appointments.',
        status: 'Completed',
        deadline: new Date('2024-10-28'),
        teamMembers: ['Ritika Singh', 'Rajesh Sharma', 'Anita Kapoor']
    },
    {
        id: 8,
        name: 'Document Management System (DMS)',
        image: 'Document Management System (DMS).jpg',
        description: 'A system for securely storing, managing, and retrieving documents within an organization.',
        status: 'In Progress',
        deadline: new Date('2024-11-23'),
        teamMembers: ['Pooja Iyer', 'Nitin Agarwal', 'Shruti Jain']
    },
    {
        id: 9,
        name: 'Expense Management System',
        image: 'Expense Management System.jpg',
        description: 'A tool for managing and tracking personal or organizational expenses, complete with budget insights.',
        status: 'In Progress',
        deadline: new Date('2025-02-12'),
        teamMembers: ['Kunal Patil', 'Neha Sharma', 'Ankush Singh']
    },
    {
        id: 10,
        name: 'Timesheet Management System',
        image: 'Timesheet Management System.jpg',
        description: 'An app for tracking employee working hours, managing timesheet submissions, and generating payroll reports.',
        status: 'Pending',
        deadline: new Date('2024-11-07'),
        teamMembers: ['Vaishali Yadav', 'Rishabh Kumar', 'Kajal Jain']
    },
    {
        id: 11,
        name: 'Financial Dashboard',
        image: 'Financial Dashboard.jpg',
        description: 'A web app to display financial data and KPIs with interactive charts and reports.',
        status: 'Completed',
        deadline: new Date('2024-10-10'),
        teamMembers: ['Mohit Gupta', 'Tanvi Sharma', 'Abhishek Mehta']
    },
    {
        id: 12,
        name: 'Team Collaboration Tool',
        image: 'Team Collaboration Tool.jpg',
        description: 'A project management and communication tool for teams to collaborate effectively.',
        status: 'In Progress',
        deadline: new Date('2024-09-06'),
        teamMembers: ['Riya Soni', 'Aditya Malhotra', 'Neeraj Bhardwaj']
    },
    {
        id: 13,
        name: 'Content Management System (CMS)',
        image: 'Content Management System (CMS).jpg',
        description: 'A web application for creating, editing, and publishing content, ideal for managing blogs or corporate websites.',
        status: 'Pending',
        deadline: new Date('2025-02-09'),
        teamMembers: ['Gaurav Sharma', 'Sonal Singh', 'Mitali Rao']
    },
    {
        id: 14,
        name: 'Event Management Portal',
        image: 'Event Management Portal.jpg',
        description: 'An application to organize and manage events, from conferences to workshops, including participant registration.',
        status: 'In Progress',
        deadline: new Date('2024-11-07'),
        teamMembers: ['Bhavna Verma', 'Rakesh Choudhary', 'Sakshi Iyer']
    },
    {
        id: 15,
        name: 'Weather Forecast App',
        image: 'Weather Forecast App.jpg',
        description: 'An app that provides real-time weather updates and forecasts based on user location or city search.',
        status: 'In Progress',
        deadline: new Date('2024-11-23'),
        teamMembers: ['Sumit Singh', 'Priyanka Joshi', 'Kriti Malhotra']
    },
    {
        id: 16,
        name: 'Fitness Tracker',
        image: 'Fitness Tracker.jpg',
        description: 'A web app for tracking workouts, setting fitness goals, and monitoring progress over time.',
        status: 'Completed',
        deadline: new Date('2024-12-30'),
        teamMembers: ['Ayesha Khan', 'Vikrant Nair', 'Geeta Sharma']
    },
    {
        id: 17,
        name: 'Restaurant Ordering System',
        image: 'Restaurant Ordering System.jpg',
        description: 'An app for managing restaurant orders, from placing orders to handling delivery and payment.',
        status: 'In Progress',
        deadline: new Date('2024-10-30'),
        teamMembers: ['Karan Singh', 'Aditi Rani', 'Rohan Patil']
    },
    {
        id: 18,
        name: 'Smart Home Dashboard',
        image: 'Smart Home Dashboard.jpg',
        description: 'A web interface for managing and monitoring smart home devices like lights, thermostats, and cameras.',
        status: 'Pending',
        deadline: new Date('2025-01-30'),
        teamMembers: ['Siddharth Gupta', 'Pallavi Rao', 'Vivek Joshi']
    }
];


    
getProjects(): Observable<Array<any>>{
  return new Observable(Subscriber=>{
    Subscriber.next(this.PROJECTS)
  })

}


 getCompletedProjectProfiles(): Observable<Array<any>> {

 return new Observable(subscriber => {
subscriber.next(this.PROJECTS.filter(profile=>profile.status=='Completed'));
} 
)
 }
 getPendingProjectProfiles(): Observable<Array<any>> {

  return new Observable(subscriber => {
 subscriber.next(this.PROJECTS.filter(profile=>profile.status=='Pending'));
 })
  }


getInProcessProjectProfiles(): Observable<Array<any>> {

  return new Observable(subscriber => {
 subscriber.next(this.PROJECTS.filter(profile=>profile.status=='In Progress'));
 })
  }
}