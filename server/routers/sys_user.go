package routers

import (
	"github.com/gin-gonic/gin"
	v1 "gin-admin/app/admin"
	"gin-admin/middleware"
)

func InitUserRouter(Router *gin.RouterGroup)  {
	UserGroup := Router.Group("admin").Use(middleware.JWTAuth()).Use(middleware.CasbinHandler()).Use(middleware.Logger())
	{
		UserGroup.GET("/user/list", v1.GetUserList)
		UserGroup.POST("/user/add", v1.CreateUser)
		UserGroup.PUT("/user/edit", v1.UpdateUser)
		UserGroup.DELETE("/user/del", v1.DelUser)
		UserGroup.GET("/user/menu", v1.GetUserMenuByClaims)
		UserGroup.PUT("/password", v1.ResetPwd)
	}
}
