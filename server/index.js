require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const PORT = process.env.PORT || 4002;
const User = require('./model/User')

// Connect to MongoDB
connectDB();


// custom middleware logger
app.use(logger);

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

//serve static files
// app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/build')));

app.use(express.static(path.join(__dirname, '/uploads')));
// routes
// app.use('/', require('./routes/root'));
app.use('/auth', require('./routes/auth'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));
app.use('/create-admin', require('./routes/createAdmin'));
// app.use('/employees', require('./routes/api/employees'));
app.use('/users', require('./routes/api/users'));
app.use('/register', require('./routes/register'));
app.use('/resumes', require('./routes/api/resumes'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.use(errorHandler);


mongoose.connection.once('open', () => {
    User.countDocuments({}, (err, count) => {
        if (!err && count === 0) {
          // insert initial data
          const initialData = [
            { "email":"ichrak@pentabell.fr",
            "password": "$2b$10$KqA7EIoviJpBxbr1KHJObelCyWZWJ/Wrm0SuqavGSU.aOlY0V9D7y",
            "name":"ichrak",
            "roles":{
                "Admin":5150,
                 "User":2001
            }, },
          ];
          User.create(initialData, (err, result) => {
            if (err) throw err;
            console.log(`Inserted ${result.insertedCount} documents into the collection`);
            // client.close();
          });
        } else {
          console.log('Collection is not empty');
        //   client.close();
        }

        });
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});