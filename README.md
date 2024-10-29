# jmeter-cwi-server

Curls das requisições:

curl --location 'http://localhost:3000/cwisers' \
--header 'authorization: token here'

curl --location 'http://localhost:3000/login' \
--header 'Content-Type: application/json' \
--data '{
    "user": "",
    "password": ""
}'
