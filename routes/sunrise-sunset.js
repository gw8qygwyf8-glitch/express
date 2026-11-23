var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/', function (req, res) {

    request(
        'https://api.sunrise-sunset.org/v2?lat=34.4500000&lng=132.4604000',
        function (error, response, body) {

            if (error) {
                return res.status(500).send('API Error');
            }

            const data = JSON.parse(body);

            res.send(`
                <html>
                <head>
                    <title>Hiroshima Sunrise & Sunset</title>
                </head>
                <body>

                    <h1>Hiroshima Sunrise & Sunset</h1>

                    <p>Sunrise: ${data.sunrise}</p>

                    <p>Sunset: ${data.sunset}</p>

                    <p>Timezone: ${data.tzid}</p>

                </body>
                </html>
            `);

        }
    );

});

module.exports = router;