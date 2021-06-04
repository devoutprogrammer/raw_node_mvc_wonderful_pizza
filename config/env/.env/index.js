// Api keys and and token


module.exports = {

    // Stripe API Key
    STRIPE: {
        _API_KEY: 'YOUR_STRIP_API_KEY'
    },

    // Mailgun  API Key
    MAILGUN: {
        _API_KEY: 'YOUR_MAILGUN_API_KEY',
        _DOMAIN: 'YOUR_MAILGUN_DOMAIN'
     
    },

    // Twilio API Key
    TWILIO: {
        _ACCOUNT_SID: 'YOUR_TWILIO_ACCOUNT_SIDE',
        _AUTH_TOKEN: 'YOUR_TWILIO_AUTH_TOKEN'

    },
    PASSWORD: {
        _HASH: {
            _SECRET: 'YOUR_SECRET_PHRASE',
            _METHOD: 'HASHING_METHOD' // sha256, etc....
        }
    }
}

