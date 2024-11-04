
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
![npm](https://img.shields.io/npm/v/ng2-charts.svg)

# Project - ProjectManagement

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.9.

## Overview

This Angular application is designed to showcase various features and functionalities using `ng2-charts` for data visualization, Angular Material for UI components, and Angular routing for navigation. The application consists of multiple components, each serving a specific purpose in the overall architecture.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
I Have developed the below Compnents that are required to develop the project
- **HomeComponent**: The landing page of the application.
- **DashboardComponent**: Displays an overview of various metrics and displaying of all the filtered and All the project.
- **DialogComponent**: A reusable dialog for displaying messages or forms.
- **ChartComponent**: Renders charts using `ng2-charts` for creating of Pie Chart and Line Chart of "Inprocess","Pending" and "Completed" project status.
- **PageNotFoundComponent**: Displays a 404 error message for unmatched routes.
- **HeaderComponent**: The top navigation bar for the application.
- **FooterComponent**: The bottom section of the application for additional information.
  
 ## Services

- **ProfileService**: A service that provides data related to different projects. It includes attributes such as `name``image`, `description`, `status`, `deadline`, and `teamMembers`. 

## Build

- **ng2-charts**: Integrates dynamic and responsive charts for data representation.
- **Angular Material**: Utilizes Material Design components for a modern user interface.
- **Angular Routing**: Implements routing for seamless navigation between different views.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
Run `npm install` 
Run`npm install ng2-charts chart.js --save to import the module for the development of chart.
and run  `ng add @angular/material` to add angular material 
add `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">`
into your index.html file for font Awsome 
Add `<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>` into your Index.html
because in my System ChartsModule is installed but not Supportting, So I Have used google charts this this script need to be present at index.html

## Usage

After setting up the application, navigate to the Home page to start exploring the dashboard. Here you can:
- View project statuses in the ChartComponent.
- Access detailed project information through the DashboardComponent.
- Interact with reusable dialogs for project forms.
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Screenshots

![Dashboard Screenshot]()

## Tech Stack
- Angular 16.2.9
- ng2-charts
- Angular Material
- TypeScript



## Installation

To get started with this application, follow these steps:

 
  

**Clone the repository**:
 ```bash
   git clone <repository-url>
   cd <repository-directory>

**Install Dependencies:**
Ensure you have Node.js and npm installed.
Then run the following command to install the necessary packages:
npm install


Install Required Libraries:
Install ng2-charts and chart.js for chart functionalities,
and add Angular Material for UI components:

```bash
npm install ng2-charts chart.js --save
ng add @angular/material

**Add Font Awesome:** To utilize Font Awesome icons, include the following line in your index.html file:

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
Add `<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>` into your Index.html

Start the Development Server: After all dependencies are installed, start the Angular development server:

```bash
ng serve

Navigate to http://localhost:4200/ in your browser. The application will automatically reload if you change any of the source files.

**Build the Application**: To create a production build of the application, run:

```bash
ng build
The build artifacts will be stored in the dist/ directory.

Now you're all set to start using the ProjectManagement application!



Feel free to adjust any of the wording to match your style, and let me know if there's anything else you want to add or modi

