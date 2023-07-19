I have developed an Angular (2+) CRUD application for managing people. The application allows users to create, list, display details, edit, and delete individuals. Each person is characterized by attributes such as ID, first name, last name, and email address.

For the backend service, I implemented a mock/fake version. Although it doesn't interact with a real backend, the requests and responses are provided in JSON format to simulate the expected behavior.

I documented my development steps, providing detailed explanations for the decisions I made along the way. This documentation serves as a reference for future maintenance and improvement of the application.

Regarding the user interface, I used Angular Material to design the user interface in a way that Angular Material components help create attractive, consistent, and functional web pages and web applications while adhering to modern web design principles such as browser portability, device independence, and graceful degradation. It helps in creating fast, beautiful and responsive websites. A basic list is used to display the people, and there is no need for styling, filtering, or sorting in this version of the application. The primary emphasis was on implementing the CRUD operations effectively and ensuring a smooth user experience.
# ManageBuilder

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server 

Run `ng serve -o` for a dev server. (or manually navigate to `http://localhost:4200/ `).
The application will automatically reload if you change any of the source files.

Install JSON Server

`npm install -g json-server`

Start JSON Server

`json-server --watch db.json`

## Design
`npm i @angular/material`