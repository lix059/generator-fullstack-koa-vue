#<%- project_name %>

This is a fullstack web framework use vue2 & koa2.


# a fullstack web project, use vue2.0 + vue-router + vuex + vue-router + koa2


> A fullstack Vue.js project
> use mockjs to split  FE develop & BE develop
> unit test

## Build Setup

``` bash
# install dependencies
npm install

FE: 
    # serve with hot reload at localhost:8080
    npm run dev

    # build for production with minification
    npm run build

    # run unit tests
    npm run unit

    # run e2e tests
    npm run e2e

BE: 
    # serve with hot reload at localhost:9000
    grunt server

    # build for production, when package project must be run after FE build
    grunt build

    #run unit tests
    grunt test

    #if you have a cms to publish a zip package, you can use grunt upload here


FE & BE
    
    when you are developing both side, you can anntate mockjs in src/main.js, and
    config the request url in  config/index.js  proxyTable 

License

<%- project_license %> © <%- project_author %> (You Website)