
#### Install JSON Server
> npm install -g json-server

#### Create a db.json file with some data

~~~js
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
~~~
#### Start JSON Server
> json-server --watch db.json
> 
#### 如果报错了，可能是默认端口被占用了(可以用以下指定的端口)
> json-server --watch --port 3003 --host 127.0.0.1 db.json