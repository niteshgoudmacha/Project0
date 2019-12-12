const keys = require('../../config/keys');

module.exports = (survey) => {
    return `
        <html>
            <body>
                <div style = "text-align: center;">
                    <h2>Add Your info Here</h2>
                    <p>Hello everyone...........</p>
                    <p>${survey.body}</p>
                    <div><a href = "${keys.redirectDomain}/api/feedback"> Yes </a></div>
                    <div><a href = "${keys.redirectDomain}/api/feedback"> No </a></div>
                </div>
            </body>
        </html>
    `;
}