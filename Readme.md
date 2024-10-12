
# React application with micro front end architecture

This is a demonstration project to show multiple micro application developed in different frameworks`(like React,Angular,Vue,Svelte)` can exist inside same application.Thanks to Webpack 5 module federation

## components

### App - 
Its a React application developed using create react app and acting as shell(Container) application which renders small micro application.

### Header -
Its a React application developed using create react app and acting as micro application which renders header of the application

### Left sidebar -
Its an Angular application developed using angular cli and acting as micro application which renders left sidebar of the application

### Right sidebar -
Its a Vue application developed using vue cli and acting as micro application which renders right sidebar of the application

### Footer -
Its a Svelte application developed using svelte webpack template and acting as micro application which renders footer of the application

### How to run the application

- Go to each folder(app,header,left-sidebar,right-sidebar,footer) and run `npm start`
- Open browser and type `http://localhost:3000`

![image](https://github.com/user-attachments/assets/49a6ed4a-99d0-417b-905e-efbe1ca534b0)

