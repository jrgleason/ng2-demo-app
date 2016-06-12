## My Opinionated Ng2 Project 
- Angular 2 RC1 ( https://angular.io/docs/ts/latest/quickstart.html )
- Express ( from generator )

## Why another Demo Project

First is to provide a more corporate ready setup. In the original all files in the node_modules were hosted. This could
cause a variety of issues including people accessing undesirable files and increased bandwidth hosting unnecessary
files. To do this I integrated grunt and bower. I looked into webpack and nothing seemed to indicate it would make
things easier.

Second I wanted the ability to use templates like Jade in the actual application. I also wanted the ability to embed
the HTML into the actual JS. This way I wasn't issuing 2 separate requests.

Also it sound be noted that I deviate from the example in that I create a combined dependency js file.

## Things to note

I am now trying to include my version of the Hero tutorial ( https://angular.io/docs/ts/latest/tutorial ). However, it
still includes the original as well.

## Install
```bash
git clone https://github.com/jrgleason/angular2-express-slim
cd angular2-express-slim

# Install dependencies
npm install

# run and watch for changes in .ts files
npm start

# Applciation url: http://localhost:3000
```
