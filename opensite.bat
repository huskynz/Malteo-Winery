@ECHO OFF
:: Start simple http server with a couple arguments to make it work with the site
:: Simple http server can be found here https://github.com/TheWaWaR/simple-http-server
START ./httpserver.exe -i --nocache --cors --ip 127.0.0.1 -p 80 ./

