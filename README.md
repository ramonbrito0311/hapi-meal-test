Example application
=================

This sample is a single page app, reachable at `http://localhost:3001`.

## Structure

+ App config located at `/config/settings.js`
+ Controller located under `/controllers`.
+ Less file at `less/style.less` (can `@import "*"` other files).
+ Templates located under `/views` (engine & settings from config).
+ Static files under `/public` served at `http://localhost:3001/static/*`.

## Use
```bash
cd /path/to/hapi-meal/examples/basic
npm install
node server.js
```