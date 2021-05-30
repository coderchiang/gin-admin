package routers

import (
	v1 "gin-admin/app/admin"
	"gin-admin/middleware"
	"github.com/gin-gonic/gin"
)

func InitMenuRouter(Router *gin.RouterGroup)  {
	MenuRouter := Router.Group("admin").Use(middleware.JWTAuth()).Use(middleware.CasbinHandler()).Use(middleware.Logger())
	{
		MenuRouter.GET("/menu/list", v1.GetMenuTreeAll)
		MenuRouter.POST("/menu/add", v1.CreatMenu)
		MenuRouter.PUT("/menu/edit", v1.UpdateMenu)
		MenuRouter.DELETE("/menu/del", v1.DeleteMenu)
	}
}
