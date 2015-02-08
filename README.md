seraphim-reborn
===============

Evolution to [vinculum-liber](http://github.com/mzdv/vinculum-liber)

Goal is to allow logging and representation in near-real time of web application telemetry data using io.js.

Release information
===================
Current version: v1.0
Codename: Lauri Torni

Installation
============
Make sure you have MongoDB and Redis on their usual ports running in localhost (you can change it manually. I plan on adding a config file).

Clone the repository `git clone https://github.com/mzdv/seraphim-reborn`

Install the dependencies `npm install`

Run `node ../bin/www` (provided that `node` is a symlink to `io.js`)

THIS IS ALL VERY EXPERIMENTAL AND A PROOF OF CONCEPT
====================================================

Goal is to have a solution that can be integrated with Azure and their monitoring API for additional telemetry,
that can provide us with a near-realtime insight into the status of our webapp. Furthermore, all data is logged
into a MongoDB database, so it can be datamined later.

License
=======
MIT


