@ECHO OFF
:: Start simple http server with a couple arguments to make it work with the site
:: Simple http server can be found here https://github.com/TheWaWaR/simple-http-server
SET /p file_path=Where is the website on your drive:
SET /p server_port=What port do you want to run the server on?:

START ./httpserver.exe -i --nocache --cors --ip 127.0.0.1 -p %server_port% %file_path%

