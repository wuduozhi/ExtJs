```
docker run --name php-fpm -d \
    -v ~/Workspace/tmp/www:/var/www/html:ro \
    php:5.6-fpm
```


编辑 nginx 配置文件
本地存储路径：

`~/Workspace/tmp/docker/nginx/conf.d/default.conf`

```
server {
    listen       8080;
    server_name  localhost;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

    location ~ \.php$ {
        fastcgi_pass   php:9000;
        fastcgi_index  index.php;
        fastcgi_param  SCRIPT_FILENAME  /var/www/html/$fastcgi_script_name;
        include        fastcgi_params;
    }
}

```

```
docker run --name nginx -p 8080:8080 -d \
    -v ~/Workspace/tmp/www:/usr/share/nginx/html:ro \
    -v ~/Workspace/tmp/docker/nginx/conf.d:/etc/nginx/conf.d:ro \
    --link php-fpm:php \
    nginx

```


注：命令都在~目录下运行
