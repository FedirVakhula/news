# News

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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


## Implemented:
## Login component: 
-	User authorization, verification whether the user is in the database. 
	If the user does not enter the login or password correctly, the message 'The username or password you entered is incorrect' is displayed. 
	If the user is not in the database, the canActivate guard closes access to the ProfileComponent component.
	If the user is found in the database, navigates to profile page component.

## News component:
-	Displays a list of news items by topic.
	Each news item contains a news headline, an author, and a link to a full article about this news item.

## Home component:
-	Displays 4 blocks of news topics.
 
## Profile component:
-	Protected by guard canActivate.
-	by lazy module if user is authorized, if not - navigated to login page, which will only be downloaded to the user upon successful login.
	Implemented with the canLoad guard.
-	The route to this component is via the ProfileRoutingModule child.
-	log out button navigates user to login page.

## When initialized, a fake user is added to localStorage:
username: admin
password: 12345

## The page is flexible.
