package main

import (
	"gin-admin/common"
	_ "gin-admin/docs"
	"gin-admin/initialize"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)
// @title go vben admin API
// @version 1.0
// @description  Golang admin
// @termsOfService https://github.com/coderchiang/gin-admin

// @contact.name chrischiang
// @contact.url http://2wm.top
// @contact.email 2501170033@qq.com

//@host 127.0.0.1:80
func main()  {

	defer common.CACHE.Close()
    defer common.DB.Close()

	// 初始化路由
	routers := initialize.InitRouters()
	routers.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
	_ = routers.Run(":"+common.CONFIG.System.Port)
}

func init(){
	//初始华配置
	initialize.InitConf()
	// 初始化日志
	initialize.InitLog()
	//初始化redis
	initialize.InitCache()
	//初始化数据库
	initialize.InitDb()

	// 初始化Casbin
	initialize.InitCasbin()
}

