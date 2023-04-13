# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Overview
The mini-project was designed to provide quick and practical advice to users with just one click of a button. The user clicks a button, the program interacts with a Rest API then pulls the best advice from a collection of carefully chosen advice articles. The articles are sorted randomly by popularity, ensuring the user gets the most helpful advice possible. The application is user-friendly making it easy for anyone to get advice on the go. This React application was designed to highlight the benefits of Axios for data fetching utilizing Node.js or a browser to send HTTP queries. Following are some advantages of using Axios over Fetch:

1. Interceptor support: With the help of Axios, developers may add custom behavior to the request/response lifecycle by intercepting HTTP requests and answers.

2. Consistency: It can be simpler to maintain code and to troubleshoot problems when using Axios' uniform interface for handling HTTP requests and responses.

3. Promise-based API: It is simple to develop clean, effective code since Axios uses Promises to handle asynchronous actions.

4. Error handling: Axios provides robust error handling capabilities, allowing developers to easily catch and handle errors that occur during HTTP requests.

5. Simplicity: Axios makes it simple to use and interact with other JavaScript frameworks and libraries by offering an easy-to-understand API for sending HTTP requests.

6.  Cross-platform support: Axios is a flexible library that can be used for a variety of applications because it can be used in both browser and Node.js environments.

Overall, Axios has built-in XSRF(Cross-Site Request Forgery) protection, while Fetch does not. Axios has the ability to intercept HTTP requests but Fetch, by default, does not. Axios allows canceling requests and request timeout but fetch does not.

## Installation & Setup
Axios is a JavaScript library that allows you to make HTTP requests from a browser or Node.js application. Here are the steps to install Axios using Node Package Manager (NPM):

* Open your terminal or command prompt.
* Navigate to your project directory.
* Run the following command to install Axios: "npm install axios"
* Wait for the installation to finish.
* You can now start using Axios in your project by importing it: "const axios = require('axios');"


## Technologies Used
This Advice mini-Project was built using the following technologies:
* React JS
* CSS
* Axios

## Conclusion
Axios contains interceptors, which give you the ability to execute code or change the request or response before it has even begun. Axios is simple to use and reduces the risk of complex failures since it enables promises and has the ability to do async activities before a request is made or before the promises of a then or a catch are carried out.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
