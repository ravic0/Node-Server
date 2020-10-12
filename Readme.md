# node-auth

## curl

### register

```sh
 curl -v -X POST localhost:3000/register -H 'Content-Type: application/json' -d '{"email":"ravnit.sehgal@gmail.com", "name":"Ravnit Sehgal", "password":"secret00", "passwordConfirmation":"secret00"}'

```

### login

```sh
 curl -v -X POST localhost:3000/login -H 'Content-Type: application/json' -d '{"email":"ravnit.sehgal@gmail.com", "password":"secret00"}'

curl -v -X POST localhost:3000/login -H 'Content-Type: application/json' -d '{"email":"ravnit.sehgal@gmail.com", "password":"secret00"}' --cookie 'sid=s%3AFiPRiucXxanRlBMaurTB_v0CA5Iq_nzF.avs56eMeNMBVdUDHuU%2B%2BV0J9NrcXz2TLwvw%2FrbNRW9k'

```

### logout

```sh
curl -v -X POST localhost:3000/logout --cookie 'sid=s%3AhKCDaBWMkr_7PlLxw8BWaOKXdkQdet6N.u56pcXEGeduj%2FYyD564PNzDCOCgDTMskxyQB2pRkXDY'
```

## dokcer scripts

```sh
docker exec -it demo-server_cache_1 redis-cli  -a secret

docker exec -it demo-server_cache_1 redis-cli  -a secret flushall

docker exec -it demo-server_db_1 mongo -u admin -p secret auth
```
