const keys = require('../../config/keys');

module.exports = (survey) => {
    return `
        <html>
            <body>
                <div>
                    <pre>${survey.body}</pre>
                    <div><a href = "${keys.redirectDomain}/api/feedback"> Yes </a></div>
                    <div><a href = "${keys.redirectDomain}/api/feedback"> No </a></div>
                </div>
            </body>
        </html>
    `;
}