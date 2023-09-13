# Pokémon Card Tracker
<!-- ###Comprehensive web-app used to track prices & ratings of Pokémon cards.  -->
###Track and manage the prices & rating of your Pokémon cards! 
Created by Kobe Yang and Avery Tribbett, guided by Reid Williams.

---

![App Home Page](/images/webapp-homepage-screenshot.png)

---

![App Details Page](/images/webapp-detailspage-screenshot.png)

---
## Table of Contents
* [General Info](#general-info)
* [Code Info](#code-info)
* [Setup](#setup)
* [File Structure](#file-structure)
* [Contact](#contact)
* [Acknowledgments](#acknowledgments)
---
## General Info

This web-app is designed to help Pokémon card vendors, enthusiasts, and collectors keep track of their growing Pokémon card collections. Here is are some of its functionalities: 
<!-- 1. View all of your cards in a grid format
2. Search for a specific card
3. Input a price entries for the card
4. Keep track of a history of price entries
5. View the card's market (average) and latest prices
5. Input a rating for the card
7. View the card's average rating
8. View the card's information (i.e., description, picture, etc) -->

1. Browse and manage all of your cards in a grid format, displaying card information such as descriptions, pictures, and prices. 
2. Search for cards easily by name or description, and sort them by price
3. Track price history for each card and input card prices. Access market (average) prices and latest pricing data. 
4. Rate cards and view their average rating
5. Explore card details through a custom details page, including descriptions and images. 

---
## Code Info

This is a full-stack web-app created with an interactice front-end design, unit-testing built into the API, and comprehensive database querying. 


###Language: 
<img src='/images/Typescript_logo_2020.svg' alt='React Icon' width=48 height=48/>

- The entire codebase is written in TypeScript, to ensure application type safety and prevent bugs. 


###Front-end: 
<img src='/images/reactjs.svg' alt='React Icon' width=48 height=48/>
<img src='/images/css.svg' alt='CSS Icon' width=48 height=48/>
<img src='/images/reactbootstrap.svg' alt='React Bootstrap Icon' width=48 height=48/>

- Interactive home page and details page are built with **React.js**, connected together with **React Router**
- Components are styled with combination of **CSS** and **React-Bootstrap**

###API:
<img src='/images/nodejs-vertical-dark.svg' alt='Node.js Icon' height=48/>
<img src='/images/expressjs-ar21.svg' alt='Express.js Icon' height=48/>
<img src='/images/jest.svg' alt='Jest Icon' height=48/>

- API is constructed with **Node.js** + **Express.js**, implementing routes, middlewares, controllers, and services
- Unit-testing is integrated into API, carried out with **Supertest** and **Jest**. Tests every API endpoint extensively (i.e., POST cards, GET card ratings, etc...)

###Database: 
<img src='/images/mongodb2-horizontal.svg' alt='Jest Icon' height=48/>
<img src='/images/mongoose-logo.png' alt='Jest Icon' height=48/>

- All card information (i.e., price histories, card ratings, etc) stored in database created with **MongoDB**
- Using **Mongoose** (a MongoDB object modeling tool) to standardize database queries with models/schemas



---
## Setup
You can run this web-app on your local environment in three simple steps: 

###1. Run the API

- Navigate to the `/api` directory. 
- Run the API by using: `npm run start` OR `yarn start`
- This will start the API on port 3000


###2. Input your own cards

- Install the [MongoDB Compass GUI](https://www.mongodb.com/try/download/compass)
- Create a JSON file that contains all of your cards (See `/app/src/realCards.json` for an example of the file format). 
- Open MongoDB Compass, create new connection to connect to a MongoDB deployment. 
- On the left hand side, click on the `pokemon` database, then click on the `pokemoncards` folder. 
- Add data into this folder by importing your JSON file containing your cards


###3. Start up the React app

- Navigate to the `/app` directory. 
- Run the React app by using: `npm start` OR `yarn start`
- This will start the app on port 3001

You can now effectively manage and track your Pokémon card collection! 

---
## File Structure

<!-- Create a comprehensive file structure of this project for the README file -->

```
├── api
│   ├── Dockerfile.dev
│   ├── Dockerfile.prod
│   ├── Makefile
│   ├── docker-compose.yml
│   ├── ecosystem.config.js
│   ├── jest.config.js
│   ├── nginx.conf
│   ├── nodemon.json
│   ├── package-lock.json
│   ├── package.json
│   ├── coverage
│   │   └── ...
│   ├── dist
│   │   └── ...
│   ├── node_modules
│   │   └── ...
│   ├── src
│   │   ├── app.ts
│   │   ├── config
│   │   │   └── index.ts
│   │   ├── controllers
│   │   │   ├── auth.controller.ts
│   │   │   ├── cards.controller.ts
│   │   │   └── users.controller.ts
│   │   ├── database
│   │   │   └── index.ts
│   │   ├── dtos
│   │   │   ├── cardRating.dto.ts
│   │   │   ├── cards.dto.ts
│   │   │   ├── priceHistory.dto.ts
│   │   │   └── users.dto.ts
│   │   ├── exceptions
│   │   │   └── httpException.ts
│   │   ├── http
│   │   │   ├── auth.http
│   │   │   └── users.http
│   │   ├── interfaces
│   │   │   ├── auth.interface.ts
│   │   │   ├── cardRating.interface.ts
│   │   │   ├── cards.interface.ts
│   │   │   ├── priceHistory.interface.ts
│   │   │   ├── routes.interface.ts
│   │   │   └── users.interface.ts
│   │   ├── middlewares
│   │   │   ├── auth.middleware.ts
│   │   │   ├── error.middleware.ts
│   │   │   └── validation.middleware.ts
│   │   ├── models
│   │   │   ├── cardRating.model.ts
│   │   │   ├── cards.model.ts
│   │   │   ├── priceHistory.model.ts
│   │   │   └── users.model.ts
│   │   ├── routes
│   │   │   ├── auth.route.ts
│   │   │   ├── cards.route.ts
│   │   │   ├── index.route.ts
│   │   │   └── users.route.ts
│   │   ├── server.ts
│   │   ├── services
│   │   │   ├── auth.service.ts
│   │   │   ├── cards.service.ts
│   │   │   └── users.service.ts
│   │   ├── test
│   │   │   ├── arrayOfCards.ts
│   │   │   ├── auth.test.ts.bac
│   │   │   ├── cards.test.ts
│   │   │   ├── index.test.ts
│   │   │   └── users.test.ts.bac
│   │   └── utils
│   │       ├── logger.ts
│   │       ├── logs
│   │       │   └── ...
│   │       └── validateEnv.ts
│   ├── swagger.yaml
│   └── tsconfig.json
├── app
│   ├── package-lock.json
│   ├── package.json
│   ├── node_modules
│   │   └── ...
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src
│   │   ├── App.css
│   │   ├── App.test.tsx
│   │   ├── App.tsx
│   │   ├── Components
│   │   │   ├── BackToResult
│   │   │   │   ├── BackToResult.css
│   │   │   │   └── BackToResult.tsx
│   │   │   ├── CardDescription
│   │   │   │   ├── CardDescription.css
│   │   │   │   └── CardDescription.tsx
│   │   │   ├── CardRater
│   │   │   │   ├── CardRater.css
│   │   │   │   └── CardRater.tsx
│   │   │   ├── DisplayCards
│   │   │   │   ├── DisplayCards.css
│   │   │   │   ├── DisplayCards.tsx
│   │   │   │   ├── nextPage.png
│   │   │   │   ├── pikachu_faceplant.png
│   │   │   │   └── prevPage.png
│   │   │   ├── Footer
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── FooterStyle.css
│   │   │   │   └── pokemon-symbol-logo-png-31 1.png
│   │   │   ├── NavBar
│   │   │   │   ├── Nav.tsx
│   │   │   │   ├── TopNav.css
│   │   │   │   ├── cart.png
│   │   │   │   └── pokemon-logo-black-transparent.png
│   │   │   ├── PriceHistory
│   │   │   │   ├── PriceHistory.css
│   │   │   │   └── PriceHistory.tsx
│   │   │   └── ProductCard
│   │   │       ├── 274465 1.png
│   │   │       ├── Cardback.jpg
│   │   │       ├── ProductCard.css
│   │   │       ├── ProductCard.tsx
│   │   │       └── cardInfo.ts
│   │   ├── Pages
│   │   │   ├── DetailsPage
│   │   │   │   ├── Details.css
│   │   │   │   └── Details.tsx
│   │   │   └── HomePage
│   │   │       ├── Home.css
│   │   │       └── Home.tsx
│   │   ├── index.css
│   │   ├── index.tsx
│   │   ├── logo.svg
│   │   ├── react-app-env.d.ts
│   │   ├── realCards.json
│   │   ├── reportWebVitals.ts
│   │   └── setupTests.ts
│   └── tsconfig.json
├── images
│   ├── webapp-detailspage-screenshot.png
│   └── webapp-homepage-screenshot.png
└── readMe.md
```



---
## Contact
- Avery Tribbett
<a href='https://www.linkedin.com/in/averytribbett/'><img src='/images/LinkedIn_icon.svg' alt='React Icon' width=24 height=24/></a> [LinkedIn](https://www.linkedin.com/in/averytribbett/)
<a href='https://github.com/averytribbett'><img src='/images/Octicons-mark-github.svg' alt='React Icon' width=24 height=24/></a> [GitHub](https://github.com/averytribbett)

- Kobe Yang
<a href='https://www.linkedin.com/in/kobeyang16/'><img src='/images/LinkedIn_icon.svg' alt='React Icon' width=24 height=24/></a> [LinkedIn](https://www.linkedin.com/in/kobeyang16/)
<a href='https://github.com/Kobe16'><img src='/images/Octicons-mark-github.svg' alt='React Icon' width=24 height=24/></a> [GitHub](https://github.com/Kobe16)

---
## Acknowledgments
Reid Williams (Mentor)

Ashleigh Stewart (UI/UX Designer)



<!-- We can probably use some of this in the setup -->
<!-- # APP README copied
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/). -->