# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.



# Automation Test with Selenium & Mocha

### Project description
This project is an automation testing project using Selenium and Mocha for the website selling products http://localhost:3000. This project tries to following to use Page Object Model (POM)

## Testing project structure
### Reports/mochawesome-report: Folder contains reports of testcases(mochawesome.html, mochawesome.json)
backend/Test: This folder contains files about test script
### Pages/: Implementing Page Object Model(POM)
- AddMoreProductPage.js
- AddtoCartPage.js
- LoginPage.js
- PaymentPage.js
- RegisterPage.js
### Test/: Contains all test script
- AddProduct.test.js:Test add new product function of administrator
- Payment.test.js: Check payment is successfull or not
- addtoCart.test.js: Test add a large number of products to cart
- login.test.js: Test "login user" function
- register.test.js: Test "register user" function
## Running test
- Execute single test:
npx mocha {file}.test.js --timeout 20000

- Execute tests parallel:
npx mocha "../TestPage/*.test.js" --no-timeouts --parallel 

## Generate report:
npx mocha "../TestPage/*.test.js" --no-timeouts --parallel --reporter mochawesome --require mochawesome/register
After run, a HTML reports will be generated as "mochawesome.html". Open it in browser to view the details of the test
