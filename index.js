const express = require('express');
const favicon = require('express-favicon');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/users');
require('./models/Survey');
require('./services/passport');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const path = require('path');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true});
const app = express();

// app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(bodyParser.json());

// app.use(express.static(path.join(__dirname, 'build')));
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 100,
    keys: [keys.cookieKeys]
})
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/surveyRoutes')(app);

if(process.env.NODE_ENV === 'production') {
    // Express will serve prodution assests
    app.use(express.static(path.join(__dirname, 'build')));
    
    // express will serve index.html if it its not recognized by route
    
    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);

