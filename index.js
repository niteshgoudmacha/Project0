const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys')
const authRoutes = require('./routes/authRoutes');
const billingRoutes = require('./routes/billingRoutes');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
require('./models/users');
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

authRoutes(app);
billingRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// clientID  365780831439-2e9f3ve3aeu5gpeci377hvd3815ktrqp.apps.googleusercontent.com
// clientSecretID 6pXS0_LKu6K2_i8oJ-sOOqTg

