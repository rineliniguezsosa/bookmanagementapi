

<img src="./src/assets/uml.png">

# Personal proyect - bookmanagementapi

This is a chat application project built using (TypeORM, Express, Node.js, SQL Server, Typescript)


## Table of contents

- [Author](#author)
- [Requirements](#requirements)
- [Install and Deployment](#install)


## Author

- Rinel iñiguez

## Requirements 

- [Visual Studio Code](https://code.visualstudio.com/) (or any other code editor of your choice)
- [Node.js](https://nodejs.org/)
- npm (version 6 or higher) - This comes with Node.js, but make sure you have the latest version by running `npm install -g npm`.
- SQL Server

## Install

Follow these steps to download and run the project locally

1. **Clone this repository:**

  Open your terminal and run the following command:

   ```bash
   git clone https://github.com/rineliniguezsosa/bookmanagementapi.git
   ```

2. **Navigate to the apichat backend folder**

    ```bash
    cd bookmanagementapi
    ```
3. **Install the dependencies:**

    ```bash
    npm install
    ```

4. **Create an .env file in the root of the apichat folder and configure the necessary environment variables. Example of .env file:**

    ```bash
        PORT # port server
        HOST #connection host
        DB #database
        USERNAME #username 
        PORTDB #dbport
        PASSWORD #password
    ```
5. **Start the backend server:**

    ```bash
       npm run dev
    ```