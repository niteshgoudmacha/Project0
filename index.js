const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
require('./models/users');
require('./models/Survey');
require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true});
const app = express();

app.use(bodyParser.json());

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 100,
    keys: [keys.cookieKeys]
})
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/surveyRoutes')(app);

if(process.env.NODE_ENV === 'producttion') {
    // Express will serve prodution assests
    app.use(express.static('client/build'));
    
    // express will serve index.html if it its not recognized by route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(__dirname, 'client', 'build', 'index.html');
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// clientID  365780831439-2e9f3ve3aeu5gpeci377hvd3815ktrqp.apps.googleusercontent.com
// clientSecretID 6pXS0_LKu6K2_i8oJ-sOOqTg

