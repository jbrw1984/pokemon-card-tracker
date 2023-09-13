# Pokémon Card Tracker
###Comprehensive web-app used to track prices & ratings of Pokémon cards. 
Created by Kobe Yang and Avery Tribbett, guided by Reid Williams.

---

![App Home Page](/images/webapp-homepage-screenshot.png)

---

![App Details Page](/images/webapp-detailspage-screenshot.png)

---
## Table of Contents
* [General Info](#general-info)
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
## Setup
You can run this web-app on your local environment in three simple steps: 

###1. Run the API

- Navigate to the `/api` directory. 
- Run the API by using: `npm run start` OR `yarn start`
- This will start the API on port 3000


###2. Input your own cards

- Install the [MongoDB Compass GUI](https://www.mongodb.com/try/download/compass)
- Create a JSON file that contains all of your cards (See `/app/src/realCards.json` for an example of the format). 
- Open MongoDB Compass, create new connection to connect to a MongoDB deployment. 
- On the left hand side, click on the `pokemon` database, then click on the `pokemoncards` folder. 
- Add data into this folder by importing your JSON file containing your cards


###3. Start up the Create-React-App

- Navigate to the `/app` directory. 
- Run the React app by using: `npm start` OR `yarn start`
- This will start the app on port 3001

You can now effectively manage and track your Pokémon card collection! 

---
## File Structure



---
## Contact
Avery Tribbett
* [LinkedIn](https://www.linkedin.com/in/averytribbett/)
* [GitHub](https://github.com/averytribbett)

Kobe Yang
* [LinkedIn](https://www.linkedin.com/in/kobeyang16/)
* [GitHub](https://github.com/Kobe16)
---
## Acknowledgments
Reid Williams (Mentor)

Ashleigh Stewart (UI/UX Designer)



<!-- We can probably use some of this in the setup -->
# APP README copied
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

To learn React, check out the [React documentation](https://reactjs.org/).