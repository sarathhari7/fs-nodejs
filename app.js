const express = require('express');

const app = express();
const PORT = 3000;
const bcrypt = require('bcryptjs');
// Add a route handler for the root URL
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
// const bcrypt = require('bcryptjs');
// const password = "yourpassword";
// const salt = bcrypt.genSaltSync(10);
// const hashedPassword = bcrypt.hashSync(password, salt);
// console.log(hashedPassword);

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);