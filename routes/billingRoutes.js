const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = (app) => {
    app.post('/api/stripe', (req, res) => {
        stripe.charges.create({
            amount: 100,
            currency: 'usd',
            description: "1$ for 1 Credit",
            source: req.body.id
        },
        function(err, charge) {
            if(err) {
                console.log("\n\nERROR\n\n", err);
                return;
            }
            console.log("\n\nCHARGE\n\n", charge);
        }
        );
    });  
};