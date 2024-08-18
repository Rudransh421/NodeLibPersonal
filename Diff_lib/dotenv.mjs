import "dotenv/config";

// use this in main file for using .env file variables

// Now you can use the environment variables
const port = process.env.PORT;
console.log(`Server running on port ${port}`);

// It allows you to load environment variables from a .env file into process.env in your application.
//  This is particularly useful for keeping sensitive information like API keys, database credentials, or configuration settings out of your source code and instead storing them in a separate configuration file.
