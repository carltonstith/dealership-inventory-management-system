# Dealership Inventory Management System

![GitHub repo size](https://img.shields.io/github/repo-size/carltonstith/README-template.md)
![GitHub contributors](https://img.shields.io/github/contributors/carltonstith/README-template.md)
![GitHub stars](https://img.shields.io/github/stars/carltonstith/README-template.md?style=social)
![GitHub forks](https://img.shields.io/github/forks/carltonstith/README-template.md?style=social)
![Twitter Follow](https://img.shields.io/twitter/follow/carltonstith?style=social)

The dealership inventory management system application is used by dealership owners, general managers, general sales managers and internet sales managers. 

This project uses [Angular Material](https://material.angular.io/) for the design components and was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

## Prerequisites
Node and Angular should be installed on your system. If it isn't, run `npm install -g @angular/cli`.

## Installing the dealership inventory management system

Clone the project by running `git clone git@github.com:carltonstith/dealership-inventory-management-system.git`

Install `json-server` by running `npm install -g json-server`

## Development server

Run `ng serve` for a dev server. Navigate to http://localhost:4200. The app will automatically reload if you change any of the source files.

## Running the database
Start the database and leave it running! To run the database, open a new terminal and run `json-server --watch db.json`. This will create a new file called `db.json` within the root.

Open a new tab and navigate to http://localhost:3000 to see the database and check it is working. The newly created DB should now contain a vehicleList, comments, and profile object resources.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
