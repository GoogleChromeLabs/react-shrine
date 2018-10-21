const express = require('express');
const shrinkRay = require('shrink-ray');
const app = express();
const path = require('path');

// Trust X-Forwarded-* headers so that when we are behind a reverse proxy,
// our connection information is that of the original client (according to
// the proxy), not of the proxy itself. We need this for HTTPS redirection
// and bot rendering.
app.set('trust proxy', true);
app.use(shrinkRay());
app.use(express.static('build'));

app.listen(process.env.PORT || 8080, function () {
    console.log("Connected");
});
