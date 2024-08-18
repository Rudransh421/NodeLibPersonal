/*

### What is `cookie-parser`?

Imagine you're building a website, and you want to remember certain things about your visitors, like if they are logged in or what their username is. You can store this information in a "cookie," which is a small piece of data saved in the visitor's browser. When the visitor comes back to your site, their browser sends this cookie back to your server, so you can remember who they are or what they were doing.

`cookie-parser` is a tool that helps your server understand these cookies. When a visitor comes to your website and their browser sends you cookies, `cookie-parser` reads them and makes them easy to use in your code.

### Why is it useful?

- **Reading Cookies Easily:** Without `cookie-parser`, you'd have to manually decode and parse the cookies, which can be tricky. `cookie-parser` does all that work for you, so you can just say, "Hey, what’s in the cookies?" and get the answer easily.

- **Handling Signed Cookies:** Sometimes you want to make sure that the cookies haven't been tampered with by the user. For example, if you're using a cookie to store whether a user is an admin or not, you want to make sure they can't just change that cookie on their own. `cookie-parser` can "sign" cookies, which means it adds a special stamp that proves the cookie is exactly what you sent, and it hasn’t been changed.

### How do you use it?

Let's say you're building a simple Express app (a kind of web server), and you want to use cookies.

1. **Set Up Your App:**
   First, you need to add `cookie-parser` to your project.

   ```bash
   npm install cookie-parser
   ```

   Then, you tell your Express app to use `cookie-parser`.

   ```javascript */
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

// Tell your app to use cookie-parser
app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

/*
2. **Using Cookies:** 

   - **Set a Cookie:**
     When someone visits your website, you might want to give them a cookie.

     ```javascript */

app.get("/set-cookie", (req, res) => {
  res.cookie("username", "JohnDoe"); // Setting a cookie named 'username' with the value 'JohnDoe'
  res.send("Cookie has been set!");
});

//    - **Read a Cookie:**
//      The next time that visitor comes to your site, their browser will send the `username` cookie back to you.

app.get("/", (req, res) => {
  const username = req.cookies.username; // Getting the 'username' cookie
  res.send(`Hello, ${username}`);
});

//    - **Signed Cookies:**
//      If you want to make sure nobody can mess with the cookie's value, you can "sign" it.

app.use(cookieParser("mySecretKey")); // Add a secret key to sign cookies

app.get("/set-signed-cookie", (req, res) => {
  res.cookie("userRole", "admin", { signed: true }); // This cookie is signed
  res.send("Signed cookie has been set!");
});

app.get("/", (req, res) => {
  const userRole = req.signedCookies.userRole; // Get the signed cookie
  res.send(`User role is: ${userRole}`);
});

/*
 Why Should You Care?

`cookie-parser` makes working with cookies simple. Without it, handling cookies would be a pain. It's like having a translator that turns complicated cookie data into something your app can easily understand and use. Whether you need to remember a user's name, their preferences, or anything else, `cookie-parser` helps you do it smoothly.
*/
