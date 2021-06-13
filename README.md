# Pure NodeJs MVC
## Wonderful Pizza: America's Most Wanted Pizza
I wanted to relearn the basics (HTML, CSS, Javascript,and NodeJs) so I decided to build
a website or web application for some fictional pizza delivery company I called Wonderful Pizza: America's Most Wanted Pizzas. I had one single rule in mind when building this personal project. And the number one rule is: No npm, no dependencies, no frameworks, no libraries,no CDNs, and no copying and pasting someone else's codes. So the whole project was built from scratch, from an empty folder. The basis of the project are:
1. Front End: vanilla HTML, vanilla CSS, and vanilla Javascript. No npm, no dependencies, no package.json, no frameworks, no libraries, and no CDNs.
2. Back End: vanilla JavaScript and pure NodeJs: No npm, no dependencies, no package.json, no frameworks, and no libraries


### Composition
## Front End
1. CSS, CSS-Grid
2. Javascript
3. Web Component
## Back End: API
1. Token base
2. Routing
## Back End: CLI
1. authentication
2. Administration
### Notes: 
This project uses Object Oriented Programming (OOP) and Functional Programming (FP) heavily. By Object Oriented Programming I mean Object Oriented Programming the Javascript way and specifically the ES6 way. And by Functional Programming I mean functional programming the Javascript way; specifically the ES6 way.

All the front end codes and all the classes of the front end codes inherit a single class or interface: 
```javascript
HTMLElement
```
All the backend codes and all the classes of the backend code inherit a single NodeJs API class:

```javascript
 EventEmitter
```
### Requirements
```javascript
CLI (no requirements)
```
 There are no requirements for the CLI. You can run the CLI immediately after cloning the repository.

```javascript
Frontend (API keys required)
```
The application uses Twilio for texting/calling, Mailgun for emailing, and Stripe for payment. So in order to use all the frontend functionalities (placing orders, sending and recieving emails, text messaging, invoicing etc) you need to add your Twilio API keys, Stripe API Keys, and Mailgun API Keys. Place ALL your API keys in the corresponding areas in the file located in config directory: ```/config/env/.env/index.js ```



### Installation
1. clone the repository:
 ```javascript
 git clone https://github.com/ericsonsweah/raw_node_mvc_wonderful_pizza.git mvc
```
or 
 ```javascript
 git clone git@github.com:ericsonsweah/raw_node_mvc_wonderful_pizza.git mvc
```
or
  ```javascript
 gh repo clone ericsonsweah/raw_node_mvc_wonderful_pizza mvc
 ```
  Note: to use the command ```gh repo clone ericsonsweah/raw_node_mvc_wonderful_pizza mvc``` you must have  Github CLI ```gh ``` installed on your system.
 
2. cd in the directory:
```javascript
cd mvc
```
3. run the command:
```javascript
 node index
```
4. Admin CLI:

 After successfully runing the command ```node index``` or ```node index.js``` in step 3, the CLI will be available with instructions.

