Workflow Tools for FXHASH
================

This tooling extends the [FXHASH Generative Token webpack boilerplate](https://github.com/fxhash/fxhash-webpack-boilerplate). 

This repo is still in it's infancy, so expect bugs and odd workflows for a while.

It works the same with, but has a few additional tools

> npm start

Will start the server. 

You can now generate outputs my running

> node dev/generate.mjs

This will create a folder with screenshots of each output as well as the features. The folder will be named e.g. "output-<X>" where `X = Math.floor(new Date().getTime() / 1000)`. You will need to edit `collection.html` to let it know which output to display.  You can now open `collection.html` in your browser and see the outputs and filter by feature. You will have to edit `collection.html` to include the path to the output folder.