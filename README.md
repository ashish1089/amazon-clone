# Amazon Clone

Welcome to the Amazon Clone GitHub repository! This project is a web application that replicates some of the key features of the popular e-commerce platform, Amazon. It is built using React.js for the frontend, Node.js for the backend, and Firebase for authentication and database.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Features

- **User authentication:** Sign up, login, and logout functionality.
- **Shopping cart:** Add and remove items to/from the shopping cart in real-time.
- **Checkout process:** Simulate the purchase process with order summary and payment functionality (Note: This is a demo, no actual payment is processed).

## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/amazon-clone.git
2. Change into the project directory:
   
   ```bash
   cd amazon-clone
3. Install dependencies for both the frontend and backend:
    ```bash
    npm install
    cd functions
    npm install
4. Set up Firebase:
  - Create a new Firebase project and obtain the configuration details.
  - Set up authentication with Google in the Firebase console.
  - Create a real-time database in Firebase and configure the rules.
  - Update the Firebase configuration in the src/firebase.js file.
5. Start the application:
    ```bash
    npm run dev

# Technologies Used

- [React.js](https://react.dev/)
- [Node.js](https://nodejs.org/)
- [Firebase](https://firebase.google.com/) (Authentication and Realtime Database)

# Usage

Feel free to explore the application, add products to the cart, and simulate the checkout process. Note that this is a demo, and no real purchases will be made. 

