#!/bin/bash


baseDir=`echo $PWD`
serverDir=`echo $baseDir/server`
webDir=`echo $baseDir/web`
dataDir=`echo $serverDir/data`
database=`echo "ginadmin"`
confDir=`echo $serverDir/conf`
goVersion=`echo "go1.16.4.linux-amd64"`
nodeVersion=`echo "node-v14.17.0-linux-x64"`

funcInstallGo(){
  cd /usr/local

 wget https://golang.google.cn/dl/$goVersion.tar.gz
 tar  -zxvf $goVersion.tar.gz
 rm -rf $goVersion.tar.gz
 ln -s /usr/local/go/bin/go  /usr/bin/go
 ln -s /usr/local/go/bin/gofmt  /usr/bin/gofmt
}
funcBuildServer() {
    echo 'server module building...'
    export GOPROXY=https://goproxy.cn
    export GO111MODULE=on
    cd $serverDir
    go mod tidy
    GOOS=linux GOARCH=amd64 go build -o $serverDir/gin-admin
    if [  -f $serverDir/gin-admin ]; then
        echo 'server module build  finished'
    else
        echo "server module build false" 1>&2
        exit 1
    fi


}

funcInstallNodejs(){
  cd /usr/local
wget https://nodejs.org/dist/v14.17.0/$nodeVersion.tar.xz
tar xvJf $nodeVersion.tar.xz
rm -f  $nodeVersion.tar.xz
mv $nodeVersion node
ln -s /usr/local/node/bin/node  /usr/bin/node
ln -s /usr/local/node/bin/npm  /usr/bin/npm
ln -s /usr/local/node/bin/npx  /usr/bin/npx
npm install yarn -g
ln -s /usr/local/node/bin/yarn /usr/bin/yarn
ln -s /usr/local/node/bin/yarnpkg /usr/bin/yarnpkg
}

funcBuildSite() {
    echo 'web module building...'
    cd $webDir
    yarn  install --registry https://registry.npm.taobao.org/
    yarn build
    if [ -d $webDir/dist ]; then
        echo 'site module build  finished'
    else
        echo "site module build false"
      #exit 1
    fi
}


funcInstallDokcer(){
    sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
sudo yum install -y yum-utils
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
sudo yum -y install docker-ce docker-ce-cli containerd.io
sudo systemctl enable docker
sudo systemctl start docker
}

funcDockerInitMysqlAndRedis(){
    #启动mysql
    docker stop mysql
    docker rm mysql
    docker run -p 3306:3306 --name mysql  -v /data/mysql:/var/lib/mysql   -v $dataDir:/docker-entrypoint-initdb.d   -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7
    docker exec -it mysql /bin/bash -c "cd docker-entrypoint-initdb.d && mysql -h -P 3306 --protocol=tcp -uroot -p123456  $database < init.sql"
   
    
    #启动redis
     docker stop redis
    docker rm redis
    docker run -p 6379:6379 --name redis -v $confDir/redis/redis.conf:/etc/redis/redis.conf  -v /data/redis/data:/data -d redis redis-server /etc/redis/redis.conf --appendonly yes
}
  funcStartServer(){
      #start server
    # shellcheck disable=SC2164
    cd  $serverDir
     command=`netstat -nlp |grep gin-admin| awk '{print $4}'| awk -F":" '{ print $4 }'`
   if [  "$command" == "" ]; then
     nohup ./gin-admin &
     sleep 1
     echo -e  'server start  success' ;
     local port="`netstat -nlp |grep gin-admin| awk '{print $4}'| awk -F":" '{ print $4 }'`";
     echo "listen port:$port"
   else
     ps -ef |grep gin-admin|grep -v grep|awk '{print $2}'|xargs kill -9
     nohup ./gin-admin &
     sleep 1
	   echo -e  'server start  success' ;
     local port="`netstat -nlp |grep gin-admin| awk '{print $4}'| awk -F":" '{ print $4 }'`";
     echo "listen port: $port"
   fi
   
   
  }
  #安装go环境脚本
  if ! type go >/dev/null 2>&1; then
   funcInstallGo
  fi

#go build 服务端
funcBuildServer
#安装nodejs环境
 if ! type yarn >/dev/null 2>&1; then
   funcInstallNodejs
fi

#编译nodejs
#funcBuildSite

#安装docker 环境
 if ! type docker  >/dev/null 2>&1; then
   funcInstallDokcer
fi
#初始化docker中Mysql和Redis环境
funcDockerInitMysqlAndRedis
#启动server
funcStartServer




