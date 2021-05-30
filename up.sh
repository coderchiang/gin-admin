#!/bin/bash

### 构建要求
### 1. go >= 1.13
### 2. node >= 8

baseDir=`echo $PWD`
serverDir=`echo $baseDir`
siteDir=`echo $baseDir/site`
distDir=`echo $baseDir/dist`

funcBuildServer() {
    echo 'server module building...'
    export GOPROXY=https://goproxy.cn
    export GO111MODULE=on
    cd $serverDir
    go mod tidy
    GOOS=linux GOARCH=amd64 go build -o $serverDir/bbs-go
    if [  -f $serverDir/bbs-go ]; then
        echo 'server module build  finished'
    else
        echo "server module build false" 1>&2
        exit 1
    fi


}



funcBuildSite() {
    echo 'site module building...'
    cd $siteDir
    npm install --registry=https://registry.npm.taobao.org --unsafe-perm
    npm run build
    if [ -d $siteDir/.nuxt ]; then
        echo 'site module build  finished'
    else
        echo "site module build false" 1>&2
        exit 1
    fi
    npm run lintfix
}

funcTouchDir() {
    if [ ! -d "$1" ]; then
        mkdir -p $1
    fi
}

funcCleanBuild() {
    rm -rf $distDir/*

    funcTouchDir $distDir/server
    funcTouchDir $distDir/site

    cp -f $serverDir/bbs-go $distDir/server/
    cp -f $serverDir/local_start.sh $distDir/server/start.sh
    cp -f $serverDir/bbs-go.yaml $distDir/server/bbs-go.yaml
    
    cp -rf $siteDir/.nuxt $distDir/site/
    cp -rf $siteDir/node_modules $distDir/site/
    cp -rf $siteDir/static $distDir/site/
    cp -f $siteDir/nuxt.config.js $distDir/site/
    cp -f $siteDir/package.json $distDir/site/
    echo 'build server and site done!'
}


funcBuildServer
funcBuildSite
funcCleanBuild

docker run -p 3306:3306 --name mysql  -v /data/mysql:/var/lib/mysql  -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7
#start server
cd  $distDir/server
chmod +x start.sh
bash start.sh
#start web
cd  $distDir/site
npm run start

