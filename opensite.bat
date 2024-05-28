@ECHO OFF

SET /p modify_default_config=Do you want to modify the default config? Say N if not this is more advanced (Say N for no Y for yes): 
IF %modify_default_config%==Y (
    SET /p server_ip=Whats the ip you would like to use? :
    SET /p server_port=What Port would you like the server to use? :
    SET /p server_path=What is the path of the files you want to serve? :
    :: Start simple http server with a couple arguments to make it work with the site
    :: Simple http server can be found here https://github.com/TheWaWaR/simple-http-server
    START ./httpserver.exe -i --nocache --cors --ip %server_ip% -p %server_port% %server_path%

) ELSE %modify_default_config%==N (
    SET server_ip=127.0.0.1
    SET server_port=80
    SET server_path=./
    :: Start simple http server with a couple arguments to make it work with the site
    :: Simple http server can be found here https://github.com/TheWaWaR/simple-http-server
    START ./httpserver.exe -i --nocache --cors --ip %server_ip% -p %server_port% %server_path%
)


