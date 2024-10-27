# jmeter-cwi-server

Curls das requisições:

curl --location 'http://localhost:3000/cwisers' \
--header 'authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzMwMDY5NzE1LCJleHAiOjE3MzAwNzAwMTV9.EvzHHqHMNRMiYvyMZSpDvhA6CXj5yXTuBxnVkDcMYP4'

curl --location 'http://localhost:3000/login' \
--header 'Content-Type: application/json' \
--data '{
    "user": "ted",
    "password": "boloDeRolo"
}'