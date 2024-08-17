// bcrypt.js is a library used for hashing passwords.
// Hashing is a one-way process that converts a plain-text password into a fixed-length string of characters, which appears random.
// This hashed string is what gets stored in the database, not the plain-text password.
// When a user logs in, the provided password is hashed again and compared to the stored hash to check if they match.


// Key Concepts:
//     Salt: A random value added to the password before hashing to ensure that identical passwords result in different hashes.

//     Hashing: The process of converting the plain-text password and salt into a fixed-length string.

// Function Mainly used are :
//     genSaltSync: The genSaltSync function creates a random string (salt) that will be used to add uniqueness to the password before hashing
//     hashSync: The hashSync function combines the plain-text password with the salt and transforms it into a secure, random-looking string (hash).
//     compareSync: The compareSync function hashes the plain-text password using the same salt and checks if it matches the stored hashed password.

const bcrypt = require('bcryptjs')

const saltrounds = 10;
const salt = bcrypt.genSaltSync(saltrounds);

const plaintextpassword = 'fakepassword';
const hashedpass = bcrypt.hashSync(plaintextpassword,salt)

console.log(hashedpass);

const ismatch = bcrypt.compareSync(plaintextpassword,hashedpass)

if(ismatch){
    console.log("password matches")
}
else{
    console.log('not matched')
}