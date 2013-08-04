#!/usr/bin/env bash

npm install .
bower install

cp assets/vendors/headjs/dist/head.min.js assets/js/head.js
cp assets/vendors/head-require/dist/head-require.min.js assets/js/head-require.js
